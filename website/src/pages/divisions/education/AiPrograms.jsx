import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function AiPrograms() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="AI Programs" 
        subtitle="Empowering People to Learn, Work, and Compete in the Age of Artificial Intelligence."
        bgImage="/images/vtol-drone-pilotless-vehicles_02.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          {/* Right Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">AI Training for Workforce</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Unlock Pathways for <strong className="font-semibold">Future Success</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              <strong>B & L Worldwide’s AI Training Program</strong> prepares students, professionals, educators, and entrepreneurs to thrive in a world transformed by intelligent technologies. Designed for all skill levels, this course demystifies artificial intelligence and teaches participants how to use AI as a powerful tool to expand opportunities, increase productivity, and unlock new pathways for success.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                "Hands-on lessons with real-world scenarios",
                "Apply AI in research, data analysis, and problem-solving",
                "Gain essential skills for education and employment",
                "Increase business productivity and streamline operations"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start">
                   <iconify-icon icon="solar:check-circle-bold" className="text-[#6096ba] mt-1 mr-3 shrink-0" width="20"></iconify-icon>
                   <span className="text-slate-700 leading-relaxed">{item}</span>
                 </li>
              ))}
            </ul>

            <p className="text-lg text-slate-600 leading-relaxed font-light mt-6">
              Our mission is simple: make AI skills accessible to everyone—regardless of background—so communities around the world can compete in tomorrow’s global economy.
            </p>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Enroll in AI Programs
               </Link>
            </div>
          </div>

          {/* Left Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/vtol-drone-pilotless-vehicles_02.jpg" 
                alt="AI Education Programs" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">The Opportunity of Today</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "AI isn't just the future; it's the opportunity of today. Let us help you harness it."
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
