import React from "react";
import { StarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getUserAvatar } from "@/lib/avatar";
import { Skeleton } from "@/components/shared/ui/Skeleton";

const PodiumColumn = ({ rank, user, height, color, labelColor, delay = 0 }) => {
  return (
    <div
      className="flex flex-col items-center group flex-1 basis-0 min-w-[90px] md:min-w-0 h-full justify-end pt-10 animate-in fade-in slide-in-from-bottom-full duration-1000 fill-mode-both"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* User Info Above Column */}
      <div className="flex flex-col items-center mb-4 transition-transform duration-500 group-hover:-translate-y-2">
        {/* Avatar with Ring */}
        <div
          className={cn(
            "aspect-square w-10 md:w-16 xl:w-24 rounded-full overflow-hidden mb-2 md:mb-3 shadow-lg shrink-0 border-2 border-white/10",
            rank === 1 ? "scale-110 border-white/20" : "",
          )}
        >
          <img
            src={getUserAvatar(user)}
            alt={user?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="font-bold text-body-sm md:text-body-md lg:text-body-l text-white truncate w-full px-1 text-center">
          {user?.name || user?.username || "---"}
        </p>
        <p className="text-[10px] md:text-body-md lg:text-body-l text-Primary-50 truncate w-full px-1 mb-1 text-center opacity-80">
          {user?.title?.title || "---"}
        </p>

        <div className="flex items-center align-center gap-0.5 md:gap-1 bg-Primary-50/30 px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm shrink-0">
          <span className="text-[10px] md:text-body-sm font-medium text-white">
            {(user?.points || 0).toLocaleString()}
          </span>
          <StarIcon
            weight="fill"
            size={14}
            className="text-Secondary-300 md:size-[18px]"
          />
        </div>
      </div>

      <div
        className={cn(
          "w-full rounded-t-lg xl:rounded-t-xl flex items-start justify-center pt-4 md:pt-6 shadow-inner relative overflow-hidden",
          color,
        )}
        style={{ height }}
      >
        <span
          className={cn(
            "!text-h2 md:!text-h1 font-heading opacity-80",
            labelColor,
          )}
        >
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
  return (
    <div className="bg-db-b rounded-lg xl:rounded-xl pt-4 md:pt-5 pb-0 px-3 md:px-8 flex flex-col h-full border border-Primary-50 overflow-hidden shadow-blue-60">
      <div className="flex items-end gap-2 md:gap-4 h-full overflow-hidden">
        {/* Rank 2 - Left */}
        <PodiumColumn
          rank={2}
          user={second}
          height="calc((100% - 140px) * 0.65)"
          color="bg-dg-g"
          labelColor="text-white opacity-50"
          delay={200}
        />

        {/* Rank 1 - Center */}
        <PodiumColumn
          rank={1}
          user={first}
          height="calc(100% - 140px)"
          color="bg-o-do"
          labelColor="text-white opacity-50"
          delay={0}
        />

        {/* Rank 3 - Right */}
        <PodiumColumn
          rank={3}
          user={third}
          height="calc((100% - 140px) * 0.45)"
          color="bg-p-lp"
          labelColor="text-white opacity-50"
          delay={400}
        />
      </div>
    </div>
  );
}
