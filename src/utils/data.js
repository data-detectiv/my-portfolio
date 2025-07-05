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
} from 'lucide-react';

import { FiGithub, FiLinkedin} from 'react-icons/fi';

import PROJECT_IMG_1 from "../assets/images/profile.png";
// import { color, number } from 'framer-motion';

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},

        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 95, color: "bg-green-500"},
            { name: "Express.js", level: 92, color: "bg-gray-500"},

        ],

    }
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite"
];

export const STATS = [
    { number: "50", label: "Project Completed"},
    { number: "3+", label: "Years Experience"},
    { number: "20+", label: "Technologies"}
];

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: "",
        tags: ["React", "Tailwind", "Framer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
     {
        id: 2,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advance filtering, payment integration",
        image: "",
        tags: ["React", "Tailwind", "Framer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning",
        icon: Code2,
        color: "bg-blue-500"
    },
     {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning",
        icon: Code2,
        color: "bg-blue-500"
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
