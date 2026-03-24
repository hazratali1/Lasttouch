export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const experienceData: Experience[] = [
  {
    role: "AI Developer",
    company: "Softvence Agency",
    duration: "2026 — Present",
    points: [
      "Designing and developing LLM-based AI systems for intelligent task orchestration and AI workflow automation.",
      "Building AI-powered web platforms with end-to-end automation pipelines using Large Language Models (LLMs).",
      "Integrating LLM APIs using prompt engineering, structured outputs, and retrieval grounding techniques.",
      "Developing scalable backend services and REST APIs using FastAPI for AI model inference and system integration.",
      "Implementing vector-based semantic search and document retrieval using FAISS."
    ]
  },
  {
    role: "Research Assistant (Machine Learning, NLP)",
    company: "CRITS — Green University of Bangladesh",
    duration: "2024 — Present",
    points: [
      "Conducted exploratory data analysis and data preprocessing on large-scale datasets.",
      "Designed end-to-end machine learning and deep learning experimental pipelines for NLP research.",
      "Developed and evaluated transformer-based models using standard ML metrics.",
      "Co-authored multiple peer-reviewed journal and international conference research papers."
    ]
  },
  {
    role: "AI/ML Specialist & Data Analyst (Intern)",
    company: "9AM Solutions",
    duration: "2025",
    points: [
      "Analyzed business datasets to identify AI automation and optimization opportunities.",
      "Built LLM-powered customer support and order-handling AI agents.",
      "Designed AI-driven workflow automation systems using n8n, reducing manual workload by approximately 60%."
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    duration: "2021 — 2025",
    details: "CGPA: 3.40 / 4.00. Specialized in AI, ML and NLP research."
  }
];

export const publicationsData: Publication[] = [
  {
    title: "Deep Learning-Based Early Prediction of Depression & Suicidal Risk in Bangla Social Media Posts",
    journal: "IEEE STI 2025",
    year: "2025"
  },
  {
    title: "Transformer-Based Hybrid Framework for Early Detection of Depression and Suicidal Risk",
    journal: "Journal (Under Review)",
    year: "2025"
  },
  {
    title: "Retrieval-Grounded and Novelty-Aware Framework for Research Idea Generation with Large Language Models",
    journal: "Journal (Under Review)",
    year: "2024"
  },
  {
    title: "Enhancing Reinforcement Learning Alignment via LLM-Based Interpretation of Human Feedback",
    journal: "QPAIN 2026",
    year: "2026"
  }
];

export const certificationsData: Certification[] = [
  { name: "IEEE STI 2025 — Certificate of Appreciation (Author)", issuer: "IEEE", date: "2025" },
  { name: "Deep Learning with Python", issuer: "CampusX", date: "2024" },
  { name: "Machine Learning with Python", issuer: "CampusX", date: "2024" },
  { name: "NLP with Python", issuer: "CampusX", date: "2024" },
  { name: "AI Agent & Automation", issuer: "Ostad", date: "2024" }
];
