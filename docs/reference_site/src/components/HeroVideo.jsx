import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1b263b]">
      {/* 
        Implementation of the dual-source video map.
        Using high-quality fallback poster image.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src="#" media="(min-width: 768px)" type="video/mp4" />
        <source src="#" media="(max-width: 767px)" type="video/mp4" />
      </video>

      {/* Deep Navy/Black Gradient Overlay for modern contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b] via-[#274c77]/40 to-[#274c77]/10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-32 md:pb-40">
        <div className={`transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Modern Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-xs tracking-wide font-medium mb-8 uppercase">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3cef1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6096ba]"></span>
            </div>
            Global Infrastructure Leader
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-semibold text-white tracking-tighter leading-[0.95] max-w-5xl text-balance">
            Connecting <br /> Continents.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#e7ecef]/80 max-w-2xl font-light leading-relaxed">
            Building the infrastructural backbone of tomorrow. From global logistics networks to deep-tech energy solutions, we engineer progress on a planetary scale.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="bg-[#e7ecef] text-[#274c77] px-8 py-3.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 flex items-center gap-2 shadow-lg hover:bg-white">
              Explore Our Impact
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </button>
            <button className="bg-white/5 text-[#e7ecef] border border-white/10 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-white/15 flex items-center gap-2 backdrop-blur-md hover:border-white/20">
              <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              Watch Reel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}