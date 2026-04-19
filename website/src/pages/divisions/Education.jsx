import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHero from '../../components/InnerPageHero/InnerPageHero';

const educationSubDivisions = [
  {
    title: 'Global Passport Academy',
    desc: 'Immersive language and cultural education leveraging AI and US university partnerships.',
    img: '/images/global-passport-academy-gpa_04.jpg',
    path: '/education/global-passport-academy'
  },
  {
    title: 'Aviation Simulator',
    desc: 'Professional-grade commercial flight simulator training designed for future aviation professionals.',
    img: '/images/aviation-simulator_01.jpg',
    path: '/education/aviation-sim'
  },
  {
    title: 'AI Programs',
    desc: 'Empowering students and professionals to harness artificial intelligence for the future workforce.',
    img: '/images/ai-2_02.jpg',
    path: '/education/ai-programs'
  },
  {
    title: 'Digital Currency Education',
    desc: 'Advanced education in blockchain and modern finance, preparing the next generation of financial leaders.',
    img: '/images/digital-currency-and-21st-century-finance_02.jpg',
    path: '/education/finance'
  }
];

export default function Education() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <InnerPageHero 
        title="Education Division" 
        subtitle="Forward-thinking academies building the next generation of global aviation, tech, and finance professionals."
        bgImage="/images/aviation_01.jpg"
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-[#6096ba] uppercase mb-2 block">Global Learning</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1b263b] tracking-tight mb-6">Our Educational Programs</h2>
          <div className="w-20 h-1 bg-[#274c77] mx-auto mt-6"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-center max-w-4xl mx-auto mb-16">
          <strong>B&L Worldwide’s Education Division</strong> is committed to unlocking human potential across the globe. From high-tech AI curriculums and immersive language learning to professional-grade commercial aviation training, we provide the tools and academies necessary to empower the workforce of the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {educationSubDivisions.map((sub, idx) => (
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
                    Explore Program
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
