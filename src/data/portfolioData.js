export const SITE_COPY = {
  name: 'Kandhal',
  tagline: 'Designing with clarity, building with speed',
  intro: "I'm a Python developer focused on clean architecture, polished UI, and performance. I study Computer Science at Lok Jagruti Kendra University and build full-stack products with React and Python.",
  intro2: 'I love turning complex ideas into elegant experiences, blending 3D motion, crisp layouts, and reliable backend systems.',
  highlights: [
    { title: 'Product Mindset', description: 'UX-first designs with measurable impact.' },
    { title: 'Full-Stack', description: 'React, Django, APIs, and deployment.' },
    { title: '3D Motion', description: 'Immersive visuals without sacrificing speed.' }
  ],
  educationStats: {
    current: '2022 - Present',
    school: 'LJ Institute of Engineering and Technology (LJIET)',
    highSchool: 'The New Age High School'
  }
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React', icon: 'react' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Django', icon: 'server' }
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: 'database' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'VS Code', icon: 'code' },
      { name: 'REST APIs', icon: 'cloud' },
      { name: 'Agile', icon: 'cog' }
    ]
  }
];

export const EDUCATION_ITEMS = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    company: 'LJ Institute of Engineering and Technology (LJIET)',
    duration: '2022 - Present',
    type: 'education',
    points: [
      'Building strong foundation in CS fundamentals',
      'Learning data structures, algorithms, and system design',
      'Working on real-world projects with modern tech stack'
    ]
  },
  {
    title: 'Higher Secondary Education (Science)',
    company: 'The New Age High School',
    duration: '2022 - 2023',
    type: 'education',
    points: [
      'Focused on Mathematics, Physics, and Chemistry',
      'Developed strong analytical and problem-solving skills',
      'Achieved excellence in academic performance'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: 'Introduction to Java',
    provider: 'Coursera',
    year: '2024',
    icon: 'coursera',
    link: 'https://coursera.org/verify/TUX8P7X8ELQD',
    image: '/images/certificates/Introduction to Java.png',
    credentialId: 'TUX8P7X8ELQD'
  },
  {
    name: 'Inheritance and Data Structures in Java',
    provider: 'Coursera',
    year: '2024',
    icon: 'coursera',
    link: 'https://coursera.org/verify/H8XTMHMZSYZX',
    image: '/images/certificates/Inheritance and Data Structures in Java.png',
    credentialId: 'H8XTMHMZSYZX'
  },
  {
    name: 'Introduction to HTML, CSS, & JavaScript',
    provider: 'Coursera',
    year: '2024',
    icon: 'coursera',
    link: 'https://coursera.org/verify/2MWVBEWX2M8N',
    image: '/images/certificates/Introduction to HTML, CSS, & JavaScript.png',
    credentialId: '2MWVBEWX2M8N'
  },
  {
    name: 'Exploratory Data Analysis for Machine Learning',
    provider: 'Coursera',
    year: '2024',
    icon: 'coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/NBH6CSAM16MD',
    image: '/images/certificates/Exploratory Data Analysis for Machine Learning.png',
    credentialId: 'NBH6CSAM16MD'
  },
  {
    name: 'Developing Front-End Apps with React',
    provider: 'Coursera',
    year: '2024',
    icon: 'coursera',
    link: 'https://coursera.org/verify/0178B60775HH',
    image: '/images/certificates/Developing Front-End Apps with React.png',
    credentialId: '0178B60775HH'
  },
  {
    name: 'Prompt Engineering: The Skill of Asking AI Right',
    provider: 'Wayspire',
    year: '2024',
    icon: 'certificate',
    link: 'https://drive.google.com/file/d/1gjw4euDn_6bJ16aXcIA2te8-NSo7lKld/view?usp=sharing',
    image: '/images/certificates/prompt_engg.png',
    credentialId: 'WAY-2024-PE-092'
  },
  {
    name: 'Back-End Development with .NET',
    provider: 'Coursera',
    year: '2026',
    icon: 'coursera',
    link: 'https://coursera.org/verify/1XALENBM84H6',
    image: '/images/certificates/Back-End_Development_with_DotNet.png',
    credentialId: '1XALENBM84H6'
  }
];

