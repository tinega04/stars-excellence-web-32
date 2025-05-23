
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkBlue text-white pt-16 pb-8 border-t-4 border-accentBlue">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Information */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-darkBlue mr-3">
                <span className="font-playfair font-bold text-xl">SIS</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-white">Stevens Integrated Schools</h3>
                <p className="text-xs italic text-white">Stars of Excellence</p>
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Stevens Integrated Schools provides holistic, quality education that develops young people into useful and productive members of their families and the wider society.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl mb-6 pb-2 border-b border-accentBlue text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-white" />
                <a 
                  href="mailto:stevensintergratedschools@gmail.com" 
                  className="text-sm text-white hover:text-accentBlue transition duration-300"
                >
                  stevensintergratedschools@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-white" />
                <div className="text-sm">
                  <p className="text-white mb-1">Nairobi Campus: +254 720 688 293</p>
                  <p className="text-white">Kitengela Campus: +254 743 794 301</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-white" />
                <div className="text-sm text-white">
                  <p className="mb-1">Nairobi Campus: Imara Daima</p>
                  <p>Kitengela Campus: Airview</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-6 pb-2 border-b border-accentBlue text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Academics
                </Link>
              </li>
              <li>
                <Link to="/campuses" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Campuses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-accentBlue transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-playfair text-xl mb-6 pb-2 border-b border-accentBlue text-white">Connect With Us</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="#" 
                className="bg-accentBlue hover:bg-white hover:text-accentBlue w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-accentBlue hover:bg-white hover:text-accentBlue w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v8"></path>
                  <path d="M12 16v-8"></path>
                  <path d="M20 12V8h-4"></path>
                  <path d="M16 12a4 4 0 0 0 4 4"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-accentBlue hover:bg-white hover:text-accentBlue w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-sm text-white">
              Subscribe to our newsletter to get updates on events and news.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-white/10 text-white text-sm rounded-l outline-none focus:ring-1 focus:ring-accentBlue placeholder:text-white/70"
                />
                <button 
                  type="submit" 
                  className="bg-accentBlue hover:bg-white hover:text-accentBlue px-4 text-white rounded-r transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-accentBlue/30 text-center">
          <p className="text-sm text-white">
            &copy; {currentYear} Stevens Integrated Schools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
