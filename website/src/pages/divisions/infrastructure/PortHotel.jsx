import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function PortHotel() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Port & Hotel Development" 
        subtitle="Redefining coastal prosperity through world-class maritime infrastructure and visionary hospitality integration."
        bgImage="/images/mixed-use-residential_02.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Split Feature Block */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#274c77] to-[#6096ba] rounded-[2rem] opacity-20 blur-lg"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
              <img 
                src="/images/shared_09.jpg" 
                alt="Port Hotel Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4 block">Coastal Prosperity</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
              Visionary Port & Hotel Development
            </h2>
            <div className="w-16 h-1 bg-[#274c77] mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              <strong>B&L Worldwide's Port & Hotel Development Division</strong> is redefining coastal prosperity through world-class infrastructure. Anchored by visionary projects like the Saint Martin Port and expansive mixed-use waterfront developments, we transform strategic maritime zones into thriving gateways for commerce and tourism.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-10">
              By merging sustainable engineering, luxury design, and community-driven development, we connect deep-water ports, eco-friendly resorts, and smart hospitality systems. From conception to completion, we deliver excellence in every pier, promenade, and five-star suite—building the future of coastal development, one shoreline at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="https://b-lworldwide.company/wp-content/uploads/2025/11/pas-bl-TRIDENT_PRESENTATION.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1b263b] !text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#274c77] to-[#1b263b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Check out our Portfolios</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
