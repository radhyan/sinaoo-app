import React from "react";
import { StarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getUserAvatar } from "@/lib/avatar";
import { Skeleton } from "@/components/shared/ui/Skeleton";

export default function RankCard({
  rank,
  userProfile,
  variant = "default",
  className,
}) {
  const isHighlight = variant === "highlight";

  return (
    <div className={cn("rounded-lg", className)}>
      <div
        className={cn(
          "flex items-center gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-md md:rounded-lg lg:rounded-lg transition-all",
          isHighlight
            ? "bg-db-b text-white border border-Primary-50 shadow-blue-60"
            : "bg-transparent border border-Primary-50 hover:bg-Grayscale-50 mb-2 md:mb-4",
        )}
      >
        {/* Rank Number */}
        <h4
          className={cn(
            "w-6 md:w-12 !text-body-md md:!text-h4 font-heading text-left shrink-0 leading-none",
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
              isHighlight
                ? "w-10 h-10 md:w-16 md:h-16 scale-110"
                : "w-8 h-8 md:w-12 md:h-12",
            )}
          />
        </div>

        {/* User Info */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          <p
            className={cn(
              "!text-body-sm md:!text-body-xl font-bold w-full text-left truncate leading-tight",
              isHighlight ? "text-Primary-50" : "text-Grayscale-900",
            )}
          >
            {userProfile?.name || userProfile?.username}
          </p>
          <span
            className={cn(
              "!text-[12px] lg:!text-body-l w-full text-left truncate leading-tight",
              isHighlight ? "text-Primary-50/80" : "text-Grayscale-500",
            )}
          >
            {userProfile?.title?.title}
          </span>
        </div>

        {/* Points */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0 ml-1 md:ml-4">
          <span
            className={cn(
              "!text-body-sm md:!text-body-l font-bold",
              isHighlight ? "text-Grayscale-50" : "text-Primary-900",
            )}
          >
            {(userProfile?.points || 0).toLocaleString("id-ID")}
          </span>
          <StarIcon
            weight="fill"
            size={14}
            className={cn(
              "md:size-5",
              isHighlight ? "text-Secondary-300" : "text-Secondary-400",
            )}
          />
        </div>
      </div>
    </div>
  );
}
