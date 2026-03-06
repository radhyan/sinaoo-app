import React, { useState, useEffect } from "react";
import { UserCircleIcon, UserIcon, TrophyIcon } from "@phosphor-icons/react";
import { useUser } from "@/context/UserContext";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PointsHistory from "@/components/profile/PointsHistory";
import TitleDisplay from "@/components/profile/TitleDisplay";
import ProfileAchievements from "@/components/profile/ProfileAchievements";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { apiUrl } from "@/lib/api";

function Profile() {
  const { user } = useUser();
  const [allAchievements, setAllAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(apiUrl("/api/achievements"));
        if (response.ok) {
          const data = await response.json();
          setAllAchievements(data);
        }
      } catch (error) {
        console.error("Failed to fetch achievements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  if (!user && loading) {
    return (
      <div className="flex flex-col gap-8 w-full h-full p-6 overflow-hidden">
        {/* Page Header Skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-10 w-48 rounded-md" />
        </div>

        {/* User Header Skeleton */}
        <Skeleton className="w-full h-48 rounded-xl" />

        {/* History & Info Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>

        {/* Achievements Skeleton */}
        <Skeleton className="h-96 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto custom-scrollbar bg-Grayscale-50 p-2 lg:px-6">
      <div className="flex flex-col gap-8 pb-12">
        {/* Page Header */}
        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
          <GradientIcon
            icon={UserCircleIcon}
            variant="blue"
            size={48}
            weight="fill"
            className="rounded-lg"
          />
          <h1 className="font-heading text-h2 text-Primary-900 uppercase">
            Profile
          </h1>
        </div>

        {/* Top: User Header Card */}
        <section className="animate-in fade-in slide-in-from-top-6 duration-700 delay-100 fill-mode-both">
          <ProfileHeader user={user} />
        </section>

        {/* Middle: History & Title Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          <section className="animate-in fade-in slide-in-from-left-8 duration-700 delay-200 fill-mode-both">
            <PointsHistory history={user?.pointsHistory || []} />
          </section>

          <section className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
            <TitleDisplay user={user} />
          </section>
        </div>

        {/* Bottom: Achievements */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400 fill-mode-both">
          <ProfileAchievements
            userAchievements={user?.achievements || []}
            allAchievements={allAchievements}
          />
        </section>
      </div>
    </div>
  );
}

export default Profile;


