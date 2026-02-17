import React from "react";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const ShortAnswerQuestion = ({
  question,
  answer = "",
  onSelect,
  showResult = false,
  correctAnswer = null,
}) => {
  const isCorrect =
    showResult &&
    answer.toString().trim().toLowerCase() ===
      correctAnswer.toString().trim().toLowerCase();
  const isWrong = showResult && !isCorrect && answer.toString().trim() !== "";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-body-m font-bold text-Grayscale-600">
          Jawaban Anda:
        </label>
        <div className="relative">
          <input
            type="text"
            value={answer}
            onChange={(e) => !showResult && onSelect(e.target.value)}
            disabled={showResult}
            placeholder="Ketik jawaban di sini..."
            className={`w-full p-4 rounded-xl border-2 outline-none transition-all duration-200 text-body-l font-medium shadow-sm
              ${
                showResult
                  ? isCorrect
                    ? "border-Success-300 bg-Success-50/10 text-Success-600"
                    : "border-Error-300 bg-Error-50/10 text-Error-600"
                  : "border-Grayscale-200 focus:border-Primary-500 focus:bg-Primary-50/30 text-Grayscale-900"
              }`}
          />
          {showResult && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {isCorrect ? (
                <CheckCircle
                  size={24}
                  weight="fill"
                  className="text-Success-400"
                />
              ) : (
                <XCircle size={24} weight="fill" className="text-Error-400" />
              )}
            </div>
          )}
        </div>
      </div>

      {showResult && !isCorrect && (
        <div className="p-4 rounded-lg bg-Success-50 border border-Success-100 flex items-center gap-3">
          <span className="text-body-m font-bold text-Success-700">
            Jawaban Benar:
          </span>
          <span className="text-body-l font-bold text-Success-800">
            {correctAnswer}
          </span>
        </div>
      )}
    </div>
  );
};

export default ShortAnswerQuestion;
