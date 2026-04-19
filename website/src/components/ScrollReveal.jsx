import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, className = '', direction = 'up' }) {
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let transformString = '';
  if (!isVisible) {
    if (direction === 'up') transformString = 'translateY(40px)';
    if (direction === 'left') transformString = 'translateX(-40px)';
    if (direction === 'right') transformString = 'translateX(40px)';
  } else {
    if (direction === 'up') transformString = 'translateY(0)';
    if (direction === 'left') transformString = 'translateX(0)';
    if (direction === 'right') transformString = 'translateX(0)';
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformString,
        transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
