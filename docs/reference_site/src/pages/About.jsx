import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-[#e7ecef] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6">
        <ScrollReveal>
          <iconify-icon icon="solar:buildings-3-bold-duotone" width="64" className="text-[#274c77] mb-8"></iconify-icon>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#274c77] tracking-tight mb-6">Corporate Overview</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl text-[#8b8c89] leading-relaxed mb-8 font-medium">
            B&L Worldwide is a global holding company specializing in the development, acquisition, and management of critical infrastructure assets. We are committed to fostering long-term resilience across defense, logistics, and digital networks.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="h-px w-24 bg-[#8b8c89]/30 mx-auto mb-8"></div>
          <p className="text-[#8b8c89]">Detailed corporate governance and leadership profiles are currently under restricted access.</p>
        </ScrollReveal>
      </div>
    </div>
  );
}