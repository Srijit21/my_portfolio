// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and interactive user interfaces.",
      skills: [
        { name: "React JS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Bootstrap", level: "Proficient" }
      ]
    },
    {
      title: "Languages & Backend",
      description: "Strong foundation in computer science and programming logic.",
      skills: [
        { name: "Core Java", level: "Advanced" },
        { name: "Spring / SpringBoot", level: "Certified" },
        { name: "Rest APIs", level: "Certified" },
        { name: "JDBC / Servlet / Hibernate", level: "Certified" },
        { name: "Data Structures & Algorithms", level: "Proficient" },
        { name: "Object-Oriented Programming", level: "Advanced" }
      ]
    },
    {
      title: "Databases",
      description: "Managing data storage, queries, and backend connectivity.",
      skills: [
        { name: "SQL", level: "Advanced" },
        { name: "MySQL Workbench", level: "Advanced" },
      ]
    },
    {
      title: " & Tools",
      description: "Deploying applications and managing source code environments.",
      skills: [
        { name: "FireBase", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Netlify & Render", level: "Advanced" },
        { name: "VS Code", level: "Expert" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#07080a] via-[#0a0b0e] to-[#07080a] text-slate-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Expertise & Stack
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Technical <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Skills & Proficiencies</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of the languages, frameworks, databases, and toolsets I leverage to engineer high-performance web applications.
          </p>
        </div>

        {/* Skills Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#0e1017]/90 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/10 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm group-hover:scale-110 transition duration-300">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skill Pills / Badges (Increased font size for skill name) */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/15 hover:border-amber-400/50 text-slate-100 text-sm font-semibold transition-all duration-200 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-amber-500/80 bg-amber-500/10 px-1.5 py-0.5 rounded font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;