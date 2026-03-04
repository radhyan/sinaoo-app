import { useState, useEffect, useMemo } from "react";
import profileHeaderImg from "@/assets/Profile Header/ProfileHeader.png";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  BookOpen,
  BookOpenTextIcon,
  Flag,
  RankingIcon,
  StarIcon,
  CalendarCheckIcon,
} from "@phosphor-icons/react";
import PointProgressBar, {
  PointProgressBarSkeleton,
} from "@/components/dashboard/PointProgressBar";
import UserProgress, {
  UserProgressSkeleton,
} from "@/components/dashboard/UserProgress";
import DailyMissionWidget from "@/components/dashboard/DailyMissionWidget";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import LastAccessedModule from "@/components/dashboard/LastAccessedModule";
import { useUser } from "@/context/UserContext";
import { getUserAvatar } from "@/lib/avatar";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { Button } from "@/components/shared/ui/Button";

const LeaderboardItem = ({ rank, avatar, name, points }) => (
  <div className="flex items-center gap-4 p-2 rounded-md hover:bg-Grayscale-50">
    <span className="font-bold text-lg text-Grayscale-400 w-6 text-center">
      {rank}
    </span>
    <img
      src={avatar}
      alt={`${name}'s avatar`}
      className="w-10 h-10 rounded-full"
    />
    <p className="font-bold text-Grayscale-800 flex-1">{name}</p>
    <p className="font-bold text-Secondary-500">
      {points.toLocaleString("id-ID")} Points
    </p>
  </div>
);

// add a small fallback WidgetCard if you don't have an import
const WidgetCard = ({ title, icon, children }) => (
  <div className="bg-white rounded-xsm p-6 shadow-btn-default">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="font-heading text-h4">{title}</h4>
      </div>
    </div>
    {children}
  </div>
);

const ENCOURAGING_MESSAGES = [
  "Siap untuk belajar hari ini?",
  "Tetap semangat belajar ya!",
  "Ayo raih prestasimu hari ini!",
  "Satu langkah lebih dekat ke tujuanmu.",
  "Jangan menyerah, terus berjuang!",
];

function Dashboard() {
  const { user, loading, earnedAchievement, setEarnedAchievement } = useUser();
  const [totalAchievements, setTotalAchievements] = useState(6);

  const greetingMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * ENCOURAGING_MESSAGES.length);
    return ENCOURAGING_MESSAGES[randomIndex];
  }, []);

  useEffect(() => {
    // Only fetch achievements stats separately if needed, or assume fixed for now
    // Ideally this should be part of a global data context or cache
    const fetchAchievements = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/achievements");
        if (res.ok) {
          const data = await res.json();
          setTotalAchievements(data.length);
        }
      } catch (e) {
        console.error("Failed to fetch achievements count", e);
      }
    };
    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-6 w-full h-full p-4 overflow-x-hidden overflow-hidden">
        <Skeleton className="w-full aspect-[21/4] rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
          <PointProgressBarSkeleton />
          <UserProgressSkeleton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-8 w-40 rounded-md" />
            </div>
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-8 w-40 rounded-md" />
            </div>
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center gap-4">
        <p className="text-lg font-bold text-red-500">
          User data not found. Please log in again.
        </p>
        <Link to="/">
          <Button>Go to Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto custom-scrollbar px-2 pr-0 lg:pr-0 md:p-4 lg:p-6 overflow-x-hidden">
      {/* Top Banner */}
      <div className="w-full min-h-[100px] md:min-h-[160px] lg:aspect-[21/4] rounded-none md:rounded-xl flex items-start md:items-center relative overflow-hidden animate-in fade-in slide-in-from-top-6 duration-700 fill-mode-both">
        <img
          src={profileHeaderImg}
          alt="Profile Header"
          className="hidden md:block absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <h2 className="md:text-Primary-50 text-Primary-800 font-heading text-body-xl md:text-h3 xl:text-h1 px-2 md:pr-20 md:pl-20 lg:pr-24 z-10 max-w-[80%] md:max-w-[70%] lg:max-w-[70%] text-left flex flex-col leading-tight">
          <span className="md:text-Primary-50/90 text-Primary-600 font-medium mb-1 drop-shadow-sm">
            Halo, {user.username}!
          </span>
          <span className="">{greetingMessage}</span>
        </h2>
      </div>
      {/* Points and Profile Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-4 lg:gap-6 animate-in fade-in slide-in-from-top-12 duration-700 fill-mode-both">
        <div className="animate-in fade-in slide-in-from-left-6 duration-700 delay-200 fill-mode-both">
          <PointProgressBar
            currentPoints={user.points}
            name={user.name || user.username}
            avatarId={user.avatarId}
            avatarSrc={getUserAvatar(user)}
          />
        </div>
        <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-300 fill-mode-both">
          <UserProgress
            completedCourses={user.completedCourses || 0}
            totalCourses={user.totalCourses || 6}
            completedModules={
              user?.progress?.filter((p) => p.isCompleted).length || 0
            }
            completedAchievements={user.achievements?.length || 0}
            totalAchievements={totalAchievements}
            leaderboardRank={user.rank || "-"}
          />
        </div>
      </div>
      {/* Last Modules and Daily Missions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
        {/* Left: Daily Missions */}
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-8 duration-700 delay-400 fill-mode-both">
          <div className="flex items-center gap-3 mb-4">
            <GradientIcon
              icon={CalendarCheckIcon}
              variant="orange"
              size={40}
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <h3 className="font-heading text-h4 md:text-h3 text-Primary-900">
              Misi Harian
            </h3>
          </div>
          <div className="flex-1">
            <DailyMissionWidget className="h-full" />
          </div>
        </div>

        {/* Right: Last Accessed Module */}
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-8 duration-700 delay-500 fill-mode-both">
          <div className="flex items-start xl:items-center gap-3 mb-4">
            <GradientIcon
              icon={BookOpenTextIcon}
              size={40}
              weight="fill"
              variant="green"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <h3 className="font-heading text-left text-h4 md:text-h3 text-Primary-900">
              Lanjuti Modul
            </h3>
          </div>

          <div className="flex-1">
            <LastAccessedModule username={user.username} className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
