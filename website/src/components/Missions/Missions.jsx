import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import ScrollReveal from '../ScrollReveal';

const missionsData = [
  {
    id: 'connect',
    title: 'Connect',
    desc: 'Bridging markets across the Americas, Caribbean, Africa, Europe, and Asia with integrated logistics and digital infrastructure.',
    img: '/images/air-cargo_01.jpg',
    icon: 'solar:global-linear',
  },
  {
    id: 'innovate',
    title: 'Innovate',
    desc: 'Pioneering next-generation technology from blockchain platforms and digital currencies to AI-powered solutions through Splendor Labs.',
    img: '/images/technology_shared_10.webp',
    icon: 'solar:cpu-bolt-linear',
  },
  {
    id: 'educate',
    title: 'Educate',
    desc: 'Cultivating the next generation of leaders through Global Passport Academy, aviation simulation, and 21st-century financial literacy.',
    img: '/images/about-us_shared_05.webp',
    icon: 'solar:square-academic-cap-linear',
  },
  {
    id: 'build',
    title: 'Build',
    desc: 'Developing transformative infrastructure — ports, mixed-use communities, and affordable housing that reshapes skylines and lives.',
    img: '/images/mixed-use-residential_01.jpg',
    icon: 'solar:buildings-3-linear',
  },
  {
    id: 'create',
    title: 'Create',
    desc: 'Telling stories that matter through Baptiste Productions — feature films, documentaries, and campaigns celebrating culture and excellence.',
    img: '/images/about-us_04.webp',
    icon: 'solar:clapperboard-open-linear',
  }
];

export default function Missions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollToItem = (index) => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    const items = container.children;
    if (items[index]) {
      const item = items[index];
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = item.offsetLeft + (item.offsetWidth / 2);
      
      container.scrollTo({
        left: itemCenter - containerCenter,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % missionsData.length;
      scrollToItem(next);
      return next;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const next = prev === 0 ? missionsData.length - 1 : prev - 1;
      scrollToItem(next);
      return next;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % missionsData.length;
        scrollToItem(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, activeIndex]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.children[0]?.offsetWidth || 0;
        const gap = 16; 
        
        if (itemWidth > 0) {
          const newIndex = Math.round(scrollLeft / (itemWidth + gap));
          if (newIndex !== activeIndex && newIndex >= 0 && newIndex < missionsData.length) {
            setActiveIndex(newIndex);
          }
        }
      }, 50);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex]);

  return (
    <section className="py-24 bg-[#1b263b]" id="missions">
      <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Our purpose<br className="hidden md:block"/>in action.</h3>
        </div>
        
        <div className="flex flex-col md:items-end gap-6">
          <p className="text-[#e7ecef]/70 max-w-md text-sm md:text-base leading-relaxed md:text-right">
            Five foundational pillars drive our global operations — connecting markets, pioneering technology, and building infrastructure for a more resilient tomorrow.
          </p>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              aria-label="Previous mission"
              className="w-12 h-12 rounded-full border border-[#a3cef1]/30 bg-white/5 hover:bg-[#6096ba]/40 flex items-center justify-center text-[#a3cef1] transition-all backdrop-blur-md hover:scale-105"
            >
              <iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next mission"
              className="w-12 h-12 rounded-full border border-[#a3cef1]/30 bg-white/5 hover:bg-[#6096ba]/40 flex items-center justify-center text-[#a3cef1] transition-all backdrop-blur-md hover:scale-105"
            >
              <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
            </button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div 
          ref={carouselRef}
          className={clsx("flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar h-[500px] lg:h-[600px] w-full gap-4 lg:gap-6 pb-4 cursor-grab", isDragging && "cursor-grabbing snap-none")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); handleMouseUpOrLeave(); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
        >
          {missionsData.map((mission, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={mission.id}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToItem(index);
                }}
                className={clsx(
                  "group relative overflow-hidden rounded-[2rem] cursor-pointer min-w-0 min-h-0 transition-all duration-500",
                  "flex-none w-[85vw] md:w-[60vw] snap-center",
                  isActive ? "shadow-2xl scale-100 opacity-100" : "scale-[0.98] opacity-80 hover:opacity-100"
                )}
              >
                <img
                  src={mission.img}
                  alt={mission.title}
                  className={clsx(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive ? "scale-105" : "scale-100 grayscale-[40%] group-hover:grayscale-0"
                  )}
                  loading="lazy"
                />

                <div className={clsx(
                  "absolute inset-0 transition-opacity duration-700",
                  isActive 
                    ? "bg-gradient-to-t from-[#1b263b]/95 via-[#1b263b]/50 to-transparent" 
                    : "bg-[#1b263b]/60 group-hover:bg-[#1b263b]/40"
                )}></div>

                <div className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                )}>
                  <div className="w-12 h-12 rounded bg-[#274c77]/60 backdrop-blur-md border border-[#a3cef1]/30 flex items-center justify-center transform lg:group-hover:scale-110 transition-transform">
                    <iconify-icon icon={mission.icon} style={{ color: '#e7ecef' }} width="24"></iconify-icon>
                  </div>
                </div>

                <div className={clsx(
                  "absolute inset-0 p-6 lg:p-10 flex flex-col justify-end transition-all duration-700",
                  isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8 pointer-events-none"
                )}>
                  <div className="w-full max-w-[85vw] lg:w-[450px]">
                    <div className="w-12 h-12 mb-6 rounded bg-[#274c77]/80 backdrop-blur-md border border-[#a3cef1]/30 flex items-center justify-center">
                      <iconify-icon icon={mission.icon} style={{ color: '#a3cef1' }} width="24"></iconify-icon>
                    </div>

                    <h4 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4 drop-shadow-md">
                      {mission.title}
                    </h4>
                    
                    <p className="text-[#e7ecef]/90 text-base md:text-lg font-light leading-relaxed drop-shadow-sm">
                      {mission.desc}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1.5 bg-white/10 w-full z-20 hidden lg:block">
                    <div
                      key={activeIndex}
                      className="h-full bg-[#6096ba] origin-left"
                      style={{
                        animation: !isHovered ? "progress-slide 6s linear forwards" : "none",
                        transform: isHovered ? "scaleX(1)" : "scaleX(0)"
                      }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
