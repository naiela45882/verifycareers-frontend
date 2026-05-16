import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function History() {

  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH HISTORY
  // =========================
  const fetchHistory = async () => {

    try {

      const res = await fetch(
        "https://verifycareers-backend.onrender.com/api/upload/history",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setHistory(
          data.history
        );

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // =========================
  // STATS
  // =========================
  const totalScans =
    history.length;

  const highRisk =
    history.filter(
      (item) =>
        item.response
          ?.scamScore >= 70
    ).length;

  const safeOffers =
    history.filter(
      (item) =>
        item.response
          ?.scamScore < 40
    ).length;

  const mediumRisk =
    totalScans -
    highRisk -
    safeOffers;

  const aiAnalyses =
    history.filter(
      (item) =>
        item.mode === "ai"
    ).length;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f7fb] p-6 lg:p-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}
        <div className="mb-10">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">

              📊

            </div>

            <div>

              <h1 className="text-5xl font-bold text-gray-800">

                Dashboard

              </h1>

              <p className="text-gray-500 text-lg mt-1">

                Monitor your scam analyses, AI insights, and career safety reports.

              </p>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* STATS */}
        {/* ========================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* TOTAL */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300">

            <p className="mb-3 opacity-90">
              📊 Total Scans
            </p>

            <h2 className="text-4xl font-bold">
              {totalScans}
            </h2>

          </div>

          {/* HIGH RISK */}
          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300">

            <p className="mb-3 opacity-90">
              🔴 High Risk
            </p>

            <h2 className="text-4xl font-bold">
              {highRisk}
            </h2>

          </div>

          {/* SAFE */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300">

            <p className="mb-3 opacity-90">
              🟢 Safe Offers
            </p>

            <h2 className="text-4xl font-bold">
              {safeOffers}
            </h2>

          </div>

          {/* AI */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300">

            <p className="mb-3 opacity-90">
              🤖 AI Analyses
            </p>

            <h2 className="text-4xl font-bold">
              {aiAnalyses}
            </h2>

          </div>

        </div>

        {/* ========================= */}
        {/* QUICK ACTIONS */}
        {/* ========================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <button className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition text-left">

            <div className="text-4xl mb-4">
              🛡
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">

              Analyze New Offer

            </h2>

            <p className="text-gray-500">

              Detect scam risks using AI analysis.

            </p>

          </button>

          <button className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition text-left">

            <div className="text-4xl mb-4">
              📄
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">

              Resume Analyzer

            </h2>

            <p className="text-gray-500">

              Improve ATS score and resume quality.

            </p>

          </button>

          <button className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition text-left">

            <div className="text-4xl mb-4">
              👥
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">

              Community Forum

            </h2>

            <p className="text-gray-500">

              Explore real scam experiences shared by users.

            </p>

          </button>

        </div>

        {/* ========================= */}
        {/* CHART + ACTIVITY */}
        {/* ========================= */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          {/* CHART */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">

            <h2 className="text-3xl font-bold mb-8 text-gray-800">

              Risk Distribution

            </h2>

            <div className="h-[340px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={[
                      {
                        name:
                          "High Risk",
                        value:
                          highRisk,
                      },

                      {
                        name:
                          "Safe Offers",
                        value:
                          safeOffers,
                      },

                      {
                        name:
                          "Medium Risk",
                        value:
                          mediumRisk,
                      },
                    ]}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >

                    <Cell fill="#ef4444" />

                    <Cell fill="#22c55e" />

                    <Cell fill="#facc15" />

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* AI INSIGHTS */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">

              AI Insights

            </h2>

            <div className="space-y-5">

              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">

                <p className="text-red-600 font-semibold mb-1">

                  🚨 Most Detected Scam

                </p>

                <p className="text-gray-700 text-sm">

                  Telegram recruitment scams increased this week.

                </p>

              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-4">

                <p className="text-green-600 font-semibold mb-1">

                  📈 Career Safety Score

                </p>

                <p className="text-gray-700 text-sm">

                  Your analyzed offers appear safer than average.

                </p>

              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">

                <p className="text-blue-600 font-semibold mb-1">

                  🤖 AI Activity

                </p>

                <p className="text-gray-700 text-sm">

                  {aiAnalyses} AI-powered analyses completed successfully.

                </p>

              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">

                <p className="text-purple-600 font-semibold mb-1">

                  🛡 Weekly Recommendation

                </p>

                <p className="text-gray-700 text-sm">

                  Always verify recruiter email domains before responding.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* LOADING */}
        {/* ========================= */}
        {loading ? (

          <div className="bg-white rounded-3xl p-10 shadow-lg text-center">

            <p className="text-lg text-gray-600">

              Loading dashboard...

            </p>

          </div>

        ) : history.length === 0 ? (

          <div className="bg-white p-12 rounded-3xl shadow-lg text-center">

            <div className="text-6xl mb-5">
              🤖
            </div>

            <h2 className="text-3xl font-bold mb-3 text-gray-800">

              No Analysis History Yet

            </h2>

            <p className="text-gray-500 text-lg mb-6">

              Start by uploading a suspicious job offer or resume to generate your first AI analysis.

            </p>

            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:scale-[1.02] transition">

              Start First Analysis

            </button>

          </div>

        ) : (

          <div>

            {/* HISTORY TITLE */}
            <div className="mb-8">

              <h2 className="text-4xl font-bold text-gray-800 mb-2">

                Recent Analyses

              </h2>

              <p className="text-gray-500">

                Review your latest AI scam detection reports and career safety analyses.

              </p>

            </div>

            {/* HISTORY GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {history.map(
                (item) => (

                  <div
                    key={item._id}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* TOP */}
                    <div className="flex justify-between items-center mb-5">

                      <h2 className="text-2xl font-bold text-gray-800">

                        Scam Risk

                      </h2>

                      <span
                        className={`px-4 py-1.5 rounded-full text-white text-sm font-semibold ${
                          item.response
                            ?.scamScore >=
                          70
                            ? "bg-red-500"
                            : item.response
                                ?.scamScore >=
                              40
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      >

                        {item.response
                          ?.scamScore || 0}
                        %

                      </span>

                    </div>

                    {/* SUMMARY */}
                    <div className="bg-[#f8f9ff] rounded-2xl p-4 border border-[#e9edff] mb-5">

                      <p className="text-gray-700 leading-relaxed text-[15px]">

                        {item.response
                          ?.summary ||
                          "No summary available"}

                      </p>

                    </div>

                    {/* RED FLAGS */}
                    {item.response
                      ?.redFlags
                      ?.length > 0 && (

                      <div className="mb-5">

                        <h3 className="font-semibold text-red-500 mb-3">

                          🚩 Red Flags

                        </h3>

                        <div className="flex flex-wrap gap-2">

                          {item.response.redFlags.map(
                            (
                              flag,
                              index
                            ) => (

                              <div
                                key={
                                  index
                                }
                                className="px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm"
                              >

                                {flag}

                              </div>

                            )
                          )}

                        </div>

                      </div>

                    )}

                    {/* DATE */}
                    <div className="text-sm text-gray-400 border-t pt-4">

                      {new Date(
                        item.createdAt
                      ).toLocaleString()}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        )}

      </div>
    </>
  );
}