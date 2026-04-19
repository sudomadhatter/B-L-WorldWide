import ScrollReveal from './ScrollReveal';

const divisions = [
  {
    title: 'Aerospace & Defense',
    desc: 'Manufacturing tier-one components and providing secure logistical frameworks for national defense agencies.',
    icon: 'solar:plane-linear',
    img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&q=80'
  },
  {
    title: 'Global Maritime',
    desc: 'Operating a fleet of deep-water vessels managing complex supply chains across intercontinental routes.',
    icon: 'solar:water-linear',
    img: 'https://images.unsplash.com/photo-1551281434-2ce6ebfd38fc?w=800&q=80'
  },
  {
    title: 'Energy Infrastructure',
    desc: 'Developing and maintaining high-capacity grid solutions, focusing on transitionary renewables.',
    icon: 'solar:bolt-linear',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80'
  },
  {
    title: 'Digital Networks',
    desc: 'Laying thousands of miles of subsea fiber-optic cables to connect emerging markets.',
    icon: 'solar:global-linear',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  },
  {
    title: 'Real Estate & Land',
    desc: 'Strategic acquisition and development of industrial hubs, ports, and hyperscale data centers.',
    icon: 'solar:buildings-2-linear',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  },
  {
    title: 'Capital Ventures',
    desc: 'Deploying strategic capital into deep-tech startups solving fundamental industrial bottlenecks.',
    icon: 'solar:graph-up-linear',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'
  }
];

export default function DivisionsGrid() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#e7ecef]">
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
          alt="Global Divisions Background" 
          className="w-full h-full object-cover"
        />
        {/* Lighter overlay making the image blend nicely with the new e7ecef background color */}
        <div className="absolute inset-0 bg-[#e7ecef]/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold tracking-widest text-[#6096ba] uppercase mb-4">Business Matrix</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#274c77] tracking-tight">Integrated global divisions.</h3>
            <p className="mt-5 text-[#8b8c89] text-lg leading-relaxed font-medium mb-8">
              Operating across six discrete verticals, our divisions share intelligence, capital, and infrastructure to execute complex multi-disciplinary projects.
            </p>
            <button className="text-[#274c77] font-medium flex items-center gap-2 hover:text-[#6096ba] transition-colors pb-1 border-b border-[#8b8c89]/50 hover:border-[#6096ba] w-fit">
              View full corporate structure
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                className="group relative flex flex-col h-full rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(39,76,119,0.06)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(39,76,119,0.12)] cursor-pointer"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e7ecef] shrink-0">
                  <img 
                    src={div.img} 
                    alt={div.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#274c77]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Glass Content Area */}
                <div className="relative flex flex-col flex-grow p-8 bg-white/50">
                  {/* Inner glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full pt-2">
                    <h4 className="text-xl font-semibold text-[#274c77] tracking-tight mb-3">{div.title}</h4>
                    <p className="text-[#8b8c89] leading-relaxed text-sm flex-grow font-medium">
                      {div.desc}
                    </p>
                    
                    <div className="mt-8 flex items-center text-[#6096ba] text-sm font-semibold transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-1">
                      Learn more
                      <iconify-icon icon="solar:arrow-right-linear" className="ml-1.5" width="16"></iconify-icon>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}