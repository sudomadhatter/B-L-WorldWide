import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Fresh24() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="24 Fresh" 
        subtitle="Delivering Freshness to the World — 24 Hours a Day"
        bgImage="/images/fresh24_hero.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Global Perishables Network
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          24 Fresh is B&L Worldwide's premier fresh-goods distribution platform — engineered to move perishable products from farm, sea, and factory to global markets with unmatched speed, precision, and reliability.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-[#1b263b] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[#274c77]/20 mix-blend-overlay z-10"></div>
              <img 
                src="/images/fresh-24_02.jpg" 
                alt="Cold Chain Distribution" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Precision Logistics</span>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              The P.L.I.C.E. Advantage
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              As a core component of our Majestic logistics ecosystem, 24 Fresh leverages the power of Majestic Cargo Airline and the advanced P.L.I.C.E. cold-chain network to guarantee that temperature-sensitive products arrive fresher, faster, and in optimal condition. From fresh-cut flowers in Medellín to seafood from the Caribbean, specialty produce across the Americas, and high-demand perishables destined for the world's top marketplaces, 24 Fresh connects regional producers to international buyers with a seamless, fully integrated supply chain.
            </p>
            <a 
              href="https://b-lworldwide.company/wp-content/uploads/2025/11/Majestic-PLT-PDF-Slides_organized-1.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-white/10 !text-white backdrop-blur-md border border-white/20 hover:bg-white/20 w-fit"
            >
              Our Distribution & Logistics Way
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
