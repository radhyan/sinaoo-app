import { useState, useMemo, useEffect } from "react";

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

  // Sync with initial data when it loads asynchronously
  useEffect(() => {
    console.log(
      "[QuizState] Sync Attempt - InitialAnswers:",
      Object.keys(initialAnswers).length,
      "InitialFlags:",
      Object.keys(initialFlags).length,
    );

    if (
      initialAnswers &&
      Object.keys(initialAnswers).length > 0 &&
      Object.keys(quizAnswers).length === 0
    ) {
      console.log("[QuizState] Syncing Answers...");
      setQuizAnswers(initialAnswers);
    }

    if (
      initialFlags &&
      Object.keys(initialFlags).length > 0 &&
      Object.keys(flaggedQuestions).length === 0
    ) {
      console.log("[QuizState] Syncing Flags...");
      setFlaggedQuestions(initialFlags);
    }
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
