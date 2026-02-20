import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  HouseIcon,
  BookOpenIcon,
  TrophyIcon,
  UserCircleIcon,
  RankingIcon,
  BookBookmarkIcon,
  SignOutIcon,
  XIcon,
} from "@phosphor-icons/react";
import MenuItem from "@/components/layout/MenuItem";
import logo from "../../assets/SINAOO LOGO.svg";
import { Button } from "@/components/shared/ui/Button";
import { useUser } from "@/context/UserContext";
import { useEffect } from "react";

export default function MobileSidebar({ isOpen, onClose }) {
  const { logout } = useUser();
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[280px] bg-white z-[9999] shadow-xl flex flex-col p-6 gap-6 md:hidden overflow-y-auto"
          >
            <header className="flex items-center justify-between">
              <img src={logo} alt="SINAOO Logo" className="w-32" />
              <button
                onClick={onClose}
                className="p-2 text-Grayscale-500 hover:text-Primary-500 transition-colors"
                aria-label="Close menu"
              >
                <XIcon size={24} weight="bold" />
              </button>
            </header>

            <nav className="flex flex-col items-start gap-2 flex-1 w-full">
              <MenuItem to="/dashboard" icon={HouseIcon} label="Dashboard" />
              <MenuItem to="/courses" icon={BookBookmarkIcon} label="Courses" />
              <MenuItem
                to="/leaderboard"
                icon={RankingIcon}
                label="Leaderboard"
              />
              <MenuItem
                to="/achievement"
                icon={TrophyIcon}
                label="Achievement"
              />
              <MenuItem to="/profile" icon={UserCircleIcon} label="Profile" />
            </nav>

            <div className="w-full mt-auto pt-4 border-t border-Grayscale-100">
              <Button
                fullWidth
                variant="destructive"
                leftIcon={<SignOutIcon weight="bold" />}
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                Log Out
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
