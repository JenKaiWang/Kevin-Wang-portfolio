import { motion } from "motion/react";
import { ExternalLink, Github, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "RAG-Based Movie Recommendation System",
    date: "Sept 2025 - Dec 2025",
    desc: "Built a RAG-based movie recommendation system using MeiliSearch BM25 and vector search. Implemented an LLM router to choose the best retrieval method. Developed an interactive Gradio chat UI.",
    link: "https://github.com/AtharvPat/BIG_DATA_2025_Project",
    tags: ["RAG", "LLM Agent", "MCP"],
    color: "pink"
  },
  {
    title: "AI Agent Generated Project Management Plan",
    date: "Jul 2025",
    desc: "Planned an Insurance App project using both Waterfall and Agile methodologies. Prototyped AI agent workflows with LangChain, AutoGen, and LLMs for decision-making.",
    link: "https://github.com/JenKaiWang/CS587-FINAL-PROJECT",
    tags: ["LangChain", "AutoGen", "AI Agent", "Agile", "Waterfall"],
    color: "purple"
  },
  {
    title: "Vending Machine Software System",
    date: "Jan 2025 - May 2025",
    desc: "Designed a vending machine software system using an MDA-EFSM architecture. Implemented Abstract Factory patterns for modular hardware design. Documented with UML class and sequence diagrams.",
    link: "https://github.com/JenKaiWang/CS586-Final-Project",
    tags: ["Design Patterns", "Software Architecture", "Java"],
    color: "cyan"
  },
  {
    title: "Iowa's First Congressional District Forecasting",
    date: "Sep 2024 - Dec 2024",
    desc: "Built an electoral forecasting pipeline for Iowa's 1st Congressional District using Census API demographics. Trained Random Forest and Keras/TensorFlow models for classification.",
    link: `${import.meta.env.BASE_URL}Iowa-Project-Report.pdf`,
    tags: ["Python", "TensorFlow", "Data Science", "API"],
    color: "yellow"
  },
  {
    title: "Healthcare Management System",
    date: "Jan 2024 - May 2024",
    desc: "Designed a relational Healthcare Management System covering doctors, patients, insurance, and pharmacy. Built a Python CLI for CRUD operations and analytics with robust error handling.",
    link: `${import.meta.env.BASE_URL}HMS-Report.pdf`,
    tags: ["Python", "SQL", "Database"],
    color: "pink"
  },
  {
    title: "Automated Medical Diagnosis Support System",
    date: "Jan 2022 - Dec 2022",
    desc: "Developed a domain-specific AutoML model for the medical field to accelerate Medical Diagnosis Support Systems.",
    link: "",
    tags: ["AutoML", "AI", "Research", "Medical Diagnosis"],
    color: "purple"
  }
];

