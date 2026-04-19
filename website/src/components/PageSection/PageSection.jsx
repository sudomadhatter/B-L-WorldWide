import React from 'react';
import { clsx } from 'clsx';

export default function PageSection({ children, className }) {
  return (
    <section className={clsx("w-full bg-white py-16 md:py-24", className)}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-[#1b263b]">
        {/* Prose styling to handle raw HTML/Markdown content smoothly */}
        <div className="prose prose-lg prose-blue max-w-none text-[#8b8c89] leading-relaxed [&>h1]:text-[#274c77] [&>h1]:mb-6 [&>h1]:tracking-tight [&>h2]:text-[#274c77] [&>h2]:mt-12 [&>h3]:text-[#6096ba] [&>img]:rounded-xl [&>img]:shadow-lg [&>img]:my-8 [&>p>strong]:text-[#274c77]">
          {children}
        </div>
      </div>
    </section>
  );
}
