import React from "react";
import { cn } from "@/lib/utils";

const Tag = ({
  children,
  label,
  className,
  variant = "default",
  icon: Icon,
  shadow,
  ...props
}) => {
  const variants = {
    default: "bg-Secondary-600 text-Secondary-50 border-Secondary-200",
    module: "bg-Tertiary-600 text-Tertiary-50 border-Tertiary-300",
    locked: "bg-Grayscale-500 text-Grayscale-50 border-Grayscale-300",
  };

  const shadows = {
    green: "shadow-green-60",
    orange: "shadow-orange-60",
    blue: "shadow-blue-60",
    success: "shadow-success-60",
    warning: "shadow-warning-60",
    error: "shadow-error-60",
    none: "shadow-none",
    btnDefault: "shadow-btn-default",
    btnHover: "shadow-btn-hover",
  };

  // Default shadow for 'default' variant if not specified
  const resolvedShadow =
    shadow && shadows[shadow]
      ? shadows[shadow]
      : variant === "default"
      ? "shadow-green-60"
      : "";

  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-md border-[0.5px] w-fit",
        variants[variant],
        resolvedShadow,
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} weight="fill" className="text-inherit" />}
      <span className="text-body-sm font-medium">{label || children}</span>
    </div>
  );
};

export default Tag;
