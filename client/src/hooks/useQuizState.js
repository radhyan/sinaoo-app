import { useState, useMemo, useEffect, useRef } from "react";

export function useQuizState(
  moduleData,
  initialAnswers = {},
  initialFlags = {},
) {
  const [quizAnswers, setQuizAnswers] = useState(initialAnswers);
  const [flaggedQuestions, setFlaggedQuestions] = useState(initialFlags);

  const toggleFlag = (questionId) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Sync with initial data when module changes or when a reset clears answers
  const prevInitialAnswersRef = useRef(initialAnswers);
  useEffect(() => {
    setQuizAnswers(initialAnswers || {});
    setFlaggedQuestions(initialFlags || {});
    prevInitialAnswersRef.current = initialAnswers;
  }, [moduleData?._id]);

  // Also sync when initial answers are cleared (reset scenario)
  useEffect(() => {
    const wasNonEmpty =
      Object.keys(prevInitialAnswersRef.current || {}).length > 0;
    const isNowEmpty = Object.keys(initialAnswers || {}).length === 0;
    if (wasNonEmpty && isNowEmpty) {
      setQuizAnswers({});
      setFlaggedQuestions({});
    }
    prevInitialAnswersRef.current = initialAnswers;
  }, [initialAnswers, initialFlags]);

  // Validation Logic
  const isQuizComplete = useMemo(() => {
    const quizStep = moduleData?.steps?.find((s) => s.type === "quiz");
    const questions = quizStep?.questions || [];

    if (questions.length === 0) return true;

    return questions.every((q) => {
      const ans = quizAnswers[q.id];
      if (!ans) return false;
      if (q.type === "matrix") {
        return q.rows.every((row) => ans[row.id]);
      }
      return true;
    });
  }, [quizAnswers, moduleData]);

  // Score Calculation
  const { score, totalPoints, correctCount, totalQuestions } = useMemo(() => {
    const quizStep = moduleData?.steps?.find((s) => s.type === "quiz");
    const questions = quizStep?.questions || [];

    let currentScore = 0;
    let maxPoints = 0;
    let correctAnswersCount = 0;

    questions.forEach((q) => {
      maxPoints += q.points || 0;
      const ans = quizAnswers[q.id];

      if (!ans) return;

      if (q.type === "multiple-choice") {
        if (ans === q.correctAnswer) {
          currentScore += q.points || 0;
          correctAnswersCount += 1;
        }
      } else if (q.type === "matrix") {
        const correctAns = q.correctAnswers || {};
        const allCorrect = q.rows.every(
          (row) => ans[row.id] === correctAns[row.id],
        );
        if (allCorrect) {
          currentScore += q.points || 0;
          correctAnswersCount += 1;
        }
      }
    });

    return {
      score: currentScore,
      totalPoints: maxPoints,
      correctCount: correctAnswersCount,
      totalQuestions: questions.length,
    };
  }, [quizAnswers, moduleData]);

  return {
    quizAnswers,
    setQuizAnswers,
    flaggedQuestions,
    setFlaggedQuestions,
    toggleFlag,
    isQuizComplete,
    score,
    totalPoints,
    correctCount,
    totalQuestions,
  };
}
