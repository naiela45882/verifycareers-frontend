import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#6e8efb] to-[#a777e3] text-white p-16">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1a1b2e] mb-6">
          Smart Job Offer Fraud Detection
        </h1>
        <p className="text-lg lg:text-xl text-[#f2f2f2] mb-8">
          Upload your job offer, internship letter, or recruitment message and get an instant scam-risk analysis. Stay safe. Stay ahead.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img
          className="w-80 drop-shadow-lg"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Career security"
        />
      </div>
    </section>
  );
};

export default Hero;