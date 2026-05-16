import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const CommunityForum = () => {

  const [title, setTitle] = useState("");
  const [category, setCategory] =
    useState("Internship Scam");

  const [experience, setExperience] =
    useState("");

  const [anonymous, setAnonymous] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [successPopup, setSuccessPopup] =
    useState(false);

  const [errorPopup, setErrorPopup] =
    useState(false);

  const [posts, setPosts] = useState([
    {
      title: "Fake Internship at XYZ Company",
      category: "Internship Scam",
      severity: "High Risk",
      user: "Anonymous User",
      time: "2 hours ago",
      helpful: 34,
      content:
        "The recruiter asked me to pay a registration fee before the interview process. Communication was only through Telegram.",
    },

    {
      title: "Suspicious Work From Home Offer",
      category: "Job Offer Scam",
      severity: "Medium Risk",
      user: "Sarah K",
      time: "5 hours ago",
      helpful: 19,
      content:
        "Received an email promising ₹80,000/month for simple typing work. No official company website was provided.",
    },

    {
      title: "Fake HR Asking for Documents",
      category: "Identity Scam",
      severity: "High Risk",
      user: "Rahul",
      time: "1 day ago",
      helpful: 42,
      content:
        "The recruiter requested Aadhaar and bank details before any interview. Please stay careful.",
    },
  ]);

  const handleSubmit = async () => {

    if (!title || !experience) {
      return;
    }

    try {

      setLoading(true);

      const response =
        await axios.post(
          "https://verifycareers-backend.onrender.com/api/community/create",
          {
            title,
            category,
            content: experience,
            anonymous,
          }
        );

      setPosts((prev) => [
        {
          ...response.data,
          time: "Just now",
        },
        ...prev,
      ]);

      setSuccessPopup(true);

      setTimeout(() => {
        setSuccessPopup(false);
      }, 2500);

      setTitle("");
      setExperience("");

    } catch (error) {

      console.log(error);

      setErrorPopup(true);

      setTimeout(() => {
        setErrorPopup(false);
      }, 2500);

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f6f8fc] p-6 lg:p-10">

        <div className="max-w-7xl mx-auto">

          {/* PAGE HEADER */}
          <div className="mb-10">

            <div className="flex items-center gap-4 mb-4">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">

                👥

              </div>

              <div>

                <h1 className="text-5xl font-bold text-[#111827]">

                  Community Forum

                </h1>

                <p className="text-gray-500 text-lg mt-1">

                  Share scam experiences and help others stay protected

                </p>

              </div>

            </div>

          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

            {/* LEFT PANEL */}
            <div className="bg-white rounded-[28px] shadow-md border border-gray-100 p-6 sticky top-24">

              {/* HEADER */}
              <div className="mb-6">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-md">

                    ✍

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-[#111827]">

                      Share Experience

                    </h2>

                    <p className="text-gray-500 text-sm">

                      Help the community stay safe

                    </p>

                  </div>

                </div>

              </div>

              {/* TITLE */}
              <div className="mb-5">

                <label className="block text-sm font-semibold text-gray-700 mb-2">

                  Post Title

                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="Enter a short title..."
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-purple-500 transition"
                />

              </div>

              {/* CATEGORY */}
              <div className="mb-5">

                <label className="block text-sm font-semibold text-gray-700 mb-2">

                  Scam Category

                </label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-purple-500 transition bg-white"
                >

                  <option>
                    Internship Scam
                  </option>

                  <option>
                    Job Offer Scam
                  </option>

                  <option>
                    Identity Theft
                  </option>

                  <option>
                    Fake HR Scam
                  </option>

                  <option>
                    Telegram Scam
                  </option>

                </select>

              </div>

              {/* DESCRIPTION */}
              <div className="mb-5">

                <label className="block text-sm font-semibold text-gray-700 mb-2">

                  Your Experience

                </label>

                <textarea
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                  placeholder="Describe what happened..."
                  className="w-full h-[180px] border-2 border-gray-200 rounded-3xl p-4 outline-none resize-none focus:border-purple-500 transition"
                />

              </div>

              {/* TOGGLE */}
              <div className="flex items-center justify-between bg-[#f8f9ff] border border-[#e3e8ff] rounded-2xl px-4 py-3 mb-6">

                <div>

                  <h3 className="font-semibold text-[#111827]">

                    Post Anonymously

                  </h3>

                  <p className="text-sm text-gray-500">

                    Hide your identity from others

                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) =>
                    setAnonymous(e.target.checked)
                  }
                  className="w-5 h-5 accent-purple-600"
                />

              </div>

              {/* WARNING */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-6">

                <p className="text-sm text-orange-700 leading-relaxed">

                  ⚠ Please avoid sharing personal details like phone numbers, Aadhaar, bank details, or passwords.

                </p>

              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3.5 rounded-2xl text-white text-lg font-semibold shadow-lg transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02]"
                }`}
              >

                {loading ? (

                  <div className="flex items-center justify-center gap-3">

                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                    Posting...

                  </div>

                ) : (

                  "Submit Report"

                )}

              </button>

            </div>

            {/* RIGHT PANEL */}
            <div>

              {/* TRENDING */}
              <div className="bg-white rounded-[28px] shadow-md border border-gray-100 p-6 mb-8">

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-2xl font-bold text-[#111827]">

                    Trending Scam Types

                  </h2>

                  <span className="text-sm text-purple-500 font-semibold">

                    Live Community Alerts

                  </span>

                </div>

                <div className="flex flex-wrap gap-3">

                  <div className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium">

                    Telegram HR Scam

                  </div>

                  <div className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">

                    Registration Fee Fraud

                  </div>

                  <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium">

                    Fake Internship

                  </div>

                  <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium">

                    Crypto Salary Scam

                  </div>

                </div>

              </div>

              {/* POSTS */}
              <div className="space-y-6">

                {posts.map((post, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-[28px] shadow-md border border-gray-100 p-6 hover:shadow-xl transition duration-300"
                  >

                    {/* TOP */}
                    <div className="flex items-start justify-between mb-5">

                      <div>

                        <div className="flex flex-wrap gap-3 mb-3">

                          <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">

                            {post.category}

                          </div>

                          <div className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">

                            {post.severity || "Medium Risk"}

                          </div>

                        </div>

                        <h2 className="text-2xl font-bold text-[#111827] mb-2">

                          {post.title}

                        </h2>

                        <p className="text-gray-500 text-sm">

                          Posted by{" "}

                          <span className="font-semibold text-gray-700">

                            {post.user || "Anonymous User"}

                          </span>

                          {" • "}

                          {post.time || "Recently"}

                        </p>

                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-md">

                        🚨

                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="bg-[#f8f9ff] rounded-2xl p-5 border border-[#e9edff] mb-5">

                      <p className="text-gray-700 leading-relaxed">

                        {post.content}

                      </p>

                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between">

                      <button className="px-5 py-2.5 rounded-xl bg-[#f3f4ff] hover:bg-[#e7e9ff] text-purple-700 font-medium transition">

                        👍 Helpful ({post.helpful || 0})

                      </button>

                      <button className="px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition">

                        Report Post

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-[32px] p-8 w-[340px] shadow-2xl text-center">

            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">

              <span className="text-4xl">
                ✅
              </span>

            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">

              Report Submitted

            </h2>

            <p className="text-gray-500 leading-relaxed">

              Your scam report has been shared with the community.

            </p>

          </div>

        </div>
      )}

      {/* ERROR POPUP */}
      {errorPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-[32px] p-8 w-[340px] shadow-2xl text-center">

            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">

              <span className="text-4xl">
                ❌
              </span>

            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">

              Submission Failed

            </h2>

            <p className="text-gray-500 leading-relaxed">

              Please try again later.

            </p>

          </div>

        </div>
      )}

    </>
  );
};

export default CommunityForum; 