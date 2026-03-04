import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowClockwiseIcon,
} from "@phosphor-icons/react";
import { STATES } from "@/hooks/useDailyQuiz";

export default function QuizRedemptionScreen({
  gameState,
  redemptionIndex,
  wrongQuestions,
  currentRedemptionQuestion,
  redemptionAnswer,
  redemptionScore,
  redemptionResults,
  isSubmitting,
  onRedemptionSelect,
  onRedemptionNext,
}) {
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
                  lastRResult?.correct ? "text-Success-400" : "text-Error-100",
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
                else if (isSelected) style = "bg-Error-50/10 border-Error-100";
                else style = "bg-Grayscale-50 border-Grayscale-200 opacity-60";
              } else if (isSelected) {
                style = "bg-Primary-50 border-Primary-500";
              }

              return (
                <button
                  key={option.id}
                  onClick={() => onRedemptionSelect(option.id)}
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
                onClick={onRedemptionNext}
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
