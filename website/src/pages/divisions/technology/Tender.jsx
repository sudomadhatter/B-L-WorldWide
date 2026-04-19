import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Tender() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="Tender Digital Currency" 
        subtitle="A modern digital currency and blockchain platform built to make online payments faster, cheaper, and more reliable for global enterprise."
        bgImage="/images/shared_10.webp"
      />

      {/* Main Introduction with CTA */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] leading-tight mb-8 tracking-tight">
            The Future of Global Payments
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
            A secure digital infrastructure designed for everyday users and businesses who want to move money globally or power digital services without the usual delays or high fees.
          </p>
          <a 
            href="https://splendor.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg"
          >
            Get Splendor Wallet
          </a>
        </div>
      </section>

      {/* Split Feature 1 */}
      <section className="w-full py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/shared_06.webp" alt="Global scale technology" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Technology</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">What is Tender?</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tender is designed to eliminate the friction from international finance. By utilizing a high-performance network, it provides a stable and reliable medium of exchange for individuals and enterprises alike.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you are paying a vendor across the globe or powering micro-transactions in a digital app, Tender ensures your transfers are completed in seconds, not days.
            </p>
          </div>
        </div>
      </section>

      {/* Split Feature 2 */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side (First on desktop, stacked naturally on mobile) */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Architecture</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">How Does It Work?</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transactions are processed on a shared, distributed ledger. Instead of relying on one bank or centralized clearinghouse, the system uses a decentralized network of nodes to verify and record payments securely.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Because it’s built for speed and scale, you receive near-instant settlement. Embedded smart contracts also allow automated agreements, so services can trigger payments automatically when conditions are met.
            </p>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/shared_11.jpg" alt="Decentralized network" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Dark Grid Sector */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#1b263b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight !text-white gap-2">Why Does It Matter?</h3>
            <p className="text-xl text-[#a3cef1] font-light italic">"A foundation designed for the digital economy."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Grid Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#a3cef1] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">For Global Users</h4>
              <p className="text-slate-300 leading-relaxed">
                Send payments internationally or buy services instantly without the traditional waiting periods or incurring large intermediary costs from correspondent banks.
              </p>
            </div>

            {/* Grid Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#6096ba] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">For Business</h4>
              <p className="text-slate-300 leading-relaxed">
                Opens up new possibilities: micro-payments, pay-per-use services, subscription models with real-time billing, and seamlessly embedded app payments.
              </p>
            </div>

            {/* Grid Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-1 bg-[#274c77] mb-6"></div>
              <h4 className="text-2xl font-semibold !text-white mb-4">Digital Age Foundation</h4>
              <p className="text-slate-300 leading-relaxed">
                Compared to traditional frameworks, Tender offers more transparency, eliminates middlemen, and scales cleanly to handle the demands of modern commerce.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
