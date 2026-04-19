import React from 'react';
import InnerPageHero from '../../../components/InnerPageHero/InnerPageHero';

export default function FlightTraining() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen font-sans">
      <InnerPageHero 
        title="Flight Training & Mentoring" 
        subtitle="Building the Next Generation of Global Aviators."
        bgImage="/images/flight_training.png"
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">
          Elite Aviation Ecosystem
        </h2>
        <div className="w-20 h-1 bg-[#274c77] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          <strong>B&L Worldwide</strong> is committed to shaping the future of aviation through a world-class ecosystem that blends aerospace innovation, elite flight training, and industry-leading mentorship. We open doors for aspiring pilots and professionals—particularly from underserved communities—supplying the industry with highly skilled and technologically proficient talent.
        </p>
      </section>

      {/* Feature Block */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/aerospace-flight-training-and-mentoring_01.jpg" 
                alt="Flight Simulator Training" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-4">Guidance & Excellence</span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1b263b] mb-6">
              Mentoring Future Leaders
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Students work directly with veteran pilots, aerospace engineers, and industry leaders who guide their development and provide real-world insights. Through strategic partnerships, we offer comprehensive training pathways from private to commercial ratings, preparing the leaders who will innovate the skies.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white hover:bg-[#274c77] hover:shadow-lg w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
