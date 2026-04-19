import React from 'react';
import InnerPageHero from '../components/InnerPageHero/InnerPageHero';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-slate-50 font-sans">
      {/* Hero Section using shared_01 for a high-end landscape feel */}
      <InnerPageHero 
        title="About Us" 
        subtitle="Global Investment Firm & Multinational Holding Company"
        bgImage="/images/about-us-hero.png" 
      />

      {/* Main Introduction - Clean, large typography centering on mission */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] leading-tight mb-8">
            Building bridges between cultures, economies, and opportunities.
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            B & L Worldwide unites multiple high-growth divisions under a single vision: to redefine global connectivity and commerce while creating long-term value for investors, partners, and communities. Transforming industries through <strong className="font-semibold text-[#274c77]">innovation, sustainability, and strategic partnerships</strong>.
          </p>
        </div>
      </section>

      {/* Split Feature 1 - Our Vision */}
      <section className="w-full py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/about-us_01.webp" alt="Global Vision" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Purpose & Inclusion</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Our Vision</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be a <strong>global catalyst for sustainable development</strong>, creating wealth with purpose through innovation, inclusivity, and partnership.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We invest in industries that connect people, cultures, and economies—empowering a new generation of global leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Split Feature 2 - Our Reach */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase">Global Impact</span>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1b263b] tracking-tight">Our Reach</h3>
            <div className="w-20 h-1 bg-[#274c77]"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              From <strong>aviation to education</strong>, <strong>digital finance to film</strong>, and <strong>infrastructure to consumer goods</strong>, B & L Worldwide Holding Companies operates where <strong>growth meets innovation</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our portfolio reflects one unifying philosophy: building a connected world where business excellence uplifts communities and shapes a better tomorrow.
            </p>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
               <img src="/images/about-us_03.webp" alt="Global Reach" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Our Portfolio of Excellence */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#1b263b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Our Portfolio of Excellence</h3>
            <p className="text-xl text-[#a3cef1] font-light italic">"Quality, innovation, and service perfectly aligned."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Division 1 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/shared_02.webp" alt="Aviation & Logistics" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Aviation & Logistic Division</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Anchoring international trade and supply-chain connectivity between the Americas, Africa, and Asia. Powers fresh-food exports, industrial transport, and e-commerce logistics.
                 </p>
               </div>
            </div>

            {/* Division 2 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/shared_03.webp" alt="Port & Hotel Development" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Port & Hotel Development</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Redefining coastal infrastructure through maritime port development and luxury hospitality investments transforming waterfronts into hubs of innovation.
                 </p>
               </div>
            </div>

            {/* Division 3 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/shared_04.webp" alt="Liquor & Tobacco" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Liquor & Tobacco Division</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Leveraging global sourcing to penetrate high-value beverage and tobacco markets. Curating premium products reflecting heritage and excellence.
                 </p>
               </div>
            </div>

            {/* Division 4 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/shared_05.webp" alt="Education & Human Capital" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Education & Human Capital</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Transforming language education and workforce development via the Global Passport Academy across Latin America and the African diaspora.
                 </p>
               </div>
            </div>

            {/* Division 5 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/shared_06.webp" alt="Digital Currency & Fintech" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Digital Currency & Fintech</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Pioneering digital settlement technologies enabling instant cross-border trade, shaping the next generation of financial infrastructure.
                 </p>
               </div>
            </div>

            {/* Division 6 */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
               <img src="/images/about-us_04.webp" alt="Film & Media - Baptiste Productions" className="w-full h-56 object-cover" />
               <div className="p-8">
                 <h4 className="text-2xl font-semibold mb-4 text-[#e0e1dd]">Film & Media Division</h4>
                 <p className="text-sm text-[#a3cef1] leading-relaxed">
                   Baptiste Productions has achieved international acclaim with multi-award-winning projects celebrating culture, history, and the creative spirit.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
