import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FlagIcon,
  CheckCircleIcon,
  LightningIcon,
  CircleNotchIcon,
  StarIcon,
  CalendarCheckIcon,
  PuzzlePieceIcon,
  FlagBannerIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/utils";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import Tag from "@/components/shared/ui/Tag";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { useUser } from "@/context/UserContext";

const MissionItem = ({
  id,
  type,
  title,
  description,
  image,
  link,
  points,
  current,
  target,
  isClaimed,
  onClaim,
  loading,
}) => {
  const isProgressType = type === "progress";
  // If target is 0, avoid division by zero
  const progress =
    isProgressType && target > 0
      ? Math.min(100, Math.round((current / target) * 100))
      : 0;
  const isCompleted = current >= target;

  return (
    <div className="flex flex-col gap-3 bg-lo-o px-8 py-6 rounded-xl border border-Secondary-50 shadow-blue-60 min-h-[160px]">
      {/* FIRST ROW: Icon + Description + Points */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="shrink-0 w-20 h-20 bg-Secondary-50 rounded-lg flex items-center justify-center shadow-orange-60 border border-solid border-Secondary-100">
          <GradientIcon
            icon={type === "quiz" ? PuzzlePieceIcon : FlagBannerIcon}
            variant={type === "quiz" ? "pink" : "darkBlue"}
            size={36}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 flex flex-col mt-2 ">
          <div className="flex items-start justify-between">
            <h5 className="font-heading text-h5 text-Secondary-900 truncate pr-2">
              {title}
            </h5>
            {isClaimed ? (
              <Tag icon={CheckCircleIcon} variant="module" shadow="none">
                Selesai
              </Tag>
            ) : (
              <Tag icon={StarIcon} variant="default" shadow="orange">
                {points}
              </Tag>
            )}
          </div>
          <p className="text-body-md text-Secondary-900 line-clamp-2 text-left">
            {description}
          </p>
        </div>
      </div>

      {/* SECOND ROW: Segmented Progress Bar (Only if progress type) */}
      {isProgressType && (
        <div className="mt-1 mx-2 ">
          <div className="flex justify-between text-body-md text-Secondary-900">
            <span className="text-body-md mb-1">Progress</span>
            <span className="text-body-md">
              {current}/{target}
            </span>
          </div>
          <SegmentedProgressBar
            current={current}
            total={target}
            variant="secondary"
            isComplete={isClaimed}
          />
        </div>
      )}

      {/* THIRD ROW: Action Button */}
      <div className="flex justify-end mx-1 mt-1">
        <div className="w-full">
          {isClaimed ? (
            <>
              {type === "quiz" && (
                <Link to="/quiz/daily?review=true" className="w-full block">
                  <Button variant="tertiary" fullWidth shadow="none">
                    Hasil Quiz
                  </Button>
                </Link>
              )}
            </>
          ) : isCompleted ? (
            <Button
              size="default"
              variant="default"
              shadow="orange"
              rounded="sm"
              fullWidth
              onClick={() => onClaim(id)}
              disabled={loading}
              className="h-[40px] w-full"
            >
              {loading ? (
                <CircleNotchIcon className="animate-spin" size={16} />
              ) : (
                "Klaim"
              )}
            </Button>
          ) : (
            <Link to={link} className="w-full block">
              <Button
                size="default"
                variant="default"
                shadow="orange"
                rounded="sm"
                fullWidth
                className="h-10 px-6"
              >
                {type === "quiz" ? "Mulai Kuis" : "Lanjut Belajar"}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const MissionItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 bg-lg-g px-8 py-6 rounded-xl border border-Tertiary-50 shadow-blue-60 min-h-[160px]">
      {/* First Row Placeholder */}
      <div className="flex items-start gap-4">
        <Skeleton className="shrink-0 w-20 h-20 rounded-lg" />
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <Skeleton className="h-6 w-1/2 rounded" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full rounded mb-1" />
          <Skeleton className="h-4 w-3/4 rounded" />
        </div>
      </div>

      {/* Second Row Placeholder */}
      <div className="w-full mt-1">
        <div className="flex justify-between mb-1">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-4 w-10 rounded" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
      </div>

      {/* Third Row Placeholder */}
      <div className="flex justify-end mt-auto">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
};

export default function DailyMissionWidget({ className }) {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [claimingId, setClaimingId] = useState(null);
  const [error, setError] = useState(null);
  const { user, refreshUser, setEarnedAchievement } = useUser();
  const username = user?.username || "Radhy";

  const fetchMissions = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/users/${username}/daily-missions`,
      );
      if (!res.ok) throw new Error("Failed to fetch missions");
      const data = await res.json();
      setMissions(data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat misi harian.");
      // Fallback to empty if error
      setMissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, [username]);

  const handleClaim = async (id) => {
    try {
      setClaimingId(id);
      const res = await fetch(
        `http://localhost:3000/api/users/${username}/claim-mission`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ missionId: id }),
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Gagal mengklaim hadiah.");
      }

      const data = await res.json();

      // If achievement earned
      if (data.newAchievements && data.newAchievements.length > 0) {
        // AchievementPopupManager will handle showing it
        setEarnedAchievement(data.newAchievements[0]);
      } else {
        alert(`Selamat! Kamu mendapatkan ${data.reward} Points.`);
      }

      // Refresh missions after successful claim
      fetchMissions();
      // Also refresh user points in context
      refreshUser(username);
    } catch (err) {
      alert(err.message);
    } finally {
      setClaimingId(null);
    }
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {loading && missions.length === 0 ? (
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <MissionItemSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500 py-4 font-medium">{error}</p>
      ) : (
        <div className="flex flex-col gap-3">
          {missions.map((mission) => (
            <MissionItem
              key={mission.id}
              {...mission}
              onClaim={handleClaim}
              loading={claimingId === mission.id}
            />
          ))}
          {missions.length === 0 && !loading && (
            <p className="text-center text-Grayscale-500 py-4">
              Tidak ada misi harian tersedia.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
