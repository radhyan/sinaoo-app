import React from "react";
import { cn } from "@/lib/utils";
import { FireIcon, LightningIcon } from "@phosphor-icons/react";

/**
 * Streak & multiplier indicator — prominently displayed during the quiz.
 * Shows current consecutive correct answers and the active multiplier.
 */

const MULTIPLIER_TIERS = [
  { min: 0, multiplier: 1, label: "1×", color: "text-Grayscale-600" },
  { min: 2, multiplier: 1.5, label: "1.5×", color: "text-Warning-100" },
  { min: 3, multiplier: 2, label: "2×", color: "text-Secondary-500" },
  { min: 4, multiplier: 2.5, label: "2.5×", color: "text-Primary-500" },
  { min: 5, multiplier: 3, label: "3×", color: "text-Error-50" },
];

export function getMultiplier(streak) {
  for (let i = MULTIPLIER_TIERS.length - 1; i >= 0; i--) {
    if (streak >= MULTIPLIER_TIERS[i].min) return MULTIPLIER_TIERS[i];
  }
  return MULTIPLIER_TIERS[0];
}

export default function StreakIndicator({ streak = 0, className }) {
  const tier = getMultiplier(streak);
  const isActive = streak >= 2;

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-500",
        isActive
          ? "bg-Secondary-50/50 border-Secondary-300 shadow-blue-60"
          : "bg-Grayscale-50 border-Grayscale-200",
        className,
      )}
    >
      {/* Streak Fire */}
      <div className="flex items-center gap-1.5">
        <FireIcon
          size={28}
          weight="fill"
          className={cn(
            "transition-all duration-500",
            isActive
              ? "text-Secondary-500 animate-pulse"
              : "text-Grayscale-400",
          )}
        />
        <span
          className={cn(
            "font-heading text-h4 tabular-nums transition-colors duration-300",
            isActive ? "text-Secondary-500" : "text-Grayscale-500",
          )}
        >
          {streak}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-Grayscale-300" />

      {/* Multiplier Badge */}
      <div className="flex items-center gap-1">
        <LightningIcon
          size={20}
          weight="fill"
          className={cn("transition-all duration-500", tier.color)}
        />
        <span
          className={cn(
            "font-heading text-h5 transition-all duration-500",
            tier.color,
            isActive && "scale-110",
          )}
        >
          {tier.label}
        </span>
      </div>
    </div>
  );
}
