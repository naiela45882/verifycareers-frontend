import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ResumeAnalyzer = () => {

  const [resume, setResume] =
    useState(null);

  const [jobDescription, setJobDescription] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [jdSource, setJdSource] =
    useState("text");

  // =========================
  // ANALYZE RESUME
  // =========================
  const handleAnalyze = async () => {

    if (!resume) {
      alert("Upload a resume");
      return;
    }

    if (
      jdSource === "text" &&
      !jobDescription
    ) {
      alert(
        "Please paste job description"
      );
      return;
    }

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "resume",
        resume
      );

      formData.append(
        "jobDescription",
        jobDescription
      );

      const response =
        await axios.post(
          "http://localhost:5000/api/resume/parse",
          formData
        );

      const data =
        response.data;

      setResult({
        atsScore:
          data.atsScore,

        matchScore:
          data.matchScore,

        matchedSkills:
          data.matchedSkills,

        missingSkills:
          data.missingSkills,

        atsBreakdown:
          data.atsBreakdown,

        weaknesses:
          data.weaknesses,

        aiAnalysis:
          data.aiAnalysis,
      });

    } catch (error) {

      console.error(error);

      alert(
        "Resume analysis failed"
      );

    } finally {

      setLoading(false);
    }
  };

  // =========================
  // SKILL BADGE
  // =========================
  const SkillBadge = ({
    skill,
    color,
  }) => (

    <span
      className={`px-4 py-2 rounded-full text-sm font-medium inline-block ${color}`}
    >
      {skill}
    </span>

  );

  return (

    <>
      <Navbar />

      {/* LOADING OVERLAY */}
      {loading && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

          <div className="bg-white p-10 rounded-[32px] shadow-2xl text-center w-[400px]">

            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

            <h3 className="text-3xl font-bold text-gray-800">
              Analyzing Resume
            </h3>

            <p className="text-gray-500 mt-3 text-lg">
              Gemini AI is processing your resume...
            </p>

          </div>

        </div>

      )}

      <div className="min-h-screen bg-[#f5f7fb] p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Resume Analyzer
          </h1>

          <p className="text-gray-500 text-lg">
            AI-powered resume and ATS compatibility checker
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}
          <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100">

            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Upload Resume
            </h2>

            {/* RESUME */}
            <div className="mb-8">

              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Resume PDF
              </label>

              <label className="flex items-center justify-center w-full border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 transition rounded-3xl p-8 cursor-pointer">

                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) =>
                    setResume(
                      e.target.files[0]
                    )
                  }
                />

                <div className="text-center">

                  <p className="text-blue-600 font-semibold text-2xl">
                    {resume
                      ? resume.name
                      : "Click to upload resume"}
                  </p>

                  <p className="text-gray-500 mt-2">
                    PDF format only
                  </p>

                </div>

              </label>

            </div>

            {/* JD SOURCE */}
            <div className="mb-6">

              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Job Description Source
              </label>

              <select
                value={jdSource}
                onChange={(e) =>
                  setJdSource(
                    e.target.value
                  )
                }
                className="w-full border border-gray-200 rounded-2xl p-4 outline-none"
              >

                <option value="text">
                  Paste Text
                </option>

                <option value="pdf">
                  Upload PDF
                </option>

              </select>

            </div>

            {/* TEXT MODE */}
            {jdSource === "text" && (

              <div className="mb-8">

                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Paste Job Description
                </label>

                <textarea
                  placeholder="Paste job description here..."
                  className="w-full border border-gray-200 rounded-3xl p-5 h-64 text-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                  value={jobDescription}
                  onChange={(e) =>
                    setJobDescription(
                      e.target.value
                    )
                  }
                />

              </div>

            )}

            {/* PDF MODE */}
            {jdSource === "pdf" && (

              <div className="mb-8">

                <label className="flex items-center justify-center w-full border-2 border-dashed border-purple-300 bg-purple-50 hover:bg-purple-100 transition rounded-3xl p-8 cursor-pointer">

                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                  />

                  <div className="text-center">

                    <p className="text-purple-600 font-semibold text-xl">
                      Upload JD PDF
                    </p>

                    <p className="text-gray-500 mt-2">
                      PDF only
                    </p>

                  </div>

                </label>

              </div>

            )}

            {/* BUTTON */}
            <button
              onClick={
                handleAnalyze
              }
              disabled={loading}
              className={`w-full py-5 rounded-3xl font-semibold text-lg shadow-md flex items-center justify-center gap-3 transition-all duration-300

              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-[1.02] text-white"
              }`}
            >

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  Analyzing with Gemini AI...
                </>
              ) : (
                "Analyze Resume"
              )}

            </button>

          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100">

            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Analysis Result
            </h2>

            {!result ? (

              <div className="h-[600px] flex flex-col items-center justify-center text-center">

                <div className="text-8xl mb-6">
                  📄
                </div>

                <h3 className="text-3xl font-bold text-gray-700 mb-3">
                  No Resume Analysis Yet
                </h3>

                <p className="text-gray-500 text-lg max-w-sm">
                  Upload a resume and job description to begin AI analysis
                </p>

              </div>

            ) : (

              <div className="space-y-8">

                {/* SCORES */}
                <div className="grid grid-cols-2 gap-5">

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-3xl">

                    <p className="text-gray-500 mb-2">
                      ATS Score
                    </p>

                    <h3 className="text-5xl font-bold text-blue-500">
                      {result.atsScore}%
                    </h3>

                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-3xl">

                    <p className="text-gray-500 mb-2">
                      Match Score
                    </p>

                    <h3 className="text-5xl font-bold text-green-500">
                      {result.matchScore}%
                    </h3>

                  </div>

                </div>

                {/* ATS BREAKDOWN */}
                <div className="bg-orange-50 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold text-orange-500 mb-4">
                    ATS Breakdown
                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    {result.atsBreakdown?.map(
                      (
                        item,
                        index
                      ) => (
                        <li key={index}>
                          • {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* MATCHED */}
                <div>

                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Matched Skills
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {result.matchedSkills?.map(
                      (
                        skill,
                        index
                      ) => (
                        <SkillBadge
                          key={index}
                          skill={skill}
                          color="bg-green-100 text-green-700"
                        />
                      )
                    )}

                  </div>

                </div>

                {/* MISSING */}
                <div>

                  <h3 className="text-2xl font-bold text-red-500 mb-4">
                    Missing Skills
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {result.missingSkills?.map(
                      (
                        skill,
                        index
                      ) => (
                        <SkillBadge
                          key={index}
                          skill={skill}
                          color="bg-red-100 text-red-700"
                        />
                      )
                    )}

                  </div>

                </div>

                {/* WEAKNESSES */}
                <div className="bg-purple-50 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Resume Weaknesses
                  </h3>

                  <ul className="space-y-3 text-gray-700">

                    {result.weaknesses
                      ?.slice(0, 4)
                      .map(
                        (
                          item,
                          index
                        ) => (
                          <li key={index}>
                            • {item}
                          </li>
                        )
                      )}

                  </ul>

                </div>

                {/* AI ANALYSIS */}
                <div className="space-y-5">

                  <h3 className="text-3xl font-bold text-blue-600">
                    AI Career Analysis
                  </h3>

                  {/* SUMMARY */}
                  <div className="bg-blue-50 rounded-3xl p-6">

                    <h4 className="font-bold text-blue-700 mb-3 text-xl">
                      Professional Summary
                    </h4>

                    <p className="text-gray-700 leading-8">
                      {
                        result.aiAnalysis?.professionalSummary
                          ?.replace(/\*\*/g, "")
                          ?.split(". ")
                          .slice(0, 3)
                          .join(". ")
                      }
                    </p>

                  </div>

                  {/* STRENGTHS */}
                  <div className="bg-green-50 rounded-3xl p-6">

                    <h4 className="font-bold text-green-700 mb-4 text-xl">
                      Strengths
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {result.aiAnalysis?.strengths
                        ?.slice(0, 4)
                        .map(
                          (
                            item,
                            index
                          ) => (

                            <div
                              key={index}
                              className="bg-white px-4 py-3 rounded-full text-sm text-green-700 border border-green-200"
                            >
                              {item.replace(/\*\*/g, "")}
                            </div>

                          )
                        )}

                    </div>

                  </div>

                  {/* IMPROVEMENTS */}
                  <div className="bg-red-50 rounded-3xl p-6">

                    <h4 className="font-bold text-red-700 mb-4 text-xl">
                      Improvements
                    </h4>

                    <div className="space-y-3">

                      {result.aiAnalysis?.improvements
                        ?.slice(0, 3)
                        .map(
                          (
                            item,
                            index
                          ) => (

                            <div
                              key={index}
                              className="bg-white p-4 rounded-2xl border border-red-100 text-gray-700"
                            >
                              • {item.replace(/\*\*/g, "")}
                            </div>

                          )
                        )}

                    </div>

                  </div>

                  {/* FINAL */}
                  <div className="bg-yellow-50 rounded-3xl p-6">

                    <h4 className="font-bold text-yellow-700 mb-3 text-xl">
                      Final AI Advice
                    </h4>

                    <p className="text-gray-700 leading-8">
                      {
                        result.aiAnalysis?.finalAdvice
                          ?.replace(/\*\*/g, "")
                          ?.split(". ")
                          .slice(0, 3)
                          .join(". ")
                      }
                    </p>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </>
  );
};

export default ResumeAnalyzer;