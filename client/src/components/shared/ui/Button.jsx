import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 h-auto whitespace-nowrap text-body-md font-semibold ring-offset-background transition-colors focus-visible:outline-Primary-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "relative overflow-hidden bg-b-lb text-Grayscale-50 border border-solid border-Primary-200 active:translate-y-[1px] active:shadow-none transition-all after:absolute after:inset-0 after:bg-Primary-50/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ease-linear",
        destructive:
          "bg-[#ffffff4c] text-Error-200 border border-solid border-Error-200 hover:bg-Error-100/60 hover:text-Grayscale-50 hover:border-Error-200 transition-all active:translate-y-[1px] active:shadow-none",
        outline:
          "border border-input border-Primary-700 text-Primary-700 bg-Grayscale-50 hover:bg-Primary-50/50",
        secondary:
          "relative overflow-hidden bg-o-do text-Secondary-900 font-bold border border-solid border-Secondary-300 active:translate-y-[1px] active:shadow-none transition-all after:absolute after:inset-0 after:bg-Secondary-50/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ease-linear",
        tertiary:
          "relative overflow-hidden bg-dg-g text-Tertiary-50 font-semibold border border-solid border-Tertiary-300 active:translate-y-[1px] active:shadow-none transition-all after:absolute after:inset-0 after:bg-Tertiary-50/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ease-linear",
        exitAlert:
          "text-Error-200 hover:text-Error-400 font-semibold shadow-none hover:shadow-none hover:bg-Error-50/20 border-none",
        ghost: "text-Primary-50 hover:bg-Primary-50/20 ",
        ghostDark: "text-Primary-900 hover:bg-Primary-50/60",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        xl: "px-10 py-3",
        icon: "h-10 w-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      shadow: {
        none: "shadow-none hover:shadow-none",
        default: "shadow-btn-default hover:shadow-btn-hover",
        blue: "shadow-blue-60",
        deepBlue: "shadow-blue-glow",
        orange: "shadow-orange-60",
        green: "shadow-green-60",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "sm",
      shadow: "default",
    },
  },
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      rounded,
      shadow,
      fullWidth = false,
      iconOnly = false,
      asChild = false,
      leftIcon,
      rightIcon,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const LeftIcon = leftIcon;
    const RightIcon = rightIcon;
    const Comp = asChild ? Slot : "button";
    const resolvedSize = iconOnly && !size ? "icon" : size;
    const classNameArg = cn(
      className,
      fullWidth ? "w-full" : "",
      iconOnly ? "p-0" : "",
    );

    // 3. LOGIC: Which variants should have the ICON shadow?
    // User requested to remove icon shadow.
    const hasIconShadow = false;

    // 4. CSS for the icon wrapper (uses drop-shadow for SVG contours)
    const iconClass = "";

    // Helper to render icon correctly whether it's an element or a component reference
    const renderIcon = (icon) => {
      if (!icon) return null;
      if (React.isValidElement(icon)) return icon;

      // If it's a component (function or object like forwardRef)
      const IconComp = icon;
      // We pass weight="bold" as a default that Phosphor icons will use.
      // Lucide icons will ignore it.
      return <IconComp weight="bold" />;
    };

    return (
      <Comp
        // pass resolvedSize into cva
        className={cn(
          buttonVariants({
            variant,
            size: resolvedSize,
            rounded,
            shadow,
            className: classNameArg,
          }),
        )}
        // ensure accessible name for icon-only buttons
        {...(iconOnly
          ? {
              role: "button",
              "aria-label": ariaLabel || props.title || props["aria-label"],
            }
          : {})}
        ref={ref}
        {...props}
      >
        {/* Icon-only mode: render a single centered icon (prefers leftIcon then rightIcon) */}
        <span
          className={cn(
            "relative z-10 flex w-full h-full items-center justify-center gap-2",
            fullWidth ? "w-full" : "",
          )}
        >
          {iconOnly ? (
            <span
              className={`inline-flex items-center justify-center ${iconClass}`}
            >
              {renderIcon(leftIcon || rightIcon)}
            </span>
          ) : asChild ? (
            props.children
          ) : (
            <>
              {/* 5. Render Left Icon if it exists */}
              {leftIcon && (
                <span
                  className={`inline-flex justify-center shrink-0 ${iconClass}`}
                >
                  {renderIcon(leftIcon)}
                </span>
              )}

              <Slottable>{props.children}</Slottable>

              {/* 6. Render Right Icon if it exists */}
              {rightIcon && (
                <span
                  className={`inline-flex justify-center shrink-0 ${iconClass}`}
                >
                  {renderIcon(rightIcon)}
                </span>
              )}
            </>
          )}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
