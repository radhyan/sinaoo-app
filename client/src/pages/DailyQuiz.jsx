import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, CaretLeftIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import QuizContent from "@/components/module/QuizContent";
import QuizResult from "@/components/module/QuizResult";
import QuizReview from "@/components/module/QuizReview";
import { useUser } from "@/context/UserContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shared/ui/AlertDialog";

const MOCK_QUESTIONS = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Apa ibu kota Indonesia?",
    options: [
      { id: "a", text: "Jakarta" },
      { id: "b", text: "Bandung" },
      { id: "c", text: "Surabaya" },
      { id: "d", text: "Medan" },
    ],
    correctAnswer: "a",
    points: 10,
    explanation:
      "Jakarta adalah ibu kota negara Indonesia dan kota terbesar di Indonesia.",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Siapakah presiden pertama Indonesia?",
    options: [
      { id: "a", text: "Soeharto" },
      { id: "b", text: "B.J. Habibie" },
      { id: "c", text: "Ir. Soekarno" },
      { id: "d", text: "Joko Widodo" },
    ],
    correctAnswer: "c",
    points: 10,
    explanation:
      "Ir. Soekarno adalah proklamator kemerdekaan Indonesia dan menjabat sebagai presiden pertama dari tahun 1945 hingga 1967.",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Apa nama planet terdekat dengan Matahari?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Bumi" },
      { id: "c", text: "Mars" },
      { id: "d", text: "Merkurius" },
    ],
    correctAnswer: "d",
    points: 10,
    explanation:
      "Merkurius adalah planet terkecil di Tata Surya sekaligus yang terdekat dari Matahari.",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Hewan apa yang merupakan simbol negara Indonesia?",
    options: [
      { id: "a", text: "Harimau Sumatera" },
      { id: "b", text: "Burung Garuda" },
      { id: "c", text: "Komodo" },
      { id: "d", text: "Gajah Lampung" },
    ],
    correctAnswer: "b",
    points: 10,
    explanation:
      "Garuda Pancasila adalah lambang negara Indonesia dengan semboyan Bhinneka Tunggal Ika.",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Benua terbesar di dunia adalah...",
    options: [
      { id: "a", text: "Afrika" },
      { id: "b", text: "Amerika Utara" },
      { id: "c", text: "Eropa" },
      { id: "d", text: "Asia" },
    ],
    correctAnswer: "d",
    points: 10,
    explanation:
      "Asia adalah benua terbesar di Bumi yang berbatasan dengan Pegunungan Ural dan Kaukasus serta Samudra Arktik, Pasifik, dan Hindia.",
  },
];

export default function DailyQuiz() {
  const navigate = useNavigate();
  const { user, refreshUser } = useUser();
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  // Load answers from localStorage on mount if they exist for today
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const savedData = localStorage.getItem(`daily_quiz_${today}`);
    if (savedData) {
      try {
        const { answers: savedAnswers } = JSON.parse(savedData);
        setAnswers(savedAnswers);
        setIsFinished(true);
      } catch (e) {
        console.error("Failed to parse saved answers", e);
      }
    }

    // Check if we should jump straight to review
    const params = new URLSearchParams(location.search);
    if (params.get("review") === "true") {
      setIsReviewing(true);
    }
  }, [location]);

  // Derived state
  const totalQuestions = MOCK_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const isQuizComplete = answeredCount === totalQuestions;

  // Calculate results
  const result = useMemo(() => {
    let score = 0;
    let correctCount = 0;
    let totalPoints = 0;

    MOCK_QUESTIONS.forEach((q) => {
      totalPoints += q.points;
      if (answers[q.id] === q.correctAnswer) {
        score += q.points;
        correctCount++;
      }
    });

    return { score, correctCount, totalPoints };
  }, [answers, isFinished]);

  const toggleFlag = (id) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      // Award points and record completion for mission tracking
      const res = await fetch(
        `http://localhost:3000/api/users/${user.username}/points`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            points: result.score,
            description: "Daily Quiz Completed",
          }),
        },
      );

      if (!res.ok) throw new Error("Failed to register quiz completion");

      // Refresh user to update Points and Daily Missions on Dashboard
      await refreshUser(user.username);

      // Save answers to localStorage for later review
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem(
        `daily_quiz_${today}`,
        JSON.stringify({ answers, completedAt: new Date().toISOString() }),
      );

      setIsFinished(true);
    } catch (error) {
      console.error("Error finishing quiz:", error);
      alert("Gagal menyimpan hasil kuis. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isReviewing) {
    return (
      <div className="min-h-screen bg-w-lb-180 flex flex-col items-start p-6">
        <div className="w-full h-full bg-white rounded-xl shadow-blue-60 border border-Grayscale-50 p-8">
          <QuizReview
            questions={MOCK_QUESTIONS}
            answers={answers}
            onBack={() => setIsReviewing(false)}
          />
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-w-lb flex items-center justify-center p-6">
        <div className="w-full bg-white rounded-xl shadow-blue-60 border border-Primary-50 p-8">
          <QuizResult
            score={result.score}
            totalPoints={result.totalPoints}
            correctCount={result.correctCount}
            totalQuestions={totalQuestions}
            onFinish={() => navigate("/dashboard")}
            onReview={() => setIsReviewing(true)}
            title="Pop Quiz Selesai!"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-w-lb-180 flex flex-col">
      {/* Header */}
      <div className="border-b border-Primary-50 px-8 py-4 gap-8 flex items-center sticky top-0 z-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="exitAlert"
              size="icon"
              shadow="none"
              leftIcon={XIcon}
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Keluar Kuis?</AlertDialogTitle>
              <AlertDialogDescription>
                Apakah Anda yakin ingin keluar dari kuis ini? <br />
                Progress anda pada kuis ini tidak akan tersimpan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="sm:justify-between">
              <AlertDialogAction asChild>
                <Button
                  variant="destructive"
                  onClick={() => navigate("/dashboard")}
                  shadow="none"
                  className="border-none"
                >
                  Keluar
                </Button>
              </AlertDialogAction>
              <AlertDialogCancel asChild>
                <Button variant="ghost">Tidak</Button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="flex flex-col items-start">
          <h1 className="text-h3 font-heading text-Grayscale-900 mb-1">
            Pop Quiz Harian
          </h1>
          <p className="text-body-md text-Grayscale-800">
            Jawab semua pertanyaan untuk mendapatkan poin!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 mx-auto w-full p-6">
        <div className="bg-Grayscale-50 rounded-xl shadow-blue-60 border border-Primary-50 p-8">
          <QuizContent
            questions={MOCK_QUESTIONS}
            answers={answers}
            setAnswers={setAnswers}
            flaggedQuestions={flaggedQuestions}
            onToggleFlag={toggleFlag}
            isQuizComplete={isQuizComplete}
            onFinish={handleFinish}
          />
        </div>
      </div>
    </div>
  );
}
