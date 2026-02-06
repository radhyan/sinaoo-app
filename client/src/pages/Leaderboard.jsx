import React, { useState, useEffect } from "react";
import { TrophyIcon, RankingIcon, ChartBarIcon } from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import RankCard, { RankCardSkeleton } from "@/components/leaderboard/RankCard";
import ChampionsPodium, {
  ChampionsPodiumSkeleton,
} from "@/components/leaderboard/ChampionsPodium";
import RankingList from "@/components/leaderboard/RankingList";
import { useUser } from "@/context/UserContext";
import { Skeleton } from "@/components/shared/ui/Skeleton";

export default function Leaderboard() {
  const { user, loading: userLoading } = useUser();
  const [data, setData] = useState({
    topUsers: [],
    userRank: null,
    userProfile: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const url = user
          ? `http://localhost:3000/api/leaderboard?username=${user.username}`
          : "http://localhost:3000/api/leaderboard";

        const res = await fetch(url);
        if (res.ok) {
          const result = await res.json();
          setData(result);
        }
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, [user]);

  if (loading || userLoading) {
    return (
      <div className="flex flex-col gap-8 h-full w-full max-w-7xl p-2 overflow-hidden">
        {/* Header Skeleton */}
        <div className="flex items-center gap-3 shrink-0">
          <Skeleton className="w-12 h-12 rounded-lg" />
          <Skeleton className="h-10 w-64 rounded-md" />
        </div>

        {/* content grid skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-x-12 gap-y-8 flex-1">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <Skeleton className="h-8 w-40 rounded-md" />
              <RankCardSkeleton variant="highlight" />
            </div>
            <div className="space-y-4 flex-1">
              <Skeleton className="h-8 w-40 rounded-md" />
              <ChampionsPodiumSkeleton />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-40 rounded-md" />
            <div className="bg-w-lb rounded-xl border border-Primary-50 h-[600px] p-6 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <RankCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const topThree = data.topUsers.slice(0, 3);
  const others = data.topUsers.slice(3);

  return (
    <div className="flex flex-col gap-8 h-full w-full max-w-7xl p-2 overflow-y-auto custom-scrollbar overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
        <GradientIcon
          icon={RankingIcon}
          variant="blue"
          size={48}
          weight="fill"
        />
        <h2 className="font-heading text-h2 text-Primary-900">Leaderboard</h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-x-12 gap-y-8 flex-1 min-h-0">
        {/* Left Column: Your Rank & Champions */}
        <div className="flex flex-col gap-8 min-h-0">
          {/* Section: Peringkatmu */}
          <section className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-6 duration-700 delay-100 fill-mode-both">
            <h3 className="font-heading text-h3 text-Primary-900 text-left">
              Peringkatmu
            </h3>
            {data.userProfile ? (
              <RankCard
                rank={data.userRank}
                userProfile={data.userProfile}
                variant="highlight"
              />
            ) : (
              <div className="p-6 bg-Grayscale-50 rounded-xl border border-dashed border-Grayscale-200 text-Grayscale-400">
                Log in to see your rank
              </div>
            )}
          </section>

          {/* Section: Champions */}
          <section className="flex flex-col gap-4 flex-1 min-h-[400px] animate-in fade-in slide-in-from-left-8 duration-700 delay-200 fill-mode-both">
            <div className="flex items-center gap-2">
              <TrophyIcon
                weight="fill"
                size={40}
                className="text-Secondary-500"
              />
              <h3 className="font-heading text-h3 text-Primary-900">
                Champions
              </h3>
            </div>
            <div className="flex-1">
              <ChampionsPodium topThree={topThree} />
            </div>
          </section>
        </div>

        {/* Right Column: Ranking List */}
        <section className="flex flex-col gap-4 min-h-0 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
          <div className="flex items-center gap-2">
            <RankingIcon weight="fill" size={40} className="text-Primary-500" />
            <h3 className="font-heading text-h3 text-Primary-900">Ranking</h3>
          </div>
          <div className="flex-1 min-h-0">
            <RankingList scholars={others} />
          </div>
        </section>
      </div>
    </div>
  );
}
