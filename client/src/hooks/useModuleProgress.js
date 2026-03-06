import { useState, useEffect, useMemo, useCallback } from "react";
import { apiUrl } from "@/lib/api";

export function useModuleProgress(moduleId, user, login) {
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isModuleCompleted = useMemo(() => {
    if (!user || !moduleData) return false;
    const userProgress = user.progress?.find(
      (p) => String(p.moduleId) === String(moduleId),
    );
    return userProgress?.isCompleted || false;
  }, [user, moduleData, moduleId]);

  const fetchModule = useCallback(
    async (existingProgress) => {
      try {
        setLoading(true);
        setError(null);
        const minLoadingDelay = new Promise((resolve) =>
          setTimeout(resolve, 2000),
        );
        const [res] = await Promise.all([
          fetch(
            apiUrl(`/api/modules/${moduleId}${user?.username ? `?username=${user.username}` : ""}`),
          ),
          minLoadingDelay,
        ]);
        if (!res.ok) throw new Error("Failed to fetch module");

        const data = await res.json();
        let transformedData = {
          ...data,
          title: data.name,
          steps: data.steps.map((step, index) => ({
            ...step,
            id: step._id || step.id || `s${index + 1}`,
          })),
        };

        if (existingProgress) {
          const percentage = existingProgress.completionPercentage || 0;
          const totalSteps = transformedData.steps.length;
          const completedStepsCount = Math.round(
            (percentage / 100) * totalSteps,
          );

          transformedData.steps = transformedData.steps.map((step, index) => {
            if (index < completedStepsCount) {
              return { ...step, status: "completed" };
            } else if (index === completedStepsCount) {
              return { ...step, status: "active" };
            } else {
              return { ...step, status: "locked" };
            }
          });

          if (completedStepsCount === 0 && transformedData.steps.length > 0) {
            transformedData.steps[0].status = "active";
          }
        } else if (transformedData.steps.length > 0) {
          transformedData.steps[0].status = "active";
        }

        setModuleData({ ...transformedData, rank: data.rank });
      } catch (err) {
        console.error("Error fetching module:", err);
        setError("Gagal memuat modul. Periksa koneksi internet Anda.");
      } finally {
        setLoading(false);
      }
    },
    [moduleId, user?.username],
  );

  const updateProgress = async ({
    completedStepCount,
    isFinished = false,
    isReset = false,
    score,
    quizAnswers,
    flaggedQuestions,
  }) => {
    if (!user || !moduleData) return;

    const totalSteps = moduleData.steps.length;
    const completionPercentage = Math.round(
      (completedStepCount / totalSteps) * 100,
    );

    try {
      const res = await fetch(
        apiUrl(`/api/users/${user.username}/progress`),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            moduleId,
            courseId: moduleData.courseId,
            completionPercentage,
            isCompleted: isFinished,
            reset: isReset,
            score: isFinished ? score : undefined,
            quizAnswers: isReset ? {} : quizAnswers,
            flaggedQuestions: isReset ? {} : flaggedQuestions,
          }),
        },
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error(
          "Failed to update progress:",
          errorData.error || "Failed to update progress",
        );
        return null;
      }

      const freshUser = await res.json();
      setModuleData((prev) => ({ ...prev, rank: freshUser.rank }));
      login(freshUser);
      return freshUser;
    } catch (error) {
      console.error("Failed to update progress:", error);
      return null;
    }
  };

  useEffect(() => {
    if (moduleId && user) {
      const existingProgress = user.progress?.find(
        (p) => String(p.moduleId) === String(moduleId),
      );
      // Fetch if not loaded, or if data is for different module,
      // or if we just completed it and want to sync step statuses
      if (
        !moduleData ||
        moduleData._id !== moduleId ||
        (isModuleCompleted && moduleData.steps[0].status === "active")
      ) {
        fetchModule(existingProgress);
      }
    }
  }, [moduleId, user, moduleData?._id, isModuleCompleted, fetchModule]);

  return {
    moduleData,
    setModuleData,
    loading,
    error,
    updateProgress,
    isModuleCompleted,
    fetchModule,
  };
}


