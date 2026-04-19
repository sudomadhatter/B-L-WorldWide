import ScrollReveal from '../ScrollReveal';

const partners = [
  '/images/home_17.png',
  '/images/home_18.png',
  '/images/home_19.png',
  '/images/home_26.png',
  '/images/home_25.png',
  '/images/home_22.png',
  '/images/home_23.png',
  '/images/home_24.png',
  '/images/home_25.png',
  '/images/home_26.png',
  '/images/home_27.png',
  '/images/home_28.png',
  '/images/home_29.png',
  '/images/home_30.png'
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white border-t border-[#e7ecef]" id="partners">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#6096ba] uppercase mb-4">Our Network</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#274c77] tracking-tight">
              Socially Responsible Business Group <br className="hidden md:block" />& Affiliated Strategic Partners
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center">
            {partners.map((logo, idx) => (
              <div 
                key={idx} 
                className="group relative w-full flex items-center justify-center p-6 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ animation: `float 4s ease-in-out infinite ${idx * 0.2}s` }}
              >
                {/* Subtle glow bloom centered on the logo */}
                <div className="absolute inset-x-0 inset-y-2 bg-[#a3cef1] opacity-0 blur-2xl rounded-full scale-0 group-hover:opacity-20 group-hover:scale-[1.5] transition-all duration-700 ease-out pointer-events-none z-0"></div>
                
                <img 
                  src={logo} 
                  alt={`B&L Strategic Partner ${idx + 1}`} 
                  className="relative z-10 max-w-full max-h-16 object-contain grayscale opacity-80 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-2.5 group-hover:scale-110 group-hover:drop-shadow-[0_12px_20px_rgba(96,150,186,0.35)] rounded-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
