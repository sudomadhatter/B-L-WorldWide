import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Atc() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="Air Traffic Control" 
        subtitle="Precision, Safety, and Intelligence in Every Flight Path."
        bgImage="/images/atc_infrastructure.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Advanced Airspace Management
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          <strong>B&L Worldwide’s ATC Division</strong> delivers the advanced infrastructure, technology, and training required to manage modern airspace with absolute precision. As global aviation integrates new aircraft types like autonomous vehicles and VTOLs, our systems provide the intelligence and coordination foundation for a new era of flight.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/air-traffic-controilers_01.jpg" 
                alt="Air Traffic Control Tower" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Safety & Innovation</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              Empowering Human Capital
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              We specialize in integrated solutions combining digital towers, satellite navigation, and AI-driven management tools. Beyond technology, we prepare highly skilled controllers through simulation-based instruction and mentorship, ensuring safe oversight over traditional sectors and the complex urban-mobility corridors of tomorrow.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
