import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".skill-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Cards staggered entrance
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });

      // Progress bars filling animation
      gsap.from(".progress-bar-fill", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        width: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillsData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Expert", width: "95%", icon: "⚛️" },
        { name: "JavaScript", level: "Expert", width: "90%", icon: "JS" },
        { name: "Tailwind CSS", level: "Advanced", width: "92%", icon: "≈" },
        { name: "Bootstrap", level: "Advanced", width: "85%", icon: "B" }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: "Intermediate", width: "75%", icon: "JS" },
        { name: "Express.js", level: "Intermediate", width: "70%", icon: "Ex" },
        { name: "MongoDB", level: "Intermediate", width: "65%", icon: "🍃" },
        { name: "REST APIs", level: "Advanced", width: "80%", icon: "🌐" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: "Advanced", width: "88%", icon: "🐙" },
        { name: "Figma", level: "Intermediate", width: "75%", icon: "F" },
        { name: "GSAP Animation", level: "Advanced", width: "82%", icon: "🪄" },
        { name: "German (A2/B1)", level: "Learning", width: "60%", icon: "🇩🇪" }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-[#020202] text-white py-16 md:py-24 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="skill-header text-center mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-950/20 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] text-blue-400 font-bold tracking-widest uppercase">
            ✨ My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed">
            A comprehensive overview of my technical skills, proficiency levels, and professional toolkit.
          </p>
        </div>

        {/* Responsive Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card bg-[#080808] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 hover:border-blue-500/20 transition-all duration-500 shadow-xl"
            >
              <h3 className="text-base md:text-lg font-bold mb-8 border-l-4 border-blue-600 pl-4 leading-none">
                {category.title}
              </h3>

              <div className="space-y-6 md:space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-500 font-mono text-xs md:text-sm">{skill.icon}</span>
                        <span className="text-xs md:text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-[8px] md:text-[9px] px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-black uppercase tracking-tighter">
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-[5px] md:h-[6px] w-full bg-gray-900 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar-fill h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                        style={{ width: skill.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;