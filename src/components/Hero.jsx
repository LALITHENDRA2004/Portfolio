import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

// Lazy load the 3D scene for performance
const HeroScene = lazy(() => import('./Three/HeroScene'));

const Hero = () => {
    const { isDarkMode } = useTheme();

    return (
        <Section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* 3D Background Layer */}
            <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
                <HeroScene isDarkMode={isDarkMode} />
            </Suspense>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="px-4 py-2 rounded-full glass border border-indigo-500/30 text-indigo-500 text-sm font-medium tracking-wide">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`text-5xl md:text-7xl font-extrabold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                >
                    Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Lalitendra Nichenakolla</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                >
                    I am a passionate software developer with strong programming skills and a solid foundation in backend development, currently exploring the cutting edge of frontend engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="btn-primary w-full sm:w-auto text-center transition-all duration-300 transform hover:scale-105 active:scale-95">
                        Get in Touch
                    </a>
                    <a href="/src/assets/LalithendraResume.pdf" target="_blank" className="btn-secondary w-full sm:w-auto text-center transition-all duration-300 transform hover:scale-105 active:scale-95">
                        View Resume
                    </a>
                </motion.div>
            </div>

            {/* Decorative Blur Elements - Softened to blend with 3D */}
            <div className={`absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-[120px] -z-10 animate-pulse transition-colors duration-1000 ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-300/10'}`} />
            <div className={`absolute bottom-1/4 -right-20 w-72 h-72 rounded-full blur-[120px] -z-10 animate-pulse transition-colors duration-1000 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/10'}`} />
        </Section>
    );
};

export default Hero;
