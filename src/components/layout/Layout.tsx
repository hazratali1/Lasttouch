import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import AIChatbot from "@/components/AIChatbot"; // ✅ Import your chatbot

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="wave-bg"></div>
      {/* Header */}
      <Navbar onMenuStateChange={setMenuOpen} />

      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />

      {/* ✅ AI Chatbot — visible across all pages
      <AIChatbot /> */}
    </div>
  );
};

export default Layout;
