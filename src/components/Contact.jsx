import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  // Your EmailJS Credentials
  const SERVICE_ID = "service_n60fcdj"; 
  const TEMPLATE_ID = "template_7ijy61v";
  const PUBLIC_KEY = "NJS0kIgmtnEgP4_q3";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setShowStatus(true);
          form.current.reset();
          setTimeout(() => setShowStatus(false), 4000);
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert("Error sending message. Check Console/Keys.");
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen bg-[#020202] text-white py-16 md:py-24 px-6 sm:px-12 md:px-20 relative overflow-hidden">
      
      {/* Responsive Custom Alert */}
      {showStatus && (
        <div className="fixed top-5 md:top-10 left-1/2 -translate-x-1/2 z-[200] w-[90%] md:w-auto animate-bounce">
          <div className="bg-[#080808] border border-blue-500/50 px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center gap-4">
            <span className="text-blue-400 text-lg">✨</span>
            <p className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-center">Message Received, Harsha!</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Responsive Header */}
        <div className="contact-reveal text-center mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-5 py-2 rounded-full text-[10px] md:text-[11px] text-blue-400 font-bold tracking-[0.2em] uppercase">
            💬 GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-gray-500 text-xs md:text-sm font-light max-w-lg mx-auto leading-relaxed px-4">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Main Grid: 1 Col on Mobile, 2 Col on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Form */}
          <div className="contact-reveal bg-[#080808] border border-white/5 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl order-2 lg:order-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-1">Name</label>
                <input required name="from_name" type="text" placeholder="Your name" 
                  className="w-full bg-[#0c0c0c] border border-white/5 rounded-xl md:rounded-2xl p-4 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-1">Email</label>
                <input required name="user_email" type="email" placeholder="your.email@example.com" 
                  className="w-full bg-[#0c0c0c] border border-white/5 rounded-xl md:rounded-2xl p-4 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-1">Message</label>
                <textarea required name="message" rows="4" md:rows="5" placeholder="Tell me about your project..." 
                  className="w-full bg-[#0c0c0c] border border-white/5 rounded-xl md:rounded-2xl p-4 text-sm focus:border-blue-500/50 outline-none transition-all resize-none placeholder:text-gray-700"></textarea>
              </div>

              <button disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl md:rounded-2xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.25)] flex items-center justify-center gap-2 text-sm md:text-base active:scale-95">
                {isSubmitting ? "SENDING..." : "SEND MESSAGE 🚀"}
              </button>
            </form>
          </div>

          {/* Right: Info & Socials */}
          <div className="contact-reveal space-y-10 lg:pt-10 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Let's Connect</h3>
              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-[#080808] border border-white/5 p-5 md:p-6 rounded-3xl group hover:border-blue-500/30 transition-all text-center sm:text-left">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
                  <span className="text-blue-400 text-lg md:text-xl">📧</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-white text-xs md:text-sm font-medium truncate max-w-[200px] sm:max-w-none">harshaharidas494@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Bar */}
            <div className="pt-4 md:pt-8 space-y-6 text-center lg:text-left">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-black">Connect with me</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {['🐙', '💼', '🐦'].map((icon, index) => (
                  <a key={index} href="#" className="w-11 h-11 md:w-12 md:h-12 bg-[#0c0c0c] border border-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all text-lg shadow-sm active:scale-90">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;