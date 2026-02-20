import React from "react";
import { Button } from "@/components/shared/ui/Button";
import {
  StarIcon,
  PercentIcon,
  UserIcon,
  ChartBarIcon,
  CheckCircleIcon,
  EyeIcon,
  ExamIcon,
  ClipboardTextIcon,
  ArrowClockwiseIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { useUser } from "@/context/UserContext";

import GradientIcon from "@/components/shared/ui/GradientIcon";

const QuizResult = ({
  score,
  totalPoints,
  correctCount,
  totalQuestions,
  onReview,
  onRestart,
  onFinish,
  title = "Modul Selesai!",
  restartLabel = "Ulangi Modul",
}) => {
  const { user } = useUser();
  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Stats Data
  const stats = [
    {
      label: "Points Didapatkan",
      value: `+${score}`,
      icon: StarIcon,
      variant: "lightBlue",
    },
    {
      label: "Akurasi",
      value: `${percentage}%`,
      icon: PercentIcon,
      variant: "lightBlue",
    },
    {
      label: "Pointsmu Sekarang",
      value: user?.points || 0, // Fallback if points not loaded
      icon: UserIcon,
      variant: "lightBlue",
    },
    {
      label: "Peringkatmu",
      value: "#10", // Mocked value
      subValue: true,
      icon: ChartBarIcon,
      variant: "lightBlue",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Content Wrapper */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 pb-8">
        {/* Header */}
        <div className="text-center mb-6 z-10">
          <h2 className="text-h3 md:text-h2 font-heading text-Primary-900 mb-2">
            {title}
          </h2>
          <p className="text-body-l md:text-h3 font-heading text-Primary-700 max-w-[90%] mx-auto">
            {percentage <= 45
              ? "Tetap semangat! Coba lagi untuk hasil yang lebih baik."
              : percentage <= 75
                ? "Sudah cukup baik! Terus berlatih untuk hasil maksimal."
                : percentage <= 89
                  ? "Luar biasa! Kamu hampir sempurna. Pertahankan!"
                  : "Sempurna! Kamu benar-benar menguasai materi ini!"}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-6 md:mb-8 h-48 md:h-96 w-full shrink-0">
          <img
            src="/images/completion/module-complete.png"
            alt="Celebration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8 z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-db-b border border-Primary-50 rounded-xl p-6 shadow-blue-60 relative overflow-hidden"
            >
              <div className="p-3">
                <GradientIcon
                  icon={stat.icon}
                  variant={stat.variant}
                  size={32}
                />
              </div>

              <span className="text-body-md font-bold text-Primary-100 mb-1">
                {stat.label}
              </span>
              <div className="flex items-center gap-2">
                {stat.subValue && <span className="text-Primary-50">▲</span>}
                <span className="text-h3 font-heading text-Primary-50">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-Grayscale-100">
        {onReview ? (
          <Button
            variant="outline"
            onClick={onReview}
            leftIcon={<ClipboardTextIcon />}
            className="w-full sm:w-auto"
          >
            Lihat Pembahasan
          </Button>
        ) : (
          <div className="hidden sm:block" />
        )}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {onRestart && (
            <Button
              variant="default"
              size="default"
              shadow="blue"
              onClick={onRestart}
              leftIcon={<ArrowClockwiseIcon />}
              className="w-full sm:w-auto"
            >
              {restartLabel}
            </Button>
          )}

          <Button
            variant="default"
            size="default"
            onClick={onFinish}
            rightIcon={<CheckIcon weight="bold" />}
            className="w-full sm:w-auto"
          >
            Selesai
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
