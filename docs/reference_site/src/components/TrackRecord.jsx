import ScrollReveal from './ScrollReveal';

const milestones = [
  {
    year: '2024',
    title: 'Trans-Pacific Fiber Completion',
    desc: 'Successfully finalized the 12,000km subsea cable linking Tokyo to Los Angeles, increasing bandwidth capacity by 400%.',
    align: 'left'
  },
  {
    year: '2022',
    title: 'Port of Rotterdam Expansion',
    desc: 'Delivered the automated Terminal Delta project ahead of schedule, cementing operational dominance in European logistics.',
    align: 'right'
  },
  {
    year: '2019',
    title: 'Project Artemis Defense Contract',
    desc: 'Awarded tier-one status for next-generation satellite hardening components by the Allied Defense Coalition.',
    align: 'left'
  },
  {
    year: '2015',
    title: 'Formation of B&L Worldwide',
    desc: 'Consolidation of three legacy shipping and aerospace firms into a single global entity.',
    align: 'right'
  }
];

export default function TrackRecord() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-[#6096ba] uppercase mb-3">Track Record</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#274c77] tracking-tight">A history of delivery.</h3>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#e7ecef] transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => (
              <ScrollReveal 
                key={index}
                direction={item.align === 'left' ? 'left' : 'right'}
                delay={100}
              >
                <div className={`relative flex flex-col md:flex-row items-start md:items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''} md:h-40`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#6096ba] transform -translate-x-[7px] md:-translate-x-1/2 ring-4 ring-white z-10 mt-1 md:mt-0"></div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${item.align === 'left' ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <span className="text-[#6096ba] font-bold text-xl tracking-tight block mb-2">{item.year}</span>
                    <h4 className="text-xl font-semibold text-[#274c77] mb-2">{item.title}</h4>
                    <p className="text-[#8b8c89] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  
                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}