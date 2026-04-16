import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import harsha from '../Assets/harsha.png';

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const statsRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Text and Section Entry
    tl.from(containerRef.current, { opacity: 0, duration: 0.5 })
      .from(textRef.current.children, {
        x: -30, // Reduced slightly for mobile comfort
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from(imageWrapperRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      }, "-=0.6")
      .from(statsRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      }, "-=0.4");

    // Intense Blue Light Flow
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2.5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-[#020202] text-white flex flex-col justify-center px-6 sm:px-12 md:px-20 py-20 lg:py-0 overflow-hidden"
    >
      {/* Background Cinematic Blue Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-900/10 rounded-full blur-[70px] md:blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <div ref={textRef} className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-950/30 border border-blue-800/50 px-4 py-1.5 rounded-full text-[10px] md:text-xs text-blue-400 mx-auto lg:mx-0">
            <span className="text-white">★</span> MERN Stack Developer | Based in India
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
            MERN Stack Developer <br />
            <span className="text-blue-500">Portfolio</span>
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed font-light">
            Specializing in the MERN stack to build robust, scalable web applications. 
            Passionate about clean code and cinematic user interfaces.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm md:text-base active:scale-95">
              Get in Touch
            </button>
          </div>

          {/* Stats Section - Responsive Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5 mt-10">
            {[
              { label: 'Experience', val: '3+' },
              { label: 'Projects', val: '50+' },
              { label: 'Tech Stack', val: '15+' },
              { label: 'Satisfaction', val: '98%' }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-500 tracking-tighter">{stat.val}</h3>
                <p className="text-[9px] uppercase tracking-widest text-gray-600 mt-1 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Responsive Image Wrapper */}
        <div ref={imageWrapperRef} className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0a0a0a] group shadow-2xl border border-white/5">
            
            {/* Standardized SVG Border Light */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <defs>
                <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#3b82f6" /> 
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <rect
                ref={pathRef}
                x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
                rx="30" ry="30"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="4" 
                filter="url(#blueGlow)" 
                strokeDasharray="180 600"
                strokeDashoffset="780"
              />
            </svg>

            {/* Image */}
            <img 
              src={harsha}
              alt="Harsha" 
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
            />

            {/* Floating Tech Stack (Responsive Width) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-black/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex justify-around items-center z-30">
              {['M', 'E', '⚛', 'N'].map((icon, idx) => (
                <span key={idx} className="text-blue-400 text-sm md:text-lg font-bold">{icon}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;