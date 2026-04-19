import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero/InnerPageHero';

const productionsSubDivisions = [
  {
    title: 'Movies',
    desc: 'Blockbuster-scale feature films delivering compelling narratives and world-class cinematic experiences.',
    img: '/images/series_01.jpg',
    path: '/productions/movies'
  },
  {
    title: 'Documentaries',
    desc: 'Award-winning non-fiction cinema illuminating impactful true stories with unparalleled authenticity.',
    img: '/images/series_02.jpg',
    path: '/productions/documentaries'
  },
  {
    title: 'Series',
    desc: 'Premium episodic television and streaming content designed for global audience engagement.',
    img: '/images/series_03.jpg',
    path: '/productions/series'
  },
  {
    title: 'Commercials',
    desc: 'High-end advertising and corporate broadcasting campaigns that drive brand distinctiveness and market value.',
    img: '/images/commercial-and-campaigns_01.jpg',
    path: '/productions/commercials'
  }
];

export default function Productions() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Productions Division" 
        subtitle="Global media and entertainment powerhouse behind leading movies, documentaries, and premium campaigns."
        bgImage="/images/commercial-and-campaigns_02.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-2 block">Media & Entertainment</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">Our Production Studios</h2>
          <div className="w-20 h-1 bg-[#274c77] mx-auto mt-6"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-center max-w-4xl mx-auto mb-16">
          <strong>B&L Worldwide’s Productions Division</strong> operates at the highest echelons of global media. From blockbuster cinematic features and award-winning documentaries to highly addictive episodic series and globally distributed commercial campaigns, we create content that moves culture, informs the masses, and builds legacy brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {productionsSubDivisions.map((sub, idx) => (
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
                <div className="mt-6 flex justify-start">
                  <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all rounded-full bg-[#6096ba] !text-white group-hover:bg-[#274c77] group-hover:shadow-lg">
                    Explore Film
                    <iconify-icon icon="solar:arrow-right-linear" className="ml-1.5" width="16"></iconify-icon>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
