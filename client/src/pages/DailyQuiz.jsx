import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import { LightningIcon, CheckCircleIcon } from "@phosphor-icons/react";
import LoadingBar from "@/components/shared/ui/LoadingBar";
import GradientIcon from "@/components/shared/ui/GradientIcon";

import useDailyQuiz, { STATES } from "@/hooks/useDailyQuiz";
import QuizReadyScreen from "@/components/dailyquiz/QuizReadyScreen";
import QuizQuestionScreen from "@/components/dailyquiz/QuizQuestionScreen";
import QuizResultsScreen from "@/components/dailyquiz/QuizResultsScreen";
import QuizRedemptionScreen from "@/components/dailyquiz/QuizRedemptionScreen";
import QuizFinalScreen from "@/components/dailyquiz/QuizFinalScreen";

export default function DailyQuiz() {
  const quiz = useDailyQuiz();
  const navigate = useNavigate();

  // ==================== LOADING ====================
  if (quiz.gameState === STATES.LOADING) {
    return (
      <div className="min-h-screen bg-w-lb flex flex-col items-center justify-center gap-6 p-6">
        <GradientIcon
          icon={LightningIcon}
          variant="orange"
          size={64}
          weight="fill"
          className="animate-bounce"
        />
        <p className="text-h3 font-heading text-Primary-900">
          Memuat Kuis Harian...
        </p>
        <LoadingBar className="w-full max-w-[240px]" variant="blue" />
      </div>
    );
  }

  // ==================== ALREADY DONE ====================
  if (quiz.gameState === STATES.ALREADY_DONE) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-md w-full text-center space-y-6">
          <GradientIcon
            icon={CheckCircleIcon}
            variant="green"
            size={64}
            weight="fill"
            className="mx-auto"
          />
          <h2 className="text-h3 font-heading text-Primary-900">
            Kuis Hari Ini Selesai!
          </h2>
          <p className="text-body-l text-Grayscale-700">
            Kamu sudah menyelesaikan Pop Quiz untuk hari ini dari course{" "}
            <span className="font-bold text-Primary-500">
              {quiz.courseName}
            </span>
            . Kembali lagi besok!
          </p>
          <Button
            variant="default"
            onClick={() => navigate("/dashboard")}
            className="w-full"
          >
            Kembali ke Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // ==================== ERROR ====================
  if (quiz.error && quiz.gameState === STATES.READY) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-blue-60 border border-Primary-50 p-8 max-w-md w-full text-center space-y-6">
          <p className="text-body-l text-Error-100 font-bold">{quiz.error}</p>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  // ==================== READY ====================
  if (quiz.gameState === STATES.READY) {
    return (
      <QuizReadyScreen
        courseName={quiz.courseName}
        onStart={quiz.handleStart}
      />
    );
  }

  // ==================== ANSWERING & FEEDBACK ====================
  if (
    quiz.gameState === STATES.ANSWERING ||
    quiz.gameState === STATES.FEEDBACK
  ) {
    return (
      <QuizQuestionScreen
        gameState={quiz.gameState}
        courseName={quiz.courseName}
        currentIndex={quiz.currentIndex}
        questions={quiz.questions}
        currentQuestion={quiz.currentQuestion}
        selectedAnswer={quiz.selectedAnswer}
        isTimerRunning={quiz.isTimerRunning}
        timerKey={quiz.timerKey}
        streak={quiz.streak}
        baseScore={quiz.baseScore}
        lastResult={quiz.lastResult}
        onSelectAnswer={quiz.handleSelectAnswer}
        onTimeUp={quiz.handleTimeUp}
        onNextQuestion={quiz.handleNextQuestion}
      />
    );
  }

  // ==================== RESULTS ====================
  if (quiz.gameState === STATES.RESULTS) {
    return (
      <QuizResultsScreen
        courseName={quiz.courseName}
        results={quiz.results}
        baseScore={quiz.baseScore}
        bestStreak={quiz.bestStreak}
        isSubmitting={quiz.isSubmitting}
        onStartRedemption={quiz.handleStartRedemption}
        onSkipRedemption={quiz.handleSkipRedemption}
        onSubmit={quiz.handleSubmit}
      />
    );
  }

  // ==================== REDEMPTION ====================
  if (
    quiz.gameState === STATES.REDEMPTION ||
    quiz.gameState === STATES.REDEMPTION_FEEDBACK
  ) {
    return (
      <QuizRedemptionScreen
        gameState={quiz.gameState}
        redemptionIndex={quiz.redemptionIndex}
        wrongQuestions={quiz.wrongQuestions}
        currentRedemptionQuestion={quiz.currentRedemptionQuestion}
        redemptionAnswer={quiz.redemptionAnswer}
        redemptionScore={quiz.redemptionScore}
        redemptionResults={quiz.redemptionResults}
        isSubmitting={quiz.isSubmitting}
        onRedemptionSelect={quiz.handleRedemptionSelect}
        onRedemptionNext={quiz.handleRedemptionNext}
      />
    );
  }

  // ==================== FINAL ====================
  if (quiz.gameState === STATES.FINAL) {
    return (
      <QuizFinalScreen
        courseName={quiz.courseName}
        questions={quiz.questions}
        results={quiz.results}
        baseScore={quiz.baseScore}
        redemptionScore={quiz.redemptionScore}
        redemptionResults={quiz.redemptionResults}
        bestStreak={quiz.bestStreak}
      />
    );
  }

  return null;
}
