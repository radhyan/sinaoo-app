import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  CircleIcon,
  PlayCircleIcon,
  QuestionIcon,
  LockKeyIcon,
  ReadCvLogoIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ExamIcon,
} from "@phosphor-icons/react";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import { Button } from "@/components/shared/ui/Button";
import ModuleExitButton from "./ModuleExitButton";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const StepIcon = ({ type, status, className }) => {
  const commonProps = {
    size: 24,
    className: className,
    weight: status === "active" ? "fill" : "fill",
  };

  if (status === "locked") return <LockKeyIcon {...commonProps} />;
  if (status === "completed" && type !== "result")
    return <CheckCircleIcon {...commonProps} weight="fill" />; // Keep fill for completed

  switch (type) {
    case "video":
      return <PlayCircleIcon {...commonProps} />;
    case "reading":
      return <ReadCvLogoIcon {...commonProps} />;
    case "quiz":
      return <QuestionIcon {...commonProps} />;
    case "result":
      return <ExamIcon {...commonProps} />;
    default:
      return <CircleIcon {...commonProps} />;
  }
};

export default function ModuleSidebar({
  module,
  currentStepId,
  onStepClick,
  isOpen = true,
  onToggle,
  onExit,
  isModuleCompleted: isModuleCompletedProp,
}) {
  const [isTitleOverflowing, setIsTitleOverflowing] = useState(false);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const totalSteps = module.steps.length;
  const completedSteps = module.steps.filter(
    (s) => s.status === "completed",
  ).length;
  const activeStepIndex = module.steps.findIndex((s) => s.status === "active");
  const currentStepForBar =
    activeStepIndex !== -1 ? activeStepIndex + 1 : completedSteps + 1;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);
  const isModuleCompleted =
    completedSteps === totalSteps || isModuleCompletedProp;

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current && containerRef.current) {
        // Measure first span for the true width of one title
        const titleSpan = titleRef.current.querySelector("span");
        if (!titleSpan) return;

        const titleWidth = titleSpan.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        const overflow = titleWidth > containerWidth;

        setIsTitleOverflowing((prev) => {
          if (prev !== overflow) return overflow;
          return prev;
        });

        if (overflow) {
          const gap = 40; // Correspond to pl-10
          const dist = titleWidth + gap;
          titleRef.current.style.setProperty("--scroll-dist", `-${dist}px`);
          // Adjust duration based on distance for consistent speed (e.g. 50px per second)
          const duration = Math.max(8, dist / 50);
          titleRef.current.style.setProperty(
            "--scroll-duration",
            `${duration}s`,
          );
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => checkOverflow());

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial check
    checkOverflow();

    return () => resizeObserver.disconnect();
  }, [module.title, isOpen]);

  return (
    <div
      className={cn(
        "flex flex-col h-full items-start gap-4 px-0 py-5 rounded-lg overflow-hidden border-[0.5px] border-solid border-Primary-100 bg-w-lb shadow-blue-60 shrink-0 transition-all duration-300",
        isOpen ? "w-full" : "w-full items-center",
      )}
    >
      <style>{`
        @keyframes running-text {
          from { transform: translateX(0); }
          to { transform: translateX(var(--scroll-dist)); }
        }
        .animate-running-text {
          animation: running-text var(--scroll-duration, 8s) linear infinite;
        }
        .animate-running-text:hover {
          animation-play-state: paused;
        }
      `}</style>

      {isOpen ? (
        <div className="w-full px-5 flex flex-col gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="flex items-center justify-between gap-2 w-full h-10">
            {/* Title detection container */}
            <div
              className="flex-1 min-w-0 overflow-hidden relative h-full flex items-center"
              ref={containerRef}
            >
              <div
                className={cn(
                  "font-heading text-h5 text-Grayscale-900 whitespace-nowrap",
                  isTitleOverflowing ? "flex animate-running-text" : "truncate",
                )}
                ref={titleRef}
              >
                <span>{module.title}</span>
                {isTitleOverflowing && (
                  <span className="pl-10">{module.title}</span>
                )}
              </div>
              {/* Fade Overlay for Running Text */}
              {isTitleOverflowing && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-w-lb to-transparent pointer-events-none z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-w-lb to-transparent pointer-events-none z-10" />
                </>
              )}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggle}
                  className="text-Primary-600 hover:bg-Primary-50 shrink-0 rounded-xsm hover:shadow-none shadow-none border-none"
                >
                  <SidebarCloseIcon size={28} weight="bold" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tutup Sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <p className="text-body-sm text-Grayscale-500 text-left">
              {progressPercent}% Selesai
            </p>
            <div className="mt-2">
              <SegmentedProgressBar
                current={completedSteps}
                total={totalSteps}
                variant="tertiary"
                className="gap-1"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center px-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="text-Primary-600 hover:bg-Primary-50 shrink-0 rounded-xsm hover:shadow-none shadow-none border-none"
              >
                <SidebarOpenIcon size={28} weight="bold" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Buka Sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}

      <div className="flex-1 overflow-y-auto custom-scrollbar p-0 w-full flex flex-col">
        <div className="flex flex-col gap-1 w-full flex-1">
          {module.steps.map((step) => {
            const isActive = step.id === currentStepId;
            const isLocked = step.status === "locked" && !isModuleCompleted;
            const isCompleted =
              step.status === "completed" || isModuleCompleted;

            // Determine icon color
            let iconColorClass =
              "text-Grayscale-600 group-hover:text-Grayscale-800";
            if (isActive) iconColorClass = "text-white";
            else if (isCompleted) iconColorClass = "text-Success-500";
            else if (isLocked) iconColorClass = "text-Grayscale-400";

            return (
              <button
                key={step.id}
                onClick={() => !isLocked && onStepClick(step.id)}
                disabled={isLocked}
                title={!isOpen ? step.title : undefined}
                className={cn(
                  "relative flex items-center transition-all duration-[1000ms] ease-in-out group",
                  isOpen ? "px-4 py-2 w-full" : "justify-center py-2 w-full",
                  isLocked && "cursor-not-allowed opacity-60",
                )}
              >
                {isOpen && (
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-r-xsm transition-transform duration-[1000ms] ease-in-out transform",
                      isActive
                        ? "bg-db-b translate-x-0"
                        : "bg-Grayscale-800 -translate-x-full group-hover:translate-x-0",
                    )}
                  />
                )}

                <span
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-xsm transition-all duration-[1000ms] ease-in-out shrink-0",
                    isActive
                      ? "bg-db-b drop-shadow-blue-60"
                      : "bg-transparent group-hover:drop-shadow-blue-60",
                  )}
                >
                  <StepIcon
                    type={step.type}
                    status={step.status}
                    className={cn(
                      "transition-colors duration-[1000ms] ease-in-out",
                      iconColorClass,
                    )}
                  />
                </span>

                {isOpen && (
                  <span
                    className={cn(
                      "ml-2 transition-all duration-[1000ms] ease-in-out font-bold text-left line-clamp-2 animate-in fade-in slide-in-from-left-2",
                      isActive
                        ? "text-Primary-500"
                        : "text-Primary-900 group-hover:text-Grayscale-800",
                    )}
                  >
                    {step.title}
                  </span>
                )}
              </button>
            );
          })}

          {/* Hasil Quiz Step - Integrated into same list */}
          <button
            onClick={() => isModuleCompleted && onStepClick("result")}
            disabled={!isModuleCompleted}
            title={!isOpen ? "Hasil Quiz" : undefined}
            className={cn(
              "relative flex items-center transition-all duration-[1000ms] ease-in-out group",
              isOpen ? "px-4 py-2 w-full" : "justify-center py-2 w-full",
              !isModuleCompleted && "cursor-not-allowed opacity-60",
            )}
          >
            {isOpen && (
              <span
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-r-xsm transition-transform duration-[1000ms] ease-in-out transform",
                  currentStepId === "result"
                    ? "bg-db-b translate-x-0"
                    : "bg-Grayscale-900 -translate-x-full group-hover:translate-x-0",
                )}
              />
            )}

            <span
              className={cn(
                "inline-flex items-center justify-center w-10 h-10 rounded-xsm transition-all duration-[1000ms] ease-in-out shrink-0",
                currentStepId === "result"
                  ? "bg-db-b drop-shadow-blue-60"
                  : "bg-transparent group-hover:drop-shadow-blue-60",
              )}
            >
              <StepIcon
                type="result"
                status={
                  isModuleCompleted
                    ? currentStepId === "result"
                      ? "active"
                      : "completed"
                    : "locked"
                }
                className={cn(
                  "transition-colors duration-[1000ms] ease-in-out",
                  currentStepId === "result"
                    ? "text-white"
                    : isModuleCompleted
                      ? "text-Primary-600"
                      : "text-Primary-900",
                )}
              />
            </span>

            {isOpen && (
              <span
                className={cn(
                  "ml-2 transition-all duration-[1000ms] ease-in-out font-bold text-left line-clamp-2 animate-in fade-in slide-in-from-left-2",
                  currentStepId === "result"
                    ? "text-Primary-500"
                    : "text-Primary-900 group-hover:text-Grayscale-800",
                )}
              >
                Hasil Quiz
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "w-full mt-auto pt-4",
          isOpen ? "px-4" : "px-2 flex justify-center",
        )}
      >
        <ModuleExitButton isOpen={isOpen} onExit={onExit} />
      </div>
    </div>
  );
}
