import { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    fullName: 'Bhavin Shriniwas Shankur',
    shortName: 'Bhavin Shankur',
    roleTitles: [
      'AI Engineer',
      'Full-Stack Developer',
      'Local RAG Architect',
      'Open Source Contributor',
      'Startup Founder in Progress'
    ],
    email: 'exobhavinss@gmail.com',
    phone: '+91 9579111964',
    location: 'Solapur, Maharashtra, India',
    linkedIn: 'https://www.linkedin.com/in/bhavin-shankur-8421a0371',
    github: 'https://github.com/exobhavinss-sketch',
    resumeFileName: 'Bhavin Shankur - Resume.docx',
    resumePath: './resume/Bhavin Shankur - Resume.docx',
    summary:
      'Second-year B.Tech student specializing in Artificial Intelligence & Machine Learning at MIT Vishwaprayag University, with hands-on experience building full-stack and AI-powered applications spanning Retrieval-Augmented Generation (RAG), local LLM integration, and backend development with FastAPI, LangChain, and FAISS. Active open-source contributor with a growing GitHub portfolio and a strong interest in software development, cloud computing, and problem-solving. Aspiring startup founder driven to build technology that meaningfully improves the computing world.',
    status: 'Available for AI Engineering & Full-Stack Opportunities'
  },
  metrics: [
    {
      label: 'Flagship AI Applications',
      value: '3+',
      description: 'End-to-end RAG, 3D WebGL, and developer tool projects'
    },
    {
      label: 'Industry Certifications',
      value: '7+',
      description: 'Cloud, AI, Python, Prompt Engineering & OOP credentials'
    },
    {
      label: 'Local RAG Privacy',
      value: '100%',
      description: 'Zero external cloud API dependencies for secure inference'
    },
    {
      label: 'B.Tech CSE (AIML)',
      value: '2029',
      description: 'MIT Vishwaprayag University, currently in 2nd Year'
    }
  ],
  projects: [
    {
      id: 'book-rag-chatbot',
      title: 'Book RAG Chatbot',
      subtitle: 'Artificial Intelligence Strategy Assistant',
      tagline: 'Zero Cloud Dependencies. 100% Local Vector Intelligence.',
      category: 'AI / RAG',
      description:
        'A fully local Retrieval-Augmented Generation (RAG) system that delivers accurate answers from AI strategy literature with multi-strategy retrieval, reranking, source citations, confidence scoring, and anti-hallucination verification.',
      fullDetails:
        'Designed and developed the entire chatbot system from the ground up. Architected an offline-first RAG pipeline using ChromaDB and FAISS for vector indexing, coupled with Ollama for local LLM inference. Engineered document parsing with PyMuPDF and Tesseract OCR to handle complex scanned texts, and integrated Sentence Transformers for high-precision semantic embeddings. All executed locally without cloud API overhead.',
      tags: [
        'Python',
        'Streamlit',
        'Ollama',
        'ChromaDB',
        'FAISS',
        'LangChain',
        'PyMuPDF',
        'Tesseract OCR',
        'Sentence Transformers'
      ],
      keyFeatures: [
        'Multi-strategy hybrid search combining semantic similarity & keyword retrieval',
        'Cross-encoder reranking for context-optimal document chunk ranking',
        'Automated hallucination check and certainty confidence scoring',
        'Zero cloud API reliance — 100% private inference with Ollama',
        'Interactive Streamlit UI with document upload and citation inspectability'
      ],
      githubUrl: 'https://github.com/exobhavinss-sketch/Artifical-Intelligence-Chatbot',
      featured: true,
      metrics: [
        { label: 'Cloud API Cost', value: '$0' },
        { label: 'Privacy Guarantee', value: '100% Local' }
      ],
      gradient: 'from-[#2997FF] via-[#0071E3] to-[#9E53E8]'
    },
    {
      id: 'our-earth',
      title: 'Our Earth — The Living Planet',
      subtitle: 'Cinematic 3D Planetary Journey',
      tagline: '4.5 Billion Years of Earth Rendered in Real-Time 3D.',
      category: '3D & WebGL',
      description:
        "An interactive 3D educational web experience exploring Earth's 4.5-billion-year history through cinematic scroll choreography, procedural GLSL planetary shaders, dynamic atmospheric scattering, and real-time CO₂ climate visualization.",
      fullDetails:
        'Engineered an immersive, scroll-driven educational platform using React, TypeScript, and Three.js / React Three Fiber. Implemented custom GLSL vertex and fragment shaders for procedural continent elevation, dynamic cloud layers, and glowing atmospheric aurora effects. Integrated GSAP ScrollTrigger and Lenis smooth scrolling for continuous 60 FPS transitions between historical epochs and climate milestones.',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Three.js',
        'React Three Fiber',
        'Drei',
        'GLSL Shaders',
        'GSAP',
        'ScrollTrigger',
        'Tailwind CSS',
        'Lenis'
      ],
      keyFeatures: [
        'Procedurally rendered 3D Earth model with dynamic lighting and atmosphere',
        'Custom GLSL shaders for realistic continental crust and aurora borealis',
        'Scroll-choreographed historical chapters spanning 4.5 billion years',
        'Real-time animated CO₂ ppm climate data visualization',
        'Fluid Lenis inertial scrolling maintained at 60 FPS'
      ],
      githubUrl: 'https://github.com/exobhavinss-sketch/Our-Earth',
      featured: true,
      metrics: [
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Visual Timeline', value: '4.5B Yrs' }
      ],
      gradient: 'from-[#30D158] via-[#0A84FF] to-[#5E5CE6]'
    },
    {
      id: 'github-mentor-ai',
      title: 'GitHub Mentor AI',
      subtitle: 'Intelligent Developer Workflow Assistant',
      tagline: 'Instant Semantic Answers & Streaming Git Guidance.',
      category: 'Backend & DevTools',
      description:
        'An open-source AI mentoring backend providing low-latency streaming guidance on Git, GitHub workflows, web development, and programming inquiries via FAISS-based semantic search and Ollama.',
      fullDetails:
        'Built an end-to-end backend service featuring FastAPI REST and Server-Sent Event (SSE) streaming endpoints. Implemented dedicated pipeline modules for loading technical documentation, intelligent text chunking, vector embedding generation with Sentence Transformers, and FAISS indexing. Integrated Ollama to generate context-grounded responses in real time.',
      tags: [
        'Python',
        'FastAPI',
        'Ollama',
        'FAISS',
        'RAG Architecture',
        'LangChain',
        'Sentence Transformers',
        'Pydantic',
        'REST / SSE API'
      ],
      keyFeatures: [
        'High-performance FastAPI asynchronous backend with Pydantic validation',
        'Real-time token streaming over Server-Sent Events (SSE)',
        'FAISS vector index optimized for developer documentation lookup',
        'Modular pipeline for document chunking, embeddings, and prompt synthesis',
        'Open-source architecture for continuous community contribution'
      ],
      githubUrl: 'https://github.com/exobhavinss-sketch/GitHub-Mentor-AI',
      featured: true,
      metrics: [
        { label: 'Latency', value: '<250ms TTFT' },
        { label: 'API Protocols', value: 'REST + SSE' }
      ],
      gradient: 'from-[#FF9F0A] via-[#FF375F] to-[#BF5AF2]'
    },
    {
      id: 'ai-pathfinder-buddy',
      title: 'AI Pathfinder Buddy',
      subtitle: 'Accessible AI Learning Platform',
      tagline: 'Democratizing Artificial Intelligence for New Learners.',
      category: 'Education',
      description:
        'An open-source educational application engineered to help new computer science students navigate foundational AI concepts, algorithms, and machine learning principles through curated roadmaps.',
      fullDetails:
        'Created and published an accessible open-source project to mentor beginners entering AI and machine learning. Outlines foundational concepts including supervised/unsupervised learning, neural network architectures, and practical Python tools in an approachable, interactive format.',
      tags: ['Python', 'AI / ML', 'Open Source', 'Education', 'Roadmaps'],
      keyFeatures: [
        'Step-by-step interactive AI learning roadmap for beginners',
        'Practical coding examples and algorithm visual representations',
        'Open-source and community-driven documentation',
        'Curated pathways for machine learning, deep learning, and data science'
      ],
      githubUrl: 'https://github.com/exobhavinss-sketch/ai-pathfinder-buddy-18',
      featured: false,
      metrics: [{ label: 'Audience', value: 'Students & Beginners' }],
      gradient: 'from-[#64D2FF] via-[#5E5CE6] to-[#FF375F]'
    }
  ],
  skills: [
    {
      category: 'AI, ML & RAG Engineering',
      description: 'End-to-end generative AI, local inference, and vector search systems',
      iconName: 'Cpu',
      skills: [
        { name: 'RAG Architecture', level: 'Expert', highlight: 'Multi-strategy retrieval & reranking' },
        { name: 'LangChain', level: 'Advanced', highlight: 'Agentic workflows & prompt pipelines' },
        { name: 'Ollama / Local LLMs', level: 'Expert', highlight: 'Private zero-cloud inference' },
        { name: 'FAISS & ChromaDB', level: 'Advanced', highlight: 'High-dimensional vector indexes' },
        { name: 'Sentence Transformers', level: 'Advanced', highlight: 'Semantic embeddings' },
        { name: 'NumPy & Pandas', level: 'Advanced', highlight: 'Data analysis & vectorization' },
        { name: 'Scikit-Learn', level: 'Advanced', highlight: 'Classical ML & evaluation' },
        { name: 'PyMuPDF & Tesseract', level: 'Advanced', highlight: 'OCR & document ingestion' }
      ]
    },
    {
      category: 'Programming Languages',
      description: 'Robust systems, algorithmic thinking, and modern web languages',
      iconName: 'Code2',
      skills: [
        { name: 'Python', level: 'Expert', highlight: 'Core backend, AI & data engineering' },
        { name: 'TypeScript / JavaScript', level: 'Advanced', highlight: 'Type-safe frontend & Node' },
        { name: 'C / C++', level: 'Advanced', highlight: 'DSA & Object-Oriented Programming' },
        { name: 'Java', level: 'Intermediate', highlight: 'OOP & application design' },
        { name: 'GLSL Shaders', level: 'Intermediate', highlight: 'Custom 3D shaders & WebGL' }
      ]
    },
    {
      category: 'Frontend & 3D Web Experience',
      description: 'Pixel-perfect, 60 FPS interfaces inspired by Apple craftsmanship',
      iconName: 'Layout',
      skills: [
        { name: 'React 19 & Vite', level: 'Expert', highlight: 'Component architecture & performance' },
        { name: 'Three.js & R3F', level: 'Advanced', highlight: 'Interactive 3D scenes & shaders' },
        { name: 'Tailwind CSS', level: 'Expert', highlight: 'Modern responsive utility styling' },
        { name: 'Framer Motion & GSAP', level: 'Advanced', highlight: 'Spring physics & scroll animations' },
        { name: 'Streamlit', level: 'Advanced', highlight: 'Rapid interactive AI interfaces' },
        { name: 'HTML5 & CSS3', level: 'Expert', highlight: 'Semantic web & accessibility' }
      ]
    },
    {
      category: 'Backend & Cloud Infrastructure',
      description: 'High-concurrency APIs, resilient databases, and cloud architecture',
      iconName: 'Server',
      skills: [
        { name: 'FastAPI', level: 'Advanced', highlight: 'Async APIs, SSE streaming & Pydantic' },
        { name: 'Node.js', level: 'Advanced', highlight: 'Full-stack services & tooling' },
        { name: 'Oracle Cloud (OCI)', level: 'Advanced', highlight: 'Certified Cloud Infrastructure' },
        { name: 'MySQL & MongoDB', level: 'Advanced', highlight: 'Relational & document databases' },
        { name: 'REST & Streaming APIs', level: 'Advanced', highlight: 'Low-latency event streaming' }
      ]
    },
    {
      category: 'Developer Tooling & DevOps',
      description: 'Modern developer toolchain for high productivity and collaboration',
      iconName: 'Terminal',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', highlight: 'Version control & open source' },
        { name: 'VS Code & Jupyter', level: 'Expert', highlight: 'Primary development environments' },
        { name: 'Postman', level: 'Advanced', highlight: 'API testing & schema validation' },
        { name: 'Wokwi', level: 'Intermediate', highlight: 'IoT & embedded simulation' }
      ]
    }
  ],
  certifications: [
    {
      id: 'oci-foundations',
      title: 'Oracle Cloud Infrastructure Foundations',
      issuer: 'Oracle',
      category: 'Cloud & Systems',
      description: 'Core cloud architecture, identity management, compute, and security.'
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science, AI & Development',
      issuer: 'Industry Certification',
      category: 'Programming & DSA',
      description: 'Data manipulation, algorithmic modeling, and AI application design.'
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering for ChatGPT & OpenAI GPTs',
      issuer: 'OpenAI / Generative AI',
      category: 'AI & Generative AI',
      description: 'Advanced prompt synthesis, custom GPT agent construction, and system design.'
    },
    {
      id: 'azure-ai',
      title: 'Microsoft Azure AI Foundations',
      issuer: 'Microsoft Azure',
      category: 'Cloud & Systems',
      description: 'Cloud-based computer vision, NLP, and cognitive services.'
    },
    {
      id: 'google-cloud-ai',
      title: 'Google Cloud AI Foundations',
      issuer: 'Google Cloud',
      category: 'Cloud & Systems',
      description: 'GCP Machine learning pipelines and Vertex AI infrastructure.'
    },
    {
      id: 'nvidia-ai-networking',
      title: 'NVIDIA AI & Networking',
      issuer: 'NVIDIA',
      category: 'AI & Generative AI',
      description: 'High-performance GPU computing architectures and networking.'
    },
    {
      id: 'matlab-programming',
      title: 'Introduction to Programming with MATLAB',
      issuer: 'MathWorks',
      category: 'Programming & DSA',
      description: 'Matrix computations, mathematical modeling, and algorithm development.'
    },
    {
      id: 'cpp-oop',
      title: 'C++ (Object-Oriented Programming) Training',
      issuer: 'Technical Training',
      category: 'Programming & DSA',
      description: 'Memory management, OOP design patterns, templates, and data structures.'
    },
    {
      id: 'yuva-ai',
      title: 'Yuva AI for All (Completion + Report)',
      issuer: 'Yuva AI Initiative',
      category: 'AI & Generative AI',
      description: 'Applied AI nationwide program with technical project reporting.'
    },
    {
      id: 'web-dev-internship',
      title: '2-Month Web Development Internship',
      issuer: 'Internship Experience',
      category: 'Practical & Internship',
      description: 'Hands-on production frontend development with HTML, CSS, and modern UI practices.'
    },
    {
      id: 'cisco-networking-cybersecurity',
      title: 'Cisco Networking & Cybersecurity',
      issuer: 'Cisco',
      category: 'Cloud & Systems',
      description: 'Network protocols, routing, firewalls, and cyber defensive principles.'
    }
  ],
  education: [
    {
      institution: 'MIT Vishwaprayag University, Solapur',
      degree: 'B.Tech in Computer Science & Engineering (AI & Machine Learning)',
      location: 'Solapur, Maharashtra, India',
      timeline: '2025 – 2029 (Currently in 2nd Year)',
      details:
        'Focused on machine learning theory, deep neural networks, operating systems, algorithms, and distributed computing architectures.',
      status: 'In Progress',
      highlights: [
        'Specialization in Artificial Intelligence & Machine Learning',
        'Active participant in technical hackathons and competitive programming',
        'Independent open-source creator alongside academic coursework'
      ]
    },
    {
      institution: 'Walchand College of Arts and Science, Solapur',
      degree: 'Higher Secondary Certificate (HSC) — Science Stream',
      location: 'Solapur, Maharashtra, India',
      timeline: 'Completed',
      details: 'Rigorous foundation in Physics, Chemistry, Mathematics, and Computer Science.',
      status: 'Completed',
      highlights: ['Strong mathematical and analytical foundation']
    },
    {
      institution: 'S.R. Chandak English High School, Solapur',
      degree: 'Secondary School Certificate (SSC)',
      location: 'Solapur, Maharashtra, India',
      timeline: 'Completed',
      details: 'Completed with academic excellence.',
      status: 'Completed',
      highlights: ['Foundational education with emphasis on sciences and logic']
    }
  ],
  leadership: {
    eventName: 'Samved Hackathon',
    teamName: 'TheChernobylIsotopes',
    projectTitle: 'AI-Enabled Solar Water Quality Monitoring System',
    location: 'Solapur, Maharashtra',
    objective:
      'Engineered an innovative, low-cost IoT + AI edge monitoring device to safeguard drinking water quality in Solapur communities.',
    sdgGoals: [
      { number: 3, title: 'Good Health & Well-Being' },
      { number: 6, title: 'Clean Water & Sanitation' },
      { number: 11, title: 'Sustainable Cities & Communities' }
    ],
    technologies: ['AI / Edge ML', 'IoT Sensors', 'Solar Power Hardware', 'Data Telemetry'],
    impactPoints: [
      'Collaborated within a multidisciplinary team to design real-time water turbidity and chemical parameter analysis.',
      'Developed solar-powered autonomous power profile for remote deployment across rural Solapur.',
      'Presented technical architecture aligning with UN Sustainable Development Goals.'
    ]
  },
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Hindi', proficiency: 'Full Professional Proficiency' },
    { name: 'Marathi', proficiency: 'Native / Bilingual' }
  ],
  interests: [
    'Computing Startups & Entrepreneurship',
    'Local AI & Privacy-Preserving Inference',
    'High-Performance 3D Graphics & WebGL',
    'Open-Source Software Ecosystems',
    'Next-Generation Developer Tooling'
  ]
}
