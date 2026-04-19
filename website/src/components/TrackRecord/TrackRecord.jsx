import ScrollReveal from '../ScrollReveal';

const milestones = [
  {
    year: '2024',
    title: 'Baptiste Productions Launches',
    desc: 'Captain Bronn feature film enters post-production, marking B&L\'s expansion into entertainment and cultural narrative.',
    align: 'left'
  },
  {
    year: '2023',
    title: 'Caribbean Port & Hotel Approval',
    desc: 'Infrastructure division receives government approval for transformative port and hotel development in the Caribbean region.',
    align: 'right'
  },
  {
    year: '2022',
    title: 'Global Passport Academy Launches AI Tutor',
    desc: 'Education division deploys "Amira," an AI-powered language immersion platform, expanding the academy\'s global digital reach.',
    align: 'left'
  },
  {
    year: '2020',
    title: 'Majestic Air Cargo Operations',
    desc: 'Aviation division establishes the MAJESTIC P.L.T. operational framework, building a full-spectrum air cargo and flight training ecosystem.',
    align: 'right'
  },
  {
    year: '2018',
    title: 'Formation of B&L Worldwide',
    desc: 'B&L Worldwide Holding Companies formally incorporated in Fort Lauderdale, FL, unifying six strategic verticals under one global umbrella.',
    align: 'left'
  }
];

export default function TrackRecord() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="trackrecord">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-[#6096ba] uppercase mb-3">Track Record</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#274c77] tracking-tight">Milestones that define us.</h3>
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
