import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const divisionMenus = [
  {
    name: 'Technology',
    subs: ['Tender', 'Digital Currencies', 'Plice', 'Splendor'],
  },
  {
    name: 'Distribution',
    subs: ['ILTT', '24 Fresh', 'Duty Free Division'],
  },
  {
    name: 'Aviation',
    subs: ['Majestic Air Cargo', 'Flight Training', 'ATC', 'Avionics & MRO'],
  },
  {
    name: 'Infrastructure',
    subs: ['Port & Hotel Dev', 'Mixed Use', 'Housing', 'Dee Lincoln'],
  },
  {
    name: 'Productions',
    subs: ['Movies', 'Documentaries', 'Series', 'Commercials'],
  },
  {
    name: 'Education',
    subs: ['Global Passport Academy', 'Aviation Sim', 'AI Programs', 'Finance'],
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
    { name: 'About', path: '#about' },
    { name: 'Team', path: '#team' },
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
    'text-sm font-bold transition-colors duration-200 hover:text-[#6096ba]',
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
                  <h4 className="text-[#274c77] font-semibold text-sm mb-4 pb-2 border-b border-[#e7ecef]">{div.name}</h4>
                  <ul className="space-y-2.5">
                    {div.subs.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="text-[#8b8c89] text-sm hover:text-[#6096ba] transition-colors font-medium">
                          {sub}
                        </a>
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
        <div className="absolute top-full left-0 w-full bg-[#e7ecef]/95 backdrop-blur-xl border-b border-gray-200 shadow-xl md:hidden flex flex-col px-6 py-4 gap-4 pb-8 overflow-hidden z-40">
          
          {/* Divisions accordion-style in mobile */}
          <div className="text-[#274c77] font-medium py-2 border-b border-white/50">
            <span className="text-xs font-bold tracking-widest text-[#6096ba] uppercase">Divisions</span>
          </div>
          {divisionMenus.map((div) => (
            <a key={div.name} href="#divisions" className="text-[#274c77] font-medium py-1 pl-4 text-sm">
              {div.name}
            </a>
          ))}

          <div className="h-px bg-white/50 my-2"></div>

          {navLinks.map((link) => (
            link.path.startsWith('#') ? (
              <a key={link.name} href={isHomePage ? link.path : `/${link.path}`} className="text-[#274c77] font-medium py-2 border-b border-white/50">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.path} className="text-[#274c77] font-medium py-2 border-b border-white/50">
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
