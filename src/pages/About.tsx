// src/pages/About.tsx
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import hazratImg from "@/assets/images/founders/hazrat.jpg";
import rahmanImg from "@/assets/images/founders/rahman.png";
import { AnimatedOnScroll } from "@/components/ui/AnimatedOnScroll";
import { CountUp } from "@/components/ui/CountUp";

const About = () => {
  const values = [
    { icon: Sparkles, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Heart, title: "Integrity", description: "Building trust through transparency and honesty" },
    { icon: Target, title: "Partnership", description: "Collaborating closely to achieve shared success" },
    { icon: Eye, title: "Excellence", description: "Delivering exceptional quality in every project" },
  ];

  const stats = [
    { target: 60, suffix: "+", label: "Projects Delivered" },
    { target: 30, suffix: "+", label: "Happy Clients" },
    { target: 3, suffix: "+", label: "Years Experience" },
    { target: 50, suffix: "+", label: "AI Projects" },
  ];

  const milestones = [
    { year: "2023", title: "Founded LastTouch", desc: "Started with a vision to bring intelligent IT solutions to every business" },
    { year: "2024", title: "First 10 Clients Onboarded", desc: "Delivered web platforms, mobile apps and cloud infrastructure" },
    { year: "2025", title: "Launched AI Division", desc: "Expanded into machine learning, chatbots and AI-powered automation" },
    { year: "2026", title: "60+ Projects Completed", desc: "Proud to serve clients across multiple industries globally" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold text-foreground mb-6">About LastTouch</h1>
          <p className="text-xl text-muted-foreground">
            Pioneering the future of business through AI and intelligent IT solutions
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <AnimatedOnScroll direction="up">
            <div className="box mx-auto !w-full">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our <span style={{ color: "#14e0ff" }}>Story</span></h2>
              <p className="text-[15px] opacity-90 text-[#cce8f0] leading-[1.8] text-center">
                Founded by passionate technologists, LastTouch was created to bridge the gap
                between business challenges and cutting-edge AI-driven solutions. We
                recognized that while technology was advancing rapidly, many businesses
                struggled to harness its full potential. Our mission became clear: empower
                organizations to thrive in the digital age through innovative, practical, and
                scalable solutions.
              </p>
            </div>
          </AnimatedOnScroll>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedOnScroll direction="left" className="h-full">
              <div className="exp-box h-full">
                <Target className="text-[#14e0ff] mb-4" size={44} />
                <h2 className="text-[20px] font-bold text-white mb-4">Our Mission</h2>
                <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed">
                  Empowering organizations through innovative IT and AI technologies that
                  drive measurable impact. We transform complex challenges into elegant
                  solutions that deliver real business value.
                </p>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll direction="right" className="h-full">
              <div className="exp-box h-full">
                <Eye className="text-[#14e0ff] mb-4" size={44} />
                <h2 className="text-[20px] font-bold text-white mb-4">Our Vision</h2>
                <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed">
                  To be a leading force in global AI transformation, delivering solutions
                  that redefine what's possible. We envision a future where businesses of
                  all sizes can leverage AI to unlock unprecedented growth.
                </p>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Leadership (CEO & Co-Founder) */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Leadership</h2>
            <p className="text-center text-muted-foreground mb-10">
              The people guiding our mission and vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hazrat Ali */}
              <AnimatedOnScroll direction="left">
                <div className="exp-box flex flex-col items-center text-center">
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-[3px] border-[#14e0ff] overflow-hidden shadow-[0_0_20px_rgba(20,224,255,0.3)] bg-white">
                    <img
                      src={hazratImg}
                      alt="Hazrat Ali — CEO of LastTouch"
                      className="w-full h-full object-cover object-[center_15%] scale-[1.1]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-6 text-[22px] font-bold text-white uppercase tracking-wider text-center">Hazrat Ali</h3>
                  <p style={{ color: "#14e0ff" }} className="mt-1 font-semibold text-[15px] text-center">CEO & Founder</p>
                  <div className="mt-5 space-y-2 text-center w-full">
                    <a
                      href="mailto:hazratali26725@gmail.com"
                      className="block text-[14px] text-[#cce8f0] opacity-80 hover:opacity-100 transition-colors text-center"
                    >
                      hazratali26725@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hazrat-ali-788257350/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[14px] text-[#14e0ff] hover:underline text-center"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </AnimatedOnScroll>

              {/* Md. Abdur Rahman */}
              <AnimatedOnScroll direction="right">
                <div className="exp-box flex flex-col items-center text-center">
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-[3px] border-[#14e0ff] overflow-hidden shadow-[0_0_20px_rgba(20,224,255,0.3)] bg-white">
                    <img
                      src={rahmanImg}
                      alt="Md. Abdur Rahman — Co-Founder of LastTouch"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-[22px] font-bold text-white uppercase tracking-wider mt-6 text-center">Md. Abdur Rahman</h3>
                  <p style={{ color: "#14e0ff" }} className="mt-1 font-semibold text-[15px] text-center">Co-Founder of LastTouch</p>
                  <div className="mt-5 space-y-2 text-center w-full">
                    <a
                      href="mailto:rahmanf708@gmail.com"
                      className="block text-[14px] text-[#cce8f0] opacity-80 hover:opacity-100 transition-colors text-center"
                    >
                      rahmanf708@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdur-rahman-6776b02a0/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[14px] text-[#14e0ff] hover:underline text-center"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>

            {/* Our Team Section (Skills) Moved Before Mentor Box */}
            <div className="mt-20 box mx-auto !w-full">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Our <span style={{ color: "#14e0ff" }}>Team</span>
              </h2>
              <div className="mb-10 text-center">
                <p className="text-[15px] opacity-90 text-[#cce8f0] leading-[1.8] max-w-4xl mx-auto italic">
                  &quot;LastTouch is more than just a software agency; we are your strategic partner in the AI era.
                  Our team blends deep technical expertise in Generative AI, MLOps, and Full-Stack Development
                  to build solutions that don&apos;t just work—they transform.&quot;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Programming Languages */}
                <div className="exp-box">
                  <h3 className="text-[18px] font-bold text-white mb-4 text-center border-b border-[#14e0ff]/30 pb-2">Programming</h3>
                  <ul className="space-y-3 text-[14px]">
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Python (Expert)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>TypeScript & Node.js</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>JavaScript (ES6+)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Java & HTML5/CSS3</li>
                  </ul>
                </div>

                {/* MACHINE & DEEP LEARNING */}
                <div className="exp-box">
                  <h3 className="text-[18px] font-bold text-white mb-4 text-center border-b border-[#14e0ff]/30 pb-2">ML & Deep Learning</h3>
                  <ul className="space-y-3 text-[14px]">
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>PyTorch & TensorFlow</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Transformers (BERT, GPT, LLM)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Computer Vision (YOLO, GANs)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Fine-tuning & RAG</li>
                  </ul>
                </div>

                {/* AI AUTOMATION & DEV */}
                <div className="exp-box">
                  <h3 className="text-[18px] font-bold text-white mb-4 text-center border-b border-[#14e0ff]/30 pb-2">AI & Cloud Dev</h3>
                  <ul className="space-y-3 text-[14px]">
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Low-Code AI (n8n, Make)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Full-Stack (React, Django)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>Cloud MLOps (AWS, Google)</li>
                    <li className="flex items-center gap-2 text-[#cce8f0]"><div className="w-1.5 h-1.5 rounded-full bg-[#14e0ff] shadow-[0_0_5px_#14e0ff]"></div>API Integration (Zapier and n8n)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Mentor Box */}
            <div className="mt-12 box mx-auto !w-full max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mentor</h2>
              <h3 className="text-[20px] font-bold text-[#14e0ff] mb-2">Hazrat Ali</h3>
              <p className="text-[14px] text-white opacity-90 font-semibold mb-4">CEO & Chief Technology Officer</p>
              <p className="text-[15px] opacity-90 text-[#cce8f0] leading-[1.8] mb-8">
                Leading LastTouch with vision and technical excellence. Expertise in AI/ML,
                cloud architecture, and digital transformation with proven track record of
                delivering enterprise solutions.
              </p>
              <a
                href="https://hazratali1.github.io/Hazrat-Ali"
                target="_blank"
                rel="noreferrer"
                className="cv-download-btn inline-block"
              >
                Visit Portfolio Website
              </a>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1} className="h-full">
                <div className="exp-box group flex flex-col items-center justify-center text-center h-full min-h-[220px]">
                  <div className="mb-5 text-[#14e0ff] group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={44} />
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-[#cce8f0] opacity-90 leading-[1.6] max-w-[200px] mx-auto">
                    {value.description}
                  </p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </section>

        {/* Our Success Story */}
        <section className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#14e0ff]">Success Story</span></h2>
            <p className="text-[#cce8f0] opacity-80 uppercase tracking-[0.2em] text-sm font-bold">
              MILESTONES THAT DEFINE US
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <AnimatedOnScroll key={i} direction="up" delay={i * 0.1}>
                <div className="exp-box text-center py-10 h-full flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#14e0ff] mb-2 drop-shadow-[0_0_15px_rgba(20,224,255,0.4)]">
                    <CountUp end={stat.target} suffix={stat.suffix} />
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-white opacity-90 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>

          <div className="max-w-3xl mx-auto relative border-l-[3px] border-[#14e0ff]/30 ml-4 md:ml-auto py-4 space-y-12 mb-20">
            {milestones.map((m, i) => (
              <AnimatedOnScroll key={i} direction="left" delay={i * 0.1}>
                <div className="relative pl-10 md:pl-12">
                  <div className="absolute left-[-11.5px] top-1.5 w-[20px] h-[20px] rounded-full bg-[#020b18] border-[3px] border-[#14e0ff] shadow-[0_0_15px_rgba(20,224,255,0.8)]"></div>
                  <h3 className="text-[22px] font-bold text-white mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-[#14e0ff]">{m.year}</span>
                    <span className="opacity-60 hidden sm:inline">—</span>
                    <span>{m.title}</span>
                  </h3>
                  <p className="text-[16px] text-[#cce8f0] opacity-90 leading-relaxed max-w-2xl">
                    {m.desc}
                  </p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>

          <AnimatedOnScroll direction="up">
            <div className="text-center box !w-full max-w-4xl mx-auto py-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic">
                Your Vision. <span className="text-[#14e0ff]">Our Expertise.</span> Lasting Results.
              </h3>
            </div>
          </AnimatedOnScroll>
        </section>

      </div>
    </div>
  );
};

export default About;
