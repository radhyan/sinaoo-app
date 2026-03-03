import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import { useUser } from "@/context/UserContext";
import QuizTimer from "@/components/dailyquiz/QuizTimer";
import StreakIndicator, {
  getMultiplier,
} from "@/components/dailyquiz/StreakIndicator";
import {
  ArrowRightIcon,
  XIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockCountdownIcon,
  TrophyIcon,
  ArrowClockwiseIcon,
  HouseIcon,
  FireIcon,
  LightningIcon,
  StarIcon,
} from "@phosphor-icons/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shared/ui/AlertDialog";
import LoadingBar from "@/components/shared/ui/LoadingBar";
import GradientIcon from "@/components/shared/ui/GradientIcon";

// Game states
const STATES = {
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

const TIMER_DURATION = 35;

export default function DailyQuiz() {
  const navigate = useNavigate();
  const { user, refreshUser } = useUser();

  // Game state
  const [gameState, setGameState] = useState(STATES.LOADING);
  const [questions, setQuestions] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Force timer remount

  // Score tracking
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [results, setResults] = useState([]); // { questionId, answer, correct, pointsEarned, multiplier }
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
        // Check status first
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

  const currentQuestion = questions[currentIndex];

  // Wrong questions for redemption
  const wrongQuestions = useMemo(
    () => results.filter((r) => !r.correct).map((r) => r.question),
    [results],
  );

  const currentRedemptionQuestion = wrongQuestions[redemptionIndex];

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

  const handleTimeUp = useCallback(() => {
    if (gameState !== STATES.ANSWERING) return;
    setIsTimerRunning(false);
    processAnswer(null); // Timeout = wrong
  }, [gameState, currentQuestion]);

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

  const handleRedemptionNext = () => {
    if (redemptionIndex < wrongQuestions.length - 1) {
      setRedemptionIndex((i) => i + 1);
      setRedemptionAnswer(null);
      setGameState(STATES.REDEMPTION);
    } else {
      handleSubmit();
    }
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

  const handleSkipRedemption = () => {
    handleSubmit();
  };

  // --- Render helpers ---

  const lastResult = results[results.length - 1];

  // ==================== LOADING ====================
  if (gameState === STATES.LOADING) {
    return (
      <div className="min-h-screen bg-w-lb flex flex-col items-center justify-center gap-6 p-6">
        <GradientIcon
          icon={LightningIcon}
          variant="orange"
          size={64}
          weight="fill"
          className="animate-bounce"
        />
        <p className="text-h3 font-heading text-Primary-900">
          Memuat Kuis Harian...
        </p>
        <LoadingBar className="w-full max-w-[240px]" variant="blue" />
      </div>
    );
  }

  // ==================== ALREADY DONE ====================
  if (gameState === STATES.ALREADY_DONE) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-md w-full text-center space-y-6">
          <GradientIcon
            icon={CheckCircleIcon}
            variant="green"
            size={64}
            weight="fill"
            className="mx-auto"
          />
          <h2 className="text-h3 font-heading text-Primary-900">
            Kuis Hari Ini Selesai!
          </h2>
          <p className="text-body-l text-Grayscale-700">
            Kamu sudah menyelesaikan Pop Quiz untuk hari ini dari course{" "}
            <span className="font-bold text-Primary-500">{courseName}</span>.
            Kembali lagi besok!
          </p>
          <Button
            variant="default"
            onClick={() => navigate("/dashboard")}
            className="w-full"
          >
            Kembali ke Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // ==================== ERROR ====================
  if (error && gameState === STATES.READY) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-md w-full text-center space-y-6">
          <p className="text-body-l text-Error-100 font-bold">{error}</p>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  // ==================== READY ====================
  if (gameState === STATES.READY) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-lg w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-3">
            <GradientIcon
              icon={LightningIcon}
              variant="orange"
              size={64}
              weight="fill"
              className="mx-auto"
            />
            <h1 className="text-h2 font-heading text-Primary-900">
              Pop Quiz Harian
            </h1>
            <p className="text-body-l text-Grayscale-700">
              Hari ini dari course:
            </p>
            <p className="text-h4 font-heading text-Primary-500">
              {courseName}
            </p>
          </div>

          <div className="bg-Primary-50/50 rounded-xl p-5 space-y-3 text-left">
            <div className="flex items-center gap-3">
              <ClockCountdownIcon
                size={24}
                className="text-Primary-500"
                weight="fill"
              />
              <p className="text-body-l text-Grayscale-800">
                <span className="font-bold">35 detik</span> per soal
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FireIcon
                size={24}
                className="text-Secondary-500"
                weight="fill"
              />
              <p className="text-body-l text-Grayscale-800">
                Jawab berturut-turut untuk{" "}
                <span className="font-bold">multiplier poin</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <StarIcon size={24} className="text-Warning-200" weight="fill" />
              <p className="text-body-l text-Grayscale-800">
                <span className="font-bold">10 soal</span> acak,{" "}
                <span className="font-bold">10 poin</span> per soal
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ArrowClockwiseIcon
                size={24}
                className="text-Success-400"
                weight="fill"
              />
              <p className="text-body-l text-Grayscale-800">
                <span className="font-bold">Babak Redemption</span> untuk soal
                salah (+5 poin)
              </p>
            </div>
          </div>

          <Button
            variant="default"
            size="lg"
            onClick={handleStart}
            className="w-full text-body-l"
          >
            Mulai Kuis
          </Button>
        </div>
      </div>
    );
  }

  // ==================== ANSWERING & FEEDBACK ====================
  if (gameState === STATES.ANSWERING || gameState === STATES.FEEDBACK) {
    const isFeedback = gameState === STATES.FEEDBACK;
    const isCorrect = isFeedback && lastResult?.correct;
    const isTimedOut = isFeedback && lastResult?.timedOut;

    return (
      <div className="min-h-screen bg-Grayscale-50 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-Grayscale-100 px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="exitAlert"
                  size="icon"
                  shadow="none"
                  leftIcon={XIcon}
                />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Keluar Kuis?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Apakah Anda yakin ingin keluar? <br />
                    Progress kuis harian ini tidak akan tersimpan.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-between">
                  <AlertDialogAction asChild>
                    <Button
                      variant="destructive"
                      onClick={() => navigate("/dashboard")}
                      shadow="none"
                      className="border-none"
                    >
                      Keluar
                    </Button>
                  </AlertDialogAction>
                  <AlertDialogCancel asChild>
                    <Button variant="ghost">Tidak</Button>
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="flex flex-col">
              <p className="text-body-sm text-Grayscale-500">{courseName}</p>
              <p className="text-body-md font-bold text-Primary-900">
                Soal {currentIndex + 1} / {questions.length}
              </p>
            </div>
          </div>

          {/* Streak Indicator - PROMINENT */}
          <StreakIndicator streak={streak} />

          {/* Timer */}
          <QuizTimer
            key={timerKey}
            duration={TIMER_DURATION}
            isRunning={isTimerRunning}
            onTimeUp={handleTimeUp}
            className="shrink-0"
          />
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-Grayscale-100 w-full">
          <div
            className="h-full bg-db-b transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + (isFeedback ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question Content */}
        <div className="flex-1 flex items-start justify-center p-4 md:p-8 overflow-y-auto">
          <div className="w-full max-w-3xl space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Feedback Banner */}
            {isFeedback && (
              <div
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border-2 animate-in fade-in slide-in-from-top-4 duration-500",
                  isTimedOut
                    ? "bg-Warning-50/20 border-Warning-200"
                    : isCorrect
                      ? "bg-Success-50/20 border-Success-300"
                      : "bg-Error-50/10 border-Error-100",
                )}
              >
                {isTimedOut ? (
                  <ClockCountdownIcon
                    size={32}
                    weight="fill"
                    className="text-Warning-200 shrink-0"
                  />
                ) : isCorrect ? (
                  <CheckCircleIcon
                    size={32}
                    weight="fill"
                    className="text-Success-400 shrink-0"
                  />
                ) : (
                  <XCircleIcon
                    size={32}
                    weight="fill"
                    className="text-Error-50 shrink-0"
                  />
                )}
                <div className="flex-1">
                  <p
                    className={cn(
                      "font-heading text-h5",
                      isTimedOut
                        ? "text-Warning-300"
                        : isCorrect
                          ? "text-Success-400"
                          : "text-Error-100",
                    )}
                  >
                    {isTimedOut
                      ? "Waktu Habis!"
                      : isCorrect
                        ? "Benar!"
                        : "Salah!"}
                  </p>
                  {isCorrect && lastResult.multiplier > 1 && (
                    <p className="text-body-sm text-Success-300 font-bold">
                      🔥 {lastResult.multiplier}× Multiplier! +
                      {lastResult.pointsEarned} poin
                    </p>
                  )}
                  {isCorrect && lastResult.multiplier === 1 && (
                    <p className="text-body-sm text-Success-300">
                      +{lastResult.pointsEarned} poin
                    </p>
                  )}
                </div>
                {isFeedback && (
                  <p className="font-heading text-h4 text-Primary-500 tabular-nums">
                    {baseScore} pts
                  </p>
                )}
              </div>
            )}

            {/* Context & Image */}
            {currentQuestion.imageUrl && (
              <img
                src={currentQuestion.imageUrl}
                alt="Pertanyaan"
                className="w-full max-w-2xl mx-auto rounded-xl shadow-sm border border-Grayscale-200 mb-4"
              />
            )}
            {currentQuestion.context && (
              <div className="bg-Primary-50/50 rounded-xl p-5 border border-Primary-100">
                <p className="text-body-md text-Grayscale-800 whitespace-pre-line text-justify">
                  {currentQuestion.context}
                </p>
              </div>
            )}

            {/* Question */}
            <h3 className="text-h4 font-heading text-Grayscale-900">
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrectOption =
                  option.id === currentQuestion.correctAnswer;

                let optionStyle =
                  "bg-white border-Grayscale-200 hover:border-Primary-300 hover:bg-Primary-50/30 cursor-pointer";
                if (isFeedback) {
                  if (isCorrectOption) {
                    optionStyle =
                      "bg-Success-50/20 border-Success-300 ring-2 ring-Success-300/30";
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle =
                      "bg-Error-50/10 border-Error-100 ring-2 ring-Error-50/30";
                  } else {
                    optionStyle =
                      "bg-Grayscale-50 border-Grayscale-200 opacity-60";
                  }
                } else if (isSelected) {
                  optionStyle =
                    "bg-Primary-50 border-Primary-500 ring-2 ring-Primary-300/30";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={isFeedback}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                      optionStyle,
                    )}
                  >
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-body-sm font-bold shrink-0 border-2 transition-all",
                        isFeedback && isCorrectOption
                          ? "bg-Success-400 text-white border-Success-400"
                          : isFeedback && isSelected && !isCorrectOption
                            ? "bg-Error-50 text-white border-Error-50"
                            : isSelected
                              ? "bg-Primary-500 text-white border-Primary-500"
                              : "bg-white text-Grayscale-600 border-Grayscale-300",
                      )}
                    >
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-body-l text-Grayscale-900 flex-1">
                      {option.text}
                    </span>
                    {isFeedback && isCorrectOption && (
                      <CheckCircleIcon
                        size={24}
                        weight="fill"
                        className="text-Success-400 shrink-0"
                      />
                    )}
                    {isFeedback && isSelected && !isCorrectOption && (
                      <XCircleIcon
                        size={24}
                        weight="fill"
                        className="text-Error-50 shrink-0"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation (during feedback) */}
            {isFeedback && currentQuestion.explanation && (
              <div className="bg-Primary-50/50 rounded-xl p-5 border border-Primary-200 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <p className="font-bold text-body-md text-Primary-700 mb-2">
                  Penjelasan:
                </p>
                <p className="text-body-md text-Grayscale-800">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Next Button (feedback only) */}
            {isFeedback && (
              <div className="flex justify-end pt-2 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-300">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleNextQuestion}
                  rightIcon={<ArrowRightIcon weight="bold" />}
                >
                  {currentIndex < questions.length - 1
                    ? "Soal Selanjutnya"
                    : "Lihat Hasil"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ==================== RESULTS (before redemption) ====================
  if (gameState === STATES.RESULTS) {
    const correctCount = results.filter((r) => r.correct).length;
    const wrongCount = results.filter((r) => !r.correct).length;

    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-lg w-full space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="text-center space-y-3">
            <GradientIcon
              icon={TrophyIcon}
              variant="orange"
              size={64}
              weight="fill"
              className="mx-auto"
            />
            <h2 className="text-h2 font-heading text-Primary-900">
              Hasil Babak Utama
            </h2>
            <p className="text-body-l text-Grayscale-700">{courseName}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-Success-50/20 rounded-xl p-4 text-center border border-Success-300/30">
              <p className="text-h3 font-heading text-Success-400">
                {correctCount}
              </p>
              <p className="text-body-sm text-Grayscale-600">Benar</p>
            </div>
            <div className="bg-Error-50/10 rounded-xl p-4 text-center border border-Error-100/30">
              <p className="text-h3 font-heading text-Error-100">
                {wrongCount}
              </p>
              <p className="text-body-sm text-Grayscale-600">Salah</p>
            </div>
            <div className="bg-Secondary-50/20 rounded-xl p-4 text-center border border-Secondary-300/30">
              <p className="text-h3 font-heading text-Secondary-500">
                🔥 {bestStreak}
              </p>
              <p className="text-body-sm text-Grayscale-600">Best Streak</p>
            </div>
          </div>

          <div className="bg-Primary-50/50 rounded-xl p-6 text-center border border-Primary-200">
            <p className="text-body-md text-Grayscale-600">Poin Babak Utama</p>
            <p className="text-h1 font-heading text-Primary-500">{baseScore}</p>
          </div>

          {/* Redemption offer */}
          {wrongCount > 0 ? (
            <div className="space-y-4">
              <div className="bg-Success-50/10 rounded-xl p-5 border border-Success-300/20 text-center">
                <p className="text-body-l text-Grayscale-800">
                  Kamu punya{" "}
                  <span className="font-bold text-Error-100">
                    {wrongCount} soal salah
                  </span>
                  . Mau coba lagi di{" "}
                  <span className="font-bold text-Success-400">
                    Babak Redemption
                  </span>
                  ?
                </p>
                <p className="text-body-md text-Grayscale-500 mt-1">
                  Setiap jawaban benar mendapat{" "}
                  <span className="font-bold">+5 poin</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleSkipRedemption}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Lewati
                </Button>
                <Button
                  variant="default"
                  onClick={handleStartRedemption}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Mulai Redemption
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="default"
              size="lg"
              onClick={handleSubmit}
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Menyimpan..." : "Simpan Hasil"}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // ==================== REDEMPTION ====================
  if (
    gameState === STATES.REDEMPTION ||
    gameState === STATES.REDEMPTION_FEEDBACK
  ) {
    const isRFeedback = gameState === STATES.REDEMPTION_FEEDBACK;
    const lastRResult = redemptionResults[redemptionResults.length - 1];

    return (
      <div className="min-h-screen bg-Grayscale-50 flex flex-col">
        {/* Top Bar */}
        <div className="bg-Success-50/20 border-b border-Success-300/30 px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <GradientIcon
              icon={ArrowClockwiseIcon}
              variant="green"
              size={32}
              weight="fill"
            />
            <div>
              <p className="text-body-sm text-Success-400 font-bold">
                Babak Redemption
              </p>
              <p className="text-body-md font-bold text-Primary-900">
                Soal {redemptionIndex + 1} / {wrongQuestions.length}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-4 py-2 border border-Success-300/30">
            <p className="text-body-sm text-Grayscale-500">Poin Redemption</p>
            <p className="font-heading text-h5 text-Success-400 text-center">
              {redemptionScore}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="h-1.5 bg-Grayscale-100 w-full">
          <div
            className="h-full bg-Success-300 transition-all duration-500 ease-out"
            style={{
              width: `${((redemptionIndex + (isRFeedback ? 1 : 0)) / wrongQuestions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question */}
        <div className="flex-1 flex items-start justify-center p-4 md:p-8 overflow-y-auto">
          <div className="w-full max-w-3xl space-y-6">
            {/* Feedback Banner */}
            {isRFeedback && (
              <div
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border-2 animate-in fade-in slide-in-from-top-4 duration-500",
                  lastRResult?.correct
                    ? "bg-Success-50/20 border-Success-300"
                    : "bg-Error-50/10 border-Error-100",
                )}
              >
                {lastRResult?.correct ? (
                  <CheckCircleIcon
                    size={32}
                    weight="fill"
                    className="text-Success-400 shrink-0"
                  />
                ) : (
                  <XCircleIcon
                    size={32}
                    weight="fill"
                    className="text-Error-50 shrink-0"
                  />
                )}
                <p
                  className={cn(
                    "font-heading text-h5",
                    lastRResult?.correct
                      ? "text-Success-400"
                      : "text-Error-100",
                  )}
                >
                  {lastRResult?.correct ? "Benar! +5 poin" : "Tetap salah"}
                </p>
              </div>
            )}

            {/* Context & Image */}
            {currentRedemptionQuestion?.imageUrl && (
              <img
                src={currentRedemptionQuestion.imageUrl}
                alt="Pertanyaan"
                className="w-full max-w-2xl mx-auto rounded-xl shadow-sm border border-Grayscale-200 mb-4"
              />
            )}
            {currentRedemptionQuestion?.context && (
              <div className="bg-Primary-50/50 rounded-xl p-5 border border-Primary-100">
                <p className="text-body-md text-Grayscale-800 whitespace-pre-line text-justify">
                  {currentRedemptionQuestion.context}
                </p>
              </div>
            )}

            <h3 className="text-h4 font-heading text-Grayscale-900">
              {currentRedemptionQuestion?.question}
            </h3>

            <div className="space-y-3">
              {currentRedemptionQuestion?.options?.map((option) => {
                const isSelected = redemptionAnswer === option.id;
                const isCorrectOpt =
                  option.id === currentRedemptionQuestion.correctAnswer;

                let style =
                  "bg-white border-Grayscale-200 hover:border-Primary-300 cursor-pointer";
                if (isRFeedback) {
                  if (isCorrectOpt)
                    style =
                      "bg-Success-50/20 border-Success-300 ring-2 ring-Success-300/30";
                  else if (isSelected)
                    style = "bg-Error-50/10 border-Error-100";
                  else
                    style = "bg-Grayscale-50 border-Grayscale-200 opacity-60";
                } else if (isSelected) {
                  style = "bg-Primary-50 border-Primary-500";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleRedemptionSelect(option.id)}
                    disabled={isRFeedback}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                      style,
                    )}
                  >
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-body-sm font-bold shrink-0 border-2",
                        isRFeedback && isCorrectOpt
                          ? "bg-Success-400 text-white border-Success-400"
                          : isRFeedback && isSelected
                            ? "bg-Error-50 text-white border-Error-50"
                            : "bg-white text-Grayscale-600 border-Grayscale-300",
                      )}
                    >
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-body-l text-Grayscale-900 flex-1">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {isRFeedback && currentRedemptionQuestion?.explanation && (
              <div className="bg-Primary-50/50 rounded-xl p-5 border border-Primary-200 animate-in fade-in duration-500">
                <p className="font-bold text-body-md text-Primary-700 mb-2">
                  Penjelasan:
                </p>
                <p className="text-body-md text-Grayscale-800">
                  {currentRedemptionQuestion.explanation}
                </p>
              </div>
            )}

            {isRFeedback && (
              <div className="flex justify-end pt-2 animate-in fade-in duration-300">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleRedemptionNext}
                  rightIcon={<ArrowRightIcon weight="bold" />}
                  disabled={isSubmitting}
                >
                  {redemptionIndex < wrongQuestions.length - 1
                    ? "Soal Selanjutnya"
                    : isSubmitting
                      ? "Menyimpan..."
                      : "Lihat Hasil Akhir"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ==================== FINAL RESULTS ====================
  if (gameState === STATES.FINAL) {
    const totalScore = baseScore + redemptionScore;
    const correctCount = results.filter((r) => r.correct).length;
    const redeemedCount = redemptionResults.filter((r) => r.correct).length;

    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-lg w-full space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="text-center space-y-3">
            <GradientIcon
              icon={TrophyIcon}
              variant="orange"
              size={72}
              weight="fill"
              className="mx-auto"
            />
            <h2 className="text-h2 font-heading text-Primary-900">
              Kuis Selesai!
            </h2>
            <p className="text-body-l text-Grayscale-600">{courseName}</p>
          </div>

          {/* Total Score */}
          <div className="bg-db-b rounded-2xl p-6 text-center text-white">
            <p className="text-body-md text-Primary-100">Total Poin</p>
            <p className="text-h1 font-heading">{totalScore}</p>
          </div>

          {/* Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between items-center px-2">
              <span className="text-body-l text-Grayscale-700">
                Babak Utama ({correctCount}/{questions.length} benar)
              </span>
              <span className="font-heading text-h5 text-Primary-500">
                {baseScore}
              </span>
            </div>
            {redemptionScore > 0 && (
              <div className="flex justify-between items-center px-2">
                <span className="text-body-l text-Grayscale-700">
                  Babak Redemption ({redeemedCount} redeemed)
                </span>
                <span className="font-heading text-h5 text-Success-400">
                  +{redemptionScore}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center px-2 pt-2 border-t border-Grayscale-200">
              <span className="text-body-l text-Grayscale-700">
                🔥 Best Streak
              </span>
              <span className="font-heading text-h5 text-Secondary-500">
                {bestStreak}
              </span>
            </div>
          </div>

          <Button
            variant="default"
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="w-full"
            leftIcon={<HouseIcon weight="fill" />}
          >
            Kembali ke Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
