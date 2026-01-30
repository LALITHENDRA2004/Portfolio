import { motion } from 'framer-motion';
import { Award, Code, Laptop, Terminal, FileCode } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const Achievements = () => {
    const { isDarkMode } = useTheme();
    const highlights = [
        {
            title: "Typing Test Winner",
            description: "Awarded for outstanding performance in a competitive typing test conducted by Technical Hub.",
            icon: <Award className="text-yellow-500" size={32} />
        },
        {
            title: "5-Star Badges",
            description: "Earned across C++, Python, SQL, and Problem Solving domains on HackerRank.",
            icon: <Award className="text-blue-500" size={32} />
        },
        {
            title: "500+ Challenges",
            description: "Successfully solved nearly 500 algorithmic challenges across multiple competitive platforms.",
            icon: <Award className="text-green-500" size={32} />
        }
    ];

    const profiles = [
        { name: "HackerRank", icon: <Code />, url: "https://www.hackerrank.com/profile/22P31A0525" },
        { name: "LeetCode", icon: <Laptop />, url: "https://leetcode.com/u/Lalithendra/" },
        { name: "CodeChef", icon: <Terminal />, url: "https://www.codechef.com/users/lalithendra25" },
        { name: "GeeksForGeeks", icon: <FileCode />, url: "https://www.geeksforgeeks.org/user/lalithena6i9/" },
    ];

    return (
        <Section id="achievements" className="overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Achievements & Profiles</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Achievements Grid */}
                    <div className="space-y-6">
                        <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            <Award className="text-indigo-500" /> Key Milestones
                        </h3>
                        <div className="grid gap-6">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className={`glass p-6 rounded-2xl flex gap-6 items-start transition-all ${isDarkMode ? 'border border-white/10' : 'border-4 border-slate-200 hover:border-indigo-500/50'}`}
                                >
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Coding Profiles */}
                    <div className="space-y-6">
                        <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            <Code className="text-indigo-500" /> Coding Presence
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {profiles.map((profile, idx) => (
                                <motion.a
                                    key={idx}
                                    href={profile.url}
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`glass p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center group transition-all ${isDarkMode ? 'border border-white/10' : 'border-4 border-slate-200 hover:border-indigo-500/50'}`}
                                >
                                    <div className="p-4 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500 text-indigo-500 group-hover:text-white transition-all">
                                        {profile.icon}
                                    </div>
                                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{profile.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Achievements;
