import {
    Code2,
    GraduationCap,
    Briefcase,
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

import PROJECT_IMG_1 from "../assets/images/profile.png";
import PROJECT_IMG_2 from "../assets/images/placeholder_1.jpg";
import PROJECT_IMG_3 from "../assets/images/placeholder_2.jpg";
import PROJECT_IMG_4 from "../assets/images/placeholder_3.jpg";


export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            { name: "Framer Motion", level: 92, color: "bg-cyan-500"},

        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Python", level: 95, color: "bg-cyan-500"},
            { name: "Java", level: 95, color: "bg-cyan-500"},
            { name: "Node.js", level: 92, color: "bg-green-500"},
            { name: "Express.js", level: 90, color: "bg-gray-500"},

        ],
    },
    {
        title: "Databases",
        icon: Database,
        description: "Building robust server-side solutions",
        skills: [
            { name: "MongoDB", level: 80, color: "bg-cyan-500"},
            { name: "MySQL", level: 85, color: "bg-green-500"},
            { name: "Postgres", level: 75, color: "bg-gray-500"},

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
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: PROJECT_IMG_4,
        tags: ["Python", "FastAPI", "Streamlit"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
     {
        id: 2,
        title: "JotSpace",
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: PROJECT_IMG_4,
        tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
      {
        id: 3,
        title: "Mutual Fund Predictor",
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: PROJECT_IMG_4,
        tags: ["Java", "Spring Boot", "Angular"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
      {
        id: 4,
        title: "Auth-Enabled Task Manager API",
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: PROJECT_IMG_4,
        tags: ["Node.js", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
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
        description: "Began learning",
        icon: Briefcase,
        color: "bg-yellow-500"
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love"
    },
    {
        icon: Coffee,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love"
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "#",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10"
    },
    {
        name: "Resume",
        icon: FileUser,
        url: "#",
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
        value: "test@gmail.com"
    },
];
