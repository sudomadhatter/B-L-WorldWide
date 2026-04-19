import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function AviationSim() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Aviation Simulator" 
        subtitle="Professional-grade commercial flight simulator training designed for future aviation professionals."
        bgImage="/images/aviation-simulator_01.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase block">Flight Training</span>
              <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">
                Professional-Grade Training <strong className="font-semibold">Accessible to Everyone</strong>
              </h2>
              <div className="w-16 h-1 bg-[#274c77] mt-6"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              <strong>B & L Worldwide</strong> is revolutionizing global aviation education with our state-of-the-art Flight Simulator App, designed for Airbus and Boeing aircraft. Built with the precision, realism, and procedural accuracy used by professional pilots, our platform gives students the opportunity to master real-world flight techniques from the comfort of their home—no cockpit required.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                "Immersive 3D environments mirroring real-world conditions",
                "Authentic aircraft systems with procedural accuracy",
                "Step-by-step training modules for takeoff, navigation, and landing",
                "Emergency management and advanced cockpit operations"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start">
                   <iconify-icon icon="solar:check-circle-bold" className="text-[#6096ba] mt-1 mr-3 shrink-0" width="20"></iconify-icon>
                   <span className="text-slate-700 leading-relaxed">{item}</span>
                 </li>
              ))}
            </ul>

            <p className="text-lg text-slate-600 leading-relaxed font-light mt-6">
              By democratizing access to high-quality aviation education, this simulator helps cultivate the next generation of global aviators. With the world facing unprecedented pilot shortages, we deliver a powerful solution: train more pilots, train them better, and train them anywhere.
            </p>

            <div className="pt-6">
               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold !text-white transition-all duration-300 bg-[#274c77] rounded-full hover:bg-[#1b263b] hover:shadow-lg hover:-translate-y-1">
                  Learn More
               </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/aviation-simulator_02.jpg" 
                alt="Aviation Simulator Cockpit" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/90 via-[#1b263b]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold !text-white mb-3 tracking-tight">A New Era of Flight</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    "A new era of flight begins with a single download. Prepare yourself for the modern cockpit."
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
