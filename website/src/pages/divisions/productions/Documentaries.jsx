import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function Documentaries() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Documentaries" 
        subtitle="Powerful, high-impact films illuminating untold stories and celebrating human brilliance."
        bgImage="/images/series_02.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          {/* Right Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Non-Fiction Storytelling</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Narratives That <strong className="font-semibold">Shape Nations</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              <strong>B & L Worldwide’s</strong> Documentary & Storytelling Division is dedicated to producing powerful, high-impact films that illuminate untold stories, celebrate human brilliance, and elevate the voices of communities often overlooked. Through world-class filmmaking, immersive storytelling, and global collaboration, we capture the narratives that shape nations, movements, and generations.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Our flagship project, <em>Afro-Excelencia</em>, is a groundbreaking documentary that explores the extraordinary contributions, resilience, and cultural genius of Afro-descendant communities throughout the Americas. Through intimate interviews, historical insights, and sweeping cinematography, Excelencia Afro reveals the courage, innovation, and visionary leadership that have transformed societies across the hemisphere.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                "Uncovering brilliance that powered the global Afro experience",
                "Featuring musicians, scholars, artists, and civic leaders",
                "Bridging cultures and igniting dialog globally"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start">
                   <iconify-icon icon="solar:check-circle-bold" className="text-[#6096ba] mt-1 mr-3 shrink-0" width="20"></iconify-icon>
                   <span className="text-slate-700 leading-relaxed">{item}</span>
                 </li>
              ))}
            </ul>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Partner With Us
               </Link>
            </div>
          </div>

          {/* Left Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/series_02.jpg" 
                alt="Documentary Production" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">Inspiring Pride</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "Our work stands at the intersection of art, history, and global impact, honoring the people and ideas that move our world forward."
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
