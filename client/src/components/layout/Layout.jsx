import { Outlet, Link, useLocation } from "react-router-dom";
import {
  SignOutIcon,
  HouseIcon,
  BookOpenIcon,
  TrophyIcon,
  UserCircleIcon,
  RankingIcon,
  BookBookmarkIcon,
  List,
} from "@phosphor-icons/react";
import MenuItem from "@/components/layout/MenuItem";
import logo from "../../assets/SINAOO LOGO.svg";
import { Button } from "@/components/shared/ui/Button";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import LogoutAlertDialog from "./LogoutAlertDialog";

export default function Layout() {
  const location = useLocation();
  const { logout } = useUser();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-Grayscale-50 p-3 lg:p-6 gap-3 lg:gap-6 overflow-hidden">
      {/* MOBILE HEADER */}
      <header className="flex lg:hidden items-center justify-between shrink-0 bg-white p-4 z-50">
        <img src={logo} alt="SINAOO Logo" className="h-10" />
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setIsLogoutDialogOpen(true)}
          className="rounded-xsm border-0 text-Error-400 hover:bg-Error-50 p-2 md:px-4 md:h-9"
          leftIcon={<SignOutIcon weight="bold" />}
        >
          <span className="hidden md:inline">Log Out</span>
        </Button>
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex sticky top-6 flex-col w-[260px] h-full items-start gap-6 px-0 py-5 rounded-lg overflow-hidden border-[0.5px] border-solid border-Primary-100 bg-w-lb shadow-blue-60 shrink-0">
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
            onClick={() => setIsLogoutDialogOpen(true)}
          >
            Log Out
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-h-0 min-w-0 flex flex-col pb-20 lg:pb-0">
        <Outlet />
      </main>

      {/* BOTTOM NAVIGATION (Mobile/Tablet) */}
      <BottomNavigation />

      <LogoutAlertDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
        onConfirm={logout}
      />
    </div>
  );
}
