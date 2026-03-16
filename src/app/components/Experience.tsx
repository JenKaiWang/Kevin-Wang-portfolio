import { motion } from "motion/react";
import { Calendar, MapPin, Briefcase, Zap } from "lucide-react";
import QQStudioImage from "../../assets/QQ-Studio.png";

const experiences = [
  {
    company: "QQ Studio",
    role: "Game Developer Intern",
    location: "Remote(USA)",
    date: "Feb 2026 – Present",
    description: [
      "Built gameplay systems, AI, and levels in Unreal Engine using C++ and Blueprints, while supporting asset integration and scene setup."
    ],
    image: QQStudioImage,
    color: "from-white-500 to-green-500"
  },
  {
    company: "Aubot",
    role: "Software Engineer Intern",
    location: "Remote(USA)",
    date: "Oct 2025 – Dec 2025",
    description: [
      "Reviewed 1,000+ C/C++ exercises, created technical solutions, and collaborated with a distributed team to maintain quality."
    ],
    image: "src/assets/Aubot.png",
    color: "from-black-500 to-white-500"
  },
  {
    company: "KINN Thai Eatery",
    role: "Software Engineer Intern",
    location: "Remote(USA)",
    date: "Jul 2025 – Present",
    description: [
      "Launched an online reservation system in SimplyBook.me, handling setup, testing, and user documentation."
    ],
    image: "src/assets/KINN-Thai.webp",
    color: "from-red-500 to-purple-500"
  },
  {
    company: "Institute for Information Industry (III)",
    role: "Assistant Engineer",
    location: "Taiwan",
    date: "Oct 2023 – Nov 2023",
    description: [
      "Collected road test data, supported equipment testing, and helped turn client needs into smart-driving tools and test plans."
    ],
    image: "src/assets/III.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Smart Healthcare Tech",
    role: "Engineer Intern",
    location: "Taiwan",
    date: "Jul 2022 – Aug 2022",
    description: [
      "Designed a SQL/MySQL database, integrated it with web pages, and supported product requirements and iterative updates."
    ],
    image: "src/assets/SHT.png",
    color: "from-teal-500 to-green-500"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-10 h-10 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experiences</h2>
            <Zap className="w-10 h-10 text-pink-500" />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey through the tech world and creative projects
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start relative group ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Animated Timeline Dot */}
                <motion.div 
                  className={`absolute left-[-4px] md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-slate-900 mt-6 z-10 shadow-lg shadow-pink-500/50`}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Text Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300 shadow-xl"
                  >
                    <h3 className="pixel-font text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3">
                      {exp.company}
                    </h3>

                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="pixel-font flex items-center gap-2 text-pink-400">
                        <Briefcase className="w-4 h-4" /> {exp.role}
                      </span>
                      <span className="body-font flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" /> {exp.date}
                      </span>
                      <span className="body-font flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`body-font text-slate-300 text-base flex gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <span className="text-pink-400 mt-1.5 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 block shrink-0" />
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div 
                    className={`h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br ${exp.color} p-1`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      className="w-full h-full object-cover rounded-xl" 
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// export function Experience() {
//   return (
//     <section id="experience" className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950 overflow-hidden relative">
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Zap className="w-10 h-10 text-purple-500" />
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experiences</h2>
//             <Zap className="w-10 h-10 text-pink-500" />
//           </div>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             My journey through the tech world and creative projects
//           </p>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full mt-4" />
//         </motion.div>

//         <div className="relative">
//           {/* Animated Vertical Line */}
//           <motion.div 
//             className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full"
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           />

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`flex flex-col md:flex-row gap-8 items-start relative group ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Animated Timeline Dot */}
//                 <motion.div 
//                   className={`absolute left-[-4px] md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-slate-900 mt-6 z-10 shadow-lg shadow-pink-500/50`}
//                   whileHover={{ scale: 1.5, rotate: 180 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />

//                 {/* Text Side */}
//                 <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300 shadow-xl"
//                   >
//                     <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3">
//                       {exp.company}
//                     </h3>
//                     <div className={`flex flex-col gap-2 text-slate-400 mb-4 ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
//                       <span className="flex items-center gap-2 text-pink-400">
//                         <Briefcase className="w-4 h-4" /> {exp.role}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4" /> {exp.date}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4" /> {exp.location}
//                       </span>
//                     </div>
//                     <ul className="text-slate-300 space-y-2 text-sm leading-relaxed">
//                       {exp.description.map((item, i) => (
//                         <li key={i} className={`flex gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
//                           <span className="text-pink-400 mt-1.5 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 block shrink-0" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </div>

//                 {/* Image Side */}
//                 <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
//                   <motion.div 
//                     className={`h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300 bg-gradient-to-br ${exp.color} p-1`}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <img 
//                       src={exp.image} 
//                       alt={exp.company} 
//                       className="w-full h-full object-cover rounded-xl" 
//                     />
//                   </motion.div>
//                 </div>

//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
