import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="hero-gradient shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="MPC Youth Fellowship" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">MPC Youth Fellowship</h1>
              <p className="text-xs text-primary-foreground/80">Meippanin Pathai Church</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.path === '#footer' ? scrollToFooter : undefined}
                className={`text-primary-foreground hover:text-secondary transition-colors font-medium ${
                  isActive(link.path) ? 'text-secondary border-b-2 border-secondary' : ''
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
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.path === '#footer') scrollToFooter();
                  }}
                  className={`text-primary-foreground hover:text-secondary transition-colors font-medium py-2 ${
                    isActive(link.path) ? 'text-secondary' : ''
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