import React from "react";
import { cn } from "@/lib/utils";

// Define the gradient colors manually to match your Tailwind config
// (SVG needs exact hex codes, it can't read 'bg-b-lb' classes directly)
const gradients = {
  blue: {
    id: "grad-blue",
    start: "#1557DC", // 13.41%
    end: "#98B9FD", // 100%
    angle: 135,
  },
  lightBlue: {
    id: "grad-light-blue",
    start: "#98B9FD", // 13.41%
    end: "#fcfcfc", // 100%
    angle: 135,
  },
  darkBlue: {
    id: "grad-dark-blue",
    start: "#1445A6", // 13.41%
    end: "#6696F8", // 100%
    angle: 135,
  },
  orange: {
    id: "grad-orange",
    start: "#E88B11",
    end: "#F3C487",
    angle: 133,
  },
  green: {
    id: "grad-green",
    start: "#2E4938",
    end: "#73B18A",
    angle: 133,
  },
  pink: {
    id: "grad-pink",
    start: "#EA395B",
    end: "#EF8A9D",
    angle: 241,
  },
};

export default function GradientIcon({
  icon: Icon,
  variant = "blue",
  size = 32,
  weight = "fill",
  className,
}) {
  const grad = gradients[variant] || gradients.blue;

  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      {/* 1. Define the Gradient (Hidden) */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id={grad.id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={grad.start} />
            <stop offset="100%" stopColor={grad.end} />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Render Icon using the Gradient ID as color */}
      <Icon
        size={size}
        weight={weight}
        color={`url(#${grad.id})`} // This connects the icon to the gradient
        style={{ fill: `url(#${grad.id})` }} // Extra backup for some browsers
      />
    </span>
  );
}
