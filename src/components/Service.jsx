import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import harsha from '../Assets/harsha.png'

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-reveal", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heroServices = [
    { title: "Frontend Development", desc: "Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks.", icon: "⚛️" },
    { title: "Responsive Design", desc: "Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes.", icon: "📱" },
  ];

  const expertBoxes = [
    { title: "UI/UX Design", desc: "Designing intuitive and visually appealing user interfaces.", icon: "🎨" },
    { title: "Custom Components", desc: "Developing reusable, scalable component libraries.", icon: "⚙️" },
    { title: "Performance", desc: "Optimizing web apps for speed through lazy loading.", icon: "⚡" },
    { title: "Code Review", desc: "Expert reviews to improve your codebase architecture.", icon: "🔍" },
  ];

  return (
    <section ref={sectionRef} id="services" className="min-h-screen bg-[#020202] text-white py-16 md:py-24 px-6 sm:px-12 md:px-20 relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        
        {/* Responsive Header */}
        <div className="service-reveal text-center space-y-4 md:space-y-5">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-1.5 rounded-full text-[10px] md:text-[11px] text-blue-300 font-black tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            🛠️ WHAT I OFFER
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            Built for <span className="text-blue-500">innovation.</span>
          </h2>
        </div>

        {/* Hero 2 Boxes - Stacks on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {heroServices.map((service, i) => (
            <div key={i} className="service-reveal group bg-[#080808] border border-blue-500/20 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                <span className="text-2xl md:text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Expertise Grid - 1 Col -> 2 Col -> 4 Col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertBoxes.map((box, i) => (
            <div key={i} className="service-reveal bg-gradient-to-b from-[#0f0f0f] to-[#050505] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 border border-blue-500/20 group-hover:border-blue-400 transition-all">
                <span className="text-blue-400 text-lg md:text-xl">{box.icon}</span>
              </div>
              <h4 className="text-base md:text-lg font-bold mb-2 group-hover:text-blue-300">{box.title}</h4>
              <p className="text-gray-500 text-[11px] md:text-xs font-medium leading-relaxed">{box.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section - Mobile First Stack */}
        <div className="service-reveal bg-[#0a0a0a] border border-blue-500/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-[inset_0_0_50px_rgba(59,130,246,0.03)] text-center md:text-left">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
            <img 
              src={harsha} 
              alt="Client" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover rounded-2xl md:rounded-3xl border-2 border-blue-500/20 relative z-10"
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            <span className="text-blue-500 text-5xl md:text-6xl font-serif leading-none block md:inline">“</span>
            <p className="text-lg md:text-2xl text-gray-200 font-light italic leading-snug">
              "The MERN application developed was <span className="text-blue-400 font-semibold">flawless and delivered 3x faster</span> than expected. Exceptional attention to detail."
            </p>
            <div className="pt-4 md:pt-6 border-t border-white/5">
              <h5 className="text-white font-bold text-base md:text-lg tracking-tight">Sarah Mitchell</h5>
              <p className="text-blue-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1 font-black">CTO, TechStart Inc.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;