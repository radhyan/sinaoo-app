import { Outlet, Link, useLocation } from "react-router-dom";
import {
  SignOutIcon,
  HouseIcon,
  BookOpenIcon,
  TrophyIcon,
  UserCircleIcon,
  RankingIcon,
  BookBookmarkIcon,
} from "@phosphor-icons/react";
import MenuItem from "@/components/layout/MenuItem";
import logo from "../../assets/SINAOO LOGO.svg";
import { Button } from "@/components/shared/ui/Button";
import { useUser } from "@/context/UserContext";

export default function Layout() {
  const location = useLocation();
  const { logout } = useUser();

  return (
    <div className="flex h-screen bg-Grayscale-50 p-6 gap-6 overflow-visible">
      {/* SIDEBAR */}
      <aside className="sticky top-6 flex flex-col w-[260px] h-full items-start gap-6 px-0 py-5 rounded-lg overflow-hidden border-[0.5px] border-solid border-Primary-100 bg-w-lb shadow-blue-60 shrink-0">
        <header className="relative self-stretch w-full flex-[0_0_auto] px-5">
          <img src={logo} alt="SINAAOO Logo" className="w-full" />
        </header>

        <nav className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full overflow-y-auto custom-scrollbar">
          <MenuItem to="/dashboard" icon={HouseIcon} label="Dashboard" />
          <MenuItem to="/courses" icon={BookBookmarkIcon} label="Courses" />
          <MenuItem to="/leaderboard" icon={RankingIcon} label="Leaderboard" />
          <MenuItem to="/achievement" icon={TrophyIcon} label="Achievement" />
          <MenuItem to="/profile" icon={UserCircleIcon} label="Profile" />
        </nav>

        <div className="w-full px-5 mt-auto pt-4">
          <Button
            fullWidth
            variant="destructive"
            leftIcon={<SignOutIcon weight="bold" />}
            onClick={logout}
          >
            <Link to="/">Log Out</Link>
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-full min-w-0 flex flex-col overflow-visible">
        <Outlet />
      </main>
    </div>
  );
}
