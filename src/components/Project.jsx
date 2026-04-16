import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  const projects = [
    { 
      title: "Rizo - Reused Clothing", 
      category: "Full Stack", 
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop", 
      link: "#" 
    },
    { 
      title: "Shopdetails Automotive", 
      category: "Web Apps", 
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", 
      link: "#" 
    },
    { 
      title: "Himalayan Moosa UI", 
      category: "UI Components", 
      image: "https://apnamechanic.com/blog/wp-content/uploads/2022/06/bullet-service-online-1024x683-1.jpg", 
      link: "#" 
    },
    { 
      title: "Elite Learning Rework", 
      category: "UI Components", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", 
      link: "#" 
    },
    { 
      title: "Inventory Dashboard", 
      category: "Web Apps", 
      image: "https://www.slidekit.com/wp-content/uploads/2025/04/Inventory-Dashboard-Template-for-PowerPoint-and-Google-Slides.jpg", 
      link: "#" 
    },
    { 
      title: "MERN Analytics", 
      category: "Full Stack", 
      image: "https://www.metadialog.com/wp-content/uploads/brizy/imgs/artificial-intelligence-marketing-use-48-1775x1184x98x0x1578x1184x1678095811.webp", 
      link: "#" 
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animation trigger for filtered items
    gsap.fromTo(".project-card", 
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" }
    );
  }, [filter]);

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen bg-[#020202] text-white py-16 md:py-24 px-6 sm:px-12 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="project-header text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-950/20 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] text-blue-400 font-bold tracking-widest uppercase">
            💼 My Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto font-light px-4 leading-relaxed">
            Showcasing my best work and achievements as a Full-Stack Developer.
          </p>
        </div>

        {/* Filter Buttons: Responsive Wrap & Scroll for Mobile */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 md:mb-16">
          {['All', 'Web Apps', 'UI Components', 'Full Stack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-6 py-2 rounded-full border text-[10px] md:text-[11px] font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap
                ${filter === cat 
                  ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                  : 'border-white/5 text-gray-500 hover:border-blue-500/40 hover:text-blue-400'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${filter === cat ? 'bg-blue-500 animate-pulse' : 'bg-gray-700'}`} />
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 1 Col Mobile, 2 Col Tablet, 3 Col Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent opacity-90" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] md:text-[9px] uppercase tracking-widest text-blue-400 font-bold">
                  {project.category}
                </div>
              </div>

              {/* Text Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-sm md:text-base font-bold mb-6 group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex gap-3">
                    <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                      <span className="text-[14px]">🔗</span>
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                      <span className="text-[14px]">🐙</span>
                    </button>
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black group-hover:text-white transition-colors">
                    View Project →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;