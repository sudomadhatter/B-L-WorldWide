import { useEffect, useState, useRef } from 'react';
import ScrollReveal from '../ScrollReveal';

// Custom hook for counting up
function useCountUp(endValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [isIntersecting, endValue, duration]);

  return { count, ref };
}

function StatItem({ endValue, suffix, label }) {
  const { count, ref } = useCountUp(endValue);
  
  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
      <div className="text-4xl md:text-6xl font-semibold text-[#e7ecef] tracking-tight flex items-baseline">
        {count}
        <span className="text-[#a3cef1] ml-1">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-[#a3cef1]/70 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#274c77] py-20 border-y border-white/10" id="reach">
      <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-8 md:pt-0 md:pl-0 flex justify-center md:justify-start">
            <StatItem endValue={6} suffix="" label="Business Divisions" />
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex justify-center md:justify-start">
            <StatItem endValue={5} suffix="" label="Global Regions" />
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex justify-center md:justify-start">
            <StatItem endValue={30} suffix="+" label="Companies & Brands" />
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex justify-center md:justify-start">
            <StatItem endValue={14} suffix="" label="Team Members" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
