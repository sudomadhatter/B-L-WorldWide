import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function DutyFree() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="Duty Free Division" 
        subtitle="Global Travel Retail & Premium Brand Distribution"
        bgImage="/images/dutyfree_hero.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Elevating the Travel Experience
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          B&L Worldwide’s Duty Free Division is a key pillar of our international development and coastal revitalization strategy. Through strategic partnerships and curated travel-retail experiences, we elevate airports, seaports, cruise terminals, and mixed-use destinations with world-class duty-free offerings that enhance both traveler engagement and regional economic growth.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                <img 
                  src="/images/duty-free_01.jpg" 
                  alt="Luxury Retail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square translate-y-8">
                <img 
                  src="/images/duty-free_04.jpg" 
                  alt="Premium Brands" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Curated Offerings</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              A Legacy of Premium Partnerships
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              A cornerstone of this division is International Liquor and Tobacco Trading N.V. (ILTT Duty Free) — St. Maarten’s first and largest spirits and beer distributor, established in 1960. ILTT maintains long-standing, exclusive relationships with many of the world’s leading suppliers of premium spirits, wines, beverages, and tobacco brands.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Today, ILTT Duty Free operates high-quality retail concessions in both the Arrival and Departure halls, offering travelers a growing assortment of premium goods, including luxury eyewear, personal travel items, and globally recognized brands.
            </p>
            <a 
              href="https://www.instagram.com/princesspromenadesxm/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg w-fit"
            >
              Princess Promenade Duty Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
