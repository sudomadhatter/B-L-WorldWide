import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={clsx(
        "fixed bottom-8 right-8 z-[90] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#274c77] backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgb(39,76,119,0.12)] transition-all duration-300 ease-out hover:bg-[#6096ba] hover:text-white hover:shadow-[0_20px_40px_rgb(39,76,119,0.2)] group",
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      <iconify-icon 
        icon="solar:arrow-up-linear" 
        width="24" 
        class="transition-transform duration-300 ease-out group-hover:-translate-y-1"
      ></iconify-icon>
    </button>
  );
}
