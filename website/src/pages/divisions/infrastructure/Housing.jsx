import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Housing() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="VA & HUD Housing" 
        subtitle="A national model for veteran housing, affordable living, and community revitalization."
        bgImage="/images/mixed-use-residential_03.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Split Feature Block */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#274c77] to-[#6096ba] rounded-[2rem] opacity-20 blur-lg"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
              <img 
                src="/images/shared_06.webp" 
                alt="Affordable VA and HUD Housing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4 block">Black Horse Development</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
              Gettysburg, Pennsylvania
            </h2>
            <div className="w-16 h-1 bg-[#274c77] mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              Set on 300 acres of picturesque farmland just 2.5 miles from historic downtown Gettysburg, the Black Horse Development is a transformative residential and mixed-use community anchored by a crucial mission: serving U.S. veterans and working families.
            </p>
            
            <ul className="text-lg text-slate-600 font-light mb-8 space-y-3 list-none">
              <li className="flex items-start">
                <span className="text-[#6096ba] mr-3 mt-1">✦</span>
                HUD-supported affordable housing and Veterans Housing Villages designed to combat homelessness.
              </li>
              <li className="flex items-start">
                <span className="text-[#6096ba] mr-3 mt-1">✦</span>
                Energy-efficient prefabricated rental units delivering rapid and cost-effective construction.
              </li>
              <li className="flex items-start">
                <span className="text-[#6096ba] mr-3 mt-1">✦</span>
                Job-training hubs, workforce development centers, and on-site counseling for long-term stability.
              </li>
              <li className="flex items-start">
                <span className="text-[#6096ba] mr-3 mt-1">✦</span>
                Expansive green spaces and mixed-use corridors offering wellness facilities and retail services.
              </li>
            </ul>

            <p className="text-lg text-slate-600 leading-relaxed font-light mb-10 italic border-l-4 border-[#274c77] pl-4">
              With over 100,000 veterans experiencing homelessness, Black Horse is more than a housing project—it is a national solution blending dignity, community, and opportunity into a single place to call home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="https://b-lworldwide.company/wp-content/uploads/2025/11/Black-Horse-Gettysburg-PA-Veterans-Housing-and-Counseling-Center-Project-Overview-June-12-2024v1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1b263b] !text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#274c77] to-[#1b263b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Community Centered Development</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
