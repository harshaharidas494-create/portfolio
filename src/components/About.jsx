import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade-in
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // Bento cards staggered entry
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.95,
        opacity: 0,
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
        
        {/* Left Column: Summary */}
        <div className="space-y-8">
          <div className="about-animate inline-flex items-center gap-2 bg-blue-950/20 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">
            Full-Stack Developer ✨
          </div>
          
          <h2 className="about-animate text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
            Crafting Digital <br />
            <span className="text-blue-500 font-medium">Experiences</span> That Matter
          </h2>

          <div className="about-animate space-y-6 text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
            <p>
              I’m a passionate <span className="text-white font-medium">MERN Stack Developer</span> with expertise in building 
              scalable, performant web applications. I focus on creating intuitive user 
              interfaces that combine clean design with exceptional functionality.
            </p>
            <p>
              My expertise spans the entire frontend ecosystem—from <span className="text-blue-400">React and Next.js</span> to 
              Node.js and MongoDB. I am committed to writing maintainable, 
              high-performance code.
            </p>
          </div>

          {/* Stats Bar - Responsive Flex Wrap */}
          <div className="about-animate flex flex-wrap gap-8 sm:gap-12 pt-10 border-t border-gray-900/50">
            {[
              { label: 'Happy Clients', val: '45+' },
              { label: 'Code Commits', val: '2.5K+' },
              { label: 'GitHub Stars', val: '500+' }
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-blue-600 pl-5">
                <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">{s.val}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Expertise (Full Width on mobile & Tablet) */}
          <div className="bento-card col-span-1 sm:col-span-2 bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all group">
            <div className="text-blue-500 text-2xl mb-5 group-hover:scale-110 transition-transform">{"</>"}</div>
            <h3 className="text-lg font-bold mb-3">Expertise</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
              Specialized in building scalable web applications with modern technologies 
              and best practices.
            </p>
          </div>

          {/* Card 2: Clean Code */}
          <div className="bento-card group bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/10 group-hover:bg-blue-500/20 transition-all">
              <span className="text-blue-500 text-lg">✨</span>
            </div>
            <h3 className="text-sm font-bold mb-2 tracking-wide">Clean Code</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-light">
              Writing maintainable, well-documented code following SOLID principles.
            </p>
          </div>

          {/* Card 3: Performance */}
          <div className="bento-card group bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all">
            <div className="w-10 h-10 bg-blue-400/10 rounded-xl flex items-center justify-center mb-6 border border-blue-400/10 group-hover:bg-blue-400/20 transition-all">
              <span className="text-blue-400 text-lg">⬇</span>
            </div>
            <h3 className="text-sm font-bold mb-2 tracking-wide">Performance</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-light">
              Optimizing for speed and efficiency in every digital product.
            </p>
          </div>

          {/* Card 4 & 5: Horizontal Stats Pill */}
          <div className="bento-card col-span-1 sm:col-span-2 bg-[#080808] border border-blue-500/10 p-6 rounded-[2rem] flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-0">
            {[
              { val: '100%', label: 'Satisfaction' },
              { val: '24/7', label: 'Support' },
              { val: 'Fast', label: 'Delivery' }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="text-center">
                  <div className="text-blue-400 text-2xl font-black uppercase tracking-tighter">{stat.val}</div>
                  <div className="text-[9px] text-gray-600 uppercase tracking-widest mt-1 font-bold">{stat.label}</div>
                </div>
                {i < 2 && <div className="hidden sm:block w-[1px] h-10 bg-gray-800/50" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Sub-section - Fully Responsive Grid */}
      <div className="about-animate mt-24 sm:mt-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3 tracking-tight">Tech Stack & Expertise</h3>
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-medium">Modern tools for modern solutions</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'React.js', icon: '⚛️' },
            { name: 'Next.js', icon: 'N' },
            { name: 'TypeScript', icon: 'TS' },
            { name: 'Tailwind CSS', icon: '≈' },
            { name: 'Node.js', icon: 'JS' },
            { name: 'MongoDB', icon: '🍃' }
          ].map((tech, i) => (
            <div 
              key={i} 
              className="group bg-[#080808] border border-white/5 p-8 rounded-[1.5rem] flex flex-col items-center justify-center gap-4 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-500 cursor-pointer shadow-lg"
            >
              <div className="text-gray-500 group-hover:text-blue-500 group-hover:scale-125 transition-all duration-500 text-3xl font-bold font-mono">
                {tech.icon}
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;