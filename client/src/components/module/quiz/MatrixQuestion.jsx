import React from "react";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

const MatrixQuestion = ({
  question,
  answer = {},
  onSelect,
  showResult = false,
  correctAnswers = {},
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-Grayscale-200">
      <table className="w-full">
        <thead className="bg-Grayscale-50 border-b border-Grayscale-200">
          <tr>
            <th className="p-4 text-left text-sm font-bold text-Grayscale-700">
              Pernyataan
            </th>
            {question.columns.map((col) => (
              <th
                key={col.id}
                className="p-4 text-center text-sm font-bold text-Grayscale-700 w-24"
              >
                {col.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-Grayscale-100">
          {question.rows.map((row) => (
            <tr key={row.id} className="hover:bg-Grayscale-50/50">
              <td className="p-4 text-body-md text-Grayscale-900">
                {row.text}
              </td>
              {question.columns.map((col) => {
                const isSelected = answer[row.id] === col.id;
                const isCorrectChoice =
                  showResult && correctAnswers[row.id] === col.id;
                const isWrongSelection =
                  showResult && isSelected && !isCorrectChoice;

                let borderClass = "border-Grayscale-300";
                let bgClass = "transparent";
                let icon = null;

                if (showResult) {
                  if (isCorrectChoice) {
                    borderClass = "border-Success-300 bg-Success-300";
                    icon = (
                      <CheckIcon
                        size={12}
                        weight="bold"
                        className="text-white"
                      />
                    );
                  } else if (isWrongSelection) {
                    borderClass = "border-Error-300 bg-Error-300";
                    icon = (
                      <XIcon size={12} weight="bold" className="text-white" />
                    );
                  } else {
                    borderClass = "border-Grayscale-200 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    borderClass = "border-Primary-500";
                  } else {
                    borderClass =
                      "border-Grayscale-300 hover:border-Primary-300";
                  }
                }

                return (
                  <td key={col.id} className="p-4 text-center">
                    <div
                      onClick={() => !showResult && onSelect(row.id, col.id)}
                      className={`w-6 h-6 rounded-full border-2 mx-auto transition-colors flex items-center justify-center ${
                        showResult ? "cursor-default" : "cursor-pointer"
                      } ${borderClass} ${bgClass}`}
                    >
                      {showResult
                        ? icon
                        : isSelected && (
                            <div className="w-3 h-3 rounded-full bg-Primary-500" />
                          )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatrixQuestion;
