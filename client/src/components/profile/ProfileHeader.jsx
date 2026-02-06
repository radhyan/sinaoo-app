import React from "react";
import {
  StarIcon,
  UserGearIcon,
  UserPlusIcon,
  PencilSimpleIcon,
  PencilIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getUserAvatar } from "@/lib/avatar";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { useUser } from "@/context/UserContext";
import { getLevelInfo } from "@/lib/title";
import AvatarSelectionDialog from "./AvatarSelectionDialog";
import UsernameEditDialog from "./UsernameEditDialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProfileHeader({ user }) {
  const { titles, refreshUser } = useUser();
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = React.useState(false);
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = React.useState(false);

  const levelInfo = getLevelInfo(user?.points || 0, titles);
  const { percentage, nextTarget, isMax, remaining } = levelInfo;

  return (
    <div className="bg-db-b rounded-xl p-6 shadow-blue-60 border border-Primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="flex flex-col relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-4">
            {/* Avatar - Clickable */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setIsAvatarDialogOpen(true)}
                  className="group relative w-16 h-16 rounded-full overflow-hidden shadow-deep-blue-60 transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src={getUserAvatar(user)}
                    alt={user?.username}
                    className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <UserGearIcon
                      weight="fill"
                      className="text-white drop-shadow-md"
                      size={24}
                    />
                  </div>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>ubah avatar</p>
              </TooltipContent>
            </Tooltip>

            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 group">
                <h3 className="text-body-xl font-bold text-Primary-50 mr-1">
                  {user?.username || "Guest User"}
                </h3>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      onClick={() => setIsUsernameDialogOpen(true)}
                      size="icon"
                      shadow="none"
                      leftIcon={<PencilIcon weight="fill" />}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Ubah username</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-body-l text-Primary-50 font-medium">
                {levelInfo.title}
              </p>
            </div>
          </div>
        </div>

        {/* PROGRESS SECTION */}
        <div className="flex flex-col gap-1 px-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 flex-1">
              <GradientIcon
                icon={StarIcon}
                variant="orange"
                size={28}
                className="drop-shadow-deep-blue-60"
              />
              <div className="h-2 w-full rounded-full bg-Primary-900/60 shadow-deep-blue-60 relative overflow-hidden">
                <div
                  className="h-full rounded-full bg-o-do transition-all duration-1000 ease-out relative"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-baseline gap-1 shrink-0 ml-auto">
              <span className="font-bold text-body-md text-Primary-50 leading-none">
                {user?.points || 0} / {nextTarget}
              </span>
              <span className="text-body-sm text-Primary-50 font-medium font-body leading-none">
                pts
              </span>
            </div>
          </div>

          <div className="text-body-md text-Primary-50 px-1 md:px-0">
            {isMax ? (
              <span>
                Points kamu sudah max di{" "}
                <span className="font-bold">{user?.points || 0}</span>!
              </span>
            ) : (
              <div className="flex items-center gap-1 opacity-80">
                <span className="font-bold whitespace-nowrap">
                  {remaining} points{" "}
                </span>
                <span className="font-normal whitespace-nowrap">
                  lagi untuk ke title selanjutnya
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <AvatarSelectionDialog
        isOpen={isAvatarDialogOpen}
        onOpenChange={setIsAvatarDialogOpen}
        currentAvatarId={user?.avatarId || 1}
        onSelect={async (newId) => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/users/${user.username}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ avatarId: newId }),
              },
            );

            if (response.ok) {
              await refreshUser(user.username);
            }
          } catch (error) {
            console.error("Failed to update avatar:", error);
          }
        }}
      />

      <UsernameEditDialog
        isOpen={isUsernameDialogOpen}
        onOpenChange={setIsUsernameDialogOpen}
        currentUsername={user?.username}
        onSave={async (newName) => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/users/${user.username}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: newName }),
              },
            );

            if (response.ok) {
              await refreshUser(newName);
            } else {
              const data = await response.json();
              throw new Error(data.message || "Gagal mengubah username");
            }
          } catch (error) {
            console.error("Failed to update username:", error);
            throw error;
          }
        }}
      />
    </div>
  );
}
