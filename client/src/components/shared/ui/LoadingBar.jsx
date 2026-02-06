import React from "react";
import { cn } from "@/lib/utils";

export default function LoadingBar({ className, variant = "blue" }) {
  const variants = {
    blue: "bg-Primary-500 shadow-blue-60",
    orange: "bg-Secondary-500 shadow-orange-60",
    green: "bg-dg-g shadow-green-60",
  };

  return (
    <div
      className={cn(
        "w-full h-1.5 bg-Grayscale-100 rounded-full overflow-hidden relative",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-[40%] rounded-full animate-loading-bar",
          variants[variant] || variants.blue,
        )}
      />
    </div>
  );
}
