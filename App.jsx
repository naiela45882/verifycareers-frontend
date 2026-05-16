import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import LoginSignup from "./LoginSignup";
import UploadRisk from "./UploadRisk";
import History from "./History";
import ResumeAnalyzer from "./ResumeAnalyzer";
import CommunityForum from "./CommunityForum";
import FloatingChatbot from "./FloatingChatbot";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* LOGIN / SIGNUP */}
        <Route
          path="/login"
          element={<LoginSignup />}
        />
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>


        {/* PROTECTED ROUTES */}

        {/* AI SCAM ANALYZER */}
        <Route
          path="/analyze"
          element={
            <ProtectedRoute>
              <UploadRisk />
            </ProtectedRoute>
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        {/* RESUME ANALYZER */}
        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <ResumeAnalyzer />
            </ProtectedRoute>
          }
        />

        {/* COMMUNITY FORUM */}
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <CommunityForum />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* FLOATING AI CHATBOT */}
      <FloatingChatbot />

    </BrowserRouter>

  );
}

export default App;