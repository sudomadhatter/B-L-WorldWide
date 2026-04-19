import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import ScrollReveal from './ScrollReveal';

const missionsData = [
  {
    id: 'connect',
    title: 'Connect',
    desc: 'Laying the digital and physical fiber that links isolated markets to global commerce.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    icon: 'solar:global-linear',
  },
  {
    id: 'serve',
    title: 'Serve',
    desc: 'Developing critical civic infrastructure from water purification to smart transit.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    icon: 'solar:buildings-3-linear',
  },
  {
    id: 'save',
    title: 'Save Lives',
    desc: 'Rapid deployment logistics and humanitarian supply chains in crisis zones.',
    img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80',
    icon: 'solar:box-minimalistic-linear',
  },
  {
    id: 'protect',
    title: 'Protect',
    desc: 'Advanced defense systems and secure infrastructural hardening for sovereign entities.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
    icon: 'solar:shield-keyhole-linear',
  },
  {
    id: 'explore',
    title: 'Explore',
    desc: 'Pushing boundaries in aerospace and deep-sea telecommunications networks.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    icon: 'solar:satellite-linear',
  }
];

export default function Missions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const scrollToItem = (index) => {
    if (!carouselRef.current) return;
    
    // Only apply programmatic scrolling on mobile/tablet view where the container scrolls horizontally
    if (window.innerWidth < 1024) {
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

  // Auto-advance carousel
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

  // Sync mobile scroll with activeIndex
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    
    let scrollTimeout;
    const handleScroll = () => {
      if (window.innerWidth >= 1024) return; // Only sync on mobile/tablet
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.children[0]?.offsetWidth || 0;
        const gap = 16; // Accounts for 1rem gap
        
        if (itemWidth > 0) {
          // Figure out which item is closest to the left edge (center of view)
          const newIndex = Math.round(scrollLeft / (itemWidth + gap));
          if (newIndex !== activeIndex && newIndex >= 0 && newIndex < missionsData.length) {
            setActiveIndex(newIndex);
          }
        }
      }, 50); // slight debounce for performance
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex]);

  return (
    <section className="py-24 bg-[#1b263b]" id="divisions">
      <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#6096ba]/30 border border-[#6096ba]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></span>
            <span className="text-xs font-semibold tracking-widest text-[#a3cef1] uppercase">Core Missions</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Forward-thinking <br className="hidden md:block"/>operations.</h3>
        </div>
        
        <div className="flex flex-col md:items-end gap-6">
          <p className="text-[#e7ecef]/70 max-w-md text-sm md:text-base leading-relaxed md:text-right">
            Our global operations are strictly aligned with five foundational pillars designed to construct a more resilient tomorrow.
          </p>
          
          {/* Manual Controls */}
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

      {/* Modern Expanding Accordion / Mobile Carousel Container */}
      <ScrollReveal delay={200} className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div 
          ref={carouselRef}
          className="flex flex-row overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar h-[500px] lg:h-[600px] w-full gap-4 lg:gap-3 pb-4 lg:pb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
                  "group relative overflow-hidden rounded-[2rem] cursor-pointer min-w-0 min-h-0",
                  "flex-none w-[85vw] md:w-[60vw] snap-center", // Mobile/Tablet: fixed width snapping carousel
                  "lg:w-auto lg:transition-[flex] lg:duration-[800ms] lg:ease-[cubic-bezier(0.25,1,0.5,1)]", // Desktop flex transition
                  isActive ? "lg:flex-[8_8_0%] shadow-2xl" : "lg:flex-[1_1_0%]"
                )}
              >
                {/* Background Image */}
                <img
                  src={mission.img}
                  alt={mission.title}
                  className={clsx(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive ? "scale-105" : "scale-100 grayscale-[40%] group-hover:grayscale-0"
                  )}
                  loading="lazy"
                />

                {/* Gradients for text readability */}
                <div className={clsx(
                  "absolute inset-0 transition-opacity duration-700",
                  isActive 
                    ? "bg-gradient-to-t from-[#1b263b]/95 via-[#1b263b]/50 to-transparent" 
                    : "bg-[#1b263b]/60 group-hover:bg-[#1b263b]/40"
                )}></div>

                {/* Inactive State: Centered Icon */}
                <div className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                )}>
                  <div className="w-12 h-12 rounded bg-[#274c77]/60 backdrop-blur-md border border-[#a3cef1]/30 flex items-center justify-center transform lg:group-hover:scale-110 transition-transform">
                    <iconify-icon icon={mission.icon} style={{ color: '#e7ecef' }} width="24"></iconify-icon>
                  </div>
                </div>

                {/* Active State: Content */}
                <div className={clsx(
                  "absolute inset-0 p-6 lg:p-10 flex flex-col justify-end transition-all duration-700",
                  isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8 pointer-events-none"
                )}>
                  {/* Bounded container to prevent text reflow during flex animation */}
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

                {/* Progress Bar Layer */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1.5 bg-white/10 w-full z-20 hidden lg:block">
                    <div
                      key={activeIndex} // Forces re-render of element to restart animation
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