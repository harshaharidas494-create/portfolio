import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    });
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 md:px-16 py-4 bg-[#020202]/80 backdrop-blur-xl border-b border-blue-500/10"
    >
      {/* Logo */}
      <div 
        className="cursor-pointer flex items-center gap-2 group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-blue-500 font-black text-xl group-hover:scale-110 transition-transform">&lt;/&gt;</span> 
        <span className="text-white font-bold text-xl tracking-tighter">Harsha</span>
      </div>

      {/* Nav Links with active state indicators */}
      <div className="hidden md:flex items-center gap-10">
        {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollToSection(item)}
            className={`text-[13px] font-medium tracking-wide transition-all relative py-1
              ${active === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
          >
            {item}
            {active === item && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            )}
          </button>
        ))}
      </div>

      {/* Brighter CTA Button */}
      <button 
        onClick={() => scrollToSection('Contact')}
        className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95"
      >
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;