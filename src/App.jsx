import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDarkMode ? 'dark' : ''} bg-transparent text-slate-900 dark:text-slate-100`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-white dark:bg-black/20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-3">
            📞 +91-9059687193
          </h3>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lalitendra Nichenakolla.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
