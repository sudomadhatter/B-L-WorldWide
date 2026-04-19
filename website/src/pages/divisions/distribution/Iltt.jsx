import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Iltt() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="ILTT" 
        subtitle="Majestic cargo and premium spirit distribution."
        bgImage="/images/iltt_hero.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Majestic Cargo
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          <strong>Majestic freight forwarding and cargo airline</strong> stands at the crossroads of heritage and innovation — distributing world-class spirits, premium wines, and curated tobacco brands that define sophistication and quality. Our global network connects leading products, distilleries, vineyards, and tobacco houses with discerning markets across the Americas, Europe, West Africa, and Asia.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/duty-free_02.jpg" 
                alt="Premium Distribution" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Integrity & Excellence</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              Setting the Global Standard
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              From exclusive trade partnerships to seamless logistics and compliance, we deliver not only exceptional products but also an unmatched standard of integrity, authenticity, and brand excellence. B&L Worldwide — where tradition meets tomorrow’s global marketplace.
            </p>
            <a 
              href="https://b-lworldwide.company/wp-content/uploads/2025/11/Liqour-and-Tobacco-Trading-Company.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg w-fit"
            >
              Download Deck
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
