import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import Navbar from "./Navbar";

const ForgotPassword = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [
    newPassword,
    setNewPassword,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleReset =
    async () => {

      try {

        setLoading(true);

        setMessage("");

        const res = await fetch(
          "http://verifycareers-backend.onrender.com/api/auth/forgot-password",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              newPassword,
            }),
          }
        );

        const data =
          await res.json();

        setMessage(
          data.message
        );

        // ✅ REDIRECT TO LOGIN
        if (data.success) {

          setTimeout(() => {

            navigate("/login");

          }, 1500);
        }

      } catch (error) {

        console.error(error);

        setMessage(
          "Password reset failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f6f8fc] flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white rounded-[32px] shadow-xl border border-gray-100 p-8">

          <div className="text-center mb-8">

            <div className="text-6xl mb-4">
              🔐
            </div>

            <h1 className="text-4xl font-bold text-[#111827]">
              Forgot Password
            </h1>

            <p className="text-gray-500 mt-3">
              Reset your VerifyCareers password
            </p>

          </div>

          {/* EMAIL */}
          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-6">

            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword
                  ? "🙈"
                  : "👁️"}
              </button>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleReset}
            disabled={loading}
            className={`w-full py-4 rounded-2xl text-white text-lg font-semibold transition
            ${
              loading
                ? "bg-gray-400"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02]"
            }`}
          >

            {loading
              ? "Resetting..."
              : "Reset Password"}

          </button>

          {/* MESSAGE */}
          {message && (

            <div className="mt-5 text-center text-sm font-medium text-blue-600">
              {message}
            </div>

          )}

          {/* BACK BUTTON */}
          <button
            onClick={() =>
              navigate("/login")
            }
            className="mt-5 w-full py-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition"
          >
            Back to Login
          </button>

        </div>

      </div>
    </>
  );
};

export default ForgotPassword;