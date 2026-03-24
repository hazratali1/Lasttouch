// src/pages/About.tsx
import { Target, Eye, Heart, Award } from "lucide-react";
import hazratImg from "@/assets/images/founders/hazrat.jpg";
import rahmanImg from "@/assets/images/founders/rahman.png";

const About = () => {
  const values = [
    { icon: Award, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Heart, title: "Integrity", description: "Building trust through transparency and honesty" },
    { icon: Target, title: "Partnership", description: "Collaborating closely to achieve shared success" },
    { icon: Eye, title: "Excellence", description: "Delivering exceptional quality in every project" },
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
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="exp-box">
              <Target className="text-[#14e0ff] mb-4" size={44} />
              <h2 className="text-[20px] font-bold text-white mb-4">Our Mission</h2>
              <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed">
                Empowering organizations through innovative IT and AI technologies that
                drive measurable impact. We transform complex challenges into elegant
                solutions that deliver real business value.
              </p>
            </div>

            <div className="exp-box">
              <Eye className="text-[#14e0ff] mb-4" size={44} />
              <h2 className="text-[20px] font-bold text-white mb-4">Our Vision</h2>
              <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed">
                To be a leading force in global AI transformation, delivering solutions
                that redefine what's possible. We envision a future where businesses of
                all sizes can leverage AI to unlock unprecedented growth.
              </p>
            </div>
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

              {/* Md. Abdur Rahman */}
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
              <div
                key={index}
                className="exp-box group flex flex-col items-center text-center"
              >
                <div className="mb-4 text-[#14e0ff] group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={44} />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#cce8f0] opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
