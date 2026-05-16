import React from "react";
import React, { useState } from "react";


export default function JobOfferAnalysis() {
  return (
    <section id="job-analysis" className="max-w-6xl mx-auto mt-28 px-6">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Job Offer Analysis</h2>

      <textarea
        placeholder="Paste your job offer message or internship letter..."
        className="w-full h-48 p-4 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-indigo-400"
      />

      <div className="flex items-center gap-4">
        <input type="file" className="border p-2 rounded-lg" />
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Analyze
        </button>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Red Flags Detected</h3>
        <p className="text-gray-700 italic">Results will appear here...</p>
      </div>
    </section>
  );
}
