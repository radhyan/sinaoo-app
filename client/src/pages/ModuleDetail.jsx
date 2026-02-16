import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowBendRightUpIcon } from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import ModuleSidebar from "@/components/module/ModuleSidebar";
import VideoContent from "@/components/module/VideoContent";
import ReadingContent from "@/components/module/ReadingContent";
import QuizContent from "@/components/module/QuizContent";
import QuizResult from "@/components/module/QuizResult";
import QuizReview from "@/components/module/QuizReview";
import ModuleNavigation from "@/components/module/ModuleNavigation";

import { useUser } from "@/context/UserContext";
import { useModuleProgress } from "@/hooks/useModuleProgress";
import { useQuizState } from "@/hooks/useQuizState";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";

export default function ModuleDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentStepId, setCurrentStepId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollRef = useRef(null);

  // Determine view mode from URL
  const queryParams = new URLSearchParams(location.search);
  const modeParam = queryParams.get("mode");
  const [viewMode, setViewMode] = useState(
    modeParam === "result"
      ? "result"
      : modeParam === "review"
        ? "review"
        : "content",
  );

  // Custom Hooks
  const {
    moduleData,
    setModuleData,
    loading,
    error,
    updateProgress,
    isModuleCompleted,
    fetchModule,
  } = useModuleProgress(moduleId, user, login);

  const {
    quizAnswers,
    setQuizAnswers,
    flaggedQuestions,
    setFlaggedQuestions,
    toggleFlag,
    isQuizComplete,
    score,
    totalPoints,
    correctCount,
    totalQuestions,
  } = useQuizState(
    moduleData,
    user?.progress?.find((p) => p.moduleId === moduleId)?.quizAnswers || {},
    user?.progress?.find((p) => p.moduleId === moduleId)?.flaggedQuestions ||
      {},
  );

  // Steps data
  const steps = moduleData?.steps || [];
  const currentStep = steps.find((s) => s.id === currentStepId);
  const currentStepIndex = steps.findIndex((s) => s.id === currentStepId);
  const prevStep = steps[currentStepIndex - 1];
  const nextStep = steps[currentStepIndex + 1];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  // Effects
  const handleRestart = async () => {
    await updateProgress({
      completedStepCount: 0,
      isFinished: false,
      isReset: true,
      quizAnswers: {},
      flaggedQuestions: {},
    });
    setQuizAnswers({});
    setFlaggedQuestions({});
    setModuleData((prev) => ({
      ...prev,
      steps: prev.steps.map((s, i) => ({
        ...s,
        status: i === 0 ? "active" : "locked",
      })),
    }));
    setCurrentStepId(steps[0]?.id || "s1");
    setViewMode("content");
    if (modeParam === "reset") {
      navigate(location.pathname, { replace: true });
    }
  };

  const handleRefresh = () => {
    const existingProgress = user.progress?.find(
      (p) => p.moduleId === moduleId,
    );
    fetchModule(existingProgress);
  };

  useEffect(() => {
    if (modeParam === "reset" && moduleData && user) {
      handleRestart();
    } else if (modeParam === "result") {
      setViewMode("result");
      setCurrentStepId("result");
    }
  }, [modeParam, moduleData, user]);

  useEffect(() => {
    if (!currentStepId && steps.length > 0 && viewMode === "content") {
      const activeStep = steps.find((s) => s.status === "active") || steps[0];
      setCurrentStepId(activeStep.id);
    }
  }, [steps, currentStepId, viewMode]);

  // "Ping" the API to update lastAccessed when the module is opened
  useEffect(() => {
    if (moduleData && user && viewMode === "content" && currentStepId) {
      const pingProgress = async () => {
        // Find current progress index to avoid resetting anything
        const idx = steps.findIndex((s) => s.id === currentStepId);
        if (idx !== -1) {
          updateProgress({
            completedStepCount: idx,
            isFinished: false,
          });
        }
      };
      pingProgress();
    }
  }, [moduleId, user?._id]); // Only ping when moduleId or user changes

  // Manual save trigger
  const handleSave = async () => {
    if (viewMode === "content" && currentStep?.type === "quiz") {
      console.log("[Quiz] Manual saving...");
      await updateProgress({
        completedStepCount: currentStepIndex,
        isFinished: false,
        score,
        quizAnswers,
        flaggedQuestions,
      });
    }
  };

  // Debounced effect to save quiz answers partially
  useEffect(() => {
    if (viewMode !== "content" || !currentStep || currentStep.type !== "quiz") {
      return;
    }

    // Only save if there are actually answers or flags to avoid unnecessary API calls
    if (
      Object.keys(quizAnswers).length === 0 &&
      Object.keys(flaggedQuestions).length === 0
    )
      return;

    const timer = setTimeout(() => {
      updateProgress({
        completedStepCount: currentStepIndex, // Don't advance, just save current index
        isFinished: false,
        score,
        quizAnswers,
        flaggedQuestions,
      });
      console.log("[Quiz] Auto-saving answers & flags...", {
        quizAnswers,
        flaggedQuestions,
      });
    }, 1000); // Reduced to 1s

    return () => clearTimeout(timer);
  }, [quizAnswers, flaggedQuestions, currentStep, viewMode, currentStepIndex]);

  // Handlers
  const scrollToTop = () =>
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  const handleSidebarStepClick = (id) => {
    if (id === "result") {
      setViewMode("result");
      setCurrentStepId("result");
      return;
    }
    const targetIndex = steps.findIndex((s) => s.id === id);
    const targetStep = steps[targetIndex];

    if (targetIndex !== -1) {
      updateProgress({ completedStepCount: targetIndex, isFinished: false });
    }

    setCurrentStepId(id);

    // If module is completed and we click a quiz, go straight to review mode
    if (isModuleCompleted && targetStep?.type === "quiz") {
      setViewMode("review");
    } else {
      setViewMode("content");
    }
  };

  const handlePrev = () => {
    if (prevStep) {
      setCurrentStepId(prevStep.id);
      if (isModuleCompleted && prevStep.type === "quiz") {
        setViewMode("review");
      } else {
        setViewMode("content");
      }
      scrollToTop();
    } else if (currentStepId === "result") {
      // If on result page, prev goes to last step
      const lastStep = steps[steps.length - 1];
      if (lastStep) {
        setCurrentStepId(lastStep.id);
        if (isModuleCompleted && lastStep.type === "quiz") {
          setViewMode("review");
        } else {
          setViewMode("content");
        }
      }
      scrollToTop();
    }
  };

  const handleNext = async () => {
    setModuleData((prev) => {
      const newSteps = [...prev.steps];
      newSteps[currentStepIndex] = {
        ...newSteps[currentStepIndex],
        status: "completed",
      };
      if (nextStep && nextStep.status === "locked") {
        newSteps[currentStepIndex + 1] = {
          ...newSteps[currentStepIndex + 1],
          status: "active",
        };
      }
      return { ...prev, steps: newSteps };
    });

    if (isLastStep) {
      if (!isQuizComplete) {
        console.warn("[ModuleDetail] Quiz not complete, cannot finish.");
        return;
      }

      console.log(
        "[ModuleDetail] Finishing module, transitioning to results...",
      );

      // Update local state first for immediate UI transition
      setViewMode("result");
      setCurrentStepId("result");
      scrollToTop();

      // Send update to server in background
      try {
        await updateProgress({
          completedStepCount: steps.length,
          isFinished: true,
          score,
          quizAnswers,
          flaggedQuestions,
        });
        console.log("[ModuleDetail] Progress saved successfully.");
      } catch (err) {
        console.error("[ModuleDetail] Failed to save progress:", err);
      }
      return;
    }

    updateProgress({
      completedStepCount: currentStepIndex + 1,
      isFinished: false,
    });
    if (nextStep) {
      setCurrentStepId(nextStep.id);
      if (isModuleCompleted && nextStep.type === "quiz") {
        setViewMode("review");
      } else {
        setViewMode("content");
      }
      scrollToTop();
    }
  };

  const handleStepComplete = (stepId) => {
    handleNext(); // Reuse handleNext for auto-advance
  };

  const renderContent = () => {
    if (viewMode === "result") {
      return (
        <QuizResult
          score={score}
          totalPoints={totalPoints}
          correctCount={correctCount}
          totalQuestions={totalQuestions}
          onReview={() => {
            setViewMode("review");
            scrollToTop();
          }}
          onRestart={handleRestart}
          onFinish={() => navigate("/courses")}
        />
      );
    }

    if (viewMode === "review") {
      const quizStep =
        currentStep?.type === "quiz"
          ? currentStep
          : steps.find((s) => s.type === "quiz");
      return (
        <QuizReview
          questions={quizStep?.questions || []}
          answers={quizAnswers}
          onBack={() => {
            setViewMode("result");
            scrollToTop();
          }}
        />
      );
    }

    if (!currentStep) {
      if (viewMode === "content") return null; // Wait for auto-init effect
      return <div className="text-center p-10">Step not found</div>;
    }

    switch (currentStep.type) {
      case "quiz":
        return (
          <QuizContent
            answers={quizAnswers}
            setAnswers={setQuizAnswers}
            flaggedQuestions={flaggedQuestions}
            onToggleFlag={toggleFlag}
            questions={currentStep.questions}
            isQuizComplete={isQuizComplete}
            onFinish={handleNext}
          />
        );
      case "video":
        return (
          <VideoContent
            step={currentStep}
            onComplete={() => handleStepComplete(currentStep.id)}
          />
        );
      default:
        return <ReadingContent step={currentStep} />;
    }
  };

  if (loading && !moduleData)
    return <div className="p-10 flex justify-center">Loading module...</div>;

  if (error || !moduleData)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-6 p-6">
        <p className="text-center font-bold text-body-md text-Error-400 px-10">
          {error || "Modul tidak ditemukan."}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => navigate("/courses")}>
            Kembali ke Daftar Kelas
          </Button>
          {error && (
            <RefreshButton onRefresh={handleRefresh} loading={loading} />
          )}
        </div>
      </div>
    );

  return (
    <div className="flex h-screen gap-6 p-6 bg-Grayscale-50 overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-[300px]" : "w-[88px]"} flex-shrink-0`}
      >
        <ModuleSidebar
          module={moduleData}
          currentStepId={currentStepId}
          onStepClick={handleSidebarStepClick}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isModuleCompleted={isModuleCompleted}
          onExit={handleSave}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <div
          ref={scrollRef}
          onScroll={(e) => setShowScrollTop(e.target.scrollTop > 300)}
          className="flex-1 overflow-y-auto custom-scrollbar bg-transparent relative"
        >
          <div className="bg-white rounded-xl shadow-sm border border-Grayscale-100 p-8 min-h-full flex flex-col justify-between">
            <div className="flex-1">{renderContent()}</div>

            {viewMode === "content" && currentStep && (
              <ModuleNavigation
                onPrev={handlePrev}
                onNext={handleNext}
                prevDisabled={!prevStep}
                nextDisabled={!nextStep && !isLastStep}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
              />
            )}

            {viewMode === "review" && (
              <ModuleNavigation
                onPrev={() => {
                  if (prevStep) {
                    setCurrentStepId(prevStep.id);
                    if (prevStep.type === "quiz") {
                      setViewMode("review");
                    } else {
                      setViewMode("content");
                    }
                  } else {
                    setViewMode("result");
                  }
                  scrollToTop();
                }}
                onNext={() => {
                  if (nextStep) {
                    setCurrentStepId(nextStep.id);
                    if (nextStep.type === "quiz") {
                      setViewMode("review");
                    } else {
                      setViewMode("content");
                    }
                  } else {
                    setViewMode("result");
                  }
                  scrollToTop();
                }}
                prevDisabled={false} // Allow going to prev step or result
                nextDisabled={false} // Allow going to next step or result
                isFirstStep={false}
                isLastStep={false} // Never truly last as it can go to result
              />
            )}
          </div>

          {showScrollTop && (
            <Button
              variant="outline"
              className="fixed bottom-36 right-16 shadow-deep-blue-60 z-50 transition-all duration-300"
              onClick={scrollToTop}
              rightIcon={<ArrowBendRightUpIcon size={20} weight="bold" />}
            >
              ke atas
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