export const PROJECTS = [
  {
    title: 'Personal Portfolio',
    category: 'Web',
    description: 'React portfolio showcasing projects and technical expertise with modern animations',
    image: '/images/projects/portfolio.png',
    tags: ['React', 'Framer Motion', 'Responsive', 'CSS3'],
    liveLink: 'https://www.kandhal.tech',
    codeLink: 'https://github.com/KandhalShakil/Portfolio_react'
  },
  {
    title: 'Kandhal Invoice System',
    category: 'SaaS',
    description: 'Full-featured invoice management system with PDF generation and client tracking',
    image: '/images/projects/invoice.png',
    tags: ['Python', 'Django', 'PDF Generation', 'JavaScript'],
    liveLink: 'https://www.invoice.kandhal.tech',
    codeLink: 'https://github.com/KandhalShakil/Invoice_system',
    comingSoon: true
  },
  {
    title: 'SKY Event',
    category: 'Web',
    description: 'Responsive event management and promotion website with modern design',
    image: '/images/projects/sky_event.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    liveLink: 'https://sky-event.vercel.app/',
    codeLink: 'https://github.com/KandhalShakil/Sky_Event'
  },
  {
    title: 'SchemeSnap AI',
    category: 'AI',
    description: 'AI platform to simplify scheme details, check eligibility, and generate multilingual action plans.',
    image: '/images/projects/schemesnap.png',
    tags: ['Python', 'Django', 'DRF', 'React', 'Vite', 'Groq AI'],
    liveLink: 'https://www.schemesnap-ai.kandhal.tech',
    codeLink: 'https://github.com/KandhalShakil/SchemeSnap-AI'
  },
  {
    title: 'Weather Dashboard',
    category: 'Web',
    description: 'Full-stack weather dashboard with real-time conditions, AQI insights, and forecast tracking.',
    image: '/images/projects/weather.png',
    tags: ['.NET', 'C#', 'HTML', 'JavaScript', 'OpenWeather API'],
    liveLink: 'https://www.weather-intelligence-dashboard.kandhal.tech',
    codeLink: 'https://github.com/KandhalShakil/Weather-Intelligence-Dashboard'
  },
  {
    title: 'Sorting Algorithm Performance Analyzer',
    category: 'Web',
    description: 'Interactive analyzer to compare sorting algorithms using execution time, comparisons, and swaps.',
    image: '/images/projects/sorting.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Performance API'],
    liveLink: 'http://sorting-algorithm-performance-analyzer.kandhal.tech',
    codeLink: 'https://github.com/KandhalShakil/Sorting-Algorithm-Performance-Analyzer'
  },
  {
    title: 'TaskForge',
    category: 'SaaS',
    description: 'Full-stack project management SaaS with workspaces, Kanban workflows, collaboration, and analytics.',
    image: '/images/projects/taskforge.png',
    tags: ['React', 'Vite', 'Django', 'DRF', 'PostgreSQL', 'Kanban'],
    liveLink: 'https://www.task-forge.kandhal.tech/workspaces',
    codeLink: 'https://github.com/KandhalShakil/TaskForge'
  }
];

export const CERTIFICATE_MESSAGES = {
  'Introduction to Java': [
    "Hello! I came across your portfolio and I'm impressed by your Java programming certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
    "Hi there! I noticed you have a Java certification from Coursera. Would it be possible to receive a copy of this certificate through email? It looks very valuable for Java developers!",
    "Greetings! Your Java programming certification caught my attention. I'm learning Java and would appreciate if you could email me the certificate details. Thank you!"
  ],
  'Inheritance and Data Structures in Java': [
    "Hello! Your advanced Java certification in Data Structures and Inheritance is impressive. Could you please share the certificate via email? I'd love to see the advanced concepts covered.",
    "Hi there! I noticed your specialization in Java Data Structures. Would it be possible to receive a copy of this certificate through email? It's exactly what I'm studying!",
    "Greetings! Your Java Data Structures and Inheritance certification caught my attention. I'm working on similar concepts and would appreciate the certificate details via email."
  ],
  'Introduction to HTML, CSS, & JavaScript': [
    "Hello! Your web development foundation certificate is impressive. Could you please share the HTML, CSS & JavaScript certificate via email? I'd love to see the curriculum details.",
    "Hi there! I noticed your comprehensive web development certification. Would it be possible to receive a copy through email? It covers exactly what I need to learn!",
    "Greetings! Your front-end development certification caught my attention. I'm starting web development and would appreciate the certificate details via email."
  ],
  'Exploratory Data Analysis for Machine Learning': [
    "Hello! Your Machine Learning and Data Analysis certification is impressive. Could you please share the certificate via email? I'd love to see the ML techniques covered.",
    "Hi there! I noticed your specialization in Data Analysis for ML. Would it be possible to receive a copy of this certificate through email? It's highly relevant to my field!",
    "Greetings! Your Machine Learning Data Analysis certification caught my attention. I'm working in ML and would appreciate the certificate details via email."
  ],
  'Developing Front-End Apps with React': [
    "Hello! Your React development certification is impressive. Could you please share the certificate via email? I'd love to see the React concepts covered.",
    "Hi there! I noticed your specialization in React front-end development. Would it be possible to receive a copy through email? It's exactly what I'm learning!",
    "Greetings! Your React development certification caught my attention. I'm working with React and would appreciate the certificate details via email."
  ],
  'Prompt Engineering: The Skill of Asking AI Right': [
    "Hello! I came across your portfolio and I'm impressed by your Prompt Engineering certification. Could you please share the certificate via email? I'd love to see the details of your achievement.",
    "Hi there! I noticed you have a Prompt Engineering certificate from Wayspire. Would it be possible to receive a copy of this certificate through email? It looks very interesting!",
    "Greetings! Your Prompt Engineering certification caught my attention. I'm working in a similar field and would appreciate if you could email me the certificate details. Thank you!"
  ],
  'Back-End Development with .NET': [
    "Hello! I saw your Back-End Development with .NET certificate and was really impressed. Could you please share the certificate details via email?",
    "Hi there! Your .NET back-end certification looks very relevant to my learning path. Would you be able to send a copy through email?",
    "Greetings! I noticed your Coursera .NET certificate and would appreciate it if you could share the credential details via email."
  ]
};

export const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'kandhalshakil@gmail.com',
    link: 'mailto:kandhalshakil@gmail.com'
  },
  {
    label: 'GitHub',
    value: '@KandhalShakil',
    link: 'https://github.com/KandhalShakil'
  },
  {
    label: 'LinkedIn',
    value: 'Kandhal Shakil',
    link: 'https://www.linkedin.com/in/kandhal-shakil-5311302b6'
  }
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/kandhalshakil',
  instagram: 'https://www.instagram.com/kandhalshakil',
  github: 'https://github.com/KandhalShakil'
};
