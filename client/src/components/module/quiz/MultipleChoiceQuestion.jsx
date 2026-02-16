import React from "react";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const MultipleChoiceQuestion = ({
  question,
  answer,
  onSelect,
  showResult = false,
  correctAnswer = null,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {question.options.map((option) => {
        const isSelected = answer === option.id;
        const isCorrect = showResult && option.id === correctAnswer;
        const isWrongSelection = showResult && isSelected && !isCorrect;

        let borderClass = "border-Grayscale-200";
        let bgClass = "";
        let textClass = "text-Grayscale-700";

        if (showResult) {
          if (isCorrect) {
            borderClass = "border-Success-300";
            bgClass = "bg-Success-50/10";
            textClass = "text-Success-400";
          } else if (isWrongSelection) {
            borderClass = "border-Error-300";
            bgClass = "bg-Error-50/10";
            textClass = "text-Error-400";
          } else {
            bgClass = "bg-white"; // dim others?
          }
        } else {
          if (isSelected) {
            borderClass = "border-Primary-500";
            bgClass = "bg-Primary-50";
            textClass = "text-Primary-900";
          } else {
            borderClass =
              "border-Grayscale-200 hover:border-Primary-200 hover:bg-Grayscale-50";
          }
        }

        return (
          <div
            key={option.id}
            onClick={() => !showResult && onSelect(option.id)}
            className={`p-5 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${
              showResult ? "cursor-default" : "cursor-pointer"
            } ${borderClass} ${bgClass}`}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                showResult
                  ? isCorrect
                    ? "border-Success-300"
                    : isWrongSelection
                      ? "border-Error-300"
                      : "border-Grayscale-300"
                  : isSelected
                    ? "border-Primary-500"
                    : "border-Grayscale-300 group-hover:border-Primary-300"
              }`}
            >
              {showResult ? (
                isCorrect ? (
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-Success-300"
                  />
                ) : isWrongSelection ? (
                  <XCircle size={16} weight="fill" className="text-Error-300" />
                ) : null
              ) : (
                isSelected && (
                  <div className="w-3 h-3 rounded-full bg-Primary-500" />
                )
              )}
            </div>
            <span className={`text-body-l font-medium ${textClass}`}>
              {option.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleChoiceQuestion;
