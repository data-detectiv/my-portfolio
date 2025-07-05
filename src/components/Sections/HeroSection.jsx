import {
    motion,
    useScroll,
    useTransform
} from 'framer-motion';
import {
    ArrowDown,
    Mail
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from '../../context/ThemeContext';
import PROFILE_IMG_1 from '../../assets/images/profile.png';

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth"});
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.5
        }
    }
  };
  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>

        {/* hero section  */}
        <motion.section
            id='home'
            style={{ y:heroY }}
            className=''
        >
            <div className=''>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute  top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
                >
                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >

                    </motion.div>

                </motion.div>

            </div>

        </motion.section>

    </div>
  )
}

export default HeroSection