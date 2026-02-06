import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, StarIcon, ConfettiIcon } from "@phosphor-icons/react";
import { Button } from "./Button";
import GradientIcon from "./GradientIcon";
import { cn } from "@/lib/utils";
import AchievementCard from "@/components/shared/cards/AchievementCard";

/**
 * AchievementPopup component to display when a user earns an achievement.
 * Matches the design provided in the reference image.
 */
export default function AchievementPopup({ achievement, onClose, isOpen }) {
  // Local state to keep the achievement data during exit animation
  const [displayAchievement, setDisplayAchievement] = useState(achievement);

  useEffect(() => {
    console.log(
      "[AchievementPopup] State updated - achievement:",
      achievement?.name,
      "isOpen:",
      isOpen,
    );
    if (achievement) {
      setDisplayAchievement(achievement);
    }
  }, [achievement, isOpen]);

  if (!displayAchievement && !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-3xl rounded-xl overflow-hidden p-8 flex flex-col items-center gap-6"
          >
            {/* Close Button */}
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              shadow="none"
              className="absolute top-8 right-8 p-1 text-Grayscale-600 hover:text-Error-300 hover:bg-Error-50/30 transition-colors"
            >
              <XIcon weight="bold" size={20} />
            </Button>

            {/* Title */}
            <div className="w-full flex items-center gap-3">
              <GradientIcon
                icon={ConfettiIcon}
                variant="darkBlue"
                size={36}
                weight="fill"
              />
              <h2 className="font-heading text-h3 text-Primary-900 w-full text-left">
                Selamat!
              </h2>
            </div>

            {/* Achievement Card Area (Reusing the shared component) */}
            <div className="w-full">
              <AchievementCard
                achievement={{
                  ...displayAchievement,
                  image: displayAchievement?.imageUrl, // Map imageUrl to image prop expected by card
                }}
                isUnlocked={true}
                currentProgress={displayAchievement?.target || 1}
                targetProgress={displayAchievement?.target || 1}
              />
            </div>

            {/* Bottom Slogan */}
            <div className="w-full gap-4">
              <div className="flex gap-4 items-center justify-center">
                <span className="text-h5 font-heading">
                  Anda telah mendapatkan achievement!
                </span>
                <span className="text-Success-400 text-body-l flex items-center gap-1">
                  + {displayAchievement?.pointsValue}
                  <GradientIcon
                    icon={StarIcon}
                    variant="orange"
                    size={32}
                    weight="fill"
                  />
                </span>
              </div>
              <p className="text-body-l text-Grayscale-500 mt-1">
                Cek halaman untuk melihat semua pencapaianmu
              </p>
            </div>

            {/* Action Button */}
            <Button variant="default" size="lg" fullWidth onClick={onClose}>
              Yippie!
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
