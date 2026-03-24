// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent via-[#0b2742]/40 to-[#020b18] border-t border-[#14e0ff]/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Facebook */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 group">
              {/* Facebook logo + brand link */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-[#14e0ff] group-hover:text-[#14e0ff] transition-all duration-300"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07 1.87 17.05 5.61 21.14 10.35 22v-7.02H7.9v-2.9h2.45V9.77c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.83h2.71l-.43 2.9h-2.28V22c4.74-.86 8.48-4.95 8.48-9.93z" />
              </svg>
              <a
                href="https://www.facebook.com/share/17dQ61nTkJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#14e0ff] transition-colors duration-300"
                aria-label="Visit LastTouch Facebook page"
              >
                LastTouch
              </a>
            </h3>
            <p className="text-sm text-[#c8dce6]/90 leading-relaxed">
              Transforming businesses through intelligent IT &amp; AI solutions.
            </p>
            <p className="text-xs text-[#14e0ff] mt-3 leading-relaxed">
              <a
                href="https://www.facebook.com/share/17dQ61nTkJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14e0ff] hover:text-[#14e0ff] hover:underline transition-all duration-300 font-medium"
              >
                Follow us on Facebook → 
              </a>
              <span className="block text-[#b8d4e0] mt-2">This is our official Facebook page where we share updates and insights.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1"
              >
                Services
              </Link>
              <Link 
                to="/ai-solutions" 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1"
              >
                AI Solutions
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Resources</h4>
            <div className="space-y-3">
              <a 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1" 
                href="#"
              >
                Privacy Policy
              </a>
              <a 
                className="block text-sm text-[#c8dce6] hover:text-[#14e0ff] transition-all duration-300 hover:translate-x-1" 
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-[#14e0ff] flex-shrink-0 mt-0.5 group-hover:text-[#14e0ff] transition-colors duration-300" />
                <a
                  href="mailto:contact.lasttuch@gmail.com"
                  className="text-[#c8dce6] hover:text-[#14e0ff] transition-colors duration-300"
                >
                  contact.lasttuch@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone size={18} className="text-[#14e0ff] flex-shrink-0 mt-0.5 group-hover:text-[#14e0ff] transition-colors duration-300" />
                <a
                  href="tel:+8801614408837"
                  className="text-[#c8dce6] hover:text-[#14e0ff] transition-colors duration-300"
                >
                  +880 1614-408837
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801614408837"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#c8dce6] hover:text-[#14e0ff] group transition-colors duration-300"
                aria-label="WhatsApp chat with LastTuch"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-[#14e0ff] flex-shrink-0 mt-0.5 group-hover:text-[#14e0ff] transition-colors duration-300"
                >
                  <path d="M19.11 17.49c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.49-.07-.14-.6-1.46-.82-2-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.49.07-.75.34-.27.27-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.03.14.18 2.02 3.08 4.9 4.32.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.58-.65 1.8-1.28.22-.63.22-1.18.15-1.29-.07-.11-.25-.18-.52-.31z" />
                  <path d="M16 3C9.38 3 4 8.38 4 15c0 2.37.69 4.58 1.89 6.43L4 29l7.76-2.04A12.89 12.89 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22.67a10.67 10.67 0 1 1 0-21.34 10.67 10.67 0 0 1 0 21.34z" />
                </svg>
                <span>WhatsApp: +880 1614-408837</span>
              </a>

              {/* Facebook Page */}
              <a
                href="https://www.facebook.com/share/17dQ61nTkJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#c8dce6] hover:text-[#14e0ff] group transition-colors duration-300"
                aria-label="Facebook page link"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-[#14e0ff] flex-shrink-0 mt-0.5 group-hover:text-[#14e0ff] transition-colors duration-300"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07 1.87 17.05 5.61 21.14 10.35 22v-7.02H7.9v-2.9h2.45V9.77c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.83h2.71l-.43 2.9h-2.28V22c4.74-.86 8.48-4.95 8.48-9.93z" />
                </svg>
                <span>Facebook Page</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#14e0ff] flex-shrink-0 mt-0.5 group-hover:text-[#14e0ff] transition-colors duration-300" />
                <span className="text-[#c8dce6]">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-[#14e0ff]/10 text-center text-xs text-[#b8d4e0] space-y-2">
          <div className="hover:text-[#14e0ff] transition-colors duration-300">
            This website is developed and maintained by LastTouch.
          </div>
          <div className="text-[#a0c8dc]">
            © {new Date().getFullYear()} LastTouch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
