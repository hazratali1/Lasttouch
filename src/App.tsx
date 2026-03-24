import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { PageTransition } from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AISolutions from "./pages/AISolutions";
import FeaturedProjects from "./pages/FeaturedProjects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MemoryRouter initialEntries={["/"]}>
        <Layout>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/featured-projects" element={<FeaturedProjects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </Layout>
      </MemoryRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
