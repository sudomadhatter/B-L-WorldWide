import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function GlobalPassportAcademy() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Global Passport Academy" 
        subtitle="Where Language Meets Culture, Technology, and Human Connection."
        bgImage="/images/global-passport-academy-gpa_01.png"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Immersive Learning</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Get Your Real <strong className="font-semibold">Global Passport</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              At <strong>Global Passport Academy</strong>, we believe language is more than grammar and vocabulary—it’s a living experience shaped by music, cinema, stories, traditions, humor, and the everyday lives of the people who speak it.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                "Speak in real conversations with Amira, our AI partner",
                "Immerse yourself through cinema, music, and storytelling",
                "World-Class Instruction via U.S. University Partnerships",
                "Interactive live masterclasses and 2-week immersion workshops"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start">
                   <iconify-icon icon="solar:check-circle-bold" className="text-[#6096ba] mt-1 mr-3 shrink-0" width="20"></iconify-icon>
                   <span className="text-slate-700 leading-relaxed">{item}</span>
                 </li>
              ))}
            </ul>

            <p className="text-lg text-slate-600 leading-relaxed font-light mt-6">
              From day one, our intelligent AI avatar, <strong>Amira</strong>, adapts to your level, pace, and confidence—accelerating your journey toward real fluency without pressure or judgment. Where traditional classrooms hesitate, Amira opens the microphone and says: <em>“Let’s talk.”</em>
            </p>

            <div className="pt-6 flex gap-4">
               <a href="https://www.globalpassportacademy.org/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Start Now
               </a>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/global-passport-academy-gpa_01.png" 
                alt="Global Passport Academy Student" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">Cultural Immersion meets Tech</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "Language is culture. And culture is what brings language to life."
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
