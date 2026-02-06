import React from "react";
import { cn } from "@/lib/utils";

/**
 * SegmentedProgressBar component
 *
 * @param {number} current - The number of completed segments (0-indexed count)
 * @param {number} total - Total number of segments
 * @param {string} variant - 'primary' | 'tertiary' | 'secondary'
 * @param {boolean} isComplete - If true, all segments will show as complete
 * @param {string} className - Additional container styles
 */
export default function SegmentedProgressBar({
  current,
  total,
  variant = "primary",
  isComplete = false,
  className,
}) {
  const segments = Array.from({ length: total }, (_, i) => i + 1);

  // Variant styles configuration
  const variantStyles = {
    primary: {
      active: "bg-Primary-500",
      ongoing: "bg-Primary-500/30",
      empty: "bg-Primary-900/60",
    },
    tertiary: {
      active: "bg-Primary-500",
      ongoing: "bg-Primary-500/30",
      empty: "bg-Tertiary-900/60",
    },
    secondary: {
      active: "bg-Primary-500",
      ongoing: "bg-Primary-500/30",
      empty: "bg-Secondary-900/60",
    },
    header: {
      active: "bg-Secondary-400",
      ongoing: "bg-Primary-900/30",
      empty: "bg-Primary-900/40",
    },
    achievement: {
      active: "bg-dg-g",
      ongoing: "bg-Secondary-500/50",
      empty: "bg-Grayscale-500",
    },
  };

  const splitView = total > 16;
  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const renderSegmentHandler = (step) => {
    let stateStyle = currentVariant.empty;

    if (isComplete || current >= total) {
      stateStyle = currentVariant.active;
    } else if (step <= current) {
      // Finished phases
      stateStyle = currentVariant.active;
    } else if (current > 0 && current < total && step === current + 1) {
      // Current ongoing progress (the one the user is currently on)
      stateStyle = currentVariant.ongoing;
    }

    return (
      <div
        key={step}
        className={cn(
          "h-2 flex-1 rounded-full transition-all duration-500 ease-in-out min-w-[10px]",
          stateStyle,
        )}
      />
    );
  };

  if (splitView) {
    const splitPoint = Math.ceil(total / 2);
    const firstRow = segments.slice(0, splitPoint);
    const secondRow = segments.slice(splitPoint);

    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        <div className="flex gap-2 w-full">
          {firstRow.map((step) => renderSegmentHandler(step))}
        </div>
        <div className="flex gap-2 w-full">
          {secondRow.map((step) => renderSegmentHandler(step))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-2 w-full", className)}>
      {segments.map((step) => renderSegmentHandler(step))}
    </div>
  );
}
