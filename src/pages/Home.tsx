import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Cloud, Code, HeadphonesIcon } from "lucide-react";
import ServiceCard from "@/components/features/ServiceCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Businesses Through{" "}
              <span style={{ color: "#14e0ff" }}>Intelligent IT</span> & AI Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              At LastTouch, we combine innovation with technical excellence to deliver
              smarter, scalable, and future-ready digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
              <Link to="/ai-solutions" className="cv-download-btn !mt-0">
                Explore Our AI Services
              </Link>
              <Link to="/contact" className="cv-download-btn !mt-0" style={{ background: "transparent" }}>
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1200">
            <ServiceCard
              icon={Brain}
              title="AI Integration & Automation"
              description="Leverage cutting-edge AI to automate processes and unlock insights."
            />
            <ServiceCard
              icon={Cloud}
              title="IT Infrastructure & Cloud"
              description="Scalable cloud solutions designed for modern businesses."
            />
            <ServiceCard
              icon={Code}
              title="Custom Software Development"
              description="Tailored applications built to meet your unique needs."
            />
            <ServiceCard
              icon={HeadphonesIcon}
              title="24/7 Technical Support"
              description="Round-the-clock expert support to keep you running smoothly."
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center perspective-1200">
            <h2 className="text-4xl font-bold mb-6 text-white">
              We Are <span style={{ color: "#14e0ff" }}>LastTouch</span>
            </h2>
            <div className="box mx-auto !w-full box-3d" style={{ padding: "40px" }}>
              <p className="text-[16px] text-[#cce8f0] leading-relaxed opacity-90 text-center">
                A global IT partner helping businesses harness the power of Artificial
                Intelligence and modern IT systems to achieve operational excellence. With
                our expertise in AI, cloud infrastructure, and custom software development,
                we transform challenges into opportunities for growth.
              </p>
              <Link to="/about" className="cv-download-btn mt-8">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
