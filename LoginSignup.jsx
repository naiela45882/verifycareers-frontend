
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { toast } from "react-hot-toast";

const LoginSignup = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // =========================
  // SIGNUP MODE
  // =========================
  const [isSignup, setIsSignup] =
    useState(false);

  // =========================
  // FORM STATE
  // =========================
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  // =========================
  // ERROR
  // =========================
  const [error, setError] =
    useState("");

  // =========================
  // PASSWORD SHOW/HIDE
  // =========================
  const [showPassword, setShowPassword] =
    useState(false);

  // =========================
  // AUTO OPEN SIGNUP
  // =========================
  useEffect(() => {

    const params =
      new URLSearchParams(
        location.search
      );

    const mode =
      params.get("mode");

    if (mode === "signup") {

      setIsSignup(true);

    }

  }, [location]);

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async () => {

    // CLEAR ERROR
    setError("");

    const url = isSignup
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    try {

      const res = await fetch(
        url,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            isSignup
              ? form
              : {
                  email: form.email,
                  password:
                    form.password,
                }
          ),
        }
      );

      const data =
        await res.json();

      console.log(
        "AUTH RESPONSE:",
        data
      );

      // =========================
      // ERROR
      // =========================
      if (!data.success) {

        const message =
          data.message ||
          "Something went wrong";

        setError(message);

        toast.error(message);

        return;

      }

      // =========================
      // LOGIN
      // =========================
      if (!isSignup) {

        localStorage.setItem(
          "token",
          data.token
        );

        toast.success(
          "Login successful"
        );

        setTimeout(() => {

          window.location.href =
            "/dashboard";

        }, 1200);

      }

      // =========================
      // SIGNUP
      // =========================
      else {

        toast.success(
          "Account created successfully"
        );

        // AUTO LOGIN
        const loginRes =
          await fetch(
            "http://localhost:5000/api/auth/login",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email: form.email,
                password:
                  form.password,
              }),
            }
          );

        const loginData =
          await loginRes.json();

        if (loginData.success) {

          localStorage.setItem(
            "token",
            loginData.token
          );

          toast.success(
            "Logged in successfully"
          );

          setTimeout(() => {

            window.location.href =
              "/analyze";

          }, 1200);

        }

      }

    } catch (error) {

      console.error(error);

      setError(
        "Server error. Please try again."
      );

      toast.error(
        "Server error. Please try again."
      );

    }
  };

  return (

    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f5f5f5]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-500 to-indigo-700 text-white p-16 flex-col justify-center">

        <h1 className="text-6xl font-bold leading-tight mb-8">
          Welcome to
          <br />
          VerifyCareers
        </h1>

        <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
          AI-powered platform for scam detection,
          resume analysis, and career safety guidance.
        </p>

        <div className="space-y-6">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">
            🛡️ AI Scam Detection
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">
            📄 Resume Intelligence
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">
            🤖 AI Career Assistant
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-8">

        <div className="w-full max-w-3xl">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="mb-6 text-slate-700 hover:text-blue-600 font-medium transition"
          >
            ← Back to Home
          </button>

          {/* CARD */}
          <div className="bg-white rounded-[40px] shadow-xl p-10">

            {/* TITLE */}
            <h2 className="text-5xl font-bold text-center text-slate-900 mb-3">

              {isSignup
                ? "Create Account"
                : "Welcome Back"}

            </h2>

            <p className="text-center text-slate-500 mb-10 text-xl">

              {isSignup
                ? "Sign up to continue"
                : "Login to continue"}

            </p>

            {/* ERROR */}
            {error && (
              <div className="mb-6 bg-red-100 border border-red-300 text-red-700 px-5 py-4 rounded-2xl">
                {error}
              </div>
            )}

            <div className="space-y-6">

              {/* NAME */}
              {isSignup && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-3xl px-6 py-5 text-lg outline-none focus:border-blue-500"
                />
              )}

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-3xl px-6 py-5 text-lg outline-none focus:border-blue-500"
              />

              {/* PASSWORD */}
              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-3xl px-6 py-5 text-lg outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword
                    ? "🙈"
                    : "👁️"}
                </button>

              </div>

              {/* REMEMBER */}
              {!isSignup && (
                <div className="flex justify-between items-center text-slate-600">

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button onClick={() =>
                   navigate("/forgot-password")
                            }
                  className="hover:text-blue-600"
                        >
                      Forgot Password?
                       </button>

                </div>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-5 rounded-3xl text-2xl font-semibold"
              >

                {isSignup
                  ? "Create Account"
                  : "Login"}

              </button>

            </div>

            {/* TOGGLE */}
            <div className="text-center mt-10 text-slate-600 text-lg">

              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}

              <button
                onClick={() => {

                  setIsSignup(
                    !isSignup
                  );

                  setError("");

                  setForm({
                    name: "",
                    email: "",
                    password: "",
                  });

                }}
                className="text-blue-600 font-semibold ml-2"
              >

                {isSignup
                  ? "Login"
                  : "Sign Up"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default LoginSignup;