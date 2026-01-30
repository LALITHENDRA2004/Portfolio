import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';
import emsImg from '../assets/ems.PNG';
import onlineExamImg from '../assets/online-exam.png';
import spamImg from '../assets/spam-detection.png';
import pmImg from '../assets/pm.png';

// Lazy load 3D component
const ProjectAccent = lazy(() => import('./Three/ProjectAccent'));

const Projects = () => {
    const { isDarkMode } = useTheme();
    const projects = [
        {
            title: "Online Examination System",
            description: "Secure exam portal with role-based access, automated evaluation, and result generation.",
            image: onlineExamImg,
            github: "https://github.com/LALITHENDRA2004/Online-Examination-System",
            demo: null,
            tags: ["Spring Boot", "MySQL", "React", "Tailwind"],
            has3D: true
        },
        {
            title: "Employee Management System",
            description: "Full-stack application for managing employee records with RESTful APIs.",
            image: emsImg,
            github: "https://github.com/LALITHENDRA2004/Employee-Management",
            demo: "https://myems-portal.netlify.app/index.html",
            tags: ["Spring Boot", "PostgreSQL", "HTML/CSS", "JS"]
        },
        {
            title: "Spam Email Detection System",
            description: "Machine learning model to classify emails with 99.5% accuracy using NLP techniques.",
            image: spamImg,
            github: "https://github.com/LALITHENDRA2004/Spam-Email-Detection",
            demo: null,
            tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
        },
        {
            title: "Weather App",
            description: "Real-time weather data visualization using OpenWeather API.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/LALITHENDRA2004/WeatherApp",
            demo: "https://weatherrr-apppp.netlify.app/",
            tags: ["HTML", "CSS", "JavaScript", "APIs"]
        },
        {
            title: "Password Manager",
            description: "Secure, encrypted credential storage with cross-user support.",
            image: pmImg,
            github: "https://github.com/LALITHENDRA2004/PasswordManager",
            demo: null,
            tags: ["Python", "Cryptography", "SQLite"]
        }
    ];

    return (
        <Section id="projects" className="overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Featured Projects</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group premium-card relative overflow-hidden flex flex-col h-full"
                        >
                            {/* 3D Accent for specific projects */}
                            {project.has3D && (
                                <Suspense fallback={null}>
                                    <ProjectAccent isDarkMode={isDarkMode} />
                                </Suspense>
                            )}

                            {/* Image Container */}
                            <div className="relative h-52 overflow-hidden shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                {/* Floating Tags */}
                                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className={`px-2 py-0.5 rounded-lg glass text-[9px] font-black uppercase tracking-widest ${isDarkMode ? 'text-white/90' : 'text-slate-900 bg-white/90'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className={`text-xl font-black mb-3 group-hover:text-indigo-500 transition-colors uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                                <p className={`mb-6 leading-relaxed text-xs font-medium flex-grow ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {project.description}
                                </p>

                                <div className={`flex items-center gap-6 border-t pt-6 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                    >
                                        <Github size={14} /> Source
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                        >
                                            <ExternalLink size={14} /> Live Demo
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
