import React from "react";

export default function EmailVerification() {
  return (
    <section id="email-check" className="max-w-6xl mx-auto mt-20 px-6">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Email Domain Verification</h2>

      <input
        type="email"
        placeholder="Enter HR or recruiter email"
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
      />

      <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Verify Email
      </button>

      <div className="mt-6 bg-gray-50 p-4 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Verification Result</h3>
        <p className="text-gray-700 italic">Email authenticity will appear here...</p>
      </div>
    </section>
  );
}
