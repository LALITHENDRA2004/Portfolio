import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';
import myImg from '../assets/myimg1.jpg';

const About = () => {
    const { isDarkMode } = useTheme();
    return (
        <Section id="about" className="overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>About Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className={`relative aspect-square w-64 md:w-80 rounded-2xl overflow-hidden glass shadow-2xl transition-all duration-500 ${isDarkMode ? 'border-2 border-white/20' : 'border-4 border-slate-200'}`}>
                                <img
                                    src={myImg}
                                    alt="Lalitendra Nichenakolla"
                                    className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            I'm a backend-focused software developer who enjoys building real-world products and is eager to contribute in dynamic startup environments by taking ownership and growing with the team.                        </p>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Hands-on experience developing real-world applications, focusing on backend logic, APIs, and data handling, with Git used for version control. Strong problem-solving ability demonstrated through solving 1000+ DSA problems.                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <a
                                href="https://github.com/LALITHENDRA2004"
                                target="_blank"
                                className={`p-3 glass hover:bg-indigo-600 hover:text-white transition-all rounded-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lalithendranichenakolla/"
                                target="_blank"
                                className={`p-3 glass hover:bg-indigo-600 hover:text-white transition-all rounded-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
