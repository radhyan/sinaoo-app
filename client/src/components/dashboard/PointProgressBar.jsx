import { ArrowRightIcon, StarIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import { getLevelInfo } from "@/lib/title";
import { useUser } from "@/context/UserContext";
import { getAvatar } from "@/lib/avatar";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { cn } from "@/lib/utils";
import InteractiveShadow from "@/components/shared/ui/InteractiveShadow";

export default function PointProgressBar({
  currentPoints = 0,
  name = "Radhy",
  avatarId = 4,
  avatarSrc, // New prop
}) {
  const { titles } = useUser();
  const { title, remaining, percentage, isMax, image } = getLevelInfo(
    currentPoints,
    titles,
  );

  // Use provided avatarSrc, or fallback to avatarId mapping
  const finalAvatarSrc = avatarSrc || getAvatar(avatarId);

  return (
    <InteractiveShadow>
      <div className="w-full rounded-xl p-6 bg-db-b relative overflow-hidden border border-Primary-50">
        {/* HEADER */}
        <div className="flex items-top justify-between mb-3">
          <div className="flex items-center gap-4">
            <img
              src={finalAvatarSrc}
              alt={name}
              className="h-16 w-16 rounded-full shadow-deep-blue-60 object-cover"
            />

            <div className="text-left text-Primary-50">
              <h3 className="text-body-xl font-bold">{name}</h3>
              <p className="text-body-l">{title}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="default"
            shadow="none"
            rightIcon={<ArrowRightIcon weight="bold" />}
          >
            <Link to="/profile">Profil</Link>
          </Button>
        </div>

        {/* PROGRESS BAR*/}
        <div className="px-2 mb-1 h-6 flex items-center gap-2">
          <div className="shrink-0">
            <GradientIcon
              icon={StarIcon}
              variant="orange"
              size={28}
              className="drop-shadow-deep-blue-60"
            />
          </div>

          <div className="h-2 mt-1 w-full rounded-full bg-Primary-900/60 shadow-deep-blue-60 relative overflow-hidden">
            <div
              className="h-full rounded-full bg-o-do transition-all duration-1000 ease-out relative"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* FOOTER (Same as before) */}
        <div className="flex px-3 pt-2 items-center justify-between text-body-md text-Primary-50 ">
          <div>
            {isMax ? (
              <span className="text-body-md">
                Points kamu sudah max di{" "}
                <span className="font-bold text-body-md">{currentPoints}</span>!
              </span>
            ) : (
              <>
                <span className="font-bold font-body-md">
                  {remaining} points{" "}
                </span>
                <span className="font-normal font-body-md">
                  lagi untuk ke title selanjutnya
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </InteractiveShadow>
  );
}

export function PointProgressBarSkeleton({ className }) {
  return (
    <div
      className={cn(
        "w-full rounded-xl p-6 bg-db-b shadow-blue-60 relative overflow-hidden border border-Primary-50 h-full min-h-[160px]",
        className,
      )}
    >
      {/* HEADER */}
      <div className="flex items-top justify-between mb-3">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* PROGRESS BAR */}
      <div className="px-2 mb-1 h-6 flex items-center gap-2">
        <Skeleton className="h-7 w-7 rounded-full" />
        <Skeleton className="h-2 flex-1 rounded-full" />
      </div>

      {/* FOOTER */}
      <div className="px-3 pt-2">
        <Skeleton className="h-4 w-3/4 rounded-md" />
      </div>
    </div>
  );
}
