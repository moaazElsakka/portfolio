export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level?: string;
    emphasized?: boolean;
  }[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  year: string;
  specialization: string;
  location: string;
  coursework: string[];
}

export const PERSONAL_INFO = {
  name: "Moaz Mohamed Ibrahim",
  arabicName: "معاذ محمد إبراهيم",
  title: "Computer Science Student | AI Specialization | Exploring Data Science",
  shortTitle: "Computer Science Student",
  university: "Helwan University",
  year: "3rd Year",
  specialization: "Artificial Intelligence",
  location: "Egypt",
  email: "moazmohamed019@gmail.com",
  github: "https://github.com/moaazElsakka",
  linkedin: "https://www.linkedin.com/in/moaaz-muhamed",
  profilePhoto: "/profile.jpg",
  heroBio: "I'm a third-year Computer Science student at Helwan University specializing in Artificial Intelligence, with a growing interest in Data Science, Machine Learning, and Python.",
  aboutBio: [
    "I'm a third-year Computer Science student at Helwan University, specializing in Artificial Intelligence.",
    "Through my university coursework and personal projects, I've been developing my knowledge of programming, algorithms, data structures, databases, operating systems, software engineering, and networking.",
    "I'm currently focusing on strengthening my Python and data-related skills while exploring Artificial Intelligence, Machine Learning, and Data Science."
  ]
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", emphasized: true, level: "Primary Focus" },
      { name: "C", level: "Developing" },
      { name: "C++", level: "Developing" },
      { name: "Java", level: "Familiar" },
      { name: "PHP", level: "Familiar" },
    ]
  },
  {
    category: "Data & Databases",
    skills: [
      { name: "SQL", level: "Developing" },
      { name: "MySQL", level: "Developing" },
      { name: "Data Analysis Fundamentals", level: "Learning" },
    ]
  },
  {
    category: "Computer Science Fundamentals",
    skills: [
      { name: "Data Structures", level: "Core Foundation" },
      { name: "Algorithms", level: "Core Foundation" },
      { name: "Object-Oriented Programming", level: "Core Foundation" },
      { name: "Operating Systems", level: "Core Foundation" },
      { name: "Database Systems", level: "Core Foundation" },
      { name: "Software Engineering", level: "Core Foundation" },
      { name: "Computer Networks", level: "Core Foundation" },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Familiar" },
      { name: "GitHub", level: "Familiar" },
      { name: "VS Code", level: "Familiar" },
      { name: "Tkinter", level: "Familiar" },
      { name: "Java Swing", level: "Familiar" },
      { name: "PHP / MySQL", level: "Familiar" },
      { name: "XAMPP", level: "Familiar" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cpu-scheduler",
    title: "CPU Scheduling Simulator",
    category: "Python / Desktop",
    description: "A Python-based desktop application for comparing CPU scheduling algorithms, focusing on Shortest Remaining Time First (SRTF) and Round Robin scheduling.",
    technologies: ["Python", "Tkinter"],
    highlights: [
      "Algorithm implementation",
      "Scheduling simulation",
      "Comparison between scheduling approaches",
      "Graphical user interface"
    ],
    githubUrl: "https://github.com/moaazElsakka",
    note: "Demonstrates Python, algorithms, and OS concepts."
  },
  {
    id: "java-management",
    title: "Java Management System",
    category: "Java / Desktop",
    description: "A Java desktop application designed to manage users and different roles such as administrators and team leaders.",
    technologies: ["Java", "Java Swing", "File Handling"],
    highlights: [
      "Object-Oriented Programming",
      "GUI development",
      "Role-based functionality",
      "File-based data management"
    ],
    githubUrl: "https://github.com/moaazElsakka",
    note: "Focuses on clean OOP and file storage."
  },
  {
    id: "jobify-platform",
    title: "Jobify — University Career Fair Platform",
    category: "Web Development (University Project)",
    description: "A PHP/MySQL web application developed as a university project to create a career fair platform connecting students, recruiters, alumni, and university administrators.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    highlights: [
      "Web application development",
      "Authentication & Session management",
      "Database interaction & schema design",
      "Multiple user roles (Student, Admin, Recruiter, Alumni, University Admin)",
      "Career fair management functionality"
    ],
    githubUrl: "https://github.com/moaazElsakka",
    note: "University Web Development Project."
  },
  {
    id: "hangman-game",
    title: "Hangman Game",
    category: "Python / Logic",
    description: "A Python implementation of the classic Hangman game, developed as part of my programming practice and problem-solving journey.",
    technologies: ["Python"],
    highlights: [
      "Functions & Modular structure",
      "Loops & Conditions",
      "String manipulation",
      "User input handling",
      "Problem-solving practice"
    ],
    githubUrl: "https://github.com/moaazElsakka",
    note: "Problem-solving and Python fundamentals."
  }
];

export const EDUCATION_DATA: EducationInfo = {
  institution: "Helwan University",
  degree: "Bachelor of Computer Science",
  year: "3rd Year",
  specialization: "Artificial Intelligence",
  location: "Egypt",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Operating Systems",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Object-Oriented Programming"
  ]
};

export const CURRENT_FOCUS = [
  {
    title: "Artificial Intelligence",
    icon: "Brain",
    description: "Focusing on core AI concepts, algorithmic thinking, and building intelligent software solutions.",
    points: [
      "Artificial Intelligence fundamentals",
      "Python for AI development",
      "Exploring Machine Learning concepts",
      "Understanding how AI systems are developed",
      "Building a strong foundation for future AI projects"
    ]
  },
  {
    title: "Data Science",
    icon: "LineChart",
    description: "Learning techniques to process, analyze, and gain actionable insights from structured data.",
    points: [
      "Python for Data Science",
      "Data analysis fundamentals",
      "SQL and database queries",
      "Learning how to work with and understand data",
      "Exploring Machine Learning and related areas"
    ]
  },
  {
    title: "Programming & CS Foundations",
    icon: "Code2",
    description: "Strengthening core computer science principles to write clean, efficient code.",
    points: [
      "Python programming mastery",
      "C++ and system concepts",
      "Algorithms & Optimization",
      "Data Structures",
      "Problem Solving practice"
    ]
  }
];
