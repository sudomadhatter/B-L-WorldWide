import React from 'react';
import { clsx } from 'clsx';

export default function InnerPageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#1b263b] pt-20">
      {/* Background Image / Overlay */}
      {bgImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1b263b] via-[#274c77]/80 to-transparent mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-white tracking-tight mb-4 drop-shadow-xl uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, letterSpacing: '0.05em' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-[#a3cef1] max-w-2xl mx-auto drop-shadow-md tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-100 z-10" />
    </section>
  );
}
