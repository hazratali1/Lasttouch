
import { Link } from "react-router-dom";
import { TrendingUp, MessageSquare, Eye, Sparkles, Check, Star } from "lucide-react";

const AISolutions = () => {
  const reviews = [
    { name: "CEO", company: "TechCorp", text: "LastTouch transformed our customer support with their AI agents. We saw a 60% reduction in manual workload within the first month!" },
    { name: "CTO", company: "Innovate Solutions", text: "The RAG system they built is incredibly accurate. It handles our complex technical documentation perfectly." },
    { name: "VP of Ops", company: "Global Logistics", text: "Exceptional service! Their LLM task orchestration is a game-changer for our business automation." },
    { name: "Marketing Director", company: "E-com Plus", text: "The AI integration into our website was seamless. Our user engagement has doubled since the launch." },
    { name: "Lead Researcher", company: "HealthAI", text: "Hazrat is a true expert in ML and NLP. The suicide risk detection model they co-authored is groundbreaking." },
    { name: "Founder", company: "StartupHub", text: "Best-in-class automation using n8n and Make. LastTouch knows how to simplify complex workflows." },
    { name: "Project Lead", company: "AgriTech", text: "Their vision-language models for our agricultural app are performing beyond our expectations." },
    { name: "Senior Engineer", company: "DataWorks", text: "Impressed by the depth of their technical knowledge in Transformers and Generative AI." },
    { name: "Managing Director", company: "RetailFlow", text: "The team is professional, fast, and delivers high-quality AI solutions. Highly recommended!" },
    { name: "Head of IT", company: "SecureNet", text: "Zero downtime since they optimized our model inference and API deployment. Great work!" },
  ];
  const capabilities = [
    {
      icon: TrendingUp,
      title: "LLM Agents & Orchestration",
      description: "Building autonomous AI agents that can reason, use tools, and automate complex business workflows.",
    },
    {
      icon: MessageSquare,
      title: "Generative AI & RAG",
      description: "Developing context-aware LLM systems grounded in your private data and integrated directly into websites and apps.",
    },
    {
      icon: Eye,
      title: "Computer Vision & Multimodal",
      description: "Implementing real-time object detection and vision-language models for advanced visual understanding.",
    },
    {
      icon: Sparkles,
      title: "AI Workflow Automation",
      description: "Automating mission-critical processes using n8n, Make, and Zapier, integrating LLMs into end-to-end pipelines.",
    },
  ];

  const benefits = [
    "Proven Expertise in AI Deployment",
    "Scalable and Secure Solutions",
    "Collaborative Development Process",
    "Continuous Support and Optimization",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold text-white mb-6">
            Power Your Business with <span style={{ color: "#14e0ff" }}>Intelligent AI</span> Solutions
          </h1>
          <p className="text-[16px] text-[#cce8f0] opacity-90 leading-[1.8]">
            Our AI experts transform data into insights, automation, and opportunities for
            growth.
          </p>
        </div>

        {/* AI Capabilities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="exp-box group"
              >
                <capability.icon
                  className="text-[#14e0ff] mb-4 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <h3 className="text-[20px] font-bold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-[14px] opacity-90 text-[#cce8f0] leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 overflow-hidden">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Client Testimonials
          </h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {[...reviews, ...reviews].map((review, index) => (
                <div key={index} className="review-card exp-box !mb-0">
                  <div className="flex gap-1 mb-3 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#14e0ff" color="#14e0ff" />
                    ))}
                  </div>
                  <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed mb-4 text-center italic">
                    "{review.text}"
                  </p>
                  <div className="text-center">
                    <span className="text-[#14e0ff] font-semibold text-[14px]">{review.name}</span>
                    <span className="text-[#cce8f0] opacity-70 text-[12px] ml-2">— {review.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Why Choose LastTouch */}
        <section className="mb-20">
          <div className="box mx-auto !w-full">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose LastTouch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-[#14e0ff] mt-1 flex-shrink-0" size={18} />
                  <p className="text-[15px] opacity-90 text-[#cce8f0] leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="box mx-auto !w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform with AI?
          </h2>
          <p className="text-[15px] opacity-90 text-[#cce8f0] mb-8 leading-relaxed">
            Schedule a consultation with our AI experts and discover how we can unlock new
            opportunities for your business.
          </p>
          <Link to="/contact" className="cv-download-btn">
            Schedule an AI Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
