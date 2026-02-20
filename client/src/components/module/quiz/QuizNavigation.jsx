import React from "react";
import { cn } from "@/lib/utils";
import {
  FlagIcon,
  CheckCircleIcon,
  XCircleIcon,
  CaretLeftIcon,
  CaretRightIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <div className="p-3 xl:p-4 bg-white rounded-lg border border-Grayscale-200">
        <p className="text-body-md xl:text-lg font-bold text-Primary-700 mb-3 xl:mb-4">
          Navigasi Soal
        </p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 xl:grid-cols-5 gap-1.5 xl:gap-2 mb-4 xl:mb-6">
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
                  "w-full aspect-square rounded-md text-body-sm xl:text-md font-bold transition-all flex items-center justify-center relative",
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={onPrev}
                  disabled={isFirst}
                  className="justify-center w-full"
                  leftIcon={<CaretLeftIcon />}
                >
                  Sebelumnya
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pertanyaan sebelumnya</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  onClick={onNext}
                  disabled={isLast}
                  className="justify-center w-full"
                  rightIcon={<CaretRightIcon />}
                >
                  Berikutnya
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pertanyaan berikutnya</p>
              </TooltipContent>
            </Tooltip>
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
              <AlertDialogContent className="max-w-xl bg-white rounded-xl p-8 border-none shadow-blue-60">
                <AlertDialogHeader className="">
                  <AlertDialogTitle className="flex items-center gap-3 !text-h4 font-heading text-Primary-900 border-none">
                    <GradientIcon
                      icon={CheckCircleIcon}
                      variant="green"
                      size={28}
                      weight="fill"
                    />
                    Selesaikan Kuis
                  </AlertDialogTitle>
                  <AlertDialogDescription className="!text-body-md lg:!text-body-l text-left font-medium text-Grayscale-900 mt-2">
                    Kamu telah menjawab seluruh pertanyaan. Apakah kamu yakin
                    ingin menyelesaikan kuis ini dan melihat hasilnya?
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="flex-row items-center justify-between sm:justify-between w-full mt-6 sm:space-x-0">
                  <AlertDialogCancel asChild>
                    <Button variant="default">Batal</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      variant="tertiary"
                      shadow="none"
                      onClick={onFinish}
                      rightIcon={<CheckIcon weight="bold" />}
                    >
                      Selesaikan
                    </Button>
                  </AlertDialogAction>
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
