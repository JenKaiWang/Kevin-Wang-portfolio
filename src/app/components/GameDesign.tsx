import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Clapperboard, Gamepad2 } from "lucide-react";
import welcomeStrangerVideo1 from "../../assets/Welcome Stranger_Video1.mp4";
import welcomeStrangerVideo2 from "../../assets/Welcome Stranger_Video2.mp4";

const videos = [
  {
    src: welcomeStrangerVideo1,
    label: "Character & Animations Design Prototype"
  },
  {
    src: welcomeStrangerVideo2,
    label: "Dialogue System & Storytelling Design Prototype"
  }
];

export function GameDesign() {
  const [activeVideo, setActiveVideo] = useState(0);
  const currentVideo = videos[activeVideo];

  const showPreviousVideo = () => {
    setActiveVideo((current) => (current === 0 ? videos.length - 1 : current - 1));
  };

  const showNextVideo = () => {
    setActiveVideo((current) => (current + 1) % videos.length);
  };

  return (
    <section id="game-design" className="py-24 bg-gradient-to-b from-purple-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clapperboard className="w-10 h-10 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Game Project</h2>
            <Gamepad2 className="w-10 h-10 text-pink-500" />
          </div>
          <p className="body-font text-slate-300 text-lg max-w-2xl mx-auto">
            Gameplay footage, technical design notes, and the story behind my game projects.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-stretch"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-500/20 flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 bg-slate-950/80 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-cyan-400" />
              </div>
              <span className="body-font text-slate-300 text-sm">{currentVideo.label}</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center p-3 sm:p-4 bg-slate-950">
              <video
                key={currentVideo.src}
                src={currentVideo.src}
                className="w-full h-auto max-h-[480px] rounded-xl object-contain bg-black border border-white/10 shadow-xl"
                controls
                loop
                playsInline
                preload="metadata"
              />

              <button
                type="button"
                onClick={showPreviousVideo}
                aria-label="Previous video"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/75 border border-white/20 text-white flex items-center justify-center hover:bg-cyan-500/80 hover:border-cyan-300 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={showNextVideo}
                aria-label="Next video"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/75 border border-white/20 text-white flex items-center justify-center hover:bg-pink-500/80 hover:border-pink-300 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 py-4 bg-slate-950/90">
              {videos.map((video, index) => (
                <span
                  key={video.label}
                  className={`h-2.5 rounded-full transition-all ${
                    activeVideo === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 p-6 sm:p-8 flex flex-col justify-center">
            <span className="body-font text-cyan-300 text-sm font-semibold tracking-wide uppercase mb-3">Project Name</span>
            <h3 className="body-font text-2xl sm:text-3xl font-bold text-white mb-4">
              Welcome Stranger
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Engine", "Unreal Engine 5"],
                ["Focus", "Technical Game Design"],
                ["Status", "In Process"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="body-font text-slate-500 text-sm mb-1">{label}</p>
                  <p className="body-font text-slate-100 font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5 mb-6">
              <h4 className="body-font text-cyan-300 font-semibold mb-3">Story Background</h4>
              <p className="body-font text-slate-300 text-base leading-7">
                Welcome Stranger is inspired by Kevin's real experience living across different countries, facing unfamiliar
                challenges, and learning how to move through confusing situations. The game explores what it feels like to
                arrive somewhere new, search for direction, and slowly build a sense of belonging.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
