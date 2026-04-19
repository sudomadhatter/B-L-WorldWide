import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function AirCargo() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="Majestic Air Cargo" 
        subtitle="The aviation and logistics backbone of B&L Worldwide."
        bgImage="/images/air_cargo.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Unmatched Global Reach
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          <strong>Majestic Cargo</strong> is an integrated cargo airline engineered to move fresh foods, industrial goods, and high-value products with unmatched speed, safety, and efficiency. With modern wide-body aircraft, advanced cold-chain technology, and strategically placed global hubs in the US, Colombia, Saint Martin, and the DRC, Majestic connects producers directly to the world’s most important commercial corridors.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/shared_07.jpg" 
                alt="Air Cargo Operations" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Speed & Reliability</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              Delivering Opportunity
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              From fresh-cut flowers out of Medellín to critical minerals from the heart of Africa, Majestic Cargo strengthens supply chains and empowers local industries. Our mission is bold and unwavering: Deliver freshness, value, and opportunity—anywhere in the world.
            </p>
            <a 
              href="https://www.majestic-plt.com/about" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg w-fit"
            >
              Majestic PLT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
