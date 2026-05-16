import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f8f9ff] via-[#fcfcff] to-[#f4f1ff] relative">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 px-5 pt-3">

        <div className="max-w-6xl mx-auto bg-white/85 backdrop-blur-xl border border-white/40 shadow-lg rounded-[20px] px-7 py-2.5 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-[34px] font-bold text-[#111827]">

            <Link to="/">
              Verify
              <span className="text-[#5c7cfa]">
                Careers
              </span>
            </Link>

          </h1>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-700">

            {/* HOME */}
            <a
              href="#"
              className="text-[#5c7cfa]"
            >
              Home
            </a>

            {/* FEATURES */}
            <div className="relative group">

              <button className="hover:text-[#5c7cfa] transition flex items-center gap-1">

                Features

                <span className="text-xs">
                  ▼
                </span>

              </button>

              {/* DROPDOWN */}
              <div className="absolute top-10 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-3 z-50">

                <Link
                  to="/analyze"
                  className="block px-4 py-3 rounded-xl hover:bg-[#f5f7ff] transition"
                >
                  💼 Job Offer Check
                </Link>

                <Link
                  to="/resume"
                  className="block px-4 py-3 rounded-xl hover:bg-[#f5f7ff] transition"
                >
                  📄 Resume Analyzer
                </Link>

                <Link
                  to="/community"
                  className="block px-4 py-3 rounded-xl hover:bg-[#f5f7ff] transition"
                >
                  👥 Community Forum
                </Link>

                <Link
                  to="/dashboard"
                  className="block px-4 py-3 rounded-xl hover:bg-[#f5f7ff] transition"
                >
                  📊 Dashboard
                </Link>

              </div>

            </div>

            {/* COMMUNITY */}
            <Link
              to="/community"
              className="hover:text-[#5c7cfa] transition"
            >
              Community
            </Link>

            {/* ABOUT */}
            <a
              href="#about"
              className="hover:text-[#5c7cfa] transition"
            >
              About
            </a>

          </div>
          <button className="lg:hidden text-2xl">
            ☰
          </button>


          {/* BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">

            {/* LOGIN */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl border border-[#dcdcff] hover:border-[#5c7cfa] hover:text-[#5c7cfa] transition font-medium"
            >
              Login
            </Link>

            {/* GET STARTED */}
            <Link
              to="/login?mode=signup"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5c7cfa] to-[#7c4dff] text-white shadow-md hover:scale-105 transition font-medium"
            >
              Get Started
            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#5c7cfa] px-4 py-2 rounded-full shadow-sm mb-6 text-sm">

            <span className="w-2 h-2 bg-green-500 rounded-full"></span>

            AI-Powered Career Safety Platform

          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#111827] mb-6">

            Your Career,
            <br />

            Safer.
            <span className="bg-gradient-to-r from-[#5c7cfa] via-[#8b5cf6] to-pink-500 bg-clip-text text-transparent">
              {" "}Smarter.
            </span>

          </h1>

          {/* TEXT */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-8">

            Detect fake job offers, analyze resumes,
            and get intelligent career guidance using
            advanced AI technology.

          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">

            {/* GET STARTED */}
            <Link
              to="/login?mode=signup"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#5c7cfa] to-[#7c4dff] text-white shadow-lg hover:scale-105 transition text-lg"
            >
              Get Started →
            </Link>

            {/* DEMO */}
            <button className="px-7 py-4 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 transition shadow-sm text-lg">

              ▶ Try Demo

            </button>

          </div>

          {/* MINI FEATURES */}
          <div className="flex flex-wrap gap-6 text-gray-600">

            <div className="flex items-center gap-2">
              🛡 Smart Protection
            </div>

            <div className="flex items-center gap-2">
              ⚡ AI-Powered
            </div>

            <div className="flex items-center gap-2">
              🔒 Privacy First
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* MAIN CARD */}
          <div className="w-full max-w-[540px] bg-white/85 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-[0_15px_45px_rgba(0,0,0,0.08)] p-6">

            {/* TOP */}
            <div className="flex justify-between items-start mb-7">

              <div>

                <h2 className="text-4xl font-bold text-[#111827] mb-1">
                  Resume Match
                </h2>

                <p className="text-gray-500 text-lg">
                  Smart ATS analysis
                </p>

              </div>

              {/* SCORE */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5c7cfa] to-[#8b5cf6] flex items-center justify-center shadow-lg">

                <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center">

                  <span className="text-2xl font-bold text-[#5c7cfa]">
                    84%
                  </span>

                </div>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-6">

              {/* LEFT */}
              <div>

                <div className="flex justify-between mb-2 text-sm">

                  <span className="font-semibold text-gray-700">
                    Resume Strength
                  </span>

                  <span className="font-bold text-[#5c7cfa]">
                    84%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden mb-2">

                  <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#5c7cfa] to-[#8b5cf6]"></div>

                </div>

                <p className="text-sm text-gray-500">
                  Relevant skills highlighted effectively.
                </p>

              </div>

              {/* RIGHT */}
              <div>

                <div className="flex justify-between mb-2 text-sm">

                  <span className="font-semibold text-gray-700">
                    Compatibility
                  </span>

                  <span className="font-bold text-green-500">
                    76%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden mb-2">

                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>

                </div>

                <p className="text-sm text-gray-500">
                  Strong match with most job requirements.
                </p>

              </div>

            </div>

            {/* AI BOX */}
            <div className="bg-gradient-to-r from-[#f8faff] to-[#f6f3ff] rounded-2xl border border-[#eef2ff] p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5c7cfa] to-[#8b5cf6] flex items-center justify-center text-2xl text-white shadow-md">

                  🤖

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-xl font-semibold text-[#111827]">

                    AI Assistant

                  </h3>

                  <p className="text-gray-600 text-sm max-w-xs">

                    Intelligent career insights and scam detection guidance.

                  </p>

                </div>

              </div>

              <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-[#5c7cfa] hover:text-[#5c7cfa] transition shadow-sm text-sm font-medium">

                Floating Assistant Active

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-4 sm:px-8 pt-2 pb-16"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              icon: "💼",
              title: "Job Offer Check",
              desc: "Analyze suspicious recruiter offers and fake listings.",
              color: "from-blue-50 to-indigo-50",
              link: "/analyze",
            },

            {
              icon: "📄",
              title: "Resume Check",
              desc: "Improve ATS score using intelligent AI analysis.",
              color: "from-green-50 to-emerald-50",
              link: "/resume",
            },

            {
              icon: "🛡",
              title: "Scam Risk Detection",
              desc: "Identify suspicious recruiters, phishing attempts, and fake hiring processes instantly.",
              color: "from-orange-50 to-amber-50",
              link: "/analyze",
            },

            {
              icon: "👥",
              title: "Community Forum",
              desc: "Discuss scam experiences and help others stay protected.",
              color: "from-pink-50 to-purple-50",
              link: "/community",
            },
          ].map((item, index) => (

            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-[22px] p-5 border border-white/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition`}
            >

              <div className="text-3xl mb-3">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {item.desc}
              </p>

              <Link
                to={item.link}
                className="w-9 h-9 rounded-full bg-white shadow-sm hover:scale-110 transition flex items-center justify-center"
              >
                →
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 sm:px-8 pb-20"
      >

        <div className="bg-white/80 backdrop-blur-xl rounded-[28px] shadow-lg border border-white/50 p-10">

          <h2 className="text-4xl font-bold text-[#111827] mb-6">
            About VerifyCareers
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">

            VerifyCareers is an AI-powered career safety platform designed to help users detect fake job offers, improve resume quality, and protect themselves from recruitment scams.

          </p>

          <p className="text-gray-600 text-lg leading-relaxed">

            The platform combines intelligent scam analysis, resume ATS checking, community reporting, and AI guidance to create a safer and smarter career journey for students and professionals.

          </p>

        </div>

      </section>

    </div>
  );
};

export default LandingPage;