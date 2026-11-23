export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  liveUrl?: string | null;
  githubUrl: string;
  tags: string[];
  features: string[];
  technicalDetails: {
    overview: string;
    architectureType: string;
    highlights: { label: string; value: string }[];
    deepDive: string;
    explainabilityNote?: string;
  };
  screenshot?: string;
  architectureImage?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  description: string;
  category: 'Academics' | 'Algorithms' | 'Hackathon' | 'Community';
}

export interface CodingProfile {
  platform: string;
  handle: string;
  url: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Ankit Mewada',
  role: 'AI Engineer & Full-Stack Developer',
  headline: 'AI Engineer & Full-Stack Developer',
  subheading:
    "I'm a Computer Science undergraduate at NIT Rourkela, passionate about building intelligent applications, scalable backend systems and practical software products.",
  interestLine:
    'Interested in AI Engineering, Backend Development and Full-Stack Systems.',
  email: 'mewadaankit7089@gmail.com',
  phone: '+91 9755601342',
  phoneDisplay: '+91 97556 01342',
  location: 'India',
  college: 'National Institute of Technology Rourkela (NIT Rourkela)',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  graduationYear: 2027,
  availability: 'Open to AI & Full-Stack Engineering Opportunities',
  resumeUrl: '/Ankit_Mewada_Resume.pdf',
  photoUrl: '/profile.jpg',
  aboutText: [
    "I'm a Computer Science undergraduate at NIT Rourkela who enjoys building software that solves real problems.",
    'My interests span artificial intelligence, multi-agent systems, backend engineering and full-stack development.',
    'I enjoy understanding how systems work internally, designing their architecture and turning complex ideas into functional products.',
    "Through my projects, I've explored everything from LLM-based orchestration and retrieval-augmented generation to explainable machine learning and scalable backend systems.",
    'I believe good engineering is about building software that is useful, reliable and maintainable.',
  ],
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/axkit-rajput',
  linkedin: 'https://www.linkedin.com/in/ankit7089/',
  leetcode: 'https://leetcode.com/u/rcbcskgtmipbks/',
  email: 'mewadaankit7089@gmail.com',
  phone: 'tel:+919755601342',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'React 19', 'Redux Toolkit', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Fastify', 'REST APIs', 'Server-Sent Events'],
  },
  {
    title: 'AI Engineering',
    skills: ['LangChain', 'LangGraph', 'RAG', 'LLM Integration', 'Gemini', 'Groq', 'DeepSeek'],
  },
  {
    title: 'Machine Learning',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SHAP', 'Explainable AI'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Qdrant'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'S3', 'ECS', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ankai',
    title: 'AnkAI',
    subtitle: 'Multi-Agent AI Orchestration Platform',
    description:
      'A multi-agent AI platform that intelligently routes user requests to specialized agents for coding, search, document processing, vision and retrieval-augmented generation.',
    liveUrl: 'https://ank-ai-gray.vercel.app/',
    githubUrl: 'https://github.com/axkit-rajput/AnkAi',
    screenshot: '/projects/ankai-architecture.jpg',
    architectureImage: '/projects/ankai-architecture.jpg',
    tags: [
      'React 19',
      'LangGraph',
      'LangChain',
      'Groq',
      'Gemini',
      'DeepSeek',
      'Qdrant',
      'Redis',
      'MongoDB',
      'AWS',
      'Docker',
    ],
    features: [
      'LangGraph StateGraph orchestration',
      'Eight specialized AI agents',
      'Intent classification and intelligent routing',
      'Multiple LLM integrations',
      'RAG using Qdrant',
      'Ephemeral vector collections for uploaded documents',
      'Redis-backed conversational memory',
      'SSE response streaming',
      'Five Dockerized microservices',
      'AWS ECS deployment',
      'GitHub Actions CI/CD',
    ],
    technicalDetails: {
      overview:
        'AnkAI is engineered as an event-driven, microservice-based orchestration system. Rather than funneling all prompts into a single generic model, user intents are parsed by an initial classifier node that dispatches work across 8 purpose-built specialist agents, each mapped to the LLM best-suited for latency, context size, and reasoning depth.',
      architectureType: 'Microservices & LangGraph State Graph',
      highlights: [
        { label: 'Routing Mechanism', value: 'LangGraph StateGraph + Intent Classifier with file-type override' },
        { label: 'LLM Multi-Provider', value: 'Groq (GPT-OSS 120B), Gemini 2.5 Flash, DeepSeek-V3' },
        { label: 'Vector Storage', value: 'Qdrant ephemeral collections with RecursiveCharacterTextSplitter' },
        { label: 'Streaming Protocol', value: 'Server-Sent Events (SSE) with token buffering' },
        { label: 'Microservices', value: 'Gateway, Auth (Firebase + Redis), Chat (MongoDB), Agent, Billing' },
        { label: 'Deployment', value: 'AWS ECS containerized with Docker and GitHub Actions CI/CD' },
      ],
      deepDive:
        'The core innovation lies in ephemeral vector collections created per document upload (pdf-${timestamp}), eliminating cross-document semantic bleed while enforcing strict anti-hallucination guardrails. Complex multi-step queries seamlessly route through Tavily web search followed by a synthesis pass in Groq, streaming tokens directly to the React 19 frontend.',
    },
  },
  {
    id: 'credit-ledger',
    title: 'Credit Ledger',
    subtitle: 'Explainable Credit Risk Assessment',
    description:
      'An end-to-end machine learning application that predicts loan default risk and explains individual predictions using SHAP-based explainable AI.',
    liveUrl: null, // As per strict instructions: do not invent live deployment URL
    githubUrl: 'https://github.com/axkit-rajput/credit-risk-using-SHAP',
    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'FastAPI',
      'Uvicorn',
      'Pydantic',
      'Joblib',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    features: [
      'Logistic Regression and XGBoost comparison',
      'Stratified 5-fold cross-validation',
      'RandomizedSearchCV hyperparameter tuning',
      'Class imbalance handling',
      'Classification threshold optimization',
      'Probability calibration',
      'SHAP global feature importance',
      'SHAP local waterfall explanations',
      'False-positive and false-negative analysis',
      'FastAPI backend',
      'Interactive risk assessment dashboard',
    ],
    technicalDetails: {
      overview:
        'Credit Ledger translates raw consumer-loan application parameters into calibrated default probabilities while generating granular SHAP (SHapley Additive exPlanations) attributions for every prediction, eliminating the opacity typical of modern gradient boosted trees.',
      architectureType: 'Two-Stage ML Pipeline & High-Performance Inference',
      highlights: [
        { label: 'Dataset Scope', value: '32.5K loan applicant records with class imbalance mitigation' },
        { label: 'Model Performance', value: '0.94 ROC-AUC, 92% accuracy with Platt scaling calibration' },
        { label: 'Threshold Tuning', value: 'Custom precision-recall optimization (beyond default 0.5 threshold)' },
        { label: 'Explainability Engine', value: 'SHAP TreeExplainer for instantaneous local waterfall attribution' },
        { label: 'Serving Layer', value: 'FastAPI async REST endpoints with strict Pydantic schemas' },
      ],
      deepDive:
        'The training pipeline compares regularized Logistic Regression against tuned XGBoost classifiers using Stratified 5-fold CV. Probabilities undergo Platt scaling calibration via CalibratedClassifierCV to ensure output risks match true empirical frequencies before serialization with Joblib.',
      explainabilityNote:
        'Why explainability matters in credit risk assessment: In regulated lending, black-box decisions violate consumer protection standards such as the Fair Credit Reporting Act (FCRA) and Equal Credit Opportunity Act (ECOA), which mandate adverse action notices explaining exactly why a borrower was rejected. Explainability also protects financial institutions against systemic bias, model drift, and spurious correlations by providing mathematically verified Shapley feature attributions for both auditors and underwriters.',
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'MachLee ROV Private Limited',
    role: 'Software Development Intern',
    period: 'June 2026 – July 2026',
    location: 'Rourkela, India',
    summary:
      'Worked on an AI-powered chatbot using the MERN stack, focusing on backend integration, API development and application functionality.',
    responsibilities: [
      'Developed REST APIs connecting user messages with an AI service.',
      'Worked on input validation and error handling.',
      'Implemented database operations.',
      'Integrated frontend and backend components.',
      'Performed integration testing.',
    ],
  },
];

