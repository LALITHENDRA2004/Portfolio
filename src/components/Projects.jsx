import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';
import emsImg from '../assets/ems.PNG';
import pmImg from '../assets/pm.png';
import portfolioImg from '../assets/porfolio.png';

const Projects = () => {
    const { isDarkMode } = useTheme();
    const projects = [
        {
            title: "Employee Management System",
            description: "A comprehensive web application for organizational personnel management.",
            image: emsImg,
            github: "https://github.com/LALITHENDRA2004/Employee-Management",
            demo: null,
            tags: ["React", "Spring Boot", "MySQL"]
        },
        {
            title: "Weather App",
            description: "Real-time weather data visualization using OpenWeather API.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/LALITHENDRA2004/WeatherApp",
            demo: "https://weatherrr-apppp.netlify.app/",
            tags: ["JavaScript", "APIs", "CSS"]
        },
        {
            title: "Password Manager",
            description: "Secure, encrypted credential storage with cross-user support.",
            image: pmImg,
            github: "https://github.com/LALITHENDRA2004/PasswordManager",
            demo: null,
            tags: ["Python", "Cryptography", "SQLite"]
        },
        {
            title: "Modern Portfolio",
            description: "Stunning, recruiter-ready developer portfolio with cinematic animations.",
            image: portfolioImg,
            github: "https://github.com/LALITHENDRA2004/Portfolio",
            demo: "#",
            tags: ["React", "Tailwind", "Framer Motion"]
        }
    ];

    return (
        <Section id="projects" className="overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Featured Projects</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group premium-card"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                {/* Floating Tags */}
                                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-lg glass text-[10px] font-black uppercase tracking-widest text-white/90">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10">
                                <h3 className={`text-2xl font-black mb-4 group-hover:text-indigo-500 transition-colors uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                                <p className={`mb-8 leading-relaxed text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {project.description}
                                </p>

                                <div className={`flex items-center gap-8 border-t pt-8 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className={`flex items-center gap-2.5 text-xs font-black uppercase tracking-widest hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                    >
                                        <Github size={16} /> Source Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className={`flex items-center gap-2.5 text-xs font-black uppercase tracking-widest hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                        >
                                            <ExternalLink size={16} /> Live View
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
