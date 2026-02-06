import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, BookOpenTextIcon } from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import ModuleCard, {
  ModuleCardSkeleton,
} from "@/components/shared/cards/ModuleCard";
import { useUser } from "@/context/UserContext";

export default function ModuleList({ course, onBack }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    if (!course) return;

    const fetchModules = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/api/courses/${course._id}/modules`,
        );
        if (res.ok) {
          const data = await res.json();
          setModules(data);
        }
      } catch (err) {
        console.error("Failed to fetch modules:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, [course]);

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 shrink-0 relative z-10">
        <Button
          variant="ghostDark"
          size="default"
          shadow="none"
          onClick={onBack}
          leftIcon={<ArrowLeftIcon weight="bold" />}
        />
        <div className="flex items-center gap-2">
          <GradientIcon
            icon={BookOpenTextIcon}
            size={36}
            weight="fill"
            variant="green"
            className="drop-shadow-blue-60"
          />
          <h2 className="font-heading text-h3 text-Primary-900">Modul</h2>
        </div>
      </div>

      {/* Module Grid */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-1 ">
        <div className="grid grid-cols-1 gap-4 pb-6">
          {loading ? (
            <>
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
            </>
          ) : (
            modules.map((module, index) => {
              const userProgress = user?.progress?.find(
                (p) => p.moduleId === module._id,
              );

              const isCompleted = userProgress?.isCompleted || false;
              const percentage = userProgress?.completionPercentage || 0;
              const totalSteps = module.steps?.length || 3;
              const currentStep = isCompleted
                ? totalSteps
                : Math.round((percentage / 100) * totalSteps);

              const actionLabel = isCompleted
                ? "Ulangi Modul"
                : currentStep > 0
                  ? "Lanjutkan Modul"
                  : "Mulai Modul";

              const href = isCompleted
                ? `/modules/${module._id}?mode=reset`
                : `/modules/${module._id}`;

              const secondaryActionLabel = isCompleted ? "Hasil Modul" : null;
              const secondaryHref = isCompleted
                ? `/modules/${module._id}?mode=result`
                : null;

              return (
                <div
                  key={module._id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ModuleCard
                    title={module.name}
                    category={course.name}
                    points={module.totalPoints}
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    href={href}
                    actionLabel={actionLabel}
                    secondaryActionLabel={secondaryActionLabel}
                    secondaryHref={secondaryHref}
                    isCompleted={isCompleted}
                    className={
                      isCompleted
                        ? "bg-Secondary-100 border-Secondary-200"
                        : currentStep > 0
                          ? "border-Primary-200"
                          : ""
                    }
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
