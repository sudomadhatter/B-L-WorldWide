import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero/InnerPageHero';

const infrastructureSubDivisions = [
  {
    title: 'Port Hotel',
    desc: 'Luxurious resort and marina integration, providing premium seaside hospitality experiences worldwide.',
    img: '/images/mixed-use-residential_02.jpg',
    path: '/infrastructure/port-hotel'
  },
  {
    title: 'Mixed Use Development',
    desc: 'Cutting-edge urban environments blending top-tier retail, corporate offices, and ultra-luxury residential spaces.',
    img: '/images/mixed-use-residential_01.jpg',
    path: '/infrastructure/mixed-use'
  },
  {
    title: 'Housing',
    desc: 'Sustainable, architectural mastery delivering high-end bespoke residential communities and mega-structures.',
    img: '/images/mixed-use-residential_03.jpg',
    path: '/infrastructure/housing'
  },
  {
    title: 'Dee Lincoln Prime',
    desc: 'Flagship fine-dining steakhouse concepts bringing unparalleled warmth, luxury, and culinary excellence.',
    img: '/images/dee-lincoln-prime_03.jpg',
    path: '/infrastructure/dee-lincoln'
  }
];

export default function Infrastructure() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Infrastructure Division" 
        subtitle="Transforming global skylines and shorelines through visionary development, luxury hospitality, and architectural excellence."
        bgImage="/images/mixed-use-residential_01.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-2 block">Global Development</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">Our Infrastructure Assets</h2>
          <div className="w-20 h-1 bg-[#274c77] mx-auto mt-6"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-center max-w-4xl mx-auto mb-16">
          <strong>B&L Worldwide’s Infrastructure Division</strong> constructs the foundation of tomorrow's luxury and commercial environments. From the world’s most elegant mixed-use urban centers and pristine seaside resorts to sustainable, high-end housing and premier fine-dining destinations like Dee Lincoln Prime, we build destinations that elevate the human experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {infrastructureSubDivisions.map((sub, idx) => (
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
