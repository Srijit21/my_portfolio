// src/components/About.jsx
import React from 'react';
import profileImage from '../assets/Professional Pic.png';
import degreeCert from '../assets/degree_certificate.jpeg';
import courseCert from '../assets/course_certificate.jpeg'; 

const About = () => {
  const coreActivities = [
    {
      title: "Frontend Development",
      description: "Building robust, scalable, and dynamic user interfaces using modern React and JavaScript.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Responsive UI Design",
      description: "Crafting fluid, mobile-first, and adaptive layouts utilizing Tailwind CSS and custom styling.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Application Making",
      description: "Engineering feature-rich web tools, weather dashboards, and e-commerce platforms from scratch.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Component Architecture",
      description: "Writing clean, modular, and reusable component structures using React Router and clean code practices.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#07080a] via-[#0a0b0e] to-[#07080a] text-slate-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Split: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Unique & Elegant Photo Styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer multi-layered ambient golden glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/40 via-amber-300/20 to-transparent rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Unique geometric corner border accent frame */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-400 rounded-tl-2xl z-20 pointer-events-none"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber-400 rounded-br-2xl z-20 pointer-events-none"></div>

              {/* Unique shaped image container */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl bg-slate-900 border border-amber-500/30 overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Srijit Priyanshu" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Heading */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              About Me
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Crafting Digital Experiences with <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Precision & Passion</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              I am a dedicated <strong className="text-amber-400 font-semibold">Frontend & Web Developer</strong> specializing in building scalable, responsive applications using HTML, CSS, JavaScript and also using modern <strong className="text-amber-400 font-semibold">React</strong> and <strong className="text-amber-400 font-semibold">Tailwind CSS</strong> architectures. 
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              With a strong eye for clean design, component reusability, and smooth user interactions, I turn complex requirements into seamless digital solutions. Every project I build—from real-time dashboards to feature-rich web tools—reflects my commitment to writing high-quality code and delivering exceptional user experiences.
            </p>
          </div>

        </div>

        {/* Middle Cards Section: Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Education Card with Hover Effect & View Certificate Button */}
          <div className="bg-[#0e1017]/90 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  Education
                </h3>
              </div>
              <div className="space-y-4 text-slate-300 mb-6">
                <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                  <h4 className="font-semibold text-slate-100 text-base">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-xs text-amber-500/90 font-medium">Computer Science & Engineering</p>
                  <h3 className="font-semibold text-slate-100 text-base">2025 Passed</h3>
                  <p className="text-xs text-slate-400">Focused on software engineering principles, algorithms, data structures, and modern web technologies.</p>
                </div>
              </div>
            </div>

            {/* View Certificate Button */}
            <div className="flex justify-end pt-3 border-t border-amber-500/10">
              <a 
                href={degreeCert} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 text-xs font-semibold transition-all duration-300 shadow-sm"
              >
                <span>View Certificate</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Certification Card with Hover Effect & View Certificate Button */}
          <div className="bg-[#0e1017]/90 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4 text-slate-300 mb-6">
                <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                  <h4 className="font-semibold text-slate-100 text-base">Full Stack Java Developer With ReactJS</h4>
                  <p className="text-xs text-amber-500/90 font-medium">Professional Training & Certifications</p>
                  <p className="text-xs text-slate-400">Certified proficiency in Full Stack Java development combined with modern React architectures and frontend tools.</p>
                </div>
              </div>
            </div>

            {/* View Certificate Button */}
            <div className="flex justify-end pt-3 border-t border-amber-500/10">
              <a 
                href={courseCert} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 text-xs font-semibold transition-all duration-300 shadow-sm"
              >
                <span>View Certificate</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* What I Do / Core Activities Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              What I <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Specialize In</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Core competencies and development focus areas I bring to every web project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-[#0e1017]/90 border border-amber-500/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition duration-300 shadow-sm">
                    {activity.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Closing Statement */}
        <div className="bg-gradient-to-r from-amber-500/10 via-[#0e1017] to-amber-500/10 border border-amber-500/20 rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            Driven by Curiosity, Eager to Master New Horizons
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            I am deeply passionate about the ever-evolving landscape of software development. Always eager to learn new tools, embrace emerging technologies, and push the boundaries of what is possible on the web.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;