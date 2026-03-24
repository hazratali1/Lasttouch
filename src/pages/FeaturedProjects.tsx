import { useState } from "react";
import { projectsData } from "@/data/portfolioData";
import { ChevronDown } from "lucide-react";

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("LLM / RAG / GenAI");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = Object.keys(projectsData);
  const displayedProjects = projectsData[activeTab] || [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page active" id="projects" style={{ position: 'relative', top: '90px' }}>
      <div className="page-content" style={{ marginTop: '40px' }}>
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Successfully Delivered Projects</h1>
        <p style={{ fontSize: '13.5px', opacity: 0.6, marginBottom: '20px', textAlign: 'center' }}>
          Click any project to expand details
        </p>

        {/* Category Tabs */}
        <div className="project-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenIndex(null); // Close accordion on tab switch
              }}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Container */}
        <div className={`project-category active ${openIndex !== null ? 'has-open' : ''}`}>
          {displayedProjects.map((project, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`project-box cert-box ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
                style={{
                  padding: '26px 30px',
                  borderRadius: '20px',
                  background: 'linear-gradient(145deg, #0b2742, #061a30)'
                }}
              >
                <div className="project-header">
                  <div>
                    <h3 style={{ color: 'white', fontSize: '17px', marginBottom: '8px' }}>{project.title}</h3>
                    <p style={{ fontSize: '13.5px', color: '#b8d4e0', lineHeight: 1.6 }}>{project.desc}</p>
                    <span style={{ fontSize: '13px', color: '#14e0ff', display: 'block', marginTop: '10px' }}>{project.tech}</span>
                  </div>
                  <ChevronDown
                    className="toggle-icon"
                    style={{
                      transition: "transform 0.35s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0
                    }}
                  />
                </div>
                <div className="project-body">
                  <div className="project-detail-text">
                    {project.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
