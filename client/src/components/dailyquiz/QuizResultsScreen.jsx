import React from "react";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { TrophyIcon } from "@phosphor-icons/react";

export default function QuizResultsScreen({
  courseName,
  results,
  baseScore,
  bestStreak,
  isSubmitting,
  onStartRedemption,
  onSkipRedemption,
  onSubmit,
}) {
  const correctCount = results.filter((r) => r.correct).length;
  const wrongCount = results.filter((r) => !r.correct).length;

  return (
    <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-lg w-full space-y-8 animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center space-y-3">
          <GradientIcon
            icon={TrophyIcon}
            variant="orange"
            size={64}
            weight="fill"
            className="mx-auto"
          />
          <h2 className="text-h2 font-heading text-Primary-900">
            Hasil Babak Utama
          </h2>
          <p className="text-body-l text-Grayscale-700">{courseName}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-Success-50/20 rounded-xl p-4 text-center border border-Success-300/30">
            <p className="text-h3 font-heading text-Success-400">
              {correctCount}
            </p>
            <p className="text-body-sm text-Grayscale-600">Benar</p>
          </div>
          <div className="bg-Error-50/10 rounded-xl p-4 text-center border border-Error-100/30">
            <p className="text-h3 font-heading text-Error-100">{wrongCount}</p>
            <p className="text-body-sm text-Grayscale-600">Salah</p>
          </div>
          <div className="bg-Secondary-50/20 rounded-xl p-4 text-center border border-Secondary-300/30">
            <p className="text-h3 font-heading text-Secondary-500">
              🔥 {bestStreak}
            </p>
            <p className="text-body-sm text-Grayscale-600">Best Streak</p>
          </div>
        </div>

        <div className="bg-Primary-50/50 rounded-xl p-6 text-center border border-Primary-200">
          <p className="text-body-md text-Grayscale-600">Poin Babak Utama</p>
          <p className="text-h1 font-heading text-Primary-500">{baseScore}</p>
        </div>

        {/* Redemption offer */}
        {wrongCount > 0 ? (
          <div className="space-y-4">
            <div className="bg-Success-50/10 rounded-xl p-5 border border-Success-300/20 text-center">
              <p className="text-body-l text-Grayscale-800">
                Kamu punya{" "}
                <span className="font-bold text-Error-100">
                  {wrongCount} soal salah
                </span>
                . Mau coba lagi di{" "}
                <span className="font-bold text-Success-400">
                  Babak Redemption
                </span>
                ?
              </p>
              <p className="text-body-md text-Grayscale-500 mt-1">
                Setiap jawaban benar mendapat{" "}
                <span className="font-bold">+5 poin</span>
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onSkipRedemption}
                className="flex-1"
                disabled={isSubmitting}
              >
                Lewati
              </Button>
              <Button
                variant="default"
                onClick={onStartRedemption}
                className="flex-1"
                disabled={isSubmitting}
              >
                Mulai Redemption
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="default"
            size="lg"
            onClick={onSubmit}
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Hasil"}
          </Button>
        )}
      </div>
    </div>
  );
}
