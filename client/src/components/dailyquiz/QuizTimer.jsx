import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Circular countdown timer for the daily quiz.
 * Shows remaining seconds with a circular progress ring.
 */
export default function QuizTimer({
  duration = 35,
  isRunning = true,
  onTimeUp,
  className,
}) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef(null);
  const hasCalledTimeUp = useRef(false);

  useEffect(() => {
    setTimeLeft(duration);
    hasCalledTimeUp.current = false;
  }, [duration]);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          if (!hasCalledTimeUp.current) {
            hasCalledTimeUp.current = true;
            setTimeout(() => onTimeUp?.(), 0);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, onTimeUp]);

  const progress = timeLeft / duration;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference * (1 - progress);

  // Color transitions based on time
  const getColor = () => {
    if (timeLeft <= 5) return { stroke: "#ff3b3b", text: "text-Error-50" };
    if (timeLeft <= 10) return { stroke: "#ffea31", text: "text-Warning-100" };
    return { stroke: "#1e8a00", text: "text-Success-400" };
  };

  const colors = getColor();

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
    >
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="44"
          cy="44"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-Grayscale-200"
        />
        {/* Progress ring */}
        <circle
          cx="44"
          cy="44"
          r="40"
          fill="none"
          stroke={colors.stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <span
        className={cn(
          "absolute text-h3 font-heading tabular-nums transition-colors duration-300",
          colors.text,
        )}
      >
        {timeLeft}
      </span>
    </div>
  );
}
