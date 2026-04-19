import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero/InnerPageHero';

const aviationSubDivisions = [
  {
    title: 'Air Cargo',
    desc: 'Extensive and reliable international air freight network driving global supply chain efficiency.',
    img: '/images/aviation_hero.png',
    path: '/aviation/air-cargo'
  },
  {
    title: 'Flight Training',
    desc: 'Premier pilot academy utilizing state-of-the-art simulators to produce elite, globally certified aviators.',
    img: '/images/flight_training.png',
    path: '/aviation/flight-training'
  },
  {
    title: 'Air Traffic Control',
    desc: 'Advanced airspace management and radar systems guaranteeing safety and streamlined flight operations.',
    img: '/images/atc_infrastructure.png',
    path: '/aviation/atc'
  },
  {
    title: 'Avionics & MRO',
    desc: 'Comprehensive maintenance, repair, and overhaul utilizing cutting-edge diagnostic technology.',
    img: '/images/avionics_mro.png',
    path: '/aviation/avionics-mro'
  }
];

export default function Aviation() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Aviation Division" 
        subtitle="A full-spectrum aerospace operation — from air cargo and pilot training to air traffic control, MRO, and avionics fabrication."
        bgImage="/images/aviation_hero.png"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-2 block">Aerospace Operations</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">Our Aviation Capabilities</h2>
          <div className="w-20 h-1 bg-[#274c77] mx-auto mt-6"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-center max-w-4xl mx-auto mb-16">
          <strong>B&L Worldwide’s Aviation Division</strong> is a globally integrated aerospace powerhouse. We build the future of flight by seamlessly combining rapid-response air cargo, elite pilot training programs, and advanced Air Traffic Control infrastructures. Supported by a world-class Avionics and MRO division, we ensure total operational readiness, safety, and precision for every mission, empowering global connectivity across the skies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {aviationSubDivisions.map((sub, idx) => (
            <Link 
              to={sub.path} 
              key={idx}
              className="group relative flex flex-col h-full rounded-[2rem] bg-white shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-100"
            >
              {/* Image Header */}
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <img 
                  src={sub.img} 
                  alt={sub.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/60 to-transparent"></div>
              </div>

              {/* Content Area */}
              <div className="relative flex flex-col flex-grow p-8 bg-white">
                <h3 className="text-2xl font-semibold text-[#1b263b] tracking-tight mb-3">{sub.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base flex-grow">
                  {sub.desc}
                </p>
                <div className="mt-6 flex items-center text-[#6096ba] text-sm font-semibold transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-1">
                  Explore {sub.title}
                  <iconify-icon icon="solar:arrow-right-linear" className="ml-1.5" width="16"></iconify-icon>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
