import { useRef } from 'react';
import ScrollReveal from '../ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const divisions = [
  {
    title: 'Technology',
    desc: 'Next-generation digital platforms spanning payment systems, blockchain infrastructure, AI studios, and e-commerce logistics.',
    icon: 'solar:cpu-bolt-linear',
    img: '/images/about-us_shared_06.webp',
    subs: ['Tender', 'Digital Currencies', 'Plice', 'Splendor']
  },
  {
    title: 'Distribution & Logistics',
    desc: 'International trade networks delivering premium goods across duty-free, fresh produce, and liquor & tobacco channels.',
    icon: 'solar:box-minimalistic-linear',
    img: '/images/air-cargo_shared_08.jpg',
    subs: ['ILTT', '24 Fresh', 'Duty Free Division']
  },
  {
    title: 'Aviation',
    desc: 'A full-spectrum aerospace operation — from air cargo and pilot training to VTOL systems, MRO, and avionics fabrication.',
    icon: 'solar:plane-linear',
    img: '/images/aviation_03.jpg',
    subs: ['Majestic Air Cargo', 'Flight Training', 'ATC', 'Avionics']
  },
  {
    title: 'Infrastructure & Development',
    desc: 'Transforming communities through port development, mixed-use residential, affordable housing, and premium hospitality.',
    icon: 'solar:buildings-3-linear',
    img: '/images/home_16.jpg',
    subs: ['Port & Hotel Dev', 'Mixed Use', 'Housing', 'Dee Lincoln']
  },
  {
    title: 'Baptiste Productions',
    desc: 'Feature films, documentaries, series, and commercial campaigns that amplify diverse voices and cultural narratives.',
    icon: 'solar:clapperboard-open-linear',
    img: '/images/series_02.jpg',
    subs: ['Movies', 'Documentaries', 'Series', 'Commercials']
  },
  {
    title: 'Education',
    desc: 'Nurturing global citizens through language immersion, aviation simulation, AI education, and 21st-century financial literacy.',
    icon: 'solar:square-academic-cap-linear',
    img: '/images/global-passport-academy-gpa_04.jpg',
    subs: ['Global Passport Academy', 'Aviation Sim', 'AI Programs', 'Finance']
  }
];

export default function DivisionsGrid() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-[#e7ecef]" id="divisions">
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          ref={bgRef}
          className="absolute -top-[20%] -bottom-[20%] left-0 right-0"
        >
          <img 
            src="/images/divisions-bg-desktop.png" 
            alt="Global Divisions Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#e7ecef]/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold tracking-widest text-[#6096ba] uppercase mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#274c77] tracking-tight">Six divisions.<br className="hidden md:block"/>One global vision.</h3>
            <p className="mt-5 text-[#274c77] text-lg leading-relaxed font-medium mb-8">
              B&L Worldwide operates across six integrated verticals — sharing infrastructure, intelligence, and capital to deliver customized business solutions worldwide.
            </p>
            <button className="text-[#274c77] font-medium flex items-center gap-2 hover:text-[#6096ba] transition-colors pb-1 border-b border-[#8b8c89]/50 hover:border-[#6096ba] w-fit">
              View full corporate structure
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                className="group relative flex flex-col h-full rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(39,76,119,0.06)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(39,76,119,0.12)] cursor-pointer"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e7ecef] shrink-0">
                  <img 
                    src={div.img} 
                    alt={div.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#274c77]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Glass Content Area */}
                <div className="relative flex flex-col flex-grow p-8 bg-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full pt-2">
                    <h4 className="text-xl font-semibold text-[#274c77] tracking-tight mb-3">{div.title}</h4>
                    <p className="text-[#8b8c89] leading-relaxed text-sm flex-grow font-medium">
                      {div.desc}
                    </p>
                    
                    {/* Sub-companies tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {div.subs.map((sub) => (
                        <span key={sub} className="text-xs font-medium text-[#274c77]/70 bg-[#e7ecef]/80 px-2.5 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center text-[#6096ba] text-sm font-semibold transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-1">
                      Learn more
                      <iconify-icon icon="solar:arrow-right-linear" className="ml-1.5" width="16"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
