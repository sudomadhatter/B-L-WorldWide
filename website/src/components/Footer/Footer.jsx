import ScrollReveal from '../ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-[#274c77] text-[#e7ecef]/80 pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <ScrollReveal delay={0} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/bl-logo-silver.png" 
                alt="B&L Worldwide Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-[#e7ecef]/70 text-sm leading-relaxed max-w-sm mb-4">
              B&L Worldwide Holding Companies — Distribution, Logistics & Technology. Invest Locally, Think Globally.
            </p>
            <div className="text-[#e7ecef]/50 text-xs leading-relaxed mb-8 space-y-1">
              <p>1314 East Las Olas Blvd</p>
              <p>Ft Lauderdale, FL 33301</p>
              <p className="mt-2">
                <a href="tel:+15614000465" className="hover:text-[#a3cef1] transition-colors">(561) 400-0465</a>
              </p>
              <p>
                <a href="mailto:info@b-lworldwide.company" className="hover:text-[#a3cef1] transition-colors">info@b-lworldwide.company</a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {['linkedin', 'twitter', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#6096ba] hover:text-white transition-colors duration-300">
                  <iconify-icon icon={`simple-icons:${social}`} width="18"></iconify-icon>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Divisions Col */}
          <ScrollReveal delay={100}>
            <h4 className="text-white font-semibold mb-6">Divisions</h4>
            <ul className="space-y-3 text-sm">
              {['Technology', 'Distribution & Logistics', 'Aviation', 'Infrastructure', 'Baptiste Productions', 'Education'].map(link => (
                <li key={link}><a href="#" className="hover:text-[#a3cef1] transition-colors">{link}</a></li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Company Col */}
          <ScrollReveal delay={200}>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Leadership', 'Track Record', 'Investors', 'Careers', 'Newsroom'].map(link => (
                <li key={link}><a href="#" className="hover:text-[#a3cef1] transition-colors">{link}</a></li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Regions */}
          <ScrollReveal delay={300}>
            <h4 className="text-white font-semibold mb-6">Global Presence</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></div> Americas</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></div> Caribbean</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></div> Africa</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></div> Europe</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#a3cef1]"></div> Asia</li>
            </ul>
          </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={400} className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <span className="text-sm font-medium text-white whitespace-nowrap">Corporate Briefing</span>
            <div className="flex w-full lg:w-72 bg-[#1b3554]/50 rounded p-1 border border-white/10 focus-within:border-[#a3cef1] transition-colors">
              <input 
                type="email" 
                placeholder="Business email" 
                className="bg-transparent border-none outline-none text-sm px-3 py-2 w-full text-white placeholder:text-[#e7ecef]/60"
              />
              <button className="bg-[#e7ecef] text-[#274c77] px-4 rounded text-sm font-medium hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#e7ecef]/60 w-full lg:w-auto">
            <span>&copy; {new Date().getFullYear()} B&L Worldwide Holding Companies. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
