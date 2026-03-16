import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-purple-950 to-indigo-950 border-t-4 border-pink-500/50 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Kevin Wang
              </h3>
            </div>
            <p className="text-slate-400 text-sm">Game Developer</p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="mailto:jenkaiwang@gmail.com" 
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
              <span className="hidden sm:inline text-sm">jenkaiwang@gmail.com</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/kevin-wang-855698328/" 
              className="text-slate-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://github.com/JenKaiWang" 
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.button 
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-all shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t-2 border-purple-500/30 text-center text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Kevin Wang. Made with <span className="text-pink-500">♥</span> for games</p>
        </motion.div>
      </div>
    </footer>
  );
}