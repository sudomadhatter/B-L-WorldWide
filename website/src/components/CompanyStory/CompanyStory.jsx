import ScrollReveal from '../ScrollReveal';

export default function CompanyStory() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Narrative Column */}
          <ScrollReveal>
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#6096ba] uppercase mb-4">About B&L Worldwide</h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-[#274c77] tracking-tight leading-tight mb-8">
                Invest Locally,<br />Think Globally.
              </h3>
              
              <div className="space-y-6 text-[#8b8c89] text-base leading-relaxed font-medium">
                <p>
                  B&L Worldwide is a diversified holding company headquartered in Fort Lauderdale, Florida. We operate across six strategic divisions — Technology, Distribution & Logistics, Aviation, Infrastructure & Development, Productions, and Education — delivering customized business solutions that span five continents.
                </p>
                <p>
                  Founded on the principle that local expertise fuels global impact, our portfolio encompasses over 30 companies and brands. From blockchain payment platforms and air cargo operations to port development and feature film production, we build the infrastructure that connects markets and creates opportunity.
                </p>
                <p>
                  Under the leadership of Captain Craig Baptiste, our team of industry veterans brings deep operational experience across aviation, finance, technology, and international trade — ensuring every venture we undertake meets the highest standards of execution and integrity.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#team" className="bg-[#6096ba] !text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-[#274c77] hover:shadow-lg flex items-center gap-2" style={{ color: '#ffffff' }}>
                  Meet Our Team
                  <iconify-icon icon="solar:arrow-right-linear" width="18" style={{ color: '#ffffff' }}></iconify-icon>
                </a>
                <a href="#trackrecord" className="text-[#274c77] font-medium flex items-center gap-2 hover:text-[#6096ba] transition-colors text-sm">
                  View Track Record
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Image + At-a-Glance Stats */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgb(39,76,119,0.15)]">
                <img 
                  src="/images/about-us_03.webp" 
                  alt="B&L Worldwide Corporate" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Glassmorphism Stats Overlay */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] z-10 md:-left-8 md:-bottom-8 md:translate-x-0 md:w-auto bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[1.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(39,76,119,0.1)] md:max-w-xs">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-semibold text-[#274c77] tracking-tight">5</div>
                    <div className="text-xs text-[#8b8c89] font-medium uppercase tracking-wider mt-1">Continents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#274c77] tracking-tight">30+</div>
                    <div className="text-xs text-[#8b8c89] font-medium uppercase tracking-wider mt-1">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#274c77] tracking-tight">6</div>
                    <div className="text-xs text-[#8b8c89] font-medium uppercase tracking-wider mt-1">Divisions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#274c77] tracking-tight">FL</div>
                    <div className="text-xs text-[#8b8c89] font-medium uppercase tracking-wider mt-1">Headquarters</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
