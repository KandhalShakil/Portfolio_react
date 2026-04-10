const portfolioData = {
  personal: {
    name: 'Kandhal Shakil',
    title: 'Full-Stack Developer',
    email: 'contact@kandhal.tech',
    website: 'https://kandhal.tech',
    portfolio: 'https://www.kandhal.tech',
    github: 'https://github.com/KandhalShakil',
    linkedin: 'https://linkedin.com/in/kandhal-shakil',
    twitter: 'https://twitter.com/kandhal',
    about: 'Python developer focused on clean architecture, polished UI, and performance. Currently studying Computer Science at Lok Jagruti Kendra University. I build full-stack products with React and Python, turning complex ideas into elegant experiences.'
  },

  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Framer Motion'],
    backend: ['Python', 'Java', 'Node.js', 'Django', 'Django REST Framework', '.NET', 'C#', 'Express'],
    databases: ['MongoDB', 'PostgreSQL'],
    cloud: ['AWS', 'Docker', 'Azure'],
    tools: ['Git', 'VS Code', 'REST APIs', 'Agile', 'Groq AI']
  },

  projects: [
    {
      title: 'Personal Portfolio',
      description: 'React portfolio showcasing projects and technical expertise with modern animations and 3D visuals',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      live: 'https://www.kandhal.tech',
      github: 'https://github.com/KandhalShakil/Portfolio_react'
    },
    {
      title: 'Kandhal Invoice System',
      description: 'Full-featured invoice management system with PDF generation and client tracking',
      technologies: ['Python', 'Django', 'PDF Generation', 'JavaScript'],
      live: 'https://www.invoice.kandhal.tech',
      github: 'https://github.com/KandhalShakil/Invoice_system'
    },
    {
      title: 'SKY Event',
      description: 'Responsive event management and promotion website with modern design',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      live: 'https://sky-event.vercel.app/',
      github: 'https://github.com/KandhalShakil/Sky_Event'
    },
    {
      title: 'SchemeSnap AI',
      description: 'AI platform to simplify scheme details, check eligibility, and generate multilingual action plans',
      technologies: ['Python', 'Django', 'React', 'Vite', 'Groq AI'],
      live: 'https://www.schemesnap-ai.kandhal.tech',
      github: 'https://github.com/KandhalShakil/SchemeSnap-AI'
    },
    {
      title: 'Weather Dashboard',
      description: 'Full-stack weather dashboard with real-time conditions, AQI insights, and forecast tracking',
      technologies: ['.NET', 'C#', 'JavaScript', 'OpenWeather API'],
      live: 'https://www.weather-intelligence-dashboard.kandhal.tech',
      github: 'https://github.com/KandhalShakil/Weather-Intelligence-Dashboard'
    },
    {
      title: 'Sorting Algorithm Performance Analyzer',
      description: 'Interactive analyzer to compare sorting algorithms using execution time, comparisons, and swaps',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
      live: 'http://sorting-algorithm-performance-analyzer.kandhal.tech',
      github: 'https://github.com/KandhalShakil/Sorting-Algorithm-Performance-Analyzer'
    }
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'LJ Institute of Engineering and Technology (LJIET)',
      duration: '2022 - Present',
      details: 'Building strong foundation in CS fundamentals, learning data structures, algorithms, and system design. Working on real-world projects with modern tech stack.'
    },
    {
      degree: 'Higher Secondary Education (Science)',
      school: 'The New Age High School',
      duration: '2022 - 2023',
      details: 'Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving skills.'
    }
  ],

  certifications: [
    {
      name: 'Introduction to Java',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      name: 'Inheritance and Data Structures in Java',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      name: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      name: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      name: 'Developing Front-End Applications with React',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      name: 'Prompt Engineering: The Skill of Asking AI Right',
      issuer: 'Wayspire',
      date: '2024'
    },
    {
      name: 'Back-End Development with .NET',
      issuer: 'Coursera',
      date: '2026'
    }
  ],

  stats: {
    projects: 6,
    certifications: 7,
    skillDomains: 4,
    yearsExperience: 2
  }
};

module.exports = portfolioData;
