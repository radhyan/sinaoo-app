import React, { useState, useEffect, useCallback } from "react";
import { useUser } from "@/context/UserContext";
import {
  TrophyIcon,
  CircleNotchIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import AchievementCard, {
  AchievementCardSkeleton,
} from "@/components/shared/cards/AchievementCard";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { Button } from "@/components/shared/ui/Button";
import { Link } from "react-router-dom";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";
import LoadingBar from "@/components/shared/ui/LoadingBar";

import { getUserAvatar } from "@/lib/avatar";

import { getLevelInfo } from "@/lib/title";

export default function Achievement() {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [achievementsList, setAchievementsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user, titles, loading: userLoading } = useUser();

  const levelInfo = getLevelInfo(user?.points || 0, titles);

  const fetchAchievements = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const achRes = await fetch(`http://localhost:3000/api/achievements`);

      if (achRes.ok) {
        const achData = await achRes.json();
        // Map backend data to frontend model
        const mappedAchievements = achData.map((a) => {
          let current = 0;

          if (user) {
            switch (a.key) {
              case "STREAK_STARTER":
                current = user.streakCount || 0;
                break;
              case "FIRST_MODULE":
                current = user.progress?.some((p) => p.isCompleted) ? 1 : 0;
                break;
              case "QUIZ_PERFECT":
                current = user.progress?.some((p) => p.score >= 100) ? 1 : 0;
                break;
              case "DAILY_GRINDER":
                const startOfToday = new Date().setHours(0, 0, 0, 0);
                current =
                  user.completedMissions?.filter(
                    (cm) => new Date(cm.completedAt) >= startOfToday,
                  ).length || 0;
                break;
              case "BOOKWORM":
                const completedCourses = new Set(
                  user.progress
                    ?.filter((p) => p.isCompleted && p.courseId)
                    .map((p) => String(p.courseId)),
                );
                current = completedCourses.size;
                break;
              default:
                current = 0;
            }
          }

          // If already unlocked, ensure current is at least target
          const isUnlocked =
            user?.achievements?.some(
              (ua) =>
                ua.achievementId?._id === a._id || ua.achievementId === a._id,
            ) || false;

          if (isUnlocked) {
            current = Math.max(current, a.target);
          }

          return {
            ...a,
            image: a.imageUrl,
            current,
          };
        });
        setAchievementsList(mappedAchievements);
      } else {
        throw new Error("Gagal mengambil daftar pencapaian");
      }

      // Populate unlocked achievements from user context
      if (user && user.achievements) {
        setUnlockedAchievements(user.achievements);
      }
    } catch (err) {
      console.error(err);
      setError("Gagal memuat pencapaian. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  // Determine if an achievement is unlocked based on real data or fallback to progress logic
  const isUnlocked = (ach, index) => {
    return (
      unlockedAchievements.some(
        (ua) =>
          ua.achievementId?._id === ach._id || ua.achievementId === ach._id,
      ) || ach.current >= ach.target
    );
  };

  const unlockedCount = achievementsList.filter(isUnlocked).length;
  const progressPercent =
    achievementsList.length > 0
      ? Math.round((unlockedCount / achievementsList.length) * 100)
      : 0;

  if (loading || userLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full p-8 animate-in fade-in duration-500">
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <GradientIcon
            icon={TrophyIcon}
            variant="blue"
            size={64}
            weight="fill"
            className="animate-bounce"
          />
          <div className="text-center space-y-2">
            <h2 className="font-heading text-h2 text-Primary-900">
              Memuat Pencapaian
            </h2>
            <p className="text-body-md text-Grayscale-500">
              Menyiapkan medali terbaik untukmu...
            </p>
          </div>
          <LoadingBar className="w-full shadow-blue-60" variant="blue" />
        </div>
      </div>
    );
  }

  if (!user) return <div>Please log in</div>;

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto custom-scrollbar p-1 overflow-x-hidden">
      {/* Title Header */}
      <div className="flex items-center gap-3 mb-1 animate-in fade-in slide-in-from-left-4 duration-500">
        <GradientIcon
          icon={TrophyIcon}
          variant="blue"
          size={48}
          weight="fill"
          className="rounded-lg"
        />
        <h2 className="font-heading text-h2 text-Primary-900 uppercase">
          Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-6 items-stretch mb-6">
        {/* User Summary Card (Blue Gradient) */}
        <div className="w-full rounded-xl p-8 bg-db-b shadow-blue-60 relative overflow-hidden border border-Primary-50 transition-all animate-in fade-in slide-in-from-left-6 duration-700 delay-100 fill-mode-both h-full flex flex-col justify-center">
          {/* HEADER */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={getUserAvatar(user)}
                alt={user.name || user.username}
                className="h-20 w-20 rounded-full shadow-deep-blue-60 object-cover border-2 border-Primary-50/20"
                onError={(e) => {
                  e.target.src = "https://i.pravatar.cc/150?u=radhy";
                }}
              />

              <div className="text-left text-Primary-50">
                <p className="text-h4 font-bold">
                  {user.name || user.username}
                </p>
                <p className="text-body-l opacity-80">{levelInfo.title}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="default"
              shadow="none"
              rightIcon={<ArrowRightIcon weight="bold" />}
              className="text-Primary-50 hover:bg-white/10"
            >
              <Link to="/profile">Profil</Link>
            </Button>
          </div>

          {/* Label */}
          <div className="flex flex-col gap-1 items-start mb-4 px-2">
            <p className="text-Primary-50 text-body-md font-body font-normal tracking-wider opacity-80 uppercase">
              Achievements didapatkan
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div className="flex flex-col gap-3 px-2">
            <div className="flex items-center justify-between">
              <span className="font-body-md font-bold text-Primary-50 whitespace-nowrap">
                {progressPercent}% Selesai
              </span>
              <span className="font-body-md font-bold text-Primary-50 whitespace-nowrap">
                {unlockedCount}/{achievementsList.length}
              </span>
            </div>
            <div className="h-2 w-full relative">
              <SegmentedProgressBar
                current={unlockedCount}
                total={achievementsList.length}
                variant="header"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid Area */}
        <div className="p-6 bg-w-lb rounded-xl border border-Primary-100 shadow-blue-60 animate-in fade-in slide-in-from-right-6 duration-700 delay-200 fill-mode-both h-full flex flex-col">
          {error ? (
            <div className="flex-1 flex flex-col items-center justify-center py-12 gap-4">
              <p className="text-body-md text-Error-400 font-medium text-center px-6">
                {error}
              </p>
              <RefreshButton onRefresh={fetchAchievements} loading={loading} />
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6">
              {loading ? (
                <>
                  <AchievementCardSkeleton />
                  <AchievementCardSkeleton />
                  <AchievementCardSkeleton />
                  <AchievementCardSkeleton />
                </>
              ) : (
                achievementsList.map((ach, index) => (
                  <div
                    key={ach._id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <AchievementCard
                      achievement={ach}
                      isUnlocked={isUnlocked(ach, index)}
                      currentProgress={ach.current}
                      targetProgress={ach.target}
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
