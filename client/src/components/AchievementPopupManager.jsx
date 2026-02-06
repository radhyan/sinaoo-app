import React from "react";
import { useUser } from "@/context/UserContext";
import AchievementPopup from "./shared/ui/AchievementPopup";

export default function AchievementPopupManager() {
  const { earnedAchievement, setEarnedAchievement } = useUser();

  return (
    <AchievementPopup
      isOpen={!!earnedAchievement}
      achievement={earnedAchievement}
      onClose={() => setEarnedAchievement(null)}
    />
  );
}
