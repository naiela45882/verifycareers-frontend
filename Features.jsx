import React from "react";
import { ShieldCheck, Search, FileCheck2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-slate-900" />,
      title: "Scam Detection",
      desc: "AI automatically detects suspicious job offers or fake recruiters in seconds.",
    },
    {
      icon: <Search className="h-10 w-10 text-slate-900" />,
      title: "Instant Verification",
      desc: "Upload offer letters or job emails and get instant credibility reports.",
    },
    {
      icon: <FileCheck2 className="h-10 w-10 text-slate-900" />,
      title: "Authenticity Score",
      desc: "Receive a detailed report with a trust score for every job posting.",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-12">
        Why Choose VerifyCareers?
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 p-6 rounded-lg"
          >
            <div className="flex flex-col items-center">
              {feature.icon}

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
            </div>

            <p className="text-slate-600 mt-3">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}