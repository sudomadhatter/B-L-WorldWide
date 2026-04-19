import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function DigitalCurrencies() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="Digital Currency" 
        subtitle="Learn the Future of Money. Start Trading with Splendor."
        bgImage="/images/digital-currency-and-21st-century-finance_01.jpg"
      />

      {/* Main Introduction */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] leading-tight mb-8 tracking-tight">
            21st-Century Finance
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
            B & L Worldwide’s Digital Currency Course brings the power of modern finance directly to the people—giving students, professionals, and entrepreneurs a clear, practical pathway into the fast-growing world of digital assets.
          </p>
        </div>
      </section>

      {/* Split Feature 1 */}
      <section className="w-full py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/digital-currency-and-21st-century-finance_02.jpg" alt="Modern Finance Overview" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Education</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">A Clear Pathway</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Designed for beginners and emerging investors alike, this course breaks down the essentials of cryptocurrency, blockchain technology, and digital wallets.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We dispel the myths and simplify global markets, empowering you with the smart financial strategies needed to navigate the economy of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Split Feature 2 */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side (First on desktop, stacked naturally on mobile) */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Practical Application</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Hands-On Market Skills</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Learners discover how digital currencies are reshaping banking, commerce, and international trade—while gaining the hands-on skills needed to participate confidently and safely. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Through step-by-step lessons, real trading simulations, and guided exercises, participants learn how to analyze market trends, manage risk, and build a diverse portfolio.
            </p>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/digital-currency-and-21st-century-finance_03.jpg" alt="Hands-on learning" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Dark Grid Sector */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#1b263b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight !text-white gap-2">Enter the Future with Splendor</h3>
            <p className="text-xl text-[#a3cef1] font-light italic">"Digital finance is here—and now it’s available to everyone."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Grid Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#a3cef1] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">Understand the Technology</h4>
              <p className="text-slate-300 leading-relaxed">
                At the heart of the program is ensuring you confidently grasp the mechanisms of the blockchain and the nature of digital currency assets.
              </p>
            </div>

            {/* Grid Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#6096ba] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">Master the Tools</h4>
              <p className="text-slate-300 leading-relaxed">
                Open an account and explore real-time markets using Splendor, B & L Worldwide’s secure, user-friendly digital currency platform.
              </p>
            </div>

            {/* Grid Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#274c77] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">Step into the Future</h4>
              <p className="text-slate-300 leading-relaxed">
                Begin trading with clarity and confidence. The course is designed to transition you from a curious student into a capable participant in the global economy.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
             <a 
               href="https://splendor.org/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-white/10 !text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
             >
               Explore Splendor
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
