import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1b263b]" id="hero">
      {/* 
        Dual-source video map.
        Using high-quality fallback poster until B&L-specific video is provided.
      */}
      {/* 
        Mobile Video
        Hidden on medium and larger screens
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/air-cargo_01.jpg"
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src="/assets/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* 
        Desktop Video
        Hidden on small screens
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/air-cargo_01.jpg"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src="/assets/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* Watermark Placeholder to cover Gemini Logo - sits under the overlay */}
      <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 w-24 md:w-32 h-12 md:h-16 flex items-center justify-end pointer-events-none opacity-90">
        <img src="/bl-favicon.png" alt="B&L Watermark" className="h-full w-auto object-contain drop-shadow-lg" />
      </div>

      {/* Deep Navy/Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b] via-[#274c77]/40 to-[#274c77]/10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-32 md:pb-40">
        <div className={`transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Montserrat'] font-extrabold text-white leading-[1.1] uppercase tracking-widest max-w-5xl text-balance drop-shadow-2xl">
            Distribution, Logistics<br />&amp; Technology
          </h1>
          <p className="mt-8 text-lg md:text-xl font-['Montserrat'] tracking-wide !text-white max-w-2xl font-medium leading-relaxed drop-shadow-md" style={{ color: '#ffffff' }}>
            Invest Locally, Think Globally — Customized business solutions spanning technology, aviation, infrastructure, and education across five continents.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#divisions" className="bg-white/10 !text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105 hover:bg-white/20 flex items-center gap-2 backdrop-blur-md shadow-lg hover:border-white/30 hover:shadow-xl hover:shadow-white/10" style={{ color: '#ffffff' }}>
              Our Divisions
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </a>
            <a href="#about" className="bg-white/10 !text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105 hover:bg-white/20 flex items-center gap-2 backdrop-blur-md shadow-lg hover:border-white/30 hover:shadow-xl hover:shadow-white/10" style={{ color: '#ffffff' }}>
              <iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
