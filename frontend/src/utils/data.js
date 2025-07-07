import {
    Code2,
    GraduationCap,
    Briefcase,
    Handshake,
    Dumbbell,
    ChefHat,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    FileUser
} from 'lucide-react';

import { FiGithub, FiLinkedin} from 'react-icons/fi';

import PROJECT_IMG_1 from "../assets/images/task-manager.jpeg";
import PROJECT_IMG_2 from "../assets/images/notes.gif";
import PROJECT_IMG_3 from "../assets/images/mutual-fund.jpeg";
import PROJECT_IMG_4 from "../assets/images/special.jpeg";


export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            { name: "Framer Motion", level: 92, color: "bg-rose-500"},

        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Python", level: 95, color: "bg-emerald-500"},
            { name: "Java", level: 95, color: "bg-amber-500"},
            { name: "Node.js", level: 92, color: "bg-green-500"},
            { name: "Express.js", level: 90, color: "bg-teal-500"},

        ],
    },
    {
        title: "Databases",
        icon: Database,
        description: "Designing efficient, scalable data storage systems",
        skills: [
            { name: "MongoDB", level: 80, color: "bg-orange-500"},
            { name: "MySQL", level: 85, color: "bg-indigo-500"},
            { name: "Postgres", level: 75, color: "bg-violet-500"},

        ],
    }
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "FastAPI", 
    "Spring Boot", 
    "JUnit",
    "Git",
    "GitHub", 
    "Postman", 
    "Google Cloud Platform", 
    "VS Code", 
    "PyCharm", 
    "IntelliJ", 
    "Streamlit"

];

export const STATS = [
    { number: "7", label: "Projects Completed"},
    { number: "1+", label: "Years Experience"},
    { number: "20+", label: "Technologies"},
];

export const PROJECTS = [
    {
        id: 1,
        title: "Special_ed",
        description: "Special Ed is a web-based AI assistant designed to streamline weekly student performance tracking. The platform allows educators and stakeholders to input assessment data and receive structured performance summaries, insights, and recommendations. Powered by advanced LLMs like OpenAI's GPT and Anthropic's Claude.",
        image: PROJECT_IMG_4,
        tags: ["Python", "FastAPI", "Streamlit"],
        liveUrl: "https://specialed-v1.streamlit.app/",
        githubUrl: "https://github.com/data-detectiv/special_ed",
        featured: false,
        category: "Full Stack"
    },
     {
        id: 2,
        title: "JotSpace",
        description: "JotSpace is a full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, manage, and organize their notes with powerful features such as authentication, role-based access control, note pinning, and real-time editing.",
        image: PROJECT_IMG_2,
        tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB"],
        liveUrl: "https://jot-space-frontend.onrender.com/",
        githubUrl: "https://github.com/data-detectiv/jot-space",
        featured: false,
        category: "Full Stack"
    },
      {
        id: 3,
        title: "Mutual Fund Predictor",
        description: "The Mutual Fund app is a web-based application that helps users estimate the future value of investments in various mutual funds based on initial investment, time horizon, and market dynamics. It includes both a backend and a frontend for seamless interaction.",
        image: PROJECT_IMG_3,
        tags: ["Java", "Spring Boot", "Angular"],
        liveUrl: "#",
        githubUrl: "https://github.com/data-detectiv/mutual-fund-app",
        featured: true,
        category: "Full Stack"
    },
      {
        id: 4,
        title: "Auth-Enabled Task Manager API",
        description: "A secure, RESTful API built with Node.js, Express, and MongoDB that allows authenticated users to manage personal tasks. Features include user registration, login, token-based authentication, and full task CRUD operations.",
        image: PROJECT_IMG_1,
        tags: ["Node.js", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "https://github.com/data-detectiv/auth-task-manager",
        featured: false,
        category: "Backend"
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2023-2027",
        title: "BSc. Mathematics",
        company: "Wingate University",
        description: "Relevant Coursework: Calculus and Analytic Geometry, Inferential Statistics, Discrete Mathematics, Linear Algebra, Introduction to Java,Differential Equations, Machine Learning, Statistics, Introduction to Analysis, Data Structures and Algorithms",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
     {
        year: "2025 - Present",
        title: "Resident Assistant",
        company: "Wingate University - Office of Residential Life",
        description: "Led and fostered an inclusive and supportive residential community of 50+ students. - Mediated conflicts, enforced housing policies, and responded to crisis situations ensuring student safety - Planned and executed events to foster academic success, wellness, and engagement for residents",
        icon: Briefcase,
        color: "bg-yellow-500"
    },
     {
        year: "2024 - Present",
        title: "Data Analyst",
        company: "Wingate University - Advancement Services",
        description: "Spearheaded a predictive model using regression analysis on a dataset of 10,000+ alumni records, identifying 200 potential major gift donors with 85% accuracy, which significantly improved outreach effectiveness - Increased event pledge revenue by 20% through the application of advanced predictive modeling techniques - Conducted in-depth analysis of over 10,000 alumni records to uncover key giving patterns and optimize fundraising strategies, leading to more targeted campaigns",
        icon: Briefcase,
        color: "bg-green-500"
    },
];

export const PASSIONS = [
    {
        icon: Handshake,
        title: "Community Impact",
        description: "Giving back through meaningful service and connection"
    },
    {
        icon: BookOpen,
        title: "Lifelong Learning",
        description: "Exploring ideas and stories to expand the mind"
    },
    {
        icon: Dumbbell,
        title: "Physical Wellness",
        description: "Building strength and discipline through consistent training"
    },
    {
        icon: ChefHat,
        title: "Creative Cooking",
        description: "Transforming fresh ingredients into delicious experiences"
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/data-detectiv",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/foster-oppong/",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "Resume",
        icon: FileUser,
        url: "https://drive.google.com/file/d/1MHtLnUqtNyLxvSZLq72Vq8Bcyg2ihX-S/view?usp=sharing",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
];

export const CONTACT_INFO = [
    { 
        icon: MapPin,
        label: "Location",
        value: "Charlotte, NC"
    },
    { 
        icon: Mail,
        label: "Email",
        value: "oppongfoster89@gmail.com"
    },
];
