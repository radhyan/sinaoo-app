import { BookOpenTextIcon, StarIcon, TrophyIcon } from "@phosphor-icons/react";
import Tag from "@/components/shared/ui/Tag";
import { Button } from "@/components/shared/ui/Button";
import SegmentedProgressBar from "@/components/shared/ui/SegmentedProgressBar";
import { Skeleton } from "@/components/shared/ui/Skeleton";
import { cn } from "@/lib/utils";

import imgPU from "../../../assets/CourseCover/PU.png";
import imgPPU from "../../../assets/CourseCover/PPU.png";
import imgPBM from "../../../assets/CourseCover/PBM.png";
import imgIndo from "../../../assets/CourseCover/LBINDO.png";
import imgIng from "../../../assets/CourseCover/LBING.png";
import imgPKPM from "../../../assets/CourseCover/PKPM.png";

const COURSE_IMAGES = {
  "Penalaran Umum": imgPU,
  "Pengetahuan dan Pemahaman Umum": imgPPU,
  "Pemahaman Bacaan dan Menulis": imgPBM,
  "Literasi Bahasa Indonesia": imgIndo,
  "Literasi Bahasa Inggris": imgIng,
  "Pengetahuan Kuantitatif dan Penalaran Matematika": imgPKPM,
};

export default function CourseCard({
  course,
  onClick,
  className,
  isSelected,
  completedModules = 0,
  achievedPoints = 0,
}) {
  // Use mapped image or fallback
  const imagePath =
    COURSE_IMAGES[course.name] ||
    "https://placehold.co/600x400/e2e8f0/1e293b?text=Course+Image";

  return (
    <div
      onClick={() => onClick && onClick(course)}
      className={cn(
        "flex flex-col bg-w-lb rounded-lg shadow-deep-blue-60 border border-Primary-50 overflow-hidden w-full h-full",
        isSelected && "shadow-blue-60",
        className,
      )}
    >
      {/* Top Image Section */}
      <div className="h-[160px] w-full bg-white relative">
        <img
          src={imagePath}
          alt={course.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/1e293b?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* Title */}
        <h4 className="font-heading text-h4 text-Primary-900 text-left">
          {course.name}
        </h4>

        {/* Info Badges */}
        <div className="flex flex-wrap gap-2">
          {/* Module Count Tag */}
          <Tag
            icon={BookOpenTextIcon}
            label={`${course.totalModules} modules`}
            variant="module"
          />

          {/* Available Points Tag */}
          <Tag
            icon={TrophyIcon}
            label={`${course.totalPoints} points`}
            variant="module"
          />

          {/* Achieved Points Tag */}
          <Tag
            icon={StarIcon}
            label={`${achievedPoints}/${course.totalPoints} earned`}
            variant="default"
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <SegmentedProgressBar
                current={completedModules}
                total={course.totalModules}
                variant="secondary"
                className="flex-wrap gap-y-2"
              />
            </div>
            <span className="text-md text-Primary-900 font-medium self-end">
              {completedModules}/{course.totalModules}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant={isSelected ? "secondary" : "default"}
          shadow={isSelected ? "orange" : "blue"}
          onClick={(e) => {
            e.stopPropagation();
            onClick && onClick(course);
          }}
          className="mt-auto"
        >
          {isSelected ? "Tutup Modul" : "Buka Modul"}
        </Button>
      </div>
    </div>
  );
}

export function CourseCardSkeleton({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col bg-w-lb rounded-lg shadow-deep-blue-60 border border-Primary-50 overflow-hidden w-full h-full",
        className,
      )}
    >
      {/* Top Image Section Skeleton */}
      <Skeleton className="h-[160px] w-full rounded-none" />

      {/* Content Section Skeleton */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* Title Skeleton */}
        <Skeleton className="h-8 w-3/4 rounded-md" />

        {/* Info Badges Skeleton */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        {/* Progress Bar Skeleton */}
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-3">
            <Skeleton className="h-2 flex-1 rounded-full" />
            <Skeleton className="h-4 w-10 rounded-md" />
          </div>
        </div>

        {/* Action Button Skeleton */}
        <Skeleton className="h-10 w-full rounded-sm mt-auto" />
      </div>
    </div>
  );
}
