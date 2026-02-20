import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import { TrophyIcon, CaretRightIcon } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function ProfileAchievements({
  userAchievements = [],
  allAchievements = [],
}) {
  // Map user achievements to include full achievement details and filter for earned only
  const displayAchievements = allAchievements
    .map((achievement) => {
      const earned = userAchievements.find(
        (ua) =>
          ua?.achievementId &&
          (ua.achievementId === achievement._id ||
            ua.achievementId._id === achievement._id),
      );
      return {
        details: achievement,
        isUnlocked: !!earned,
      };
    })
    .filter((a) => a.isUnlocked); // Only show acquired achievements

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GradientIcon
            icon={TrophyIcon}
            variant="blue"
            size={40}
            weight="fill"
          />
          <h3 className="font-heading text-h3 text-Primary-900">
            Achievements
          </h3>
        </div>

        <Link to="/achievement">
          <Button
            variant="ghost"
            size="default"
            shadow="none"
            className="text-Primary-600 font-bold gap-1 hover:bg-Primary-50/50 hover:text-Primary-600 transition-all duration-300 ease-in-out"
            rightIcon={<CaretRightIcon weight="bold" />}
          >
            Lihat Semua
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
        {displayAchievements.length > 0 ? (
          <TooltipProvider delayDuration={100}>
            {displayAchievements.map((item, index) => (
              <Tooltip key={item.details._id}>
                <TooltipTrigger asChild>
                  <div
                    className="aspect-square bg-none rounded-xl p-2 flex items-center justify-center transition-all duration-300 cursor-pointer animate-in fade-in zoom-in-50 duration-500 fill-mode-both"
                    style={{ animationDelay: `${(index + 3) * 50}ms` }}
                  >
                    <img
                      src={item.details.imageUrl}
                      alt={item.details.name}
                      className="w-full h-full object-contain filter drop-shadow-blue-60"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[180px] text-center">
                  <p className="text-body-md font-bold text-Primary-900 mb-0.5">
                    {item.details.name}
                  </p>
                  <p className="text-body-sm text-Grayscale-600">
                    {item.details.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        ) : (
          <div className="col-span-full py-12 bg-white rounded-xl border border-dashed border-Grayscale-300 flex flex-col items-center justify-center opacity-50">
            <TrophyIcon
              size={48}
              weight="thin"
              className="text-Grayscale-600 mb-2"
            />
            <p className="text-body-md text-Grayscale-600 font-medium">
              Belum ada pencapaian yang terbuka
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
