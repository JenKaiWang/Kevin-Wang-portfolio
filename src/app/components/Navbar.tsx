import { Github, Linkedin, FileText, Mail, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur-md border-b-4 border-pink-500/50 shadow-lg shadow-pink-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gamepad2 className="w-6 h-6 text-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Kevin Wang
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-pink-400 transition-colors text-sm font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-purple-400 transition-colors text-sm font-medium relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('volunteer')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group">
              Volunteer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm font-medium relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* <motion.a 
              href="mailto:jenkaiwang@gmail.com" 
              className="text-slate-400 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a> */}
            <motion.a 
              href="https://www.linkedin.com/in/kevin-wang-855698328/" 
              className="text-slate-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/JenKaiWang" 
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}