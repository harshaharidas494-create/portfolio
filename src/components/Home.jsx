import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import harsha from "../Assets/harsha.png";

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const statsRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(containerRef.current, { opacity: 0, duration: 0.6 })
      .from(imageWrapperRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(".animate-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")
      .from(".stat-card", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      }, "-=0.4");

    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    const updateRectSize = () => {
      if (svgRef.current && pathRef.current) {
        const width = svgRef.current.clientWidth - 6;
        const height = svgRef.current.clientHeight - 6;
        pathRef.current.setAttribute("width", width);
        pathRef.current.setAttribute("height", height);
      }
    };

    updateRectSize();
    window.addEventListener("resize", updateRectSize);
    return () => window.removeEventListener("resize", updateRectSize);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-[#020202] text-white flex flex-col items-center px-6 py-16 lg:py-0 lg:justify-center overflow-x-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
        
        {/* IMAGE WRAPPER (Top on Mobile) */}
        <div
          ref={imageWrapperRef}
          className="order-1 lg:order-2 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] xs:w-[320px] sm:w-[350px] lg:w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#080808] border border-white/5 shadow-2xl group">
            <svg ref={svgRef} className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <defs>
                <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <rect
                ref={pathRef}
                x="3" y="3" rx="35" ry="35"
                fill="none"
                stroke="url(#line)"
                strokeWidth="3"
                filter="url(#blueGlow)"
                strokeDasharray="220 620"
                strokeDashoffset="840"
              />
            </svg>

            <img 
              src={harsha}
              alt="Harsha" 
              className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105"
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-black/60 backdrop-blur-xl border border-white/10 py-3 rounded-2xl flex justify-around items-center z-30 shadow-2xl">
              {['M', 'E', '⚛', 'N'].map((icon, idx) => (
                <span key={idx} className="text-blue-500 text-sm font-black tracking-widest">{icon}</span>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT CONTENT (Bottom on Mobile) */}
        <div
          ref={textRef}
          className="order-2 lg:order-1 w-full text-center lg:text-left space-y-6"
        >
          <div className="animate-item inline-flex items-center gap-2 bg-[#0a101f] border border-blue-500/20 px-4 py-2 rounded-full mx-auto lg:mx-0">
            <span className="text-blue-500 text-sm">✦</span>
            <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">
              MERN Stack Developer | India
            </span>
          </div>
          
          <h1 className="animate-item text-[38px] xs:text-[44px] sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            MERN Stack <br />
            Developer <br />
            <span className="text-blue-500">Portfolio</span>
          </h1>

          <p className="animate-item text-gray-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            Building robust, scalable web applications with the MERN stack. 
            Passionate about clean architecture and cinematic UI.
          </p>

          {/* SINGLE SMALL BUTTON */}
          <div className="animate-item flex justify-center lg:justify-start pt-2">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] text-xs uppercase tracking-widest active:scale-95">
              Get in Touch
            </button>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 pt-8 border-t border-white/5 mt-10">
            {[
              { label: 'Experience', val: '3+' },
              { label: 'Projects', val: '50+' },
              { label: 'Tech Stack', val: '15+' },
              { label: 'Satisfaction', val: '98%' }
            ].map((stat, i) => (
              <div key={i} className="stat-card p-4 bg-[#080808] border border-white/5 rounded-2xl flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-bold text-blue-500 tracking-tight">{stat.val}</h3>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;