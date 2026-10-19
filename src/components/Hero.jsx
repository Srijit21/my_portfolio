// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Professional Pic.png'; 
import cvFile from '../assets/Srijit_Resume_CSE.pdf'; 

const Hero = () => {
  // Typing animation state for roles
  const roles = ["Web Developer", "ReactJS Developer", "FrontEnd Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause at full text
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="space-y-20 bg-gradient-to-b from-[#07080a] via-[#0a0b0e] to-[#07080a]">
      
      {/* 1. Main Hero Section */}
      <section 
        id="home" 
        className="relative min-h-[85vh] flex items-center justify-center py-16 overflow-hidden"
      >
        {/* Ambient background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Animations */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Greeting */}
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-wide">
                Hi, I'm
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-tight">
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                  Srijit Priyanshu
                </span>
              </h1>

              {/* Animated Floating Role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-semibold text-amber-400 tracking-wide border-r-2 border-amber-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </div>

              {/* Short Frontend Developer Summary */}
              <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Frontend engineer passionate about building high-performance, responsive web architectures and sleek interactive user interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS.
              </p>

              {/* Action Buttons: Hire Me & Download CV */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/25 hover:scale-105"
                >
                  Hire Me
                </Link>
                <a 
                  href={cvFile} 
                  download="Srijit_Priyanshu_Resume.pdf"
                  className="px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-amber-500/30 hover:border-amber-400 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Column: Edgeless Square Photo with Stronger Ambient Shadow */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Stronger, more visible gold-tinted shadow glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/50 via-amber-300/30 to-amber-600/20 rounded-3xl blur-2xl opacity-90"></div>
                
                {/* Edgeless Square Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-slate-900 border-2 border-amber-500/40 overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.25)]">
                  <img 
                    src={profileImage} 
                    alt="Srijit Priyanshu" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle dark inner vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Highlights / Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e1017]/90 border border-amber-500/20 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-amber-500/10">
            <div className="space-y-1">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Education</p>
              <p className="text-base sm:text-lg font-bold text-slate-100">B.Tech CSE (2025)</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Certification</p>
              <p className="text-base sm:text-lg font-bold text-slate-100">Full Stack Java & React</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Key Projects</p>
              <p className="text-base sm:text-lg font-bold text-slate-100">Mobizone, SkyPulse & More</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Expertise</p>
              <p className="text-base sm:text-lg font-bold text-slate-100">Frontend & UI Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hatke Developer Philosophy & Stack Matrix Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Box: Philosophy */}
          <div className="lg:col-span-6 bg-[#0e1017]/90 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Developer Mindset
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Engineering Clean Code with <span className="text-amber-400">Purpose</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I believe that a great frontend is not just about looks—it is about modular component structures, lightning-fast reactivity, and zero friction for the user. Every line of code is structured for maintainability and scalability.
              </p>
            </div>
            <div className="pt-6 relative z-10">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase"
              >
                <span>Explore My Background & Credentials</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Box: Tech Arsenal Breakdown */}
          <div className="lg:col-span-6 bg-[#0e1017]/90 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Core Arsenal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Powered by Modern <span className="text-amber-400">Web Technologies</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/10">
                  <p className="text-xs font-bold text-amber-400">ReactJS Ecosystem</p>
                  <p className="text-[11px] text-slate-400 mt-1">Component state & routing</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/10">
                  <p className="text-xs font-bold text-amber-400">Tailwind CSS</p>
                  <p className="text-[11px] text-slate-400 mt-1">Responsive styling & design</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/10">
                  <p className="text-xs font-bold text-amber-400">Full Stack Java</p>
                  <p className="text-[11px] text-slate-400 mt-1">Backend logic & SQL</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/10">
                  <p className="text-xs font-bold text-amber-400">Git & Firebase</p>
                  <p className="text-[11px] text-slate-400 mt-1">Version control & deployment</p>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link 
                to="/skills" 
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase"
              >
                <span>View Full Skill Breakdown</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Hero;