import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function MixedUse() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Mixed-Use & Residential" 
        subtitle="Building communities that honor history, serve people, and inspire global living."
        bgImage="/images/mixed-use-residential_01.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Split Feature Block */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#274c77] to-[#6096ba] rounded-[2rem] opacity-20 blur-lg"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
              <img 
                src="/images/mixed-use-residential_01.jpg" 
                alt="Mixed Use Residential" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4 block">Inclusive Communities</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
              Vibrant & Sustainable Environments
            </h2>
            <div className="w-16 h-1 bg-[#274c77] mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              B&L Worldwide's Mixed-Use & Residential Development Division creates vibrant, inclusive, and sustainable communities across the United States and the Caribbean—from historic Gettysburg, Pennsylvania to the world-renowned coastlines of Saint Martin and Saint Barth's.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-10">
              Our developments combine high-quality housing, thoughtful urban design, and community-centered amenities to meet the diverse needs of families, veterans, workers, and global travelers. We don't just build housing; we engineer destination-style living spaces that thrive for generations.
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
