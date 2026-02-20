import React from "react";
import { StarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getUserAvatar } from "@/lib/avatar";
import { Skeleton } from "@/components/shared/ui/Skeleton";

const PodiumColumn = ({ rank, user, height, color, labelColor, delay = 0 }) => {
  return (
    <div
      className="flex flex-col items-center group flex-1 h-full justify-end pt-10 animate-in fade-in slide-in-from-bottom-full duration-1000 fill-mode-both"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* User Info Above Column */}
      <div className="flex flex-col items-center mb-4 transition-transform duration-500 group-hover:-translate-y-2">
        {/* Avatar with Ring */}
        <div
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 shadow-lg",
            rank === 1 ? "scale-110" : "border-none",
          )}
        >
          <img
            src={getUserAvatar(user)}
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="font-bold text-body-l text-white truncate max-w-[120px]">
          {user?.name || user?.username || "---"}
        </p>
        <p className="text-body-md text-Primary-50 truncate max-w-[100px] mb-1">
          {user?.title?.title || "---"}
        </p>

        <div className="flex items-center align-center gap-1 bg-Primary-50/30 px-3 py-1 rounded-full backdrop-blur-sm">
          <span className="text-body-sm font-medium text-white">
            {(user?.points || 0).toLocaleString()}
          </span>
          <StarIcon
            weight="fill"
            size={18}
            className="text-Secondary-300 pb-0.5"
          />
        </div>
      </div>

      {/* The Column */}
      <div
        className={cn(
          "w-full rounded-t-xl flex items-start justify-center pt-6 shadow-inner relative overflow-hidden",
          color,
        )}
        style={{ height }}
      >
        <span className={cn("!text-h1 font-heading opacity-80", labelColor)}>
          {rank}
        </span>

        {/* Subtle shine effect on columns */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default function ChampionsPodium({ topThree = [] }) {
  const [first, second, third] = [topThree[0], topThree[1], topThree[2]];
  const baseHeight = "calc(100% - 170px)";

  return (
    <div className="bg-db-b rounded-xl pt-5 pb-0 px-8 flex flex-col h-full border border-Primary-50 overflow-hidden shadow-blue-60">
      <div className="flex items-end gap-2 md:gap-4 h-full overflow-hidden">
        {/* Rank 2 - Left */}
        <PodiumColumn
          rank={2}
          user={second}
          height={`calc(${baseHeight} * 2/3)`}
          color="bg-dg-g"
          labelColor="text-white opacity-50"
          delay={200}
        />

        {/* Rank 1 - Center */}
        <PodiumColumn
          rank={1}
          user={first}
          height={baseHeight}
          color="bg-o-do"
          labelColor="text-white opacity-50"
          delay={0}
        />

        {/* Rank 3 - Right */}
        <PodiumColumn
          rank={3}
          user={third}
          height={`calc(${baseHeight} * 1/2)`}
          color="bg-p-lp"
          labelColor="text-white opacity-50"
          delay={400}
        />
      </div>
    </div>
  );
}

export function ChampionsPodiumSkeleton() {
  return (
    <div className="bg-db-b rounded-xl pt-5 pb-0 px-8 flex flex-col h-full shadow-blue-60 border border-Primary-50 overflow-hidden min-h-[400px]">
      <div className="flex items-end gap-2 md:gap-4 h-full overflow-hidden">
        {/* Rank 2 */}
        <div className="flex flex-col items-center flex-1 h-full justify-end pt-10">
          <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3" />
          <Skeleton className="h-4 w-20 rounded mb-1" />
          <Skeleton className="h-3 w-16 rounded mb-3" />
          <Skeleton className="h-7 w-16 rounded-full mb-4" />
          <Skeleton className="w-full h-32 rounded-t-xl" />
        </div>
        {/* Rank 1 */}
        <div className="flex flex-col items-center flex-1 h-full justify-end pt-10">
          <Skeleton className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-3 scale-110" />
          <Skeleton className="h-5 w-24 rounded mb-1" />
          <Skeleton className="h-4 w-20 rounded mb-3" />
          <Skeleton className="h-8 w-20 rounded-full mb-4" />
          <Skeleton className="w-full h-48 rounded-t-xl" />
        </div>
        {/* Rank 3 */}
        <div className="flex flex-col items-center flex-1 h-full justify-end pt-10">
          <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3" />
          <Skeleton className="h-4 w-20 rounded mb-1" />
          <Skeleton className="h-3 w-16 rounded mb-3" />
          <Skeleton className="h-7 w-16 rounded-full mb-4" />
          <Skeleton className="w-full h-24 rounded-t-xl" />
        </div>
      </div>
    </div>
  );
}
