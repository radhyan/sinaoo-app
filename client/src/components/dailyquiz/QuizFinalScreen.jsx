import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { TrophyIcon, HouseIcon } from "@phosphor-icons/react";

export default function QuizFinalScreen({
  courseName,
  questions,
  results,
  baseScore,
  redemptionScore,
  redemptionResults,
  bestStreak,
}) {
  const navigate = useNavigate();
  const totalScore = baseScore + redemptionScore;
  const correctCount = results.filter((r) => r.correct).length;
  const redeemedCount = redemptionResults.filter((r) => r.correct).length;

  return (
    <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-lg w-full space-y-8 animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center space-y-3">
          <GradientIcon
            icon={TrophyIcon}
            variant="orange"
            size={72}
            weight="fill"
            className="mx-auto"
          />
          <h2 className="text-h2 font-heading text-Primary-900">
            Kuis Selesai!
          </h2>
          <p className="text-body-l text-Grayscale-600">{courseName}</p>
        </div>

        {/* Total Score */}
        <div className="bg-db-b rounded-2xl p-6 text-center text-white">
          <p className="text-body-md text-Primary-100">Total Poin</p>
          <p className="text-h1 font-heading">{totalScore}</p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-2">
            <span className="text-body-l text-Grayscale-700">
              Babak Utama ({correctCount}/{questions.length} benar)
            </span>
            <span className="font-heading text-h5 text-Primary-500">
              {baseScore}
            </span>
          </div>
          {redemptionScore > 0 && (
            <div className="flex justify-between items-center px-2">
              <span className="text-body-l text-Grayscale-700">
                Babak Redemption ({redeemedCount} redeemed)
              </span>
              <span className="font-heading text-h5 text-Success-400">
                +{redemptionScore}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center px-2 pt-2 border-t border-Grayscale-200">
            <span className="text-body-l text-Grayscale-700">
              🔥 Best Streak
            </span>
            <span className="font-heading text-h5 text-Secondary-500">
              {bestStreak}
            </span>
          </div>
        </div>

        <Button
          variant="default"
          size="lg"
          onClick={() => navigate("/dashboard")}
          className="w-full"
          leftIcon={<HouseIcon weight="fill" />}
        >
          Kembali ke Dashboard
        </Button>
      </div>
    </div>
  );
}
