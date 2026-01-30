import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from './Section';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { isDarkMode } = useTheme();
    const formRef = useRef();
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            await emailjs.sendForm(
                'service_suyh29o',
                'template_sq0s4no',
                formRef.current,
                'T-r9gpkXSx1tp9dDe'
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.'
            });
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: null, message: '' }), 5000);
        }
    };

    return (
        <Section id="contact" className="overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <h2 className="section-title">
                    <span className={`border-b-4 border-indigo-600 pb-1 px-4 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Get in Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Let's connect</h3>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:laithendra2810@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all group">
                                <div className="p-3 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all text-indigo-500">
                                    <Mail size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Me</p>
                                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>laithendra2810@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex gap-4">
                                <a href="https://github.com/LALITHENDRA2004" target="_blank" className="p-4 glass rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex-1 flex flex-col items-center gap-2 group">
                                    <Github className={`${isDarkMode ? 'text-white' : 'text-slate-900'} group-hover:text-indigo-500 transition-colors`} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/lalithendranichenakolla/" target="_blank" className="p-4 glass rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex-1 flex flex-col items-center gap-2 group">
                                    <Linkedin className={`${isDarkMode ? 'text-white' : 'text-slate-900'} group-hover:text-indigo-500 transition-colors`} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 text-center md:text-left">
                            <h4 className="text-indigo-500 font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
                                <span className="flex h-3 w-3 rounded-full bg-indigo-500 animate-ping"></span>
                                Currently available for work
                            </h4>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className={`glass p-8 rounded-3xl flex flex-col gap-6 transition-all ${isDarkMode ? 'border border-white/10' : 'border-4 border-slate-200 shadow-2xl'}`}
                        >
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Your full name"
                                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="name@example.com"
                                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className={`w-full bg-slate-100 dark:bg-slate-800/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 p-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
                            >
                                {isSubmitting ? (
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>

                            <AnimatePresence>
                                {status.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                            : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                            }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                        <span className="text-sm font-medium">{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
