import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';
import htmlCert from '../assets/html.png';
import pythonCert from '../assets/python.png';
import javaCert from '../assets/java.png';
import cppCert from '../assets/cpp.png';

const Certifications = () => {
    const { isDarkMode } = useTheme();
    const [selectedImg, setSelectedImg] = useState(null);

    const certs = [
        { title: "HTML and CSS", issuer: "Pearson IT Specialist", image: htmlCert },
        { title: "Python", issuer: "Pearson IT Specialist", image: pythonCert },
        { title: "Java", issuer: "Pearson IT Specialist", image: javaCert },
        { title: "Advanced C++", issuer: "Cisco", image: cppCert },
    ];

    return (
        <Section id="certifications" className="overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Certifications</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className={`glass p-4 rounded-3xl transition-all group cursor-pointer ${isDarkMode ? 'border border-white/10' : 'border-4 border-slate-200 hover:border-indigo-500/50'}`}
                            onClick={() => setSelectedImg(cert)}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ZoomIn className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10"
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={selectedImg.image}
                                alt={selectedImg.title}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-indigo-500/20"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Certifications;
