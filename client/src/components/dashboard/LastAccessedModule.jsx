import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";
import ModuleCard, {
  ModuleCardSkeleton,
} from "@/components/shared/cards/ModuleCard";
import { BookBookmarkIcon, BookmarkIcon } from "@phosphor-icons/react";
import { apiUrl } from "@/lib/api";

export default function LastAccessedModule({ username, className }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLastAccessed = useCallback(async () => {
    if (!username) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        apiUrl(`/api/users/${username}/last-accessed`),
      );
      if (!res.ok) throw new Error("Failed to fetch last accessed modules");
      const data = await res.json();
      setModules(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat modul terakhir.");
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchLastAccessed();
  }, [fetchLastAccessed]);

  if (loading) {
    return (
      <div className={cn("grid grid-cols-1 gap-3", className)}>
        <ModuleCardSkeleton />
        <ModuleCardSkeleton />
      </div>
    );
  }

  if (error || modules.length === 0) {
    return (
      <div
        className={cn(
          "bg-none p-4 rounded-xl flex flex-col justify-center items-center h-[300px] gap-4",
          className,
        )}
      >
        <p
          className={cn(
            "font-medium text-center px-6",
            error
              ? "text-body-md text-Error-400"
              : "text-body-l text-Primary-900",
          )}
        >
          {error || "Belum ada modul yang sedang dipelajari saat ini."}
        </p>
        {error ? (
          <RefreshButton onRefresh={fetchLastAccessed} loading={loading} />
        ) : (
          <Link to="/courses">
            <Button variant="default" shadow="blue">
              Mulai Belajar
            </Button>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-3">
        {modules.slice(0, 2).map((module) => {
          // Sync logic with ModuleList.jsx
          const isCompleted = module.isCompleted || false;
          const currentStep = module.currentStep;
          const totalSteps = module.totalSteps;

          const actionLabel = isCompleted
            ? "Ulangi Modul"
            : currentStep > 0
              ? "Lanjutkan Modul"
              : "Mulai Modul";

          const href = isCompleted
            ? `/modules/${module.moduleId}?mode=reset`
            : `/modules/${module.moduleId}`;

          return (
            <ModuleCard
              key={module.moduleId}
              title={module.title}
              category={module.category}
              subcategory={module.subcategory}
              points={module.points}
              currentStep={currentStep}
              totalSteps={totalSteps}
              href={href}
              actionLabel={actionLabel}
              isCompleted={isCompleted}
            />
          );
        })}
      </div>

      {modules.length < 2 && (
        <div className="flex justify-center mt-2 animate-in fade-in slide-in-from-top-2 duration-500">
          <Link to="/courses">
            <Button
              variant="outline"
              size="lg"
              shadow="none"
              className="mt-4"
              leftIcon={<BookBookmarkIcon weight="fill" />}
            >
              Modul Lainnya
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}