export const EDUCATION = {
  institution: 'National Institute of Technology Rourkela',
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering',
  period: '2023 – 2027',
  graduationYear: 2027,
  location: 'Rourkela, Odisha, India',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Database Management System',
    'Object Oriented Programming',
    'Operating System',
    'Computer Networks',
  ],
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'jee',
    title: 'JEE Advanced / Main 2023',
    metric: 'AIR 2795',
    description: 'Secured All India Rank 2795 among more than one million candidates in JEE 2023.',
    category: 'Academics',
  },
  {
    id: 'dsa',
    title: 'Problem Solving',
    metric: '300+ Problems',
    description: 'Solved 300+ Data Structures and Algorithms problems across competitive programming platforms.',
    category: 'Algorithms',
  },
  {
    id: 'hacknitr',
    title: 'HACKNITR',
    metric: '36-Hour Hackathon',
    description: 'Participated in HACKNITR, a 36-hour national-level hackathon, prototyping full-stack software solutions.',
    category: 'Hackathon',
  },
  {
    id: 'aps',
    title: 'APS NITR Contest',
    metric: '30+ Challenges',
    description: 'Contributed to curating 30+ competitive programming challenges for the flagship coding contest.',
    category: 'Community',
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: 'GitHub',
    handle: 'axkit-rajput',
    url: 'https://github.com/axkit-rajput',
    description: 'Open-source repositories, multi-agent frameworks, ML pipelines, and microservice architectures.',
  },
  {
    platform: 'LinkedIn',
    handle: 'ankit7089',
    url: 'https://www.linkedin.com/in/ankit7089/',
    description: 'Professional updates, engineering achievements, and technical network.',
  },
  {
    platform: 'LeetCode',
    handle: 'rcbcskgtmipbks',
    url: 'https://leetcode.com/u/rcbcskgtmipbks/',
    description: 'Algorithms, data structures, dynamic programming, and computational problem solving.',
  },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];
