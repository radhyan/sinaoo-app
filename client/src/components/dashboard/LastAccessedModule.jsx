import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import ModuleCard, {
  ModuleCardSkeleton,
} from "@/components/shared/cards/ModuleCard";

export default function LastAccessedModule({ username, className }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLastAccessed = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/api/users/${username}/last-accessed`,
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
    };

    if (username) {
      fetchLastAccessed();
    }
  }, [username]);

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
        <p className="text-body-l text-Primary-900 font-medium text-center px-6">
          {error || "Belum ada modul yang sedang dipelajari saat ini."}
        </p>
        {!error && (
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
      {modules.map((module) => {
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
  );
}
