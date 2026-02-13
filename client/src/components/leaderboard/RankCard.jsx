import React from "react";
import { StarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getUserAvatar } from "@/lib/avatar";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import InteractiveShadow from "@/components/shared/ui/InteractiveShadow";

export default function RankCard({
  rank,
  userProfile,
  variant = "default",
  className,
}) {
  const isHighlight = variant === "highlight";

  return (
    <InteractiveShadow className={className} intensity={isHighlight ? 1.2 : 1}>
      <div
        className={cn(
          "flex items-center gap-4 px-6 py-4 rounded-lg transition-all",
          isHighlight
            ? "bg-db-b text-white border border-Primary-50"
            : "bg-transparent border border-Primary-50 hover:bg-Grayscale-50 mb-4",
        )}
      >
        {/* Rank Number */}
        <h4
          className={cn(
            "w-12 !text-h4 font-heading text-left shrink-0 leading-none",
            isHighlight ? "text-Primary-50" : "text-Primary-900",
          )}
        >
          #{rank}
        </h4>

        {/* Avatar */}
        <div className="shrink-0 rounded-full overflow-hidden shadow-deep-blue-60">
          <img
            src={getUserAvatar(userProfile)}
            alt={userProfile?.name || userProfile?.username}
            className={cn(
              "w-full h-full object-cover",
              isHighlight ? "w-16 h-16scale-110" : "w-12 h-12",
            )}
          />
        </div>

        {/* User Info */}
        <div className="flex-1 flex flex-col items-start">
          <p
            className={cn(
              "!text-body-xl font-bold text-Primary-50 w-full text-left",
              isHighlight
                ? "text-Primary-50"
                : "!text-body-l text-Grayscale-900",
            )}
          >
            {userProfile?.name || userProfile?.username}
          </p>
          <span
            className={cn(
              "!text-body-l w-full text-left",
              isHighlight
                ? "text-Primary-50"
                : "!text-body-md text-Grayscale-500",
            )}
          >
            {userProfile?.title?.title}
          </span>
        </div>

        {/* Points */}
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <span
            className={cn(
              "!text-body-l font-bold",
              isHighlight ? "text-Grayscale-50" : "text-Primary-900",
            )}
          >
            {(userProfile?.points || 0).toLocaleString("id-ID")}
          </span>
          <StarIcon
            weight="fill"
            size={24}
            className={
              isHighlight ? "text-Secondary-300" : "text-Secondary-400"
            }
          />
        </div>
      </div>
    </InteractiveShadow>
  );
}

export function RankCardSkeleton({ variant = "default", className }) {
  const isHighlight = variant === "highlight";
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-6 py-4 rounded-lg",
        isHighlight
          ? "bg-db-b shadow-blue-60 border border-Primary-50"
          : "bg-transparent border border-Primary-50 mb-4",
        className,
      )}
    >
      <Skeleton className="w-12 h-8 rounded-md shrink-0" />
      <Skeleton
        className={cn(
          "shrink-0 rounded-full",
          isHighlight ? "w-16 h-16" : "w-12 h-12",
        )}
      />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-32 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-4">
        <Skeleton className="h-6 w-12 rounded-md" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  );
}
