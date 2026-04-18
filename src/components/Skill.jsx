import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Set Initial States (Prevents flicker on refresh)
      gsap.set(".skill-header, .skill-card", { opacity: 0, y: 30 });
      gsap.set(".progress-bar-fill", { width: 0 });

      // 2. Header Animation
      gsap.to(".skill-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      });

      // 3. Cards staggered entrance
      gsap.to(".skill-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });

      // 4. Progress bars filling animation (using a function to get target width)
      const bars = document.querySelectorAll('.progress-bar-fill');
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-width');
        gsap.to(bar, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          width: targetWidth,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.2
        });
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
        { name: "GSAP Animation", level: "Advanced", width: "85%", icon: "🪄" }
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
        { name: "Postman", level: "Advanced", width: "82%", icon: "🚀" },
        { name: "German (A2/B1)", level: "Learning", width: "60%", icon: "🇩🇪" }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-[#020202] text-white py-20 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="skill-header text-center mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0a101f] border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">
            ✨ My Expertise
          </div>
          <h2 className="text-[34px] md:text-6xl font-bold tracking-tight leading-tight">
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light leading-relaxed px-4">
            A comprehensive overview of my technical proficiency and professional toolkit.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card bg-[#080808] border border-white/5 rounded-[2rem] p-8 hover:border-blue-500/20 transition-all duration-500 shadow-2xl"
            >
              <h3 className="text-lg font-bold mb-10 border-l-4 border-blue-600 pl-4">
                {category.title}
              </h3>

              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-500 font-mono text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md font-bold uppercase tracking-widest">
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-[4px] w-full bg-gray-900/50 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar-fill h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        data-width={skill.width} // Store the width here
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