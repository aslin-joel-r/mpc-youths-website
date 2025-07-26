import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import heroImage from '@/assets/hero-image.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Events', path: '/events' },
    { name: 'Pray for Me', path: '/pray-for-me' },
    { name: 'Contact', path: '#footer' },
  ];

  const isActive = (path: string) => {
    if (path === '#footer') return false;
    return location.pathname === path;
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`shadow-lg sticky top-0 z-50 ${isHomePage ? 'absolute w-full' : 'glassmorphism'}`} style={isHomePage ? {
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    } : {}}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="MPC Youth Fellowship" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-white">MPC Youth Fellowship</h1>
              <p className="text-xs text-white/80">Meippanin Pathai Church</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.path === '#footer' ? scrollToFooter : undefined}
                className={`text-white hover:text-red-500 transition-colors font-bold ${
                  isActive(link.path) ? 'text-red-500 border-b-2 border-red-500' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.path === '#footer') scrollToFooter();
                  }}
                  className={`text-white hover:text-red-500 transition-colors font-bold py-2 ${
                    isActive(link.path) ? 'text-red-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;