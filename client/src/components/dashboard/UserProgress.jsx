import {
  BookBookmarkIcon,
  BookOpenIcon,
  TrophyIcon,
  RankingIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Skeleton } from "@/components/shared/ui/Skeleton";

export default function UserProgress({
  completedCourses = 0,
  totalCourses = 6,
  completedModules = 0,
  completedAchievements = 0,
  totalAchievements = 9,
  leaderboardRank = "-",
  className,
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 w-full", className)}>
      {[
        {
          label: "Course selesai",
          value: `${completedCourses}/${totalCourses}`,
          icon: BookBookmarkIcon,
        },
        {
          label: "Modul selesai",
          value: completedModules,
          icon: BookOpenIcon,
        },
        {
          label: "Achievement",
          value: `${completedAchievements}/${totalAchievements}`,
          icon: TrophyIcon,
        },
        {
          label: "Peringkat",
          value: `#${leaderboardRank}`,
          icon: RankingIcon,
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-default h-full justify-center p-3 rounded-lg bg-db-b border border-Primary-50 shadow-blue-60"
        >
          <span className="text-body-md text-Grayscale-50 mb-1 text-center">
            {stat.label}
          </span>
          <div className="flex align-center items-center gap-3">
            <div className="shrink-0 flex items-center justify-center drop-shadow-deep-blue-60">
              <GradientIcon icon={stat.icon} variant="lightBlue" size={32} />
            </div>
            <span className="text-h4 font-bold text-Primary-50">
              {typeof stat.value === "string" && stat.value.includes("/") ? (
                <>
                  {stat.value.split("/")[0]}
                  <span className="text-body-l text-Primary-50/60 font-medium">
                    /{stat.value.split("/")[1]}
                  </span>
                </>
              ) : (
                stat.value
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function UserProgressSkeleton({ className }) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 w-full", className)}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center p-3 rounded-lg bg-db-b shadow-blue-60 border border-Primary-50 min-h-[100px]"
        >
          <Skeleton className="h-4 w-20 rounded-md mb-2" />
          <div className="flex align-center items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-12 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
