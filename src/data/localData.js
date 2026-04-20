// Local portfolio data - No Supabase required
// This file provides fallback data when Supabase is not configured

export const PROFILE_DATA = {
  name: "Carren Kirwa",
  title: "PhD Computational Chemist & Mathematical Modeller | AI Data Scientist | STEM Expert Evaluator",
  tagline: "STEM Domain Expert • PhD Computational Chemistry & Mathematical Modelling • AI Evaluation & Annotation Specialist",
  email: "carrenkirwa@gmail.com",
  phone: "",
  location: "United Kingdom",
  availability: "Remote — Flexible 10–40 hrs/week • Available Immediately",
  bio: "Multidisciplinary scientist and AI expert with 6+ years of research experience and 4+ years in AI training, evaluation, and data annotation. Holds a PhD in Computational Chemistry & Mathematical Modelling (University of Lincoln) and an MSc in Pharmaceutical & Chemical Sciences — encompassing biochemistry, pharmacokinetics, and molecular biology — (University of Sunderland), underpinned by a BSc in Mathematics, Physics & Chemistry (University of Nairobi). Brings rare, cross-domain expertise spanning computational chemistry, applied mathematics, physics, biology, biochemistry, and statistics — directly applied to AI model training, RLHF evaluation, research-level problem design, and scientific content verification across leading global AI platforms. Experienced as a senior computational scientist at AstraZeneca and Johnson Matthey, applying Python, MATLAB, and scientific data pipelines to real-world research problems at scale. Proficient in Python (NumPy, SciPy, SymPy, pandas, scikit-learn, statsmodels), MATLAB, SQL, Gaussian, ORCA, CVAT, and Labelbox. C1+ English communicator; self-directed and reliable across fully asynchronous, remote environments.",
  avatar: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
  social: {
    github: "",
    linkedin: "",
    twitter: ""
  }
};

