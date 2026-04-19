import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

export default function ScrollReveal({ children, className, delay = 0, direction = 'up', threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return '-translate-x-12';
      case 'right': return 'translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClass()}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}