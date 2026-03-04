import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { getMultiplier } from "@/components/dailyquiz/StreakIndicator";

// Game states
export const STATES = {
  LOADING: "LOADING",
  READY: "READY",
  ANSWERING: "ANSWERING",
  FEEDBACK: "FEEDBACK",
  RESULTS: "RESULTS",
  REDEMPTION: "REDEMPTION",
  REDEMPTION_FEEDBACK: "REDEMPTION_FEEDBACK",
  FINAL: "FINAL",
  ALREADY_DONE: "ALREADY_DONE",
};

export const TIMER_DURATION = 35;

export default function useDailyQuiz() {
  const navigate = useNavigate();
  const { user, refreshUser } = useUser();

  // Game state
  const [gameState, setGameState] = useState(STATES.LOADING);
  const [questions, setQuestions] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  // Score tracking
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [results, setResults] = useState([]);
  const [baseScore, setBaseScore] = useState(0);

  // Redemption
  const [redemptionIndex, setRedemptionIndex] = useState(0);
  const [redemptionScore, setRedemptionScore] = useState(0);
  const [redemptionAnswer, setRedemptionAnswer] = useState(null);
  const [redemptionResults, setRedemptionResults] = useState([]);

  // Submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Fetch questions on mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (user?.username) {
          const statusRes = await fetch(
            `http://localhost:3000/api/daily-quiz/status/${user.username}`,
          );
          const statusData = await statusRes.json();
          if (statusData.completed) {
            setCourseName(statusData.courseName);
            setGameState(STATES.ALREADY_DONE);
            return;
          }
        }

        const res = await fetch(
          "http://localhost:3000/api/daily-quiz/questions",
        );
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch questions");
        }
        const data = await res.json();
        setQuestions(data.questions);
        setCourseName(data.courseName);
        setGameState(STATES.READY);
      } catch (err) {
        console.error("[DailyQuiz] Fetch error:", err);
        setError(err.message);
        setGameState(STATES.READY);
      }
    };
    fetchQuestions();
  }, [user?.username]);

  // Derived values
  const currentQuestion = questions[currentIndex];

  const wrongQuestions = useMemo(
    () => results.filter((r) => !r.correct).map((r) => r.question),
    [results],
  );

  const currentRedemptionQuestion = wrongQuestions[redemptionIndex];
  const lastResult = results[results.length - 1];

  // --- Handlers ---

  const handleStart = () => {
    setGameState(STATES.ANSWERING);
    setIsTimerRunning(true);
    setTimerKey((k) => k + 1);
  };

  const handleSelectAnswer = (optionId) => {
    if (gameState !== STATES.ANSWERING || selectedAnswer) return;
    setSelectedAnswer(optionId);
    setIsTimerRunning(false);
    processAnswer(optionId);
  };

  const processAnswer = (answer) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    const newStreak = isCorrect ? streak + 1 : 0;
    const multiplierTier = isCorrect
      ? getMultiplier(newStreak)
      : getMultiplier(0);
    const pointsEarned = isCorrect
      ? Math.round(10 * multiplierTier.multiplier)
      : 0;

    setStreak(newStreak);
    if (newStreak > bestStreak) setBestStreak(newStreak);
    setBaseScore((prev) => prev + pointsEarned);

    setResults((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answer,
        correct: isCorrect,
        pointsEarned,
        multiplier: multiplierTier.multiplier,
        timedOut: answer === null,
      },
    ]);

    setGameState(STATES.FEEDBACK);
  };

  const handleTimeUp = useCallback(() => {
    if (gameState !== STATES.ANSWERING) return;
    setIsTimerRunning(false);
    processAnswer(null);
  }, [gameState, currentQuestion]);

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setGameState(STATES.ANSWERING);
      setIsTimerRunning(true);
      setTimerKey((k) => k + 1);
    } else {
      setGameState(STATES.RESULTS);
    }
  };

  const handleStartRedemption = () => {
    setRedemptionIndex(0);
    setRedemptionAnswer(null);
    setGameState(STATES.REDEMPTION);
  };

  const handleRedemptionSelect = (optionId) => {
    if (redemptionAnswer) return;
    setRedemptionAnswer(optionId);
    const isCorrect = optionId === currentRedemptionQuestion.correctAnswer;
    const pts = isCorrect ? 5 : 0;
    setRedemptionScore((prev) => prev + pts);
    setRedemptionResults((prev) => [
      ...prev,
      { correct: isCorrect, pointsEarned: pts },
    ]);
    setGameState(STATES.REDEMPTION_FEEDBACK);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:3000/api/daily-quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          score: baseScore,
          redemptionScore,
          bestStreak,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.alreadyCompleted) {
          setGameState(STATES.ALREADY_DONE);
          return;
        }
        throw new Error(data.error);
      }

      await refreshUser(user.username);
      setGameState(STATES.FINAL);
    } catch (err) {
      console.error("[DailyQuiz] Submit error:", err);
      setError(err.message);
      setGameState(STATES.FINAL);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRedemptionNext = () => {
    if (redemptionIndex < wrongQuestions.length - 1) {
      setRedemptionIndex((i) => i + 1);
      setRedemptionAnswer(null);
      setGameState(STATES.REDEMPTION);
    } else {
      handleSubmit();
    }
  };

  const handleSkipRedemption = () => {
    handleSubmit();
  };

  return {
    // State
    gameState,
    questions,
    courseName,
    currentIndex,
    selectedAnswer,
    isTimerRunning,
    timerKey,
    streak,
    bestStreak,
    results,
    baseScore,
    redemptionIndex,
    redemptionScore,
    redemptionAnswer,
    redemptionResults,
    isSubmitting,
    error,

    // Derived
    currentQuestion,
    wrongQuestions,
    currentRedemptionQuestion,
    lastResult,

    // Handlers
    handleStart,
    handleSelectAnswer,
    handleTimeUp,
    handleNextQuestion,
    handleStartRedemption,
    handleRedemptionSelect,
    handleRedemptionNext,
    handleSubmit,
    handleSkipRedemption,
    navigate,
  };
}
