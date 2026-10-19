import React from 'react';
import { Link } from 'react-router-dom';
import mobizoneImg from '../assets/mobizone-preview.png';
import wildearthImg from '../assets/wildearth-preview.png';
import skypulseImg from '../assets/skypulse-preview.png';

const Projects = () => {
  const projectList = [
    {
      title: "Mobizone",
      category: "Mobile E-Commerce Web Application",
      description: "A feature-rich mobile e-commerce platform built with modern web technologies, providing a seamless shopping experience, intuitive product browsing, and responsive layouts.",
      image: mobizoneImg,
      technologies: ["React JS", "Tailwind CSS"],
      tools: ["VS Code", "Firebase"],
      githubUrl: "https://github.com/Srijit21/Mobizone", 
      liveUrl: "https://mobizone-2026.web.app/"   
    },
    {
      title: "WildEarth",
      category: "Wildlife & Biomes Conservation Platform",
      description: "An immersive wildlife conservation web application featuring interactive video assets, responsive layouts, and engaging visual storytelling designed to promote wildlife awareness.",
      image: wildearthImg,
      technologies: ["HTML", "CSS", "JavaScript"],
      tools: ["VS Code", "Netlify"],
      githubUrl: "https://github.com/Srijit21/WildEarth",
      liveUrl: "https://wildearth-discovery.netlify.app/#wildlife"
    },
    {
      title: "SkyPulse",
      category: "Real-Time Weather Forecast Dashboard",
      description: "A dynamic weather forecast web application featuring real-time weather tracking, air quality index metrics, location-based lookups, and sleek dynamic backgrounds.",
      image: skypulseImg,
      technologies: ["React JS", "Tailwind CSS"],
      tools: ["VS Code", "Render"],
      githubUrl: "https://github.com/Srijit21/SkyPulse",
      liveUrl: "https://skypulse-mg7g.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#07080a] via-[#0a0b0e] to-[#07080a] text-slate-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Portfolio Showcase
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Featured <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Projects & Works</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore my recent web engineering projects built with robust frontend architectures, clean user interfaces, and reliable external integrations.
          </p>
        </div>

        {/* 3 Big Landscape Cards */}
        <div className="space-y-8">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="bg-[#0e1017]/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Small/Medium Project Image */}
                <div className="lg:col-span-4 overflow-hidden rounded-2xl bg-slate-900 border border-amber-500/20 h-56 sm:h-64 relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[11px] font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Middle: Title, Description, Technologies & Tools */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-amber-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stylish Tech & Tools Badges */}
                  <div className="pt-2 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-amber-500/80 font-semibold uppercase tracking-wider">Tech:</span>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tools:</span>
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: GitHub & Live Demo Buttons */}
                <div className="lg:col-span-3 flex lg:flex-col justify-center sm:justify-start gap-3 pt-4 lg:pt-0 lg:border-l lg:border-amber-500/10 lg:pl-6">
                  {/* GitHub Repo Button */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-amber-500/30 hover:border-amber-400 font-semibold text-xs transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group/btn"
                  >
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub Repo</span>
                  </a>

                  {/* Live Demo Button */}
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ready For New Projects Footer Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-[#0e1017] to-amber-500/10 border border-amber-500/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Ready for <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">New Projects & Collaborations</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or looking for a dedicated frontend developer to build high-performance web solutions? Let's connect and turn your vision into reality.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/25 hover:scale-105"
            >
              <span>Let's Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;