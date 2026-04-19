import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Series() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Series Division" 
        subtitle="Premium episodic content that entertains, educates, and inspires across the globe."
        bgImage="/images/series_03.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Baptiste Production</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Bold Stories. <strong className="font-semibold">Unforgettable Worlds.</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              The Series Division of <strong>Baptiste Production</strong> brings long-form storytelling to life through premium episodic content that entertains, educates, and inspires. With a commitment to cultural depth, cinematic quality, and global relevance, we create powerful series that reflect the richness of the human experience—across continents, communities, and generations.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Our work spans scripted dramas, docu-series, limited series, cultural explorations, and youth-focused educational programs. Each project is crafted with the same creative excellence and narrative precision that define Baptiste Production, blending brilliant writing, exceptional casting, and world-class production quality.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Through strategic partnerships with international networks, streaming platforms, and global distributors, our Series Division is expanding its reach across the Americas, Africa, Europe, and the Caribbean—elevating diverse voices and sharing stories that resonate worldwide.
            </p>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Explore Opportunities
               </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/series_03.jpg" 
                alt="Episodic Series Production" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">The Next Generation</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "From historical reimaginations to contemporary social narratives... shaping a new era of storytelling where insight meets artistry."
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
