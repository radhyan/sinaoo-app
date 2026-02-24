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
  ListIcon,
  SidebarSimple,
} from "@phosphor-icons/react";
import MenuItem from "@/components/layout/MenuItem";
import logo from "../../assets/SINAOO LOGO.svg";
import { Button } from "@/components/shared/ui/Button";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import LogoutAlertDialog from "./LogoutAlertDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const { logout } = useUser();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-Grayscale-50 lg:p-6 overflow-hidden transition-all duration-300">
      {/* MOBILE HEADER */}
      <header className="flex lg:hidden items-center justify-between shrink-0 bg-white p-4 z-50">
        <img src={logo} alt="SINAOO Logo" className="h-8 md:h-10" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-Primary-600 border-none shadow-blue-60"
            >
              <ListIcon size={28} weight="bold" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 z-[100] bg-Primary-50 text-Error-400 rounded-md border-Primary-100 shadow-blue-60 p-2"
          >
            <DropdownMenuItem
              className="text-Error-400 gap-2 cursor-pointer text-body-md lg:text-body-l focus:bg-Error-50 focus:text-Error-500 rounded-lg p-2 md:p-3"
              onClick={() => setIsLogoutDialogOpen(true)}
            >
              <SignOutIcon weight="bold" size={20} />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden lg:flex sticky top-6 flex-col h-full items-start gap-6 px-0 py-5 rounded-lg overflow-hidden border-[0.5px] border-solid border-Primary-100 bg-w-lb shadow-blue-60 shrink-0 transition-all duration-300 ${
          isSidebarCollapsed ? "w-fit items-center" : "w-[260px]"
        }`}
      >
        <header
          className={`relative flex items-center justify-between w-full flex-[0_0_auto] px-5 transition-all duration-300 ${
            isSidebarCollapsed ? "px-0 justify-center" : ""
          }`}
        >
          <img
            src={logo}
            alt="SINAAOO Logo"
            className={`transition-all duration-300 h-6 ${
              isSidebarCollapsed
                ? "w-0 opacity-0 overflow-hidden"
                : "w-auto opacity-100"
            }`}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="text-Primary-600 hover:bg-Primary-50 shrink-0 rounded-xsm hover:shadow-none shadow-none border-none"
          >
            {isSidebarCollapsed ? (
              <SidebarOpenIcon size={28} weight="bold" />
            ) : (
              <SidebarCloseIcon size={28} weight="bold" />
            )}
          </Button>
        </header>

        <nav
          className={`flex flex-col gap-2 relative flex-1 self-stretch w-full overflow-y-auto custom-scrollbar transition-all duration-300 ${
            isSidebarCollapsed ? "items-center px-2" : "items-start"
          }`}
        >
          <MenuItem
            to="/dashboard"
            icon={HouseIcon}
            label="Dashboard"
            isCollapsed={isSidebarCollapsed}
          />
          <MenuItem
            to="/courses"
            icon={BookBookmarkIcon}
            label="Courses"
            isCollapsed={isSidebarCollapsed}
          />
          <MenuItem
            to="/leaderboard"
            icon={RankingIcon}
            label="Leaderboard"
            isCollapsed={isSidebarCollapsed}
          />
          <MenuItem
            to="/achievement"
            icon={TrophyIcon}
            label="Achievement"
            isCollapsed={isSidebarCollapsed}
          />
          <MenuItem
            to="/profile"
            icon={UserCircleIcon}
            label="Profile"
            isCollapsed={isSidebarCollapsed}
          />
        </nav>

        <div
          className={`w-full mt-auto pt-4 transition-all duration-300 ${
            isSidebarCollapsed ? "px-2" : "px-5"
          }`}
        >
          <Button
            fullWidth={!isSidebarCollapsed}
            variant="destructive"
            size={isSidebarCollapsed ? "icon" : "default"}
            leftIcon={
              <SignOutIcon weight="bold" size={isSidebarCollapsed ? 24 : 20} />
            }
            onClick={() => setIsLogoutDialogOpen(true)}
            className={isSidebarCollapsed ? "w-12 h-12 mx-auto rounded-sm" : ""}
          >
            {!isSidebarCollapsed && "Log Out"}
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-h-0 min-w-0 flex flex-col pb-0 px-1">
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
