import { motion } from 'framer-motion';
import Section from './Section';
import { Code2, Globe, Database, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { isDarkMode } = useTheme();
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Terminal className="text-indigo-500" size={24} />,
            skills: ["C++", "Java", "Python", "C", "SQL"],
        },
        {
            title: "Web Technologies",
            icon: <Globe className="text-purple-500" size={24} />,
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "React Tailwind"],
        },
        {
            title: "Backend & Tools",
            icon: <Database className="text-pink-500" size={24} />,
            skills: ["Spring Boot", "MySQL", "Postman", "Git", "GitHub"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Section id="skills" className="relative overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className="border-b-4 border-indigo-600 pb-1 px-4 inline-block">Skills & Expertise</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`glass p-8 rounded-3xl transition-all group ${isDarkMode ? 'border border-white/10 hover:border-indigo-500/30' : 'border-4 border-slate-200 hover:border-indigo-500/50'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className={`text-2xl font-black uppercase tracking-tight group-hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-default shadow-sm bg-white/10 dark:bg-white/10 hover:border-indigo-500 ${isDarkMode ? 'text-white border-white/20' : 'text-slate-900 border-slate-200'}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
