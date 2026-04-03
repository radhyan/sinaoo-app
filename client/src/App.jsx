import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseList from "./pages/CourseList";
import Leaderboard from "./pages/Leaderboard";
import Achievement from "./pages/Achievement";
import Profile from "./pages/Profile";
import ModuleDetail from "./pages/ModuleDetail";
import DailyQuiz from "./pages/DailyQuiz";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Layout from "@/components/layout/Layout";

import { UserProvider } from "@/context/UserContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import AchievementPopupManager from "@/components/AchievementPopupManager";

function App() {
  return (
    <UserProvider>
      <AchievementPopupManager />
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* TEST ROUTE */}

            {/* PUBLIC ROUTE (No Sidebar) */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />

            {/* PROTECTED ROUTES (With Sidebar) */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/achievement" element={<Achievement />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* MODULE DETAIL (Custom Layout) */}
            <Route path="/modules/:moduleId" element={<ModuleDetail />} />

            {/* DAILY QUIZ (Standalone) */}
            <Route path="/quiz/daily" element={<DailyQuiz />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  );
}

export default App;
