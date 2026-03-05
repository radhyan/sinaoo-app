import React, { useState, useEffect, useCallback } from "react";
import {
  TrophyIcon,
  RankingIcon,
  ChartBarIcon,
  MedalIcon,
  ListNumbersIcon,
} from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import RankCard from "@/components/leaderboard/RankCard";
import ChampionsPodium from "@/components/leaderboard/ChampionsPodium";
import RankingList from "@/components/leaderboard/RankingList";
import { useUser } from "@/context/UserContext";
import LoadingBar from "@/components/shared/ui/LoadingBar";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";

export default function Leaderboard() {
  const { user, loading: userLoading } = useUser();
  const [data, setData] = useState({
    topUsers: [],
    userRank: null,
    userProfile: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaderboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const url = user
        ? `http://localhost:3000/api/leaderboard?username=${user.username}`
        : "http://localhost:3000/api/leaderboard";

      const res = await fetch(url);
      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        throw new Error("Gagal mengambil data leaderboard");
      }
    } catch (err) {
      console.error("Failed to fetch leaderboard:", err);
      setError("Gagal memuat leaderboard. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  if (loading || userLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-4 md:p-8 animate-in fade-in duration-500">
        <div className="w-full max-w-md flex flex-col items-center gap-4 md:gap-6">
          <GradientIcon
            icon={RankingIcon}
            variant="blue"
            size={48}
            weight="fill"
            className="animate-bounce"
          />
          <div className="text-center space-y-2">
            <h2 className="font-heading text-h3 md:text-h2 text-Primary-900">
              Memuat Leaderboard
            </h2>
            <p className="text-body-sm md:text-body-md text-Grayscale-500">
              Menyiapkan ranking terbaik untukmu...
            </p>
          </div>
          <LoadingBar className="w-full shadow-blue-60" variant="blue" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full p-8 gap-6 animate-in fade-in duration-500">
        <div className="text-center space-y-2">
          <h2 className="font-heading text-h2 text-Primary-900 uppercase">
            Leaderboard
          </h2>
          <p className="text-body-md text-Error-400 font-medium">{error}</p>
        </div>
        <RefreshButton onRefresh={fetchLeaderboard} loading={loading} />
      </div>
    );
  }

  const topThree = data.topUsers.slice(0, 3);
  const others = data.topUsers.slice(3);

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-y-auto custom-scrollbar p-2 lg:px-6 overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
        <GradientIcon
          icon={RankingIcon}
          variant="blue"
          size={32}
          weight="fill"
          className="md:h-10 lg:h-12 xl:h-16 shrink-0"
        />
        <h2 className="font-heading text-h3 lg:text-h2 text-Primary-900 uppercase">
          Leaderboard
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 lg:grid grid-cols-2 gap-8 md:gap-12 ">
        {/* Left Column: Your Rank & Champions */}
        <div className="flex flex-col gap-8 w-full">
          {/* Section: Peringkatmu */}
          <section className="flex flex-col gap-3 md:gap-4 animate-in fade-in slide-in-from-top-6 duration-700 delay-100 fill-mode-both">
            <div className="flex gap-2 items-center">
              <GradientIcon
                icon={MedalIcon}
                variant={
                  data.userRank === 1
                    ? "orange"
                    : data.userRank === 2
                      ? "green"
                      : data.userRank === 3
                        ? "pink"
                        : "blue"
                }
                size={28}
                weight="fill"
                className="md:h-8 lg:h-10 xl:h-12 shrink-0"
              />
              <h3 className="font-heading text-h5 md:text-h3 text-Primary-900 text-left">
                Peringkatmu
              </h3>
            </div>
            {data.userProfile && data.userRank !== null ? (
              <RankCard
                rank={data.userRank}
                userProfile={data.userProfile}
                variant="highlight"
              />
            ) : data.userProfile ? (
              <div className="p-4 md:p-6 bg-Grayscale-50 rounded-xl border border-dashed border-Grayscale-200 text-Grayscale-500 text-body-sm md:text-body-md">
                Kamu belum punya peringkat. Dapatkan poin pertamamu untuk mulai
                masuk leaderboard.
              </div>
            ) : (
              <div className="p-4 md:p-6 bg-Grayscale-50 rounded-xl border border-dashed border-Grayscale-200 text-Grayscale-400 text-body-sm md:text-body-md">
                Log in to see your rank
              </div>
            )}
          </section>

          {/* Section: Champions */}
          <section className="flex flex-col pb-8 md:pb-0 gap-3 md:gap-4 flex-none lg:flex-1 animate-in fade-in slide-in-from-left-8 duration-700 delay-200 fill-mode-both">
            <div className="flex items-center gap-2">
              <GradientIcon
                icon={RankingIcon}
                variant="blue"
                size={28}
                weight="fill"
                className="md:h-8 lg:h-10 xl:h-12 shrink-0"
              />
              <h3 className="font-heading text-h5 md:text-h3 text-Primary-900">
                Champions
              </h3>
            </div>
            <div className="h-[360px] md:h-[400px] lg:h-full lg:flex-1 lg:min-h-[360px]">
              <ChampionsPodium topThree={topThree} />
            </div>
          </section>
        </div>

        {/* Right Column: Ranking List */}
        <section className="flex flex-col gap-3 md:gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
          <div className="flex items-center gap-2">
            <GradientIcon
              icon={ListNumbersIcon}
              variant="darkBlue"
              size={28}
              weight="bold"
              className="md:h-8 lg:h-10 xl:h-12 shrink-0"
            />
            <h3 className="font-heading text-h5 md:text-h3 text-Primary-900">
              Ranking
            </h3>
          </div>
          <div className="flex-1 min-h-[450px] ">
            <RankingList scholars={others} />
          </div>
        </section>
      </div>
    </div>
  );
}
