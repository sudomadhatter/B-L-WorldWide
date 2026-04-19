import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero/InnerPageHero';

const distSubDivisions = [
  {
    title: 'ILTT',
    desc: 'Majestic freight forwarding and cargo airline for world-class spirits, wines, and premium tobacco globally.',
    img: '/images/iltt_hero.png',
    path: '/distribution/iltt'
  },
  {
    title: '24 Fresh',
    desc: 'Premier fresh-goods distribution engineered to move perishable products with unmatched speed and reliability.',
    img: '/images/fresh24_hero.png',
    path: '/distribution/24-fresh'
  },
  {
    title: 'Duty Free Division',
    desc: 'Global travel retail bringing luxury goods and premium brand distribution to travel hubs worldwide.',
    img: '/images/dutyfree_hero.png',
    path: '/distribution/duty-free'
  }
];

export default function Distribution() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Distribution & Logistics" 
        subtitle="International trade networks delivering premium goods across duty-free, fresh produce, and liquor & tobacco channels."
        bgImage="/images/shared_08.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-2 block">Global Reach</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight">Our Distribution Channels</h2>
          <div className="w-20 h-1 bg-[#274c77] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {distSubDivisions.map((sub, idx) => (
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
