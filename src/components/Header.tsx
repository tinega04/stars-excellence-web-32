
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    { name: "Curriculum", path: "/academics" },
    { name: "Facilities", path: "/campuses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const portalItems = [
    { name: "Learner Portal", path: "/portals/learner" },
    { name: "Staff Portal", path: "/portals/staff" },
    { name: "Learning Portal", path: "/portals/learning" },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white elegant-shadow py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center text-white transition-all duration-300 group-hover:bg-accentBlue">
              <span className="font-playfair font-bold text-xl">SIS</span>
            </div>
            <div className="hidden md:block ml-3">
              <h1 className="font-playfair text-xl font-bold text-darkBlue">Stevens Integrated Schools</h1>
              <p className="text-xs italic text-accentBlue">Stars of Excellence</p>
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
                    ? 'text-accentBlue font-medium'
                    : 'text-darkBlue hover:text-accentBlue'
                }`}
              >
                <span className="link-hover">{item.name}</span>
              </Link>
            ))}
            
            {/* Portals Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-3 py-2 text-sm lg:text-base transition-colors duration-300",
                      isActive("/portals/learner") || isActive("/portals/staff") || isActive("/portals/learning")
                        ? 'text-accentBlue font-medium'
                        : 'text-darkBlue hover:text-accentBlue'
                    )}
                  >
                    Portals
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[240px]">
                      {portalItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground",
                                isActive(item.path) ? "bg-accent text-accent-foreground" : ""
                              )}
                              to={item.path}
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              to="/admissions" 
              className="btn-accent text-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-darkBlue" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`py-2 transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-accentBlue font-medium'
                      : 'text-darkBlue hover:text-accentBlue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Portals Dropdown */}
              <div className="py-2">
                <div className="flex items-center justify-between text-darkBlue hover:text-accentBlue cursor-pointer mb-2" 
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = document.getElementById("mobile-portals-dropdown");
                    dropdown?.classList.toggle("hidden");
                  }}>
                  <span>Portals</span>
                  <ChevronDown size={16} />
                </div>
                <div id="mobile-portals-dropdown" className="hidden pl-4 border-l-2 border-accentBlue/20 space-y-2">
                  {portalItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block py-1 transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-accentBlue font-medium'
                          : 'text-darkBlue hover:text-accentBlue'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-3 mt-3 border-t">
                <Link 
                  to="/admissions" 
                  className="btn-accent w-full justify-center"
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
