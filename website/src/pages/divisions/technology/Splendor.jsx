import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Splendor() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="Splendor" 
        subtitle="Simple. Secure. Borderless."
        bgImage="/images/splendor_01.jpg"
      />

      {/* Main Introduction */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] leading-tight mb-8 tracking-tight">
            The Future of Value Exchange
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
            Splendor is B &amp; L Worldwide’s flagship digital currency—designed to make global transactions faster, safer, and more accessible for everyday users and businesses.
          </p>
          <a 
            href="https://splendor.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg"
          >
            Get Your Splendor Wallet
          </a>
        </div>
      </section>

      {/* Split Feature 1 */}
      <section className="w-full py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Technology</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Advanced Blockchain</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Built with advanced blockchain technology, Splendor allows people to send, receive, and store value instantly across borders, without the costs or barriers of traditional banking.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a focus on real-world utility, Splendor powers e-commerce, logistics, digital marketplaces, and community-based trade inside the B &amp; L ecosystem. Users enjoy low fees, high security, and a seamless interface.
            </p>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/splendor_03.jpg" alt="Borderless financial network" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Dark Grid Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#1b263b] relative overflow-hidden">
        {/* Subtle background texture/overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
           <img src="/images/splendor_01.jpg" alt="Background Texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-[#a3cef1] uppercase">Education &amp; Trade</span>
            <h2 className="text-3xl md:text-5xl font-light !text-white tracking-tight mt-2 mb-6">Empowering Global Trade</h2>
            <div className="w-20 h-1 bg-[#6096ba] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Dark Grid Box 1 */}
            <div className="bg-[#274c77]/30 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-[#274c77]/40 transition-colors">
              <h3 className="text-2xl font-semibold !text-white mb-4">Hands-on Skills</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Learners discover how digital currencies are reshaping banking, commerce, and international trade—while gaining the hands-on skills needed to participate confidently and safely. Participants learn how to analyze market trends, manage risk, and build a portfolio.
              </p>
            </div>

            {/* Dark Grid Box 2 */}
            <div className="bg-[#274c77]/30 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-[#274c77]/40 transition-colors">
              <h3 className="text-2xl font-semibold !text-white mb-4">Real-time Markets</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                At the heart of the program is Splendor, B &amp; L Worldwide’s secure, user-friendly digital currency platform. Students can open an account, explore real-time markets, and begin trading with clarity and confidence. Understand the technology and step into the future of global finance.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
