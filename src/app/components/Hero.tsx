import { motion } from "motion/react";
import { Mail, Linkedin, Github, FileText, Sparkles, Zap, Star } from "lucide-react";
import ProfileImage from "../../assets/Profile_Photo.png";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star className="w-8 h-8 text-yellow-400/30" fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Zap className="w-10 h-10 text-pink-400/30" fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <Sparkles className="w-6 h-6 text-purple-400/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <h2 className="text-pink-400 font-medium tracking-wide uppercase text-sm">Game Developer</h2>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Kevin&nbsp;
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Wang
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate CS Master’s graduate focused on game developer, interactive storytelling, and building immersive projects that bring game worlds to life.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              {/* <motion.a 
                href="mailto:jenkaiwang@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-medium transition-all shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a> */}
              <motion.a 
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                View Resume
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <motion.a 
                href="https://www.linkedin.com/in/kevin-wang-855698328/" 
                className="text-slate-400 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a 
                href="https://github.com/JenKaiWang" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.3, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-8 h-8" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] mx-auto">
              {/* Animated Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-pink-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 rounded-full border-4 border-purple-500/30 border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-16 rounded-full border-4 border-cyan-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Gradient Background */}
              <motion.div 
                className="absolute inset-20 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30 backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className="absolute inset-20 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/50"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={ProfileImage}
                  alt="Kevin Wang" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 shadow-lg shadow-pink-500/50"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-white" fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-4 shadow-lg shadow-cyan-500/50"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
