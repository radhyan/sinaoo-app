import React from "react";
import { StarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import Tag from "@/components/shared/ui/Tag";
import { Skeleton } from "@/components/shared/ui/Skeleton";

const AchievementCard = ({
  achievement,
  isUnlocked,
  currentProgress,
  targetProgress,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-6 md:pr-8 rounded-lg border transition-all duration-300 h-full min-h-[180px]",
        isUnlocked
          ? "bg-lo-o border-Secondary-200 shadow-orange-60"
          : "bg-Grayscale-100 border-Grayscale-200 shadow-sm",
      )}
    >
      {/* Left: Badge Illustration Placeholder */}
      <div className="shrink-0 w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
        <img
          src={achievement.imageUrl}
          alt={achievement.name}
          className={cn(
            "w-full h-full object-contain drop-shadow-md",
            !isUnlocked && "grayscale brightness-90 opacity-50",
          )}
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 flex justify-center items-start flex-col min-w-0 w-full">
        <div className="flex justify-between items-center md:items-start w-full gap-2">
          <h5
            className={cn(
              "font-heading text-h5 leading-tight truncate flex-1 text-left",
              isUnlocked ? "text-Secondary-900" : "text-Grayscale-800",
            )}
          >
            {achievement.name}
          </h5>

          {/* Points Tag */}
          <Tag
            icon={StarIcon}
            variant={isUnlocked ? "default" : "locked"}
            shadow={isUnlocked ? "orange" : "btnDefault"}
            className="shrink-0"
          >
            {achievement.pointsValue}
          </Tag>
        </div>

        <p
          className={cn(
            "text-body-sm md:text-body-md mb-3 text-left w-full mt-1",
            isUnlocked ? "text-Secondary-900" : "text-Grayscale-500",
          )}
        >
          {achievement.description}
        </p>

        {/* Progress Section */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1">
            <SegmentedProgressBar
              current={currentProgress}
              total={targetProgress}
              variant="achievement"
              isComplete={isUnlocked}
            />
          </div>
          <span
            className={cn(
              "text-body-md shrink-0",
              isUnlocked ? "text-Secondary-900" : "text-Grayscale-700",
            )}
          >
            {currentProgress}/{targetProgress}
          </span>
        </div>
      </div>
    </div>
  );
};

export function AchievementCardSkeleton({ className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-6 p-4 pr-8 rounded-xl border bg-Grayscale-100 border-Grayscale-200 shadow-sm h-full min-h-[180px]",
        className,
      )}
    >
      {/* Left: Badge Skeleton */}
      <Skeleton className="shrink-0 w-40 h-40 rounded-lg" />

      {/* Right: Content Skeleton */}
      <div className="flex-1 flex justify-center items-start flex-col min-w-0">
        <div className="flex justify-between items-start w-full gap-2 mb-2">
          <Skeleton className="h-7 flex-1 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>

        <Skeleton className="h-4 w-full rounded-md mb-2" />
        <Skeleton className="h-4 w-3/4 rounded-md mb-4" />

        {/* Progress Section Skeleton */}
        <div className="w-full flex items-center gap-3">
          <Skeleton className="h-2 flex-1 rounded-full" />
          <Skeleton className="h-4 w-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
