export interface Project {
  title: string;
  desc: string;
  details: string;
  tech: string;
  github: string;
}

export const projectsData: Record<string, Project[]> = {
  "LLM / RAG / GenAI": [
    {
      title: "MediMate — AI Healthcare Assistant",
      desc: "Integrates symptom analysis, medical image understanding and LLM-powered conversation to provide early healthcare guidance.",
      details: "MediMate addresses the challenge of accessible preliminary healthcare by combining three AI systems — a machine learning symptom checker, a CNN-based medical image analyser, and an LLM conversational assistant. Users get contextual, reasoned health guidance through a single interface. Deployed with FastAPI and Vercel for scalable real-time inference.",
      tech: "ML • NLP • Computer Vision • LLM • FastAPI",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Micro Tutor — AI Learning Assistant",
      desc: "Multilingual AI tutor supporting Bangla and English learners with adaptive, step-by-step explanations.",
      details: "Micro Tutor solves the problem of quality education access for Bangla-speaking students. It uses vision-language models to understand handwritten or image-based problems and generates adaptive explanations via LLMs. Students receive personalised, curriculum-aligned guidance in their native language.",
      tech: "LLM • VLM • NLP • Python",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Bondhu — Mental Health Support AI",
      desc: "Emotion-aware conversational assistant providing bilingual mental health support using transformer-based NLP.",
      details: "Bondhu (meaning \"friend\" in Bangla) is built to bridge the mental health support gap in Bangladesh. The system detects user emotions in real time using transformer-based classification and generates empathetic, contextually appropriate responses. It supports both Bangla and English, making it accessible to a wider population.",
      tech: "Transformers • NLP • LLM • FastAPI",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Medical Privacy RAG System",
      desc: "Privacy-preserving RAG chatbot that answers medical queries using only private, verified documents — zero data leakage.",
      details: "Built for healthcare organisations where patient data privacy is critical. The system grounds all LLM responses exclusively in ingested private medical documents using a vector database retrieval layer, ensuring the model never fabricates clinical information. Prevents hallucination and protects sensitive healthcare data.",
      tech: "LLM • RAG • Vector DB • LangChain",
      github: "https://github.com/hazratali1"
    },
    {
      title: "AI Customer Support Automation",
      desc: "End-to-end LLM pipeline that automates intent detection, knowledge retrieval, order handling and response generation.",
      details: "Designed for businesses with high customer query volumes. The pipeline automatically classifies intent, retrieves relevant knowledge via RAG, handles order lookups via API integration, and generates accurate replies — reducing human support workload by approximately 60% in production deployment.",
      tech: "LLM • RAG • LangChain • n8n • Automation",
      github: "https://github.com/hazratali1/AI-Agent-And-Automation"
    },
    {
      title: "RAG Knowledge System — n8n Pipeline",
      desc: "Document-based AI knowledge system using PDF uploads, vector embeddings and Pinecone for intelligent retrieval.",
      details: "Users upload PDFs through a form. The system splits documents into smaller chunks, creates embeddings using Google Gemini, and stores them in Pinecone vector database. AI retrieves relevant document sections to answer questions accurately based on the uploaded knowledge base.",
      tech: "RAG • Google Gemini • Pinecone • n8n",
      github: "https://github.com/hazratali1"
    },
    {
      title: "LLM-Powered Customer Support Agent",
      desc: "Knowledge-base AI assistant using RAG, PDF embeddings and Pinecone vector search for intelligent customer support.",
      details: "Users upload PDF documents through a form trigger. The documents are loaded and split into smaller text chunks, converted into vector embeddings using Google Gemini, and stored in Pinecone vector database. AI later searches this knowledge base to answer customer questions accurately.",
      tech: "LLM • RAG • Google Gemini • Pinecone",
      github: "https://github.com/hazratali1"
    },
    {
      title: "GenAI Content Approval Pipeline",
      desc: "AI-driven multi-platform content generation and approval system for LinkedIn, Instagram, Facebook, X, TikTok and YouTube.",
      details: "Collects a topic and requirements from a form, pulls related news from RSS feeds and Google News, scrapes articles and extracts key information. Uses an AI agent to score article relevance and generates platform-specific posts for LinkedIn, Instagram, Facebook, X, TikTok, and YouTube Shorts.",
      tech: "LLM • AI Agent • Content Generation • n8n",
      github: "https://github.com/hazratali1"
    },
    {
      title: "AI-Powered Facebook Messenger Bot",
      desc: "LLM-based automated response system for Facebook page messaging using webhooks and AI agents.",
      details: "Uses a Webhook to receive events from Facebook Messenger, validates the request using hub.mode and verify_token, and extracts the user's message text from the incoming payload. Sends the message to an LLM-powered AI agent to generate an automated reply, enabling 24/7 customer engagement.",
      tech: "LLM • AI Agent • Facebook API • Webhook",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Multilingual AI Restaurant Agent",
      desc: "LLM-powered restaurant assistant handling food orders and table bookings with automatic language detection.",
      details: "Triggered when a customer sends a chat message. The LLM detects the user's language and responds accordingly, handling food orders or table bookings. Collects user details (name, phone, items, time) and sends the confirmed order details to the restaurant owner via Telegram.",
      tech: "LLM • AI Agent • NLP • Telegram",
      github: "https://github.com/hazratali1"
    },
    {
      title: "LLM Inventory Management Agent",
      desc: "AI agent that interprets natural language to manage product inventory — check stock, update and track via chat.",
      details: "Starts when a chat message is received. An LLM-powered AI agent interprets the user request (check stock, update product, etc.), retrieves inventory data from Google Sheets, can append or update rows in the spreadsheet, and returns results back to the user via natural language chat.",
      tech: "LLM • AI Agent • Google Sheets • NLP",
      github: "https://github.com/hazratali1"
    },
    {
      title: "GenAI YouTube Video Creator",
      desc: "Automatically generate AI-powered video scripts, content and uploads to YouTube using Google Gemini.",
      details: "Uses AI prompts to generate video ideas and scripts. Google Gemini generates short AI videos with auto-added titles and metadata. Uploads the generated video to YouTube using the YouTube API, designed mainly for short-form vertical video content.",
      tech: "GenAI • Google Gemini • YouTube API • LLM",
      github: "https://github.com/hazratali1"
    },
    {
      title: "GenAI YouTube Shorts Idea Generator",
      desc: "AI-powered scheduled content ideation for YouTube Shorts using Google Gemini with structured JSON output.",
      details: "Runs on a scheduled trigger using an AI agent powered by Google Gemini. Generates short educational video ideas, structures output into JSON with title, hook, and learning content, ensuring each video idea is unique and beginner-friendly.",
      tech: "GenAI • Google Gemini • AI Agent • Content",
      github: "https://github.com/hazratali1"
    }
  ],
  "Automation": [
    {
      title: "Order Tracking Automation",
      desc: "Automated workflow that tracks orders in real time and sends status notifications via email and messaging platforms.",
      details: "Eliminates manual order tracking by integrating e-commerce APIs, databases and messaging services into a single automated workflow. Customers receive real-time updates on order status changes, reducing support queries and improving customer satisfaction.",
      tech: "n8n • API Integration • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Customer Support Email Automation",
      desc: "AI-powered system that classifies, routes and auto-replies to customer emails using intent recognition.",
      details: "Processes incoming support emails automatically — classifying by topic, routing to the right department and generating contextual responses using LLM reasoning. Dramatically cuts response time and frees human agents for complex queries only.",
      tech: "LLM • n8n • Automation • Email",
      github: "https://github.com/hazratali1"
    },
    {
      title: "E-Commerce Inventory Management",
      desc: "Smart inventory monitoring system with automated low-stock alerts, order tracking and reporting dashboards.",
      details: "Automates the full inventory lifecycle for e-commerce businesses — monitoring stock levels, triggering reorder alerts, syncing order data across platforms, and generating daily inventory reports. Reduces stockout incidents and manual warehouse management effort.",
      tech: "n8n • APIs • Database • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Census Geocoder + SerpAPI MAP",
      desc: "Converts addresses into geographic data and pulls census statistics using OpenStreetMap and U.S. Census APIs.",
      details: "Takes an address input, uses OpenStreetMap API to convert it into latitude and longitude, then sends coordinates to the U.S. Census Geocoder API to find census tract, county, and state. Calls the ACS Census API to fetch demographic data and processes results in a code node to calculate totals and return structured output.",
      tech: "n8n • API Integration • Census API • OpenStreetMap",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Facebook Page Automation",
      desc: "Connects Facebook page messaging with an AI response workflow using webhooks and automated replies.",
      details: "Uses a Webhook to receive events from Facebook Messenger, validates the request using hub.mode and verify_token, and extracts the user's message text from the incoming payload. Sends the message to an AI agent to generate an automated reply, enabling 24/7 customer engagement on Facebook pages.",
      tech: "n8n • Webhook • Facebook API • AI Agent",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Multi-step Content Approval System",
      desc: "Automates social media content creation and approval across LinkedIn, Instagram, Facebook, X, TikTok, and YouTube.",
      details: "Collects a topic and requirements from a form, pulls related news from RSS feeds and Google News, scrapes articles and extracts key information. Uses an AI agent to score article relevance and generates platform-specific posts for LinkedIn, Instagram, Facebook, X, TikTok, and YouTube Shorts.",
      tech: "n8n • AI Agent • RSS • Content Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "AI Customer Support Email Agent",
      desc: "Knowledge-base AI support assistant using PDF documents, vector embeddings and Pinecone for intelligent responses.",
      details: "Users upload PDF documents through a form trigger. The documents are loaded and split into smaller text chunks, converted into vector embeddings using Google Gemini, and stored in Pinecone vector database. AI later searches this knowledge base to answer customer questions accurately.",
      tech: "n8n • Google Gemini • Pinecone • RAG",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Inventory Management AI Agent",
      desc: "Manage product inventory using AI chat — check stock, update products and track inventory via Google Sheets.",
      details: "Starts when a chat message is received. An AI agent interprets the user request (check stock, update product, etc.), retrieves inventory data from Google Sheets, can append or update rows in the spreadsheet, and returns results back to the user via chat for seamless inventory management.",
      tech: "n8n • AI Agent • Google Sheets • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Restaurant Management Assistant",
      desc: "AI assistant for food orders and table bookings with multilingual support and Telegram notifications.",
      details: "Triggered when a customer sends a chat message. AI detects the user's language and responds accordingly, handling food orders or table bookings. Collects user details (name, phone, items, time) and sends the confirmed order details to the restaurant owner via Telegram.",
      tech: "n8n • AI Agent • Telegram • Multilingual",
      github: "https://github.com/hazratali1"
    },
    {
      title: "RAG in n8n — Document Knowledge System",
      desc: "Build a document-based AI knowledge system using PDF uploads, embeddings and Pinecone vector search.",
      details: "Users upload PDFs through a form. The system splits documents into smaller chunks, creates embeddings using Google Gemini, and stores them in Pinecone vector database. AI retrieves relevant document sections to answer questions accurately based on the uploaded knowledge base.",
      tech: "n8n • RAG • Google Gemini • Pinecone",
      github: "https://github.com/hazratali1"
    },
    {
      title: "YouTube Video Automation",
      desc: "Automatically generate and upload AI-powered videos to YouTube with titles, scripts and metadata.",
      details: "Uses AI prompts to generate video ideas and scripts. Google Gemini generates short AI videos with auto-added titles and metadata. Uploads the generated video to YouTube using the YouTube API, designed mainly for short-form vertical video content.",
      tech: "n8n • Google Gemini • YouTube API • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Custom Puppeteer Login Automation",
      desc: "Automatically log into websites using email links with Gmail monitoring, Apify browser automation and data scraping.",
      details: "Watches Gmail inbox for specific messages, extracts login links from email text, and sends the login URL to Apify automation. Apify runs a browser automation script to log into the platform and returns scraped data from the authenticated session.",
      tech: "n8n • Apify • Gmail • Puppeteer",
      github: "https://github.com/hazratali1"
    },
    {
      title: "YouTube Shorts Idea Generator",
      desc: "Automatically generate unique, beginner-friendly YouTube Shorts content ideas on a schedule using AI.",
      details: "Runs on a scheduled trigger using an AI agent powered by Google Gemini. Generates short educational video ideas about Adobe tools, structures output into JSON with title, hook, and learning content, ensuring each video idea is unique and beginner-friendly.",
      tech: "n8n • Google Gemini • AI Agent • Scheduling",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Typeform → Duplicate-Safe Credits System",
      desc: "Manage user submissions and credit balance with duplicate detection, payment validation and Google Sheets sync.",
      details: "Triggered when a Typeform form is submitted. Compares the user with existing records in Google Sheets, detects duplicate users by matching name and email, updates or appends the user's credit data, validates payments and updates the user's remaining credits automatically.",
      tech: "n8n • Typeform • Google Sheets • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Shopify Product Metadata Extractor",
      desc: "Extract product data and metafields from Shopify using GraphQL API with pagination and scheduled triggers.",
      details: "Runs on a scheduled trigger, sends a GraphQL request to Shopify API, retrieves products and their metafields, and splits products into individual items for processing. Handles pagination until all products are collected for complete data extraction.",
      tech: "n8n • Shopify API • GraphQL • Automation",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Shopify Data Sync Workflow",
      desc: "Sync Shopify products and variants for inventory analysis with automated data cleaning and scheduling.",
      details: "Runs on a scheduled daily/weekly trigger. Fetches products from a Shopify store, splits each product into variants, cleans descriptions and tags, and processes data for inventory or content analysis workflows.",
      tech: "n8n • Shopify • Data Processing • Automation",
      github: "https://github.com/hazratali1"
    }
  ],
  "ML / NLP": [
    {
      title: "Fake News Detection System",
      desc: "ML and transformer-based classifier that identifies misinformation articles with high accuracy.",
      details: "Tackles the growing problem of online misinformation by combining traditional ML classifiers with fine-tuned BERT models. Trained on multi-source labelled news datasets, the system achieves high precision in distinguishing real from fabricated news content and is applicable to social media monitoring.",
      tech: "ML • NLP • BERT • Transformers",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Blood Donation Management System",
      desc: "NLP-powered platform where users find blood donors using natural language queries with location extraction.",
      details: "Addresses emergency blood availability challenges by allowing users to search for donors using plain language — e.g. \"O+ donor near Dhaka tonight\". NLP extracts blood type, urgency and location from queries to return the most relevant donor matches from the database.",
      tech: "NLP • Web • Database",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Depression Detection System",
      desc: "Deep learning model predicting depression risk from Bangla social media posts with transformer-based analysis.",
      details: "Developed as part of published IEEE STI 2025 research. Analyses Bangla social media text to identify linguistic markers of depression and suicidal risk at an early stage. The model uses transformer-based architectures fine-tuned on a custom labelled Bangla dataset, enabling early intervention support.",
      tech: "DL • NLP • Transformers • Bangla",
      github: "https://github.com/hazratali1"
    }
  ],
  "Deep Learning / CV": [
    {
      title: "Crop Disease Detection System",
      desc: "CNN-based image classifier that identifies crop diseases from leaf photos to help farmers take early action.",
      details: "Designed to support Bangladeshi farmers with limited access to agricultural experts. Users photograph a crop leaf and the CNN model identifies the disease type and severity. Early detection enables timely treatment, reducing crop loss and improving agricultural yield.",
      tech: "CNN • TensorFlow • Image Processing",
      github: "https://github.com/hazratali1"
    },
    {
      title: "AI Object Detection System",
      desc: "Real-time object detection system processing images and live video streams using YOLO and CNN architectures.",
      details: "Implements state-of-the-art YOLO models for high-speed, accurate object detection in both static images and real-time video. Applicable to surveillance, inventory counting, and industrial quality control. Built with OpenCV for efficient video stream processing.",
      tech: "Computer Vision • YOLO • CNN • OpenCV",
      github: "https://github.com/hazratali1"
    },
    {
      title: "Suicide Risk Prediction",
      desc: "Transformer-based early warning system identifying suicidal risk signals in Bangla text data.",
      details: "An extension of the depression detection research, this system focuses specifically on identifying high-risk suicidal ideation markers in online posts. Fine-tuned transformer models are used to classify severity levels, enabling mental health professionals and platforms to prioritise at-risk individuals for intervention.",
      tech: "Transformer • NLP • Deep Learning",
      github: "https://github.com/hazratali1"
    }
  ],
  "Web Systems": [
    {
      title: "University Management System",
      desc: "Full-featured university ERP platform with student, teacher and admin dashboards, attendance, results and registration.",
      details: "A complete academic management platform built to streamline university operations. Features include student enrollment and course registration, attendance tracking, grade management, teacher assignment, and an admin dashboard for institutional oversight — all in one integrated system.",
      tech: "HTML • CSS • JavaScript • PHP • MySQL",
      github: "https://github.com/hazratali1/My-Projects"
    },
    {
      title: "Website Customer Support Chatbot",
      desc: "Automated chatbot embedded on websites to handle visitor queries, FAQs and support requests around the clock.",
      details: "A deployable chatbot solution for business websites that handles frequently asked questions, product enquiries and support tickets without human intervention. Built with n8n workflows and LLM response generation, it integrates seamlessly into any existing website and operates 24/7.",
      tech: "n8n • Chatbot • Automation • LLM",
      github: "https://github.com/hazratali1"
    }
  ]
};