export const SKILLS_DATA = [
  // AI/ML
  { name: "AI-Generated Text Evaluation", icon: "fa-solid fa-brain", level: 97, color: "#8B5CF6", emoji: "🧠", category: "AI/ML" },
  { name: "RLHF & SFT Annotation", icon: "fa-solid fa-tags", level: 95, color: "#84CC16", emoji: "🏷️", category: "AI/ML" },
  { name: "Red-Teaming & Adversarial Analysis", icon: "fa-solid fa-shield-halved", level: 93, color: "#EF4444", emoji: "🛡️", category: "AI/ML" },
  { name: "Dataset QA & Calibration", icon: "fa-solid fa-magnifying-glass-chart", level: 94, color: "#10B981", emoji: "📊", category: "AI/ML" },
  { name: "Rubric Scoring & Evaluation", icon: "fa-solid fa-list-check", level: 96, color: "#F59E0B", emoji: "✅", category: "AI/ML" },
  { name: "Ground-Truth Validation", icon: "fa-solid fa-circle-check", level: 95, color: "#7C3AED", emoji: "🎯", category: "AI/ML" },
  { name: "Python (NumPy, SciPy, pandas)", icon: "fa-solid fa-flask", level: 92, color: "#EC4899", emoji: "⚗️", category: "AI/ML" },
  { name: "Statistical Modelling", icon: "fa-solid fa-chart-line", level: 90, color: "#3B82F6", emoji: "📈", category: "AI/ML" },
  { name: "Computational Chemistry", icon: "fa-solid fa-atom", level: 91, color: "#6366F1", emoji: "🔬", category: "AI/ML" },
  // Frontend
  { name: "React & JSX", icon: "fa-brands fa-react", level: 88, color: "#61DAFB", emoji: "⚛️", category: "Frontend" },
  { name: "React Native", icon: "fa-brands fa-react", level: 82, color: "#00D8FF", emoji: "📱", category: "Frontend" },
  { name: "JavaScript / ES6+", icon: "fa-brands fa-js", level: 85, color: "#F7DF1E", emoji: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "fa-solid fa-code", level: 80, color: "#3178C6", emoji: "🔷", category: "Frontend" },
  { name: "HTML5 & CSS3", icon: "fa-brands fa-html5", level: 90, color: "#E34F26", emoji: "🌐", category: "Frontend" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: 87, color: "#06B6D4", emoji: "🌬️", category: "Frontend" },
  { name: "Next.js", icon: "fa-solid fa-n", level: 78, color: "#6366F1", emoji: "▲", category: "Frontend" },
  { name: "Vue.js", icon: "fa-brands fa-vuejs", level: 72, color: "#42B883", emoji: "💚", category: "Frontend" },
  // Backend
  { name: "Python (Django, Flask)", icon: "fa-brands fa-python", level: 90, color: "#4B8BBE", emoji: "🐍", category: "Backend" },
  { name: "Node.js & Express", icon: "fa-brands fa-node", level: 83, color: "#339933", emoji: "📦", category: "Backend" },
  { name: "REST APIs & GraphQL", icon: "fa-solid fa-plug", level: 85, color: "#E535AB", emoji: "🔌", category: "Backend" },
  { name: "PostgreSQL & MongoDB", icon: "fa-solid fa-database", level: 82, color: "#336791", emoji: "🗄️", category: "Backend" },
  { name: "Firebase & Supabase", icon: "fa-solid fa-fire", level: 79, color: "#FFCA28", emoji: "🔥", category: "Backend" },
  { name: "Docker & CI/CD", icon: "fa-brands fa-docker", level: 76, color: "#2496ED", emoji: "🐳", category: "Backend" },
  { name: "GPS & Field Data Collection", icon: "fa-solid fa-map-location-dot", level: 88, color: "#F97316", emoji: "🗺️", category: "Backend" },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Handshake (via Scale AI)",
    role: "Scientific Data Annotation Specialist",
    location: "Remote",
    start_date: "2026-01-01",
    end_date: null,
    current: true,
    description: "Reviewing and rating large volumes of AI-generated text across advanced STEM and general topics, assessing factual accuracy, logical coherence, clarity, tone, and overall quality using structured rubrics and written rationales.",
    achievements: [
      "Identified and documented AI outputs containing scientific misinformation, hallucinated citations, numerically incorrect derivations, and poorly reasoned conclusions — providing structured written findings to model quality teams",
      "Applied numerical rating scales and authored detailed written evaluation notes covering correctness, completeness, safety, tone, and clarity dimensions for every assessed response",
      "Performed side-by-side comparison of competing AI responses, selecting and justifying the superior output based on defined evaluation criteria and detailed written rationale",
      "Designed and executed adversarial red-team prompt exercises targeting hallucination, scientific misinformation, and numerical errors; documented failure modes for model improvement teams"
    ],
    technologies: ["RLHF", "SFT", "Rubric Scoring", "Red-Teaming", "STEM Evaluation", "Scale AI"]
  },
  {
    id: 2,
    company: "AstraZeneca, Cambridge (Remote)",
    role: "Senior Computational Scientist",
    location: "Remote",
    start_date: "2023-01-01",
    end_date: null,
    current: true,
    description: "Applying computational chemistry, statistical modelling, and machine learning to pharmaceutical R&D — building deep technical authority required to evaluate AI-generated scientific content with genuine accuracy.",
    achievements: [
      "Authored original research-level problems in chemistry, mathematics, and statistics with fully Python-verified solutions, directly supporting AI model training initiatives",
      "Translated complex technical outputs for non-specialist audiences, demonstrating the written precision and communication clarity central to high-quality content review",
      "Applied machine learning to pharmaceutical R&D — bridging cutting-edge research with AI content evaluation"
    ],
    technologies: ["Python", "Computational Chemistry", "Statistical Modelling", "Machine Learning", "Scientific Writing"]
  },
  {
    id: 3,
    company: "Outlier & TELUS Digital AI Community",
    role: "STEM Domain Expert Evaluator",
    location: "Remote",
    start_date: "2023-06-01",
    end_date: "2025-12-31",
    current: false,
    description: "Evaluated AI-generated responses across mathematics, physics, chemistry, biology, statistics, data science, and Python programming — assessing correctness, clarity, completeness, notation, and tone against structured evaluation guidelines.",
    achievements: [
      "Produced detailed written evaluation notes with score justifications across multiple quality dimensions; feedback directly informed iterative model improvement cycles",
      "Assessed AI content spanning technical science, applied mathematics, code, general reasoning, and everyday problem-solving — adapting evaluation criteria and tone standards to topic context",
      "Systematically identified and reported recurring failure patterns in AI-generated scientific, mathematical, and data science content, enabling targeted model refinement",
      "Designed original evaluation scenarios with verified reference solutions, ensuring all ground-truth answers were Python-validated and reproducible prior to deployment in model training pipelines"
    ],
    technologies: ["LLM Evaluation", "STEM", "Python", "Dataset QA", "Outlier", "TELUS Digital"]
  },
  {
    id: 4,
    company: "Scale AI & Appen",
    role: "Annotation QA Lead & Guideline Author",
    location: "Remote",
    start_date: "2022-03-01",
    end_date: "2024-05-31",
    current: false,
    description: "Authored and maintained annotator guidelines, edge-case appendices, and decision trees for STEM, data science, machine learning, biology, and general content evaluation tasks — ensuring consistent, high-quality reviewer output at scale.",
    achievements: [
      "Designed gold-standard, honeypot, and calibration tasks; monitored inter-annotator agreement across reviewer cohorts; coordinated targeted retraining where consistency or quality drifted",
      "Led systematic quality sweeps of annotated datasets, detecting schema errors, label drift, and out-of-taxonomy content prior to release into model training pipelines"
    ],
    technologies: ["Annotation QA", "Guideline Authoring", "Calibration", "Scale AI", "Appen", "Dataset Management"]
  },
  {
    id: 5,
    company: "Remotasks & DataAnnotation.tech",
    role: "AI Trainer & Content Evaluator",
    location: "Remote",
    start_date: "2021-03-01",
    end_date: "2022-02-28",
    current: false,
    description: "Authored original prompt-and-response pairs across mathematics, statistics, Python, data science, and general reasoning; validated all outputs for factual accuracy, clarity, tone, and completeness.",
    achievements: [
      "Executed red-team evaluation tasks identifying hallucinated, unsafe, misleading, or poorly written AI outputs; repaired multi-turn dialogue sequences across tutoring and general reasoning scenarios",
      "Delivered consistently high quality and throughput in a fully self-directed remote environment across varied content workflows"
    ],
    technologies: ["Prompt Engineering", "Content Evaluation", "Red-Teaming", "Remotasks", "DataAnnotation.tech"]
  },
  {
    id: 6,
    company: "Johnson Matthey, London",
    role: "Research Scientist – Chemical Modelling",
    location: "London, UK",
    start_date: "2021-06-01",
    end_date: "2022-12-31",
    current: false,
    description: "Conducted computational modelling and kinetic analysis across industrial catalysis projects; produced technical reports translating research outputs for engineering and management stakeholders.",
    achievements: [
      "Conducted computational modelling and kinetic analysis across industrial catalysis projects",
      "Produced technical reports translating research outputs for engineering and management stakeholders"
    ],
    technologies: ["Computational Chemistry", "Kinetic Modelling", "Python", "Technical Writing"]
  },
  {
    id: 7,
    company: "National Physical Laboratory (NPL), Teddington",
    role: "Junior Computational Scientist",
    location: "Teddington, UK",
    start_date: "2020-09-01",
    end_date: "2021-05-31",
    current: false,
    description: "Developed and validated numerical methods for uncertainty quantification; designed multi-step computational physics and statistics problems with Python-verified solutions.",
    achievements: [
      "Developed and validated numerical methods for uncertainty quantification",
      "Designed multi-step computational physics and statistics problems with Python-verified solutions"
    ],
    technologies: ["Python", "Numerical Methods", "Uncertainty Quantification", "Computational Physics"]
  },
  {
    id: 8,
    company: "Kenya Medical Research Institute (KEMRI), Nairobi",
    role: "Research Assistant",
    location: "Nairobi, Kenya",
    start_date: "2018-09-01",
    end_date: "2019-07-31",
    current: false,
    description: "Statistical analysis, data modelling, and technical writing across physical chemistry, biochemistry, and biomedical research programmes.",
    achievements: [
      "Performed statistical analysis and data modelling across physical chemistry, biochemistry, and biomedical research programmes",
      "Produced technical writing supporting research outputs and publications"
    ],
    technologies: ["Statistical Analysis", "Data Modelling", "Biochemistry", "Technical Writing"]
  },
  {
    id: 9,
    company: "Labelbox",
    role: "Video & Image Annotation Specialist",
    location: "Remote",
    start_date: "2020-03-01",
    end_date: "2022-12-31",
    current: false,
    description: "Annotated video and imaging data using polygon-based outlines and bounding boxes across general and industrial datasets; completed quality checks for accuracy and consistency across sequences.",
    achievements: [
      "Annotated video and imaging data using polygon-based outlines and bounding boxes across general and industrial datasets",
      "Completed quality checks for accuracy and consistency across sequences"
    ],
    technologies: ["Labelbox", "Video Annotation", "Image Annotation", "Bounding Box", "Quality Control"]
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    name: "AI Evaluation Rubric Framework",
    description: "Comprehensive rubric-based evaluation system for assessing AI-generated STEM content across dimensions of factual accuracy, logical coherence, clarity, completeness, safety, and tone. Includes decision trees, gold-standard calibration tasks, and inter-annotator agreement tooling.",
    image: "https://images.pexels.com/photos/6303596/pexels-photo-6303596.jpeg",
    tags: ["AI Evaluation", "Rubric Design", "RLHF", "SFT", "Quality Assurance"],
    featured: true,
    github_url: "",
    live_url: null
  },
  {
    id: 2,
    name: "Python Scientific Verification Suite",
    description: "Python-based verification toolkit for validating AI-generated scientific and mathematical outputs. Uses NumPy, SciPy, SymPy, and pandas to reproduce and cross-check derivations, numerical results, and statistical claims prior to deployment in model training pipelines.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    tags: ["Python", "NumPy", "SciPy", "SymPy", "Scientific Verification"],
    featured: true,
    github_url: "",
    live_url: null
  },
  {
    id: 3,
    name: "Red-Teaming Adversarial Prompt Library",
    description: "Curated library of adversarial prompts designed to surface hallucination, scientific misinformation, numerical errors, and unsafe content in large language models. Includes documented failure modes and structured findings to guide model improvement teams.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    tags: ["Red-Teaming", "Adversarial Prompts", "LLM Safety", "Hallucination Detection"],
    featured: true,
    github_url: "",
    live_url: null
  },
  {
    id: 4,
    name: "Field Data Collection & GPS Mapping System",
    description: "Structured digital field data collection workflow using ODK, KoBoCollect, and KIAMIS for agricultural and monitoring & evaluation projects. Includes GPS mapping protocols, enumerator training materials, and data quality standards.",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    tags: ["ODK", "KoBoCollect", "KIAMIS", "GPS Mapping", "Field Surveys"],
    featured: false,
    github_url: "",
    live_url: null
  },
  {
    id: 5,
    name: "Computational Chemistry Research — AstraZeneca",
    description: "Pharmaceutical R&D research applying computational chemistry, statistical modelling, and machine learning. Authored original research-level problems with Python-verified solutions, directly supporting AI model training initiatives in scientific domains.",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    tags: ["Computational Chemistry", "Pharmaceutical R&D", "Python", "Machine Learning", "Statistical Modelling"],
    featured: false,
    github_url: "",
    live_url: null
  },
  {
    id: 6,
    name: "Annotator Guideline & Decision-Tree Authoring",
    description: "End-to-end authoring of annotator guidelines, edge-case appendices, and decision trees for STEM, data science, machine learning, and biology evaluation tasks at Scale AI and Appen — ensuring consistent, high-quality reviewer output at scale.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tags: ["Guideline Authoring", "Decision Trees", "STEM", "Data Science", "Annotation QA"],
    featured: false,
    github_url: "",
    live_url: null
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "PhD — Computational Chemistry & Mathematical Modelling",
    institution: "University of Lincoln, United Kingdom",
    field: "Computational Chemistry & Mathematical Modelling",
    grade: "",
    start_date: "2021-01-01",
    end_date: "2024-12-31"
  },
  {
    id: 2,
    degree: "MSc — Pharmaceutical & Chemical Sciences (Biochemistry & Molecular Biology)",
    institution: "University of Sunderland, United Kingdom",
    field: "Pharmaceutical & Chemical Sciences",
    grade: "",
    start_date: "2019-01-01",
    end_date: "2020-12-31"
  },
  {
    id: 3,
    degree: "BSc — Mathematics, Physics & Chemistry",
    institution: "University of Nairobi, Kenya",
    field: "Mathematics, Physics & Chemistry",
    grade: "",
    start_date: "2015-01-01",
    end_date: "2018-12-31"
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    name: "AI Evaluation Platforms: Scale AI, Outlier, TELUS Digital, Remotasks, DataAnnotation.tech, Appen, Surge AI, Prolific",
    issuer: "Multiple Platforms",
    date: "2021-01-01",
    credential_id: ""
  },
  {
    id: 2,
    name: "AI Models Evaluated: GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google) — preference ranking, rubric scoring, red-teaming, written feedback",
    issuer: "OpenAI, Anthropic, Google",
    date: "2021-01-01",
    credential_id: ""
  },
  {
    id: 3,
    name: "Annotation & QA Tools: CVAT, Labelbox, Label Studio, SuperAnnotate — text, image, and video annotation with QA workflows",
    issuer: "Various",
    date: "2021-01-01",
    credential_id: ""
  }
];
