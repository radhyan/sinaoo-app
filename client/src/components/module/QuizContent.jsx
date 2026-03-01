import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import { FlagIcon } from "@phosphor-icons/react";
import MultipleChoiceQuestion from "./quiz/MultipleChoiceQuestion";
import MatrixQuestion from "./quiz/MatrixQuestion";
import ShortAnswerQuestion from "./quiz/ShortAnswerQuestion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import QuizNavigation from "./quiz/QuizNavigation";

const QuizContent = ({
  answers,
  setAnswers,
  flaggedQuestions = {},
  onToggleFlag,
  questions = [],
  isQuizComplete,
  onFinish,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const handleOptionSelect = (optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionId,
    }));
  };

  const handleMatrixSelect = (rowId, colId) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: {
        ...(prev[question.id] || {}),
        [rowId]: colId,
      },
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="grid xl:grid-cols-4 gap-6">
      {/* Left Column: Question Content */}
      <div className="xl:col-span-3">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-Primary-500 font-bold tracking-wider text-md">
                Pertanyaan {currentQuestionIndex + 1}/{totalQuestions}
              </span>
              <span className="text-Primary-500">|</span>
              <span className="text-Grayscale-500 text-md font-medium">
                {question.points} Points
              </span>
            </div>

            <div className="flex items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={
                        flaggedQuestions[question.id] ? "secondary" : "outline"
                      }
                      size="default"
                      shadow="none"
                      onClick={() => onToggleFlag(question.id)}
                      leftIcon={<FlagIcon weight="fill" />}
                    >
                      Tandai Soal
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {flaggedQuestions[question.id]
                        ? "Hapus Tandai Soal"
                        : "Tandai Soal (Ragu-ragu)"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Context / Reading Material for Question */}
          {question.context && (
            <div
              className="mb-4 text-body-md md:text-body-l text-justify text-Grayscale-900 whitespace-pre-line bg-Grayscale-50 p-4 md:p-6 rounded-lg border border-Grayscale-100"
              dangerouslySetInnerHTML={{ __html: question.context }}
            />
          )}

          <h2
            className="font-bold text-h5 md:text-h4 text-justify text-Grayscale-900 my-4 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: question.question }}
          />

          {/* Question Image */}
          {question.imageUrl && (
            <div className="mb-6 rounded-md md:rounded-lg overflow-hidden border border-Grayscale-200 bg-white">
              <img
                src={question.imageUrl}
                alt="Question diagram"
                className="max-w-full h-auto mx-auto"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {question.type === "multiple-choice" && (
            <MultipleChoiceQuestion
              question={question}
              answer={answers[question.id]}
              onSelect={handleOptionSelect}
            />
          )}

          {question.type === "matrix" && (
            <MatrixQuestion
              question={question}
              answer={answers[question.id]}
              onSelect={handleMatrixSelect}
            />
          )}

          {question.type === "short-answer" && (
            <ShortAnswerQuestion
              question={question}
              answer={answers[question.id]}
              onSelect={handleOptionSelect}
            />
          )}
        </div>
      </div>

      {/* Right Column: Navigation & Actions */}
      <div className="xl:col-span-1 space-y-6">
        <QuizNavigation
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onSelect={setCurrentQuestionIndex}
          answers={answers}
          mode="quiz"
          flaggedQuestions={flaggedQuestions}
          onNext={nextQuestion}
          onPrev={prevQuestion}
          isQuizComplete={isQuizComplete}
          onFinish={onFinish}
        />
      </div>
    </div>
  );
};

export default QuizContent;
