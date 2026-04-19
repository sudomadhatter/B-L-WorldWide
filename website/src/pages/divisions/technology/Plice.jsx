import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Plice() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <InnerPageHero 
        title="P.L.I.C.E." 
        subtitle="Revolutionizing the way the world moves perishables."
        bgImage="/images/plice_04.jpg"
      />

      {/* Main Introduction */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6096ba] font-bold tracking-widest uppercase mb-4 text-sm">Majestic P.L.T. Platform</p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] leading-tight mb-8 tracking-tight">
            Global Distribution Ecosystem
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
            P.L.I.C.E. is B &amp; L Worldwide’s advanced global distribution ecosystem—built to deliver fresh food and other temperature-sensitive products anywhere on earth.
          </p>
          <a 
            href="#" onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg"
          >
            Our Distribution &amp; Logistics Way
          </a>
        </div>
      </section>

      {/* Split Feature 1 */}
      <section className="w-full py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/plice_network_truck.png" alt="Distribution infrastructure" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Infrastructure</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Synchronized Network</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              As part of the Majestic P.L.T. platform, P.L.I.C.E. unifies ports, airports, and multimodal logistics into one seamless, high-velocity network.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By deploying smart coldchain infrastructure and real-time transit technologies, the system is fully capable of supporting the most demanding perishable supply chains globally.
            </p>
          </div>
        </div>
      </section>

      {/* Split Feature 2 */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Performance</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Uncompromising Quality</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether it’s flowers from Colombia, seafood from the Caribbean, or fresh produce moving across hemispheres, P.L.I.C.E. ensures that every product arrives fresher, faster, and more reliably than ever before.
            </p>
            
            <div className="flex items-center gap-8 mt-8 pt-4">
              <div>
                <span className="block text-3xl font-bold text-[#274c77] mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest text-[#6096ba] font-bold">Cold Chain Integrity</span>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <span className="block text-3xl font-bold text-[#274c77] mb-1">24/7</span>
                <span className="text-xs uppercase tracking-widest text-[#6096ba] font-bold">Global Monitoring</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/plice_03.jpg" alt="Cold chain integrity" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
