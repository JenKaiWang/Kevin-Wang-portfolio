import { motion } from "motion/react";
import { Users, GraduationCap, Trophy, Heart, MapPin } from "lucide-react";
import TSAImage from "../../assets/TSA.png";
import ViceImage from "../../assets/vice.JPG";
import basketballImage from "../../assets/basketball.JPEG";
import TAImage from "../../assets/TA.png";

const volunteers = [
  {
    title: "Event Manager",
    org: "Illinois Institute of Technology Taiwan Association",
    location: "Chicago, Illinois, United States",
    desc: [
      "Organized Taiwanese Association and U.S. cultural events for around 20 participants to promote student engagement and international connection."
    ],
    icon: Users,
    image: TSAImage,
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Vice President",
    org: "Department of Applied Informatics Student Association",
    location: "Fo Guang University, Taiwan",
    desc: [
      "Organized events for 70+ participants, supported recruitment presentations reaching 100+ attendees, and represented the department in meetings to advocate for student rights."
    ],
    icon: Users,
    image: ViceImage,
    color: "from-purple-500 to-cyan-500"
  },
  {
    title: "Captain and Coach",
    org: "Dept of Applied Informatics Basketball Team",
    location: "Fo Guang University, Taiwan",
    desc: [
      "Achieved Top 32 in the National Computer Science Basketball Tournament and Top 4 in the university-wide departmental competition."
    ],
    icon: Trophy,
    image: basketballImage,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Teaching Assistant",
    org: "Department of Applied Informatics",
    location: "Fo Guang University, Taiwan",
    desc: [
      "Supported 30+ students through assignments and semester projects, organized study groups, and assisted with grading and weekly tutoring."
    ],
    icon: GraduationCap,
    image: TAImage,
    color: "from-cyan-500 to-blue-500"
  }
];

export function Volunteering() {
  return (
    <section id="volunteer" className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-10 h-10 text-pink-500" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Volunteer Experiences</h2>
            <Heart className="w-10 h-10 text-purple-500" fill="currentColor" />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Giving back to the community and making an impact
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {volunteers.map((vol, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-purple-500/30 hover:border-pink-500/50 transition-all group shadow-xl hover:shadow-2xl flex flex-col"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <motion.img 
                  src={vol.image} 
                  alt={vol.org} 
                  className="w-full h-full object-cover" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${vol.color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <motion.div 
                  className="absolute bottom-4 left-6 flex items-center gap-3 pr-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className={`p-3 bg-gradient-to-br ${vol.color} rounded-xl text-white shrink-0 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <vol.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{vol.title}</h3>
                    <p className="text-pink-400 text-sm leading-snug break-words">{vol.org}</p>
                  </div>
                </motion.div>
              </div>
              <div className="p-6 flex-1">
                <p className="body-font text-slate-400 text-base mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{vol.location}</span>
                </p>
                <ul className="space-y-2">
                  {vol.desc.map((item, i) => (
                    <li key={i} className="body-font text-slate-300 text-base flex gap-2">
                      <span className="text-purple-400 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 block shrink-0" />
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export function Volunteering() {
//   return (
//     <section id="volunteer" className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Heart className="w-10 h-10 text-pink-500" fill="currentColor" />
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Volunteer Experiences</h2>
//             <Heart className="w-10 h-10 text-purple-500" fill="currentColor" />
//           </div>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             Giving back to the community and making an impact
//           </p>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-4" />
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {volunteers.map((vol, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-purple-500/30 hover:border-pink-500/50 transition-all group shadow-xl hover:shadow-2xl flex flex-col"
//             >
//               <div className="h-48 overflow-hidden relative shrink-0">
//                 <motion.img 
//                   src={vol.image} 
//                   alt={vol.org} 
//                   className="w-full h-full object-cover" 
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${vol.color} opacity-20`} />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
//                 <motion.div 
//                   className="absolute bottom-4 left-6 flex items-center gap-3 pr-4"
//                   whileHover={{ x: 5 }}
//                 >
//                   <motion.div 
//                     className={`p-3 bg-gradient-to-br ${vol.color} rounded-xl text-white shrink-0 shadow-lg`}
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <vol.icon className="w-6 h-6" />
//                   </motion.div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white leading-tight">{vol.title}</h3>
//                     <p className="text-pink-400 text-sm leading-snug break-words">{vol.org}</p>
//                   </div>
//                 </motion.div>
//               </div>
//               <div className="p-6 flex-1">
//                 <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
//                   {/* <span className="w-2 h-2 rounded-full bg-pink-500" /> */}
//                   <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
//                   {vol.location}
//                 </p>
//                 <ul className="space-y-2">
//                   {vol.desc.map((item, i) => (
//                     <li key={i} className="text-slate-400 text-sm flex gap-2">
//                       <span className="text-purple-400 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 block shrink-0" />
//                       <span className="leading-relaxed">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
