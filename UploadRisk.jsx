import React, { useState } from "react";
import Navbar from "./Navbar";

const UploadRisk = () => {

  const [sourceType, setSourceType] = useState("text");
  const [jobText, setJobText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);

  try {

    setLoading(true);

    setAnalysis(null);

    const token = localStorage.getItem("token");

    // ==============================
    // STEP 1 → UPLOAD OFFER
    // ==============================
    const formData = new FormData();

    if (
  (sourceType === "pdf" ||
   sourceType === "image") &&
  file
) {

  formData.append(
    "offerLetter",
    file
  );
}

    if (sourceType === "text") {
      formData.append("text", jobText);
    }

    const uploadResponse = await fetch(
      "http://localhost:5000/api/upload/upload-offer",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const uploadData = await uploadResponse.json();

    console.log("UPLOAD DATA:", uploadData);

    // ==============================
    // STEP 2 → ANALYZE OFFER
    // ==============================
    const analyzeResponse = await fetch(
      "http://localhost:5000/api/upload/analyze-offer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          historyId: uploadData.historyId,
        }),
      }
    );

    const analyzeData = await analyzeResponse.json();

    console.log("AI RESULT:", analyzeData);

    setAnalysis(analyzeData.analysis);

  } catch (error) {

    console.log(error);

    alert("AI analysis failed");

  } finally {

    setLoading(false);

  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f6f8fc] p-6 lg:p-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 h-full">

            {/* HEADER */}
            <div className="mb-8">

              <div className="flex items-center gap-4 mb-3">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
                  🛡️
                </div>

                <div>

                  <h1 className="text-4xl font-bold text-[#111827]">
                    AI Scam Detection
                  </h1>

                  <p className="text-gray-500 mt-1 text-lg">
                    Analyze suspicious job offers using intelligent AI risk analysis
                  </p>

                </div>

              </div>

            </div>

            {/* SOURCE TYPE */}
            <div className="mb-6">

              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                Job Offer Source
              </label>

              <select
                value={sourceType}
                onChange={(e) => setSourceType(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition bg-white text-lg"
              >

                <option value="text">
  Paste Text
</option>

<option value="pdf">
  Upload PDF
</option>

<option value="image">
  Upload Image
</option>
              </select>

            </div>

            {/* TEXT INPUT */}
            {sourceType === "text" && (

              <div className="mb-6">

                <textarea
                  value={jobText}
                  onChange={(e) => setJobText(e.target.value)}
                  placeholder="Paste suspicious job offer here..."
                  className="w-full h-[260px] border-2 border-gray-200 rounded-3xl p-5 outline-none resize-none focus:border-blue-500 transition text-gray-700 text-lg"
                />

                <button
                  onClick={() =>
                    setJobText(
`Congratulations!

You have been selected for an international remote internship.

Salary: ₹1,20,000/month

To confirm your seat, pay a refundable registration fee of ₹2,500 immediately.

Limited slots available. Contact HR only on Telegram.

Guaranteed selection without interview.`
                    )
                  }
                  className="mt-4 text-sm text-blue-500 hover:text-blue-700 font-medium"
                >

                  + Use suspicious sample text

                </button>

              </div>

            )}

            {/* PDF INPUT */}
{sourceType === "pdf" && (

  <div className="mb-6">

    <label className="w-full h-[260px] border-2 border-dashed border-blue-300 rounded-3xl flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 transition cursor-pointer">

      <div className="text-7xl mb-4">
        📄
      </div>

      <p className="text-xl font-semibold text-gray-700">
        Upload Suspicious PDF
      </p>

      <p className="text-gray-500 mt-2 text-sm">
        Drag & drop or click to browse
      </p>

      {file && (

        <div className="mt-4 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium text-blue-600">
          {file.name}
        </div>

      )}

      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

    </label>

  </div>

)}

{/* IMAGE INPUT */}
{sourceType === "image" && (

  <div className="mb-6">

    <label className="w-full h-[260px] border-2 border-dashed border-pink-300 rounded-3xl flex flex-col items-center justify-center bg-pink-50 hover:bg-pink-100 transition cursor-pointer">

      <div className="text-7xl mb-4">
        🖼️
      </div>

      <p className="text-xl font-semibold text-gray-700">
        Upload Scam Screenshot
      </p>

      <p className="text-gray-500 mt-2 text-sm">
        JPG, PNG, WhatsApp, Telegram screenshots
      </p>

      {file && (

        <div className="mt-4 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium text-pink-600">
          {file.name}
        </div>

      )}

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

    </label>

  </div>

)}

            

            {/* BUTTON */}
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-white text-xl font-semibold shadow-lg transition flex items-center justify-center gap-3
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-500 to-orange-500 hover:scale-[1.02]"
              }`}
            >

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing with AI...
                </>
              ) : (
                "Analyze Risk"
              )}

            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[32px] shadow-lg border border-gray-100 p-8 h-full">

            {/* HEADER */}
            <div className="flex items-start justify-between mb-8">

              <div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Risk Analysis
                </h2>

                <div>

  <p className="text-gray-500 mt-2 text-lg">
    AI-generated scam probability assessment
  </p>

  <p className="text-sm text-gray-500 mt-1">

    Powered by: {

      analysis?.mode === "ai"
        ? "Gemini AI"
        : "Fallback Detection Engine"

    }

  </p>

</div>
              </div>

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-5xl shadow-lg">
                ⚠️
              </div>

            </div>

            {!analysis ? (

              <div className="flex flex-col items-center justify-center h-[650px] text-center">

                {loading ? (
                  <>
                    <div className="w-24 h-24 rounded-full border-[10px] border-blue-100 border-t-blue-500 animate-spin mb-8"></div>

                    <h3 className="text-3xl font-bold text-[#111827] mb-4">
                      AI Analysis in Progress...
                    </h3>

                    <p className="text-gray-500 max-w-md leading-relaxed text-lg">
                      Scanning recruiter patterns, salary claims,
                      suspicious keywords, and scam indicators.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-7xl mb-6">
                      🤖
                    </div>

                    <h3 className="text-4xl font-bold text-[#1e293b] mb-4">
                      No Analysis Yet
                    </h3>

                    <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                      Upload a suspicious PDF or paste a recruiter offer
                      to generate an intelligent AI scam analysis.
                    </p>
                  </>
                )}

              </div>

            ) : (

              <div className="space-y-8">

                {/* SCORE */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-3xl p-7 flex items-center justify-between">

                  <div>

                    <p className="text-gray-500 text-xl mb-2">
                      Scam Probability
                    </p>

                    <h1 className="text-7xl font-bold text-red-500">
  {Math.min(analysis.scamScore, 100)}%
</h1>

                  </div>

                  <div className="bg-white rounded-3xl px-8 py-6 shadow-sm text-center">

                    <p className="text-gray-500 text-lg">
                      Confidence
                    </p>
                     <h2 className="text-5xl font-bold text-blue-500">
                      {analysis.confidence || 91}%
                 
                        </h2> 

                  </div>

                </div>

                {/* SUMMARY */}
                <div>

                  <h3 className="text-3xl font-bold text-[#111827] mb-4">
                    Summary
                  </h3>

                  <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5 text-gray-700 text-lg leading-relaxed">

                    {analysis.summary}
                  </div>

                </div>

                {/* RISK BREAKDOWN */}
                <div>

                  <h3 className="text-3xl font-bold text-[#111827] mb-5">
                    Risk Breakdown
                  </h3>

                  <div className="space-y-4">

                    {[
                      ["💳 Payment Risk", "HIGH", "text-red-500"],
                      ["📱 Communication", "SUSPICIOUS", "text-orange-500"],
                      ["💰 Salary Claim", "UNREALISTIC", "text-yellow-500"],
                      ["🏢 Company Presence", "NOT VERIFIED", "text-red-500"],
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="bg-[#f8fafc] border border-gray-100 rounded-2xl px-5 py-5 flex items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                      >

                        <span className="text-lg font-medium text-gray-700">
                          {item[0]}
                        </span>

                        <span className={`${item[2]} font-semibold text-lg`}>
                          {item[1]}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* RED FLAGS */}
                <div>

                  <h3 className="text-3xl font-bold text-red-500 mb-5">
                    Detected Red Flags
                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {analysis.redFlags?.map((flag, index) => (

  <div
    key={index}
    className="bg-red-50 border border-red-100 rounded-full px-4 py-2 text-xs text-red-600 font-medium transition-all duration-300 hover:scale-105"
  >

    🚨 {flag}

  </div>

))}

                  </div>

                </div>

                {/* RECOMMENDATIONS */}
                <div>

                  <h3 className="text-3xl font-bold text-green-600 mb-5">
                    Safety Recommendations
                  </h3>

                  <div className="grid gap-4">

                    <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 text-green-700 text-[15px] font-medium flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <span className="text-lg">✅</span>
                      <span>Never pay registration or processing fees</span>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 text-green-700 text-[15px] font-medium flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <span className="text-lg">🌐</span>
                      <span>Verify company website and LinkedIn presence</span>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 text-green-700 text-[15px] font-medium flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <span className="text-lg">📧</span>
                      <span>Check recruiter email domains carefully</span>
                    </div>

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

export default UploadRisk;