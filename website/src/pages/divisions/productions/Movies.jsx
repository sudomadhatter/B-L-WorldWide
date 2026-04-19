import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Movies() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Movie Production Division" 
        subtitle="Powerful, purpose-driven storytelling bringing cinematic excellence to the global stage."
        bgImage="/images/series_01.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Baptiste Productions</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Cinematic Excellence & <strong className="font-semibold">Cultural Authenticity</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              The <strong>B & L Worldwide Movie Production Division</strong>, operating under <strong>Baptiste Productions</strong>, brings powerful, purpose-driven storytelling to the global stage. With an eye for cinematic excellence and a commitment to cultural authenticity, Baptiste Productions stands as a beacon of creativity within the B & L Worldwide portfolio, blending art, heritage, and innovation.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              From its award-winning short film <em>&ldquo;Captain Bronn&rdquo;</em>—recipient of <strong>Best Production</strong> and <strong>Best Actor</strong> at <strong>The University of Miami International Film Festival</strong>—to its forthcoming full-length documentary <em>&ldquo;Afro Excelencia&rdquo;</em>, Baptiste Productions captures the human spirit through stories that inspire, challenge, and transform.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Grounded in cinematic craftsmanship and global reach, we believe that storytelling is a vehicle for education, empowerment, and economic growth, giving voice to the unseen and light to the overlooked.
            </p>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Discuss a Project
               </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/series_01.jpg" 
                alt="Baptiste Productions Cinematic Set" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">Culture & Impact</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "Blending art, heritage, and innovation to create content that moves culture and builds legacy."
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
