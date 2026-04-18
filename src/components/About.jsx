import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State: Hide elements immediately to prevent "flicker" on refresh
      gsap.set(".about-animate, .bento-card", { opacity: 0, y: 30 });

      // 2. Content fade-in using .to()
      gsap.to(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // 3. Bento cards staggered entry
      gsap.to(".bento-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-[#020202] text-white py-16 md:py-24 px-6 sm:px-12 md:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div className="about-animate inline-flex items-center gap-2 bg-blue-950/20 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">
            Full-Stack Developer ✨
          </div>
          
          <h2 className="about-animate text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
            Crafting Digital <br />
            <span className="text-blue-500 font-medium">Experiences</span> That Matter
          </h2>

          <div className="about-animate space-y-6 text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
            <p>I’m a passionate <span className="text-white font-medium">MERN Stack Developer</span>.</p>
          </div>

          <div className="about-animate flex flex-wrap gap-8 pt-10 border-t border-gray-900/50">
            {[{ label: 'Happy Clients', val: '45+' }, { label: 'Commits', val: '2.5K+' }].map((s, i) => (
              <div key={i} className="border-l-2 border-blue-600 pl-5">
                <h4 className="text-2xl font-bold tracking-tight">{s.val}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bento-card col-span-1 sm:col-span-2 bg-[#080808] border border-white/5 p-8 rounded-[2rem]">
            <div className="text-blue-500 text-2xl mb-5">{"</>"}</div>
            <h3 className="text-lg font-bold mb-3">Expertise</h3>
            <p className="text-gray-500 text-xs">Modern solutions for modern problems.</p>
          </div>

          <div className="bento-card bg-[#080808] border border-white/5 p-8 rounded-[2rem]">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-widest text-blue-500">Clean Code</h3>
            <p className="text-gray-500 text-[11px]">Writing maintainable, SOLID code.</p>
          </div>

          <div className="bento-card bg-[#080808] border border-white/5 p-8 rounded-[2rem]">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-widest text-blue-400">Performance</h3>
            <p className="text-gray-500 text-[11px]">Optimized for lightning speed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;