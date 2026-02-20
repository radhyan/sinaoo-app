import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  StarIcon,
  BookBookmarkIcon,
  CheckCircleIcon,
  BooksIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { cn } from "@/lib/utils";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import Tag from "@/components/shared/ui/Tag";

export default function ModuleCard({
  title,
  category = "Modul",
  subcategory = "subcategory",
  points,
  currentStep = 0,
  totalSteps = 3,
  href,
  actionLabel = "Lanjutkan",
  className,
  isCompleted = false,
  secondaryActionLabel,
  secondaryHref,
}) {
  const navigate = useNavigate();

  return (
    <div className={cn("shadow-blue-60 rounded-xl", className)}>
      <div
        className={cn(
          "flex flex-col px-8 py-6 rounded-xl border min-h-[160px]",
          isCompleted
            ? "bg-lo-o border-Secondary-200"
            : "bg-lg-g border-Tertiary-50",
        )}
      >
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header: Title */}
          <div className="flex flex-col text-left mb-2">
            <div className="flex items-center mb-2 justify-between gap-2">
              <h5 className="font-heading text-h5 text-Secondary-900 truncate capitalize">
                {title}
              </h5>
            </div>

            {/* Tag-style Info */}
            <div className="flex flex-wrap gap-2">
              {/* Category Tag */}
              <Tag
                icon={BookBookmarkIcon}
                variant={isCompleted ? "default" : "module"}
                shadow={isCompleted ? "orange" : "green"}
              >
                {category}
              </Tag>

              {/* Sub-Category Tag */}
              <Tag
                icon={BooksIcon}
                variant={isCompleted ? "default" : "module"}
                shadow={isCompleted ? "orange" : "green"}
              >
                {subcategory}
              </Tag>

              {/* Points Tag */}
              <Tag
                icon={StarIcon}
                variant={isCompleted ? "default" : "module"}
                shadow={isCompleted ? "orange" : "green"}
              >
                {points}
              </Tag>

              {/* Completed Tag */}
              {isCompleted && (
                <Tag icon={CheckCircleIcon} variant="default" shadow="orange">
                  Selesai
                </Tag>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-body-sm text-Tertiary-900 mb-1 font-medium">
              <span className="text-body-md">Progress</span>
              <span className="text-body-md">
                {currentStep}/{totalSteps}
              </span>
            </div>
            <SegmentedProgressBar
              current={currentStep}
              total={totalSteps}
              variant="tertiary"
              isComplete={isCompleted}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            size="default"
            fullWidth={!secondaryActionLabel}
            className={secondaryActionLabel ? "flex-1" : "w-full"}
            variant={isCompleted ? "default" : "default"}
            shadow="orange"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Navigating to:", href);
              navigate(href || "#");
            }}
          >
            {actionLabel}
          </Button>
          {secondaryActionLabel && (
            <Button
              size="default"
              variant="tertiary"
              className="flex-1"
              shadow="orange"
              onClick={(e) => {
                e.stopPropagation();
                navigate(secondaryHref || "#");
              }}
            >
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ModuleCardSkeleton({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col bg-lg-g px-8 py-6 rounded-xl border border-Tertiary-50 shadow-blue-60 min-h-[160px]",
        className,
      )}
    >
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Skeleton */}
        <div className="flex flex-col text-left mb-2">
          <Skeleton className="h-7 w-3/4 mb-4 rounded-md" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>

        {/* Progress Skeleton */}
        <div className="mb-2 mt-4">
          <div className="flex justify-between mb-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-10 rounded-md" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      </div>

      {/* Action Button Skeleton */}
      <div className="mt-auto pt-4">
        <Skeleton className="h-10 w-full rounded-sm" />
      </div>
    </div>
  );
}
