import { Link } from "react-router-dom";
import { Brain, Cloud, Code, Shield } from "lucide-react";
import { AnimatedOnScroll } from "@/components/ui/AnimatedOnScroll";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence Solutions",
      items: [
        "RAG (Retrieval-Augmented Generation) Systems",
        "LLM-Powered Task Orchestration & Agents",
        "Low-Code/No-Code AI Automation (n8n, Make, Zapier)",
        "AI/ML Integration in Websites & Apps",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      items: [
        "End-to-End ML & Deep Learning Pipelines",
        "NLP & Transformer-Based Model Development",
        "Data Engineering & Feature Optimization",
        "Experimental Research & Model Evaluation",
      ],
    },
    {
      icon: Code,
      title: "Software Development",
      items: [
        "Full-Stack Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Custom Enterprise Softwares & Systems",
        "Custom Website Design & Development",
      ],
    },
    {
      icon: Shield,
      title: "IT Consulting & Support",
      items: [
        "Scalable AI Backends with FastAPI",
        "Model Inference Optimization & MLOps",
        "Cloud & Serverless AI Deployment (Vercel)",
        "REST API Design & System Integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-[16px] text-[#cce8f0] opacity-90 leading-[1.8]">
            From IT infrastructure to advanced AI systems, LastTouch delivers end-to-end
            technology solutions tailored to your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <div className="exp-box group h-full">
                <service.icon
                  className="text-[#14e0ff] mb-4 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <h2 className="text-[20px] font-bold text-white mb-4">
                  {service.title}
                </h2>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] mt-[7px] flex-shrink-0 shadow-[0_0_8px_rgba(20,224,255,1)]" />
                      <span className="text-[#cce8f0] opacity-90 text-[14px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedOnScroll direction="up">
          <div className="box mx-auto !w-full text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Build Something <span style={{ color: "#14e0ff" }}>Intelligent</span> Together
            </h2>
            <p className="text-[15px] opacity-90 text-[#cce8f0] mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our team is
              here to help you succeed.
            </p>
            <Link to="/contact" className="cv-download-btn">
              Get Started Today
            </Link>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};

export default Services;
