import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import QuizTimer from "@/components/dailyquiz/QuizTimer";
import StreakIndicator from "@/components/dailyquiz/StreakIndicator";
import {
  ArrowRightIcon,
  XIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockCountdownIcon,
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
import { STATES, TIMER_DURATION } from "@/hooks/useDailyQuiz";

export default function QuizQuestionScreen({
  gameState,
  courseName,
  currentIndex,
  questions,
  currentQuestion,
  selectedAnswer,
  isTimerRunning,
  timerKey,
  streak,
  baseScore,
  lastResult,
  onSelectAnswer,
  onTimeUp,
  onNextQuestion,
}) {
  const navigate = useNavigate();
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

        <StreakIndicator streak={streak} />

        <QuizTimer
          key={timerKey}
          duration={TIMER_DURATION}
          isRunning={isTimerRunning}
          onTimeUp={onTimeUp}
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
                  onClick={() => onSelectAnswer(option.id)}
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
                onClick={onNextQuestion}
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
