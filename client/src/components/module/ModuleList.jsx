import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeftIcon, BookOpenTextIcon } from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import ModuleCard, {
  ModuleCardSkeleton,
} from "@/components/shared/cards/ModuleCard";
import { useUser } from "@/context/UserContext";
import { useSubcategoryFilter } from "@/hooks/useSubcategoryFilter";

export default function ModuleList({ course, onBack }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();
  const {
    selectedSubcategory,
    setSelectedSubcategory,
    subcategories,
    filteredItems: filteredModules,
  } = useSubcategoryFilter(modules, course);

  const fetchModules = useCallback(async () => {
    if (!course) return;

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `http://localhost:3000/api/courses/${course._id}/modules`,
      );
      if (res.ok) {
        const data = await res.json();
        setModules(data);
      } else {
        throw new Error("Gagal mengambil daftar modul");
      }
    } catch (err) {
      console.error("Failed to fetch modules:", err);
      setError("Gagal memuat modul. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  }, [course]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

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
            className="drop-shadow-blue-60 scale-75 lg:scale-100"
          />
          <h2 className="font-heading text-h4 lg:text-h3 text-Primary-900">
            Modul
          </h2>
        </div>
      </div>

      {/* Subcategory Filter Chips */}
      {!loading && !error && subcategories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-4 -mt-2 mb-2 px-1 shrink-0">
          {subcategories.map((sub, index) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-body-sm md:text-body-md lg:text-body-l font-medium transition-all duration-200 border ${
                selectedSubcategory === sub
                  ? "bg-Primary-100/50 text-Primary-500 border-Primary-500 shadow-blue-60"
                  : "bg-surface text-Grayscale-800 border-Grayscale-300 hover:bg-Grayscale-50"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Module Grid */}
      <div className="flex-1 overflow-y-auto custom-scrollbar rounded-lg md:rounded-xl ">
        <div className="grid grid-cols-1 min-[1370px]:grid-cols-2 gap-4 pb-6">
          {loading ? (
            <>
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
              <ModuleCardSkeleton />
            </>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 col-span-full">
              <p className="text-body-md text-Error-400 font-medium text-center px-6">
                {error}
              </p>
              <RefreshButton onRefresh={fetchModules} loading={loading} />
            </div>
          ) : (
            filteredModules.map((module, index) => {
              const userProgress = user?.progress?.find(
                (p) => String(p.moduleId) === String(module._id),
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
                    subcategory={module.subcategory}
                    points={
                      isCompleted ? userProgress.score : module.totalPoints
                    }
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    href={href}
                    actionLabel={actionLabel}
                    secondaryActionLabel={secondaryActionLabel}
                    secondaryHref={secondaryHref}
                    isCompleted={isCompleted}
                    className={
                      !isCompleted && currentStep > 0
                        ? "border-Primary-200"
                        : ""
                    }
                  />
                </div>
              );
            })
          )}
          {!loading &&
            !error &&
            filteredModules.length === 0 &&
            modules.length > 0 && (
              <p className="text-center text-Grayscale-500 py-10 col-span-full">
                Tidak ada modul untuk subkategori ini.
              </p>
            )}
          {!loading && !error && modules.length === 0 && (
            <p className="text-center text-Grayscale-500 py-10 col-span-full">
              Belum ada modul tersedia untuk kelas ini.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
