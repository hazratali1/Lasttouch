import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import AIChatbot from "@/components/AIChatbot"; // ✅ Import your chatbot

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="wave-bg"></div>
      {/* Header */}
      <Navbar />

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
