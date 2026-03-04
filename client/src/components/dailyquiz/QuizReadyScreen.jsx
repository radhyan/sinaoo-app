import React from "react";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import {
  LightningIcon,
  ClockCountdownIcon,
  FireIcon,
  StarIcon,
  ArrowClockwiseIcon,
} from "@phosphor-icons/react";

export default function QuizReadyScreen({ courseName, onStart }) {
  return (
    <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
      <Button></Button>
      <div className="bg-white rounded-lg shadow-blue-60 border border-Primary-50 p-6 max-w-lg w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="space-y-3">
          <GradientIcon
            icon={LightningIcon}
            variant="orange"
            size={64}
            weight="fill"
            className="mx-auto"
          />
          <h1 className="text-h2 font-heading text-Primary-900">
            Pop Quiz Harian
          </h1>
          <p className="text-body-l text-Grayscale-700">
            Hari ini dari course:
          </p>
          <p className="text-h4 font-heading text-Primary-500">{courseName}</p>
        </div>

        <div className="bg-Primary-50/30 rounded-md p-5 space-y-3 text-left">
          <div className="flex items-center gap-3">
            <ClockCountdownIcon
              size={24}
              className="text-Primary-500"
              weight="fill"
            />
            <p className="text-body-l text-Grayscale-800">
              <span className="font-bold">35 detik</span> per soal
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FireIcon size={24} className="text-Secondary-500" weight="fill" />
            <p className="text-body-l text-Grayscale-800">
              Jawab berturut-turut untuk{" "}
              <span className="font-bold">multiplier poin</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StarIcon size={24} className="text-Secondary-500" weight="fill" />
            <p className="text-body-l text-Grayscale-800">
              <span className="font-bold">10 soal</span> acak,{" "}
              <span className="font-bold">10 poin</span> per soal
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ArrowClockwiseIcon
              size={24}
              className="text-Success-400"
              weight="fill"
            />
            <p className="text-body-l text-Grayscale-800">
              <span className="font-bold">Babak Redemption</span> untuk soal
              salah (+5 poin)
            </p>
          </div>
        </div>

        <Button
          variant="default"
          size="lg"
          onClick={onStart}
          className="w-full text-white"
        >
          Mulai Kuis
        </Button>
      </div>
    </div>
  );
}
