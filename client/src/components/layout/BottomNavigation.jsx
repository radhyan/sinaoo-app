import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HouseIcon,
  RankingIcon,
  TrophyIcon,
  UserCircleIcon,
  BookBookmarkIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/dashboard", icon: HouseIcon, label: "Home" },
  { to: "/courses", icon: BookBookmarkIcon, label: "Courses" },
  { to: "/leaderboard", icon: RankingIcon, label: "Ranking" },
  { to: "/achievement", icon: TrophyIcon, label: "Awards" },
  { to: "/profile", icon: UserCircleIcon, label: "Profile" },
];

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-lg border-t border-Primary-100 px-2 pb-safe-offset-2 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center gap-1 py-1 px-3 relative min-w-[64px]"
            >
              <div
                className={cn(
                  "p-1.5 rounded-xsm transition-all duration-300",
                  isActive
                    ? "bg-Primary-500 text-white shadow-blue-60 scale-110"
                    : "text-Grayscale-500 hover:text-Primary-600 hover:bg-Primary-50",
                )}
              >
                <Icon
                  size={24}
                  weight={isActive ? "fill" : "bold"}
                  className="transition-transform duration-300"
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold transition-colors duration-300",
                  isActive ? "text-Primary-600" : "text-Grayscale-400",
                )}
              >
                {item.label}
              </span>

              {isActive && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-Primary-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
