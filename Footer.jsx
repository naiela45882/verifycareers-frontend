import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">VerifyCareers</h3>
          <p className="text-gray-300 text-sm">
            Helping students and job seekers detect job scams through intelligent analysis of offers and communications.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#about" className="hover:text-green-500 transition">About</a></li>
            <li><a href="#login-section" className="hover:text-green-500 transition">Login</a></li>
            <li><a href="#about" className="hover:text-green-500 transition">Features</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#"><img className="w-6 h-6" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google"/></a>
            <a href="#"><img className="w-6 h-6" src="https://www.svgrepo.com/show/475650/apple.svg" alt="Apple"/></a>
            <a href="#"><img className="w-6 h-6" src="https://www.svgrepo.com/show/452243/linkedin.svg" alt="LinkedIn"/></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        &copy; 2025 VerifyCareers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

