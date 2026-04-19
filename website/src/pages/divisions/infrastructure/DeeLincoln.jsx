import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function DeeLincoln() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Dee Lincoln Prime" 
        subtitle="The Flagship Steakhouse of B&L Worldwide, creating market-leading experiential dining destinations."
        bgImage="/images/dee-lincoln-prime_03.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Split Feature Block */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#274c77] to-[#6096ba] rounded-[2rem] opacity-20 blur-lg"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
              <img 
                src="/images/dee-lincoln-prime_01.png" 
                alt="Dee Lincoln Prime Fine Dining" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4 block">Food & Beverage Division</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
              The "Queen of Steaks" Experience
            </h2>
            <div className="w-16 h-1 bg-[#274c77] mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              Dee Lincoln launched her namesake <strong>Dee Lincoln Prime</strong> in 2017, and later expanded with Havana Dee's Lounge. Recognized as a female powerhouse and co-founder of Del Frisco's Double Eagle Steakhouse, Dee Lincoln has garnered national acclaim throughout her career.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-10">
              As a renowned food and beverage brand creator, our operational marketing and branding teams execute proprietary market strategies. Branding is more than a logo—it's an invisible feeling of trust and excellence. By establishing instant rapport and a unique atmosphere, Dee Lincoln Prime consistently leads the market in luxury dining experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="https://deelincolnprime.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1b263b] !text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#274c77] to-[#1b263b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Visit Dee Lincoln Prime</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
