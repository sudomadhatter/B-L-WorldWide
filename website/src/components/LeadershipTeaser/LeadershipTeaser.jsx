import ScrollReveal from '../ScrollReveal';

const leaders = [
  {
    name: 'Captain Craig Baptiste',
    title: 'Founder & CEO',
    bio: 'Visionary leader with decades of experience in aviation, technology, and international business development.',
    initials: 'CB',
  },
  {
    name: 'Ralph Ledee',
    title: 'Managing Partner',
    bio: 'Strategic operations executive specializing in distribution logistics and Caribbean market expansion.',
    initials: 'RL',
  },
  {
    name: 'George Hazy',
    title: 'Senior Advisor',
    bio: 'Aviation industry veteran bringing deep expertise in air cargo operations and fleet management.',
    initials: 'GH',
  },
  {
    name: 'Robert Asprilla',
    title: 'Director of Strategy',
    bio: 'Infrastructure and development strategist with a track record in large-scale port and mixed-use projects.',
    initials: 'RA',
  },
  {
    name: 'Todor Ivanov',
    title: 'Chief Technology Officer',
    bio: 'Technology architect leading blockchain, AI, and digital platform initiatives across the Splendor ecosystem.',
    initials: 'TI',
  },
];

export default function LeadershipTeaser() {
  return (
    <section className="py-28 bg-[#1b263b] overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#a3cef1] uppercase mb-4">Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">The team behind<br className="hidden md:block"/>the vision.</h3>
            </div>
            <p className="text-[#e7ecef]/60 max-w-md text-sm md:text-base leading-relaxed md:text-right">
              Industry veterans across aviation, finance, technology, and international trade — united by a shared commitment to operational excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {leaders.map((leader, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
              <div className="group relative flex flex-col h-full items-center text-center p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(96,150,186,0.15)] cursor-pointer">
                
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6096ba] to-[#274c77] flex items-center justify-center mb-6 ring-4 ring-white/10 group-hover:ring-[#6096ba]/30 transition-all duration-500">
                  <span className="text-xl font-semibold text-white tracking-tight">{leader.initials}</span>
                </div>

                <h4 className="text-lg font-semibold text-white tracking-tight mb-1">{leader.name}</h4>
                <p className="text-[#a3cef1] text-xs font-medium uppercase tracking-wider mb-4">{leader.title}</p>
                <p className="text-[#e7ecef]/60 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 !text-white text-sm font-medium hover:text-[#a3cef1] transition-colors" style={{ color: '#ffffff' }}>
              View full team
              <iconify-icon icon="solar:arrow-right-linear" width="16" style={{ color: '#ffffff' }}></iconify-icon>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
