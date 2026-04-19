import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Finance() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Digital Currency Education" 
        subtitle="Advanced education in blockchain and modern finance, preparing the next generation of financial leaders."
        bgImage="/images/digital-currency-and-21st-century-finance_02.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Blockchain & Crypto</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Navigating the <strong className="font-semibold">Future of Finance</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              <strong>B & L Worldwide</strong> offers a comprehensive curriculum designed to demystify digital currencies, decentralized finance (DeFi), and the underlying blockchain technologies that are reshaping global markets. This program prepares individuals and organizations to navigate and leverage the financial systems of the 21st century safely and effectively.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                "Fundamentals of blockchain architecture and security",
                "Understanding cryptocurrencies, stablecoins, and CBDCs",
                "Navigating decentralized finance (DeFi) platforms",
                "Regulatory landscapes and risk management strategies"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start">
                   <iconify-icon icon="solar:check-circle-bold" className="text-[#6096ba] mt-1 mr-3 shrink-0" width="20"></iconify-icon>
                   <span className="text-slate-700 leading-relaxed">{item}</span>
                 </li>
              ))}
            </ul>

            <p className="text-lg text-slate-600 leading-relaxed font-light mt-6">
              As capital markets evolve, understanding digital assets is no longer optional—it is essential. Our courses combine rigorous academic theory with practical, hands-on simulation environments to ensure students gain true financial literacy for the modern era.
            </p>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Start Learning
               </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/digital-currency-and-21st-century-finance_03.jpg" 
                alt="Digital Currency Education" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">DeFi Literacy</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "Equipping pioneers with the knowledge to lead the next financial revolution."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