const colorMap = {
  pink: { 
    border: "border-pink-500/50", 
    shadow: "shadow-pink-500/30", 
    bg: "bg-pink-500/10", 
    text: "text-pink-400" 
  },
  purple: { 
    border: "border-purple-500/50", 
    shadow: "shadow-purple-500/30", 
    bg: "bg-purple-500/10", 
    text: "text-purple-400" 
  },
  cyan: { 
    border: "border-cyan-500/50", 
    shadow: "shadow-cyan-500/30", 
    bg: "bg-cyan-500/10", 
    text: "text-cyan-400" 
  },
  yellow: { 
    border: "border-yellow-500/50", 
    shadow: "shadow-yellow-500/30", 
    bg: "bg-yellow-500/10", 
    text: "text-yellow-400" 
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-10 h-10 text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Project Experience</h2>
            <Gamepad2 className="w-10 h-10 text-purple-500" />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of my creative experiments
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 ${colors.border} flex flex-col group shadow-xl ${colors.shadow} hover:shadow-2xl transition-all duration-300`}
              >
                {/* <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug break-words">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-500 text-sm mb-4">{project.date}</p>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  {project.link && (
                    <div className="flex items-center gap-4 mt-auto">
                      <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors.text} text-sm font-medium hover:underline flex items-center gap-2`}
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  )}
                </div> */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="pixel-font text-xl font-bold text-white mb-2 leading-snug break-words">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`body-font text-base px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="body-font text-slate-400 text-sm mb-4">{project.date}</p>

                  <p className="body-font text-slate-300 text-base leading-6 mb-6 flex-1">
                    {project.desc}
                  </p>

                  {project.link && (
                    <div className="flex items-center gap-4 mt-auto">
                      <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`body-font ${colors.text} text-base font-medium hover:underline flex items-center gap-2`}
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// import { motion } from "motion/react";
// import { ExternalLink, Github, Gamepad2 } from "lucide-react";

// const projects = [
//   {
//     title: "RAG-Based Movie Recommendation System",
//     date: "Sept 2025 - Dec 2025",
//     desc: "Built a RAG-based movie recommendation system using MeiliSearch BM25 and vector search. Implemented an LLM router to choose the best retrieval method. Developed an interactive Gradio chat UI.",
//     image: "https://images.unsplash.com/photo-1761044590861-71df31e43d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHN0cmVhbWluZyUyMGFwcCUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzcyMzk0MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "https://github.com/AtharvPat/BIG_DATA_2025_Project",
//     tags: ["RAG", "LLM Agent", "MCP"],
//     color: "pink"
//   },
//   {
//     title: "AI Agent Generated Project Management Plan",
//     date: "Jul 2025",
//     desc: "Planned an Insurance App project using both Waterfall and Agile methodologies. Prototyped AI agent workflows with LangChain, AutoGen, and LLMs for decision-making.",
//     image: "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjBmdXR1cmV8ZW58MXx8fHwxNzcyMzc5ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "https://github.com/JenKaiWang/CS587-FINAL-PROJECT",
//     tags: ["LangChain", "AutoGen", "AI Agent", "Agile", "Waterfall"],
//     color: "purple"
//   },
//   {
//     title: "Vending Machine Software System",
//     date: "Jan 2025 - May 2025",
//     desc: "Designed a vending machine software system using an MDA-EFSM architecture. Implemented Abstract Factory patterns for modular hardware design. Documented with UML class and sequence diagrams.",
//     image: "https://images.unsplash.com/photo-1767424572570-7f93cda1ac33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2ZW5kaW5nJTIwbWFjaGluZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzIzOTQxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "#",
//     tags: ["Java", "Design Patterns", "UML", "Architecture"],
//     color: "cyan"
//   },
//   {
//     title: "Iowa's First Congressional District Forecasting",
//     date: "Sep 2024 - Dec 2024",
//     desc: "Built an electoral forecasting pipeline for Iowa's 1st Congressional District using Census API demographics. Trained Random Forest and Keras/TensorFlow models for classification.",
//     image: "https://images.unsplash.com/photo-1730724655710-5b9bd9c68349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG1hcCUyMGdyYXBoc3xlbnwxfHx8fDE3NzIzOTQxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "#",
//     tags: ["Python", "TensorFlow", "Data Science", "API"],
//     color: "yellow"
//   },
//   {
//     title: "Healthcare Management System",
//     date: "Jan 2024 - May 2024",
//     desc: "Designed a relational Healthcare Management System covering doctors, patients, insurance, and pharmacy. Built a Python CLI for CRUD operations and analytics with robust error handling.",
//     image: "https://images.unsplash.com/photo-1630531210902-0673fd470570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGRhc2hib2FyZCUyMHRhYmxldHxlbnwxfHx8fDE3NzIzOTQxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "#",
//     tags: ["Python", "SQL", "Database", "CLI"],
//     color: "pink"
//   },
//   {
//     title: "Automated Medical Diagnosis Support System",
//     date: "Jan 2022 - Dec 2022",
//     desc: "Developed a domain-specific AutoML model for the medical field to accelerate Medical Diagnosis Support Systems (MDSS). Awarded College Student Research Scholarship.",
//     image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWVkaWNhbCUyMGRpYWdub3NpcyUyMHNjcmVlbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzIzOTQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     link: "#",
//     tags: ["AutoML", "AI", "Research", "Medical"],
//     color: "purple"
//   }
// ];

// const colorMap: Record<string, { border: string; shadow: string; bg: string; text: string }> = {
//   pink: { 
//     border: "border-pink-500/50", 
//     shadow: "shadow-pink-500/30", 
//     bg: "bg-pink-500/10", 
//     text: "text-pink-400" 
//   },
//   purple: { 
//     border: "border-purple-500/50", 
//     shadow: "shadow-purple-500/30", 
//     bg: "bg-purple-500/10", 
//     text: "text-purple-400" 
//   },
//   cyan: { 
//     border: "border-cyan-500/50", 
//     shadow: "shadow-cyan-500/30", 
//     bg: "bg-cyan-500/10", 
//     text: "text-cyan-400" 
//   },
//   yellow: { 
//     border: "border-yellow-500/50", 
//     shadow: "shadow-yellow-500/30", 
//     bg: "bg-yellow-500/10", 
//     text: "text-yellow-400" 
//   }
// };

// export function Projects() {
//   return (
//     <section id="projects" className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Gamepad2 className="w-10 h-10 text-pink-500" />
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Project Experience</h2>
//             <Gamepad2 className="w-10 h-10 text-purple-500" />
//           </div>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             A collection of my creative experiments
//           </p>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-4" />
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => {
//             const colors = colorMap[project.color];
//             return (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className={`bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 ${colors.border} flex flex-col group shadow-xl ${colors.shadow} hover:shadow-2xl transition-all duration-300`}
//               >
//                 <div className="h-48 overflow-hidden relative">
//                   <motion.img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4`}>
//                     <motion.a 
//                       href={project.link} 
//                       className={`p-3 bg-white rounded-full text-slate-900 hover:${colors.bg} hover:text-white transition-colors shadow-lg`}
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Github className="w-6 h-6" />
//                     </motion.a>
//                     <motion.a 
//                       href={project.link} 
//                       className={`p-3 bg-white rounded-full text-slate-900 hover:${colors.bg} hover:text-white transition-colors shadow-lg`}
//                       whileHover={{ scale: 1.2, rotate: -10 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <ExternalLink className="w-6 h-6" />
//                     </motion.a>
//                   </div>
//                 </div>
                
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map(tag => (
//                       <span key={tag} className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}>
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <h3 className={`text-xl font-bold text-white mb-2 group-hover:${colors.text} text-pink-400 text-sm leading-snug break-words`}>
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm mb-4">{project.date}</p>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
//                     {project.desc}
//                   </p>
                  
//                   <motion.a 
//                     href={project.link} 
//                     className={`${colors.text} text-sm font-medium hover:underline flex items-center gap-2 self-start mt-auto`}
//                     whileHover={{ x: 5 }}
//                   >
//                     View Project <ExternalLink className="w-4 h-4" />
//                   </motion.a>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

