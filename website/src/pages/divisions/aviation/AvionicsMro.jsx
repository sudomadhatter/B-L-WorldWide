import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function AvionicsMro() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="Avionics & MRO" 
        subtitle="Engineering Excellence That Powers the Future of Aviation."
        bgImage="/images/avionics_mro.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          The Technical Backbone
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          <strong>B&L Worldwide’s Avionics & MRO Division</strong> delivers precision electronics, structural integrity, and engine innovation. This division ensures that every aircraft operates with unmatched reliability, safely integrating advanced navigation, communication, and flight-control technologies for commercial, cargo, and emerging VTOL markets.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/avionics-air-frame-fabrication-and-power-plant_01.jpg" 
                alt="Aircraft Maintenance and MRO" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Fabrication & Integrity</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              Airframe & Power Plant
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Our capabilities cover the full spectrum of structural engineering, from composite manufacturing to metal fabrication and turbine optimizations. Whether supporting the mission-critical needs of our logistics network or engineering new aeronautical solutions, our fabrication labs respond rapidly to the specialized demands of global aviation.
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
