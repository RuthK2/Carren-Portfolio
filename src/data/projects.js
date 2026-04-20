// Project and skills data for Carren Kirwa's portfolio

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Evaluation Rubric Framework",
    type: "AI Quality Assurance",
    description: "Comprehensive rubric-based evaluation system for assessing AI-generated STEM content across dimensions of factual accuracy, logical coherence, clarity, completeness, safety, and tone. Includes decision trees, gold-standard calibration tasks, and inter-annotator agreement tooling.",
    tags: ["AI Evaluation", "Rubric Design", "RLHF", "SFT", "Quality Assurance"],
    year: "2024",
    category: "AI/ML",
    link: null,
    image: "https://images.pexels.com/photos/6303596/pexels-photo-6303596.jpeg"
  },
  {
    id: 2,
    title: "Python Scientific Verification Suite",
    type: "Scientific Computing",
    description: "Python-based verification toolkit for validating AI-generated scientific and mathematical outputs. Uses NumPy, SciPy, SymPy, and pandas to reproduce and cross-check derivations, numerical results, and statistical claims prior to deployment in model training pipelines.",
    tags: ["Python", "NumPy", "SciPy", "SymPy", "Scientific Verification"],
    year: "2023",
    category: "Scientific Computing",
    link: null,
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg"
  },
  {
    id: 3,
    title: "Red-Teaming Adversarial Prompt Library",
    type: "AI Safety",
    description: "Curated library of adversarial prompts designed to surface hallucination, scientific misinformation, numerical errors, and unsafe content in large language models. Includes documented failure modes and structured findings to guide model improvement teams.",
    tags: ["Red-Teaming", "Adversarial Prompts", "LLM Safety", "Hallucination Detection"],
    year: "2024",
    category: "AI Safety",
    link: null,
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
  },
  {
    id: 4,
    title: "Field Data Collection & GPS Mapping System",
    type: "Data Collection",
    description: "Structured digital field data collection workflow using ODK, KoBoCollect, and KIAMIS for agricultural and monitoring & evaluation projects. Includes GPS mapping protocols, enumerator training materials, and data quality standards.",
    tags: ["ODK", "KoBoCollect", "KIAMIS", "GPS Mapping", "Field Surveys"],
    year: "2022",
    category: "Data Collection",
    link: null,
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
  },
  {
    id: 5,
    title: "Computational Chemistry Research — AstraZeneca",
    type: "Research",
    description: "Pharmaceutical R&D research applying computational chemistry, statistical modelling, and machine learning. Authored original research-level problems with Python-verified solutions, directly supporting AI model training initiatives in scientific domains.",
    tags: ["Computational Chemistry", "Pharmaceutical R&D", "Python", "Machine Learning", "Statistical Modelling"],
    year: "2023",
    category: "Research",
    link: null,
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
  }
];

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      "React & JSX",
      "React Native",
      "JavaScript / ES6+",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Next.js",
      "Vue.js",
      "Framer Motion",
      "Vite & Webpack"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Python (Django, Flask, FastAPI)",
      "Node.js & Express.js",
      "REST APIs & GraphQL",
      "PostgreSQL & MongoDB",
      "Firebase & Supabase",
      "Docker & CI/CD Pipelines",
      "Redis",
      "AWS (S3, EC2, Lambda)",
      "Linux / Bash Scripting",
      "WebSockets & Real-Time APIs"
    ]
  },
  {
    category: "AI Content Review & Annotation",
    skills: [
      "RLHF & SFT Annotation Workflows",
      "Rubric-Based Text Evaluation",
      "Side-by-Side Preference Ranking",
      "Misleading & Unsafe Content Flagging",
      "Red-Teaming & Adversarial Prompt Analysis",
      "Ground-Truth Validation",
      "Inter-Annotator Agreement & Calibration",
      "Evaluation Guideline & Decision-Tree Authoring",
      "Dataset QA & Label Drift Detection",
      "High-Volume Asynchronous Remote Delivery"
    ]
  },
  {
    category: "Scientific & Technical Skills",
    skills: [
      "Python (NumPy, SciPy, SymPy, pandas, scikit-learn)",
      "Computational Chemistry & Mathematical Modelling",
      "Statistical Modelling & Uncertainty Quantification",
      "Multi-Domain STEM Subject Matter Authority",
      "Scientific Writing & Technical Reporting",
      "Pharmaceutical R&D (AstraZeneca)",
      "Kinetic & Computational Modelling",
      "Biomedical Research (KEMRI)"
    ]
  },
  {
    category: "Annotation & QA Tools",
    skills: [
      "Labelbox",
      "Label Studio",
      "CVAT",
      "SuperAnnotate",
      "Scale AI Platform",
      "Appen",
      "Surge AI",
      "Prolific",
      "Remotasks",
      "DataAnnotation.tech"
    ]
  },
  {
    category: "Field Data & Mapping Tools",
    skills: [
      "ODK (Open Data Kit)",
      "KoBoCollect",
      "KIAMIS",
      "GPS Mapping & Spatial Data",
      "Mobile Data Collection Protocols",
      "Enumerator Training & Quality Standards",
      "Agricultural Field Surveys",
      "Livestock Management & Farm Operations"
    ]
  }
];

export const SERVICES_DATA = [
  {
    title: "AI Content Review & Annotation",
    details: [
      "RLHF & SFT Annotation Workflows",
      "Rubric-Based Text Evaluation",
      "Side-by-Side Preference Ranking",
      "Misleading & Unsafe Content Flagging",
      "Ground-Truth Validation"
    ]
  },
  {
    title: "Scientific & Technical Evaluation",
    details: [
      "Multi-Domain STEM Content Review",
      "Python-Based Scientific Verification",
      "Hallucination & Misinformation Detection",
      "Red-Teaming & Adversarial Prompt Design",
      "Research-Level Problem Authoring"
    ]
  },
  {
    title: "Annotation QA & Guideline Authoring",
    details: [
      "Annotator Guideline & Decision-Tree Writing",
      "Dataset QA & Inter-Annotator Calibration",
      "Gold-Standard & Honeypot Task Design",
      "Label Drift & Schema Error Detection",
      "Field Data Collection (ODK, KoBoCollect, KIAMIS)"
    ]
  }
];
