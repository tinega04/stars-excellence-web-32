
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Campuses", path: "/campuses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white elegant-shadow py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white transition-all duration-300 group-hover:bg-gold">
              <span className="font-playfair font-bold text-xl">SIS</span>
            </div>
            <div className="hidden md:block ml-3">
              <h1 className="font-playfair text-xl font-bold text-navy">Stevens Integrated Schools</h1>
              <p className="text-xs italic text-gray-600">Stars of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm lg:text-base transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-gold font-medium'
                    : 'text-navy hover:text-gold'
                }`}
              >
                <span className="link-hover">{item.name}</span>
              </Link>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              to="/admissions" 
              className="btn-gold text-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`py-2 transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-gold font-medium'
                      : 'text-navy hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t">
                <Link 
                  to="/admissions" 
                  className="btn-gold w-full justify-center"
                  onClick={closeMenu}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
