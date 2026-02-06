import React from "react";
import { cn } from "@/lib/utils";
import {
  FlagIcon,
  CheckCircleIcon,
  XCircleIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
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
import { CheckIcon } from "lucide-react";

/**
 * Reusable Navigation & Actions sidebar for Quiz and Quiz Review
 * @param {Array} questions - Array of question objects
 * @param {Number} currentQuestionIndex - Active question index
 * @param {Function} onSelect - Callback when a number is clicked
 * @param {Object} answers - User's current answers
 * @param {String} mode - 'quiz' or 'review'
 * @param {Object} flaggedQuestions - (Optional) Flagged status for questions
 * @param {Function} isQuestionCorrect - (Optional) Helper to check correctness in review mode
 * @param {Function} onNext - Callback for Next button
 * @param {Function} onPrev - Callback for Previous button
 * @param {Boolean} isQuizComplete - Whether the quiz is ready to be finished
 * @param {Function} onFinish - Callback for Finish Kuis button
 */
const QuizNavigation = ({
  questions = [],
  currentQuestionIndex,
  onSelect,
  answers = {},
  mode = "quiz",
  flaggedQuestions = {},
  isQuestionCorrect,
  onNext,
  onPrev,
  isQuizComplete,
  onFinish,
}) => {
  const totalQuestions = questions.length;
  const isLast = currentQuestionIndex === totalQuestions - 1;
  const isFirst = currentQuestionIndex === 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Unified Navigation & Actions Container */}
      <div className="p-4 bg-white rounded-lg border border-Grayscale-200">
        <p className="text-lg font-bold text-Primary-700 mb-4">Navigasi Soal</p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {questions.map((q, index) => {
            const isCurrent = index === currentQuestionIndex;
            const isAnswered =
              answers[q.id] !== undefined && answers[q.id] !== null;

            // Check completion (specifically for matrix)
            let isFullyAnswered = false;
            if (mode === "quiz") {
              isFullyAnswered =
                q.type === "matrix"
                  ? q.rows.every((row) => answers[q.id]?.[row.id])
                  : isAnswered;
            }

            // Check correctness if in review mode
            const correct =
              mode === "review" && isQuestionCorrect
                ? isQuestionCorrect(q)
                : null;

            return (
              <button
                key={q.id}
                onClick={() => onSelect(index)}
                className={cn(
                  "w-full aspect-square rounded-md text-md font-bold transition-all flex items-center justify-center relative",
                  isCurrent
                    ? "bg-Primary-600 text-white shadow-md ring-2 ring-Primary-200 z-10"
                    : mode === "review"
                      ? correct
                        ? "bg-Success-50/30 text-Success-400 border border-Success-200 hover:bg-Success-100"
                        : "bg-Error-50/30 text-Error-400 border border-Error-200 hover:bg-Error-100"
                      : isFullyAnswered
                        ? "bg-Primary-100 text-Primary-700 border border-Primary-200 hover:bg-Primary-200"
                        : "bg-Grayscale-100 text-Grayscale-500 hover:bg-Grayscale-200",
                )}
              >
                {index + 1}

                {/* Quiz Mode: Flag Indicator */}
                {mode === "quiz" && flaggedQuestions[q.id] && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-Secondary-500 rounded-xsm p-1 border-2 border-white shadow-sm">
                      <FlagIcon
                        size={12}
                        weight="fill"
                        className="text-white"
                      />
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col gap-3 pt-4 border-t border-Grayscale-100">
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={onPrev}
              disabled={isFirst}
              className="justify-center"
              leftIcon={<CaretLeftIcon />}
            >
              Sebelumnya
            </Button>
            <Button
              variant="default"
              onClick={onNext}
              disabled={isLast}
              className="justify-center"
              rightIcon={<CaretRightIcon />}
            >
              Berikutnya
            </Button>
          </div>

          {/* Selesai Button with AlertDialog (Quiz Mode only) */}
          {mode === "quiz" && isQuizComplete && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="tertiary"
                  rightIcon={<CheckIcon weight="bold" />}
                  className="w-full shadow-lg shadow-Green-100 mt-1"
                >
                  Selesaikan Kuis
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Sudah yakin dengan jawabanmu?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Kamu telah menjawab seluruh pertanyaan. Pastikan sekali lagi
                    sebelum mengakhiri kuis ini!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-between">
                  <AlertDialogAction
                    onClick={onFinish}
                    className="bg-Primary-600 text-white hover:bg-Primary-700 font-bold"
                  >
                    Ya, Selesaikan
                  </AlertDialogAction>
                  <AlertDialogCancel className="font-bold border-2">
                    Batal
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizNavigation;
