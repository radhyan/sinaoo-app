import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import { ArrowLeftIcon, CheckCircleIcon } from "@phosphor-icons/react";
import MultipleChoiceQuestion from "./quiz/MultipleChoiceQuestion";
import MatrixQuestion from "./quiz/MatrixQuestion";
import ShortAnswerQuestion from "./quiz/ShortAnswerQuestion";
import QuizNavigation from "./quiz/QuizNavigation";

const QuizReview = ({ questions = [], answers = {}, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  if (questions.length === 0) {
    return <div>No questions to review.</div>;
  }

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

  // Helper to check correctness for nav bubbles
  const isQuestionCorrect = (q) => {
    const ans = answers[q.id];
    if (!ans) return false;

    if (q.type === "multiple-choice") {
      return ans === q.correctAnswer;
    } else if (q.type === "matrix") {
      return q.rows.every(
        (row) => ans[row.id] === (q.correctAnswers || {})[row.id],
      );
    } else if (q.type === "short-answer") {
      return (
        ans.toString().trim().toLowerCase() ===
        q.correctAnswer.toString().trim().toLowerCase()
      );
    }
    return false;
  };

  return (
    <div className="grid lg:grid-cols-4 gap-6 h-full">
      {/* Left Column: Question Content */}
      <div className="lg:col-span-3 flex flex-col h-full">
        {/* Header - Back Button & Title */}
        <div className="flex items-center gap-4 mb-6 border-b border-Grayscale-100 pb-4">
          <Button
            variant="ghostDark"
            shadow="none "
            size="icon"
            onClick={onBack}
            leftIcon={<ArrowLeftIcon />}
          ></Button>
          <span className="text-h5 font-heading font-bold text-Grayscale-900">
            Pembahasan Kuis
          </span>
        </div>

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
          </div>

          <h2 className="font-heading text-h4 text-Grayscale-900 my-4">
            {question.question}
          </h2>

          {/* Question Image */}
          {question.imageUrl && (
            <div className="mb-6 rounded-lg overflow-hidden border border-Grayscale-200 bg-white">
              <img
                src={question.imageUrl}
                alt="Question diagram"
                className="max-w-full h-auto mx-auto"
              />
            </div>
          )}

          {/* Context */}
          {question.context && (
            <div className="mb-4 text-body-lg text-Grayscale-700 whitespace-pre-line bg-Grayscale-50 p-4 rounded-lg border border-Grayscale-100 italic">
              {question.context}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 mb-8">
          {question.type === "multiple-choice" && (
            <MultipleChoiceQuestion
              question={question}
              answer={answers[question.id]}
              showResult={true}
              correctAnswer={question.correctAnswer}
              onSelect={() => {}}
            />
          )}

          {question.type === "matrix" && (
            <MatrixQuestion
              question={question}
              answer={answers[question.id]}
              showResult={true}
              correctAnswers={question.correctAnswers}
              onSelect={() => {}}
            />
          )}

          {question.type === "short-answer" && (
            <ShortAnswerQuestion
              question={question}
              answer={answers[question.id]}
              showResult={true}
              correctAnswer={question.correctAnswer}
              onSelect={() => {}}
            />
          )}
        </div>

        {/* Explanation Box */}
        <div className="bg-Primary-50 border border-Primary-100 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h4 className="flex items-center gap-2 text-Primary-700 font-bold mb-2">
            <CheckCircleIcon size={24} weight="fill" />
            Pembahasan:
          </h4>
          <p className="text-Primary-900 text-body-md leading-relaxed whitespace-pre-line">
            {question.explanation || "Tidak ada pembahasan untuk soal ini."}
          </p>
        </div>
      </div>

      {/* Right Column: Navigation */}
      <div className="lg:col-span-1 space-y-6">
        <QuizNavigation
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onSelect={setCurrentQuestionIndex}
          answers={answers}
          mode="review"
          isQuestionCorrect={isQuestionCorrect}
          onNext={nextQuestion}
          onPrev={prevQuestion}
        />
      </div>
    </div>
  );
};

export default QuizReview;
