import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const divisionMenus = [
  {
    name: 'Technology',
    path: '/technology',
    subs: [
      { label: 'Tender', href: '/technology/tender' },
      { label: 'Digital Currencies', href: '/technology/digital-currencies' },
      { label: 'Plice', href: '/technology/plice' },
      { label: 'Splendor', href: '/technology/splendor' },
    ],
  },
  {
    name: 'Distribution',
    path: '/distribution',
    subs: [
      { label: 'ILTT', href: '/distribution/iltt' },
      { label: '24 Fresh', href: '/distribution/24-fresh' },
      { label: 'Duty Free Division', href: '/distribution/duty-free' },
    ],
  },
  {
    name: 'Aviation',
    path: '/aviation',
    subs: [
      { label: 'Majestic Air Cargo', href: '/aviation/air-cargo' },
      { label: 'Flight Training', href: '/aviation/flight-training' },
      { label: 'ATC', href: '/aviation/atc' },
      { label: 'Avionics & MRO', href: '/aviation/mro' },
    ],
  },
  {
    name: 'Infrastructure',
    path: '/infrastructure',
    subs: [
      { label: 'Port & Hotel Dev', href: '/infrastructure/port-hotel' },
      { label: 'Mixed Use', href: '/infrastructure/mixed-use' },
      { label: 'Housing', href: '/infrastructure/housing' },
      { label: 'Dee Lincoln', href: '/infrastructure/dee-lincoln' },
    ],
  },
  {
    name: 'Productions',
    path: '/productions',
    subs: [
      { label: 'Movies', href: '/productions/movies' },
      { label: 'Documentaries', href: '/productions/documentaries' },
      { label: 'Series', href: '/productions/series' },
      { label: 'Commercials', href: '/productions/commercials' },
    ],
  },
  {
    name: 'Education',
    path: '/education',
    subs: [
      { label: 'Global Passport Academy', href: '/education/global-passport-academy' },
      { label: 'Aviation Sim', href: '/education/aviation-sim' },
      { label: 'AI Programs', href: '/education/ai-programs' },
      { label: 'Finance', href: '/education/finance' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const megaButtonRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mega-menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        megaMenuRef.current && !megaMenuRef.current.contains(e.target) &&
        megaButtonRef.current && !megaButtonRef.current.contains(e.target)
      ) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Track Record', path: '#trackrecord' },
  ];

  const isLight = isScrolled || !isHomePage || mobileMenuOpen || megaMenuOpen;

  const headerStyle = clsx(
    'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out',
    {
      'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/60 py-4 text-gray-900': isLight,
      'bg-transparent py-6 text-white': !isLight,
    }
  );

  const linkStyle = clsx(
    'text-base font-extrabold transition-colors duration-200 hover:text-[#6096ba]',
    {
      'text-[#8b8c89]': isLight,
      'text-[#e7ecef]': !isLight,
    }
  );

  return (
    <header className={headerStyle}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img 
            src="/bl-logo-silver.png" 
            alt="B&L Worldwide Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Divisions Mega-Menu Trigger */}
          <button 
            ref={megaButtonRef}
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className={clsx(linkStyle, 'flex items-center gap-1 cursor-pointer')}
          >
            Divisions
            <iconify-icon 
              icon="solar:alt-arrow-down-linear" 
              width="14"
              style={{ 
                transition: 'transform 0.2s', 
                transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
              }}
            ></iconify-icon>
          </button>

          {navLinks.map((link) => (
            link.path.startsWith('#') ? (
              <a key={link.name} href={isHomePage ? link.path : `/${link.path}`} className={linkStyle}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.path} className={linkStyle}>
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <button className={clsx(
            "hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all rounded-full",
            {
              "bg-[#6096ba] text-white hover:bg-[#274c77] hover:shadow-lg": isLight,
              "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20": !isLight
            }
          )}>
            Contact Us
          </button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="24" 
              height="24"
              style={{ color: isLight ? '#274c77' : 'white' }}
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Desktop Mega-Menu Dropdown */}
      {megaMenuOpen && (
        <div 
          ref={megaMenuRef}
          className="hidden md:block absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200/80 shadow-xl z-40"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
              {divisionMenus.map((div) => (
                <div key={div.name}>
                  <Link to={div.path} className="text-[#274c77] font-extrabold text-lg mb-4 pb-2 border-b border-[#e7ecef] hover:text-[#6096ba] transition-colors block">
                    {div.name}
                  </Link>
                  <ul className="space-y-2.5">
                    {div.subs.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.href} className="text-[#8b8c89] text-sm font-extrabold hover:text-[#6096ba] transition-colors block">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-[calc(100vh-76px)] bg-[#e7ecef]/98 backdrop-blur-3xl border-b border-gray-200 shadow-xl md:hidden flex flex-col px-6 py-4 gap-4 pb-24 overflow-y-auto z-40 overscroll-contain">
          
          {/* Divisions accordion-style in mobile */}
          <div className="text-[#274c77] font-medium py-2 border-b border-white/50">
            <span className="text-xs font-extrabold tracking-widest text-[#6096ba] uppercase">Divisions</span>
          </div>
          {divisionMenus.map((div) => (
            <div key={div.name} className="flex flex-col gap-2 relative">
              <Link to={div.path} className="text-[#274c77] font-extrabold py-1 text-lg hover:text-[#6096ba] transition-colors block">
                {div.name}
              </Link>
              <div className="flex flex-col pl-8 gap-2 pb-2">
                {div.subs.map((sub) => (
                  <Link key={sub.label} to={sub.href} className="text-[#8b8c89] text-sm font-extrabold hover:text-[#6096ba] transition-colors">
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="h-px bg-white/50 my-2"></div>

          {navLinks.map((link) => (
            link.path.startsWith('#') ? (
              <a key={link.name} href={isHomePage ? link.path : `/${link.path}`} className="text-[#274c77] font-bold text-base py-2 border-b border-white/50">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.path} className="text-[#274c77] font-bold text-base py-2 border-b border-white/50">
                {link.name}
              </Link>
            )
          ))}
          <button className="mt-4 bg-[#274c77] text-white w-full py-3 rounded-full font-medium shadow-md hover:bg-[#6096ba] transition-colors">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
