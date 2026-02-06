import { useState, useEffect, useMemo } from "react";

export function useModuleProgress(moduleId, user, login) {
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);

  const isModuleCompleted = useMemo(() => {
    if (!user || !moduleData) return false;
    const userProgress = user.progress?.find((p) => p.moduleId === moduleId);
    return userProgress?.isCompleted || false;
  }, [user, moduleData, moduleId]);

  const fetchModule = async (existingProgress) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/api/modules/${moduleId}`);
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
        const completedStepsCount = Math.round((percentage / 100) * totalSteps);

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

      setModuleData(transformedData);
    } catch (err) {
      console.error("Error fetching module:", err);
    } finally {
      setLoading(false);
    }
  };

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
        `http://localhost:3000/api/users/${user.username}/progress`,
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

      if (res.ok) {
        const freshUser = await res.json();
        login(freshUser);
        return freshUser;
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    }
  };

  useEffect(() => {
    if (moduleId && user) {
      // Only fetch if moduleData is not loaded or if we switched to a different module
      if (!moduleData || moduleData._id !== moduleId) {
        const existingProgress = user.progress?.find(
          (p) => p.moduleId === moduleId,
        );
        fetchModule(existingProgress);
      }
    }
  }, [moduleId, user, moduleData]);

  return {
    moduleData,
    setModuleData,
    loading,
    updateProgress,
    isModuleCompleted,
    fetchModule,
  };
}
