import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const fallbackLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23020b18'/%3E%3Cstop offset='100%25' stop-color='%230b3a55'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='30' fill='url(%23g)' stroke='%2314e0ff' stroke-width='2'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-size='20' font-family='Inter,Arial,sans-serif' fill='white' font-weight='700'%3ELT%3C/text%3E%3C/svg%3E";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Solutions", path: "/ai-solutions" },
    { name: "Featured Projects", path: "/featured-projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
      <div className="w-full px-6 md:px-[60px] py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="LastTouch Logo"
              loading="eager"
              decoding="async"
              onError={(event) => {
                event.currentTarget.src = fallbackLogo;
              }}
              className="h-[44px] w-[44px] rounded-full border-2 border-[#14e0ff] object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide">LastTouch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-1 text-[15px] font-medium transition-all duration-300 ${
                  isActive(link.path) ? "text-[#14e0ff]" : "text-[#cfdbe6] hover:text-[#14e0ff]"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#14e0ff] drop-shadow-[0_0_8px_rgba(20,224,255,1)]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#14e0ff] p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl px-4 py-6 border-b border-white/10 flex flex-col items-center shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  isActive(link.path) ? "text-[#14e0ff]" : "text-[#cfdbe6] hover:text-[#14e0ff]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
