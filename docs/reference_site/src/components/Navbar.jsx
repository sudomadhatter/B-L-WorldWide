import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

  const navLinks = [
    { name: 'Divisions', path: '#divisions' },
    { name: 'Global Reach', path: '#reach' },
    { name: 'News', path: '#news' },
    { name: 'Investors', path: '#investors' },
    { name: 'About Us', path: '/about' },
  ];

  // Fixed top header instead of floating pill
  const headerStyle = clsx(
    'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out',
    {
      'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/60 py-4 text-gray-900': isScrolled || !isHomePage || mobileMenuOpen,
      'bg-transparent py-6 text-white': !isScrolled && isHomePage && !mobileMenuOpen,
    }
  );

  const linkStyle = clsx(
    'text-sm font-medium transition-colors duration-200 hover:text-[#6096ba]',
    {
      'text-[#8b8c89]': isScrolled || !isHomePage,
      'text-[#e7ecef]': !isScrolled && isHomePage,
    }
  );

  return (
    <header className={headerStyle}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <iconify-icon 
            icon="solar:planet-3-bold-duotone" 
            width="28" 
            height="28"
            style={{ color: isScrolled || !isHomePage || mobileMenuOpen ? '#274c77' : 'white' }}
          ></iconify-icon>
          <span className={clsx("font-semibold tracking-tight text-lg transition-colors", {
            "text-[#274c77]": isScrolled || !isHomePage || mobileMenuOpen,
            "text-white": !isScrolled && isHomePage && !mobileMenuOpen
          })}>
            B&L Worldwide
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
              "bg-[#6096ba] text-white hover:bg-[#274c77] hover:shadow-lg": isScrolled || !isHomePage || mobileMenuOpen,
              "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20": !isScrolled && isHomePage && !mobileMenuOpen
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
              style={{ color: isScrolled || !isHomePage || mobileMenuOpen ? '#274c77' : 'white' }}
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#e7ecef]/95 backdrop-blur-xl border-b border-gray-200 shadow-xl md:hidden flex flex-col px-6 py-4 gap-4 pb-8 overflow-hidden">
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