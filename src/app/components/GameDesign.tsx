import { useState } from "react";
import { motion } from "motion/react";
import { Clapperboard, Gamepad2, Play } from "lucide-react";
import agent067Video from "../../assets/UEFN Bootcamp video.mp4";
import agent067Thumbnail from "../../assets/Agent 067 Thumbnail.png";
import playerBackground from "../../assets/Playerbackground.png";
import parkingLotScene from "../../assets/Parking Lot Scene.png";
import nightClubScene from "../../assets/Night Club Scene.png";
import labScene from "../../assets/Lab Scene.png";
import welcomeStrangerVideo1 from "../../assets/Welcome Stranger_Video1.mp4";
import welcomeStrangerVideo2 from "../../assets/Welcome Stranger_Video2.mp4";

type MediaItem = {
  type: "video" | "image";
  src: string;
  label: string;
  alt?: string;
};

type ProjectDetailsProps = {
  name: string;
  details: [string, string][];
  story: string[];
};

const agent067Media: MediaItem[] = [
  {
    type: "video",
    src: agent067Video,
    label: "Gameplay"
  },
  {
    type: "image",
    src: agent067Thumbnail,
    label: "Thumbnail",
    alt: "Agent 067 game thumbnail"
  },
  {
    type: "image",
    src: playerBackground,
    label: "Agency Office",
    alt: "Agent 067 player background"
  },
  {
    type: "image",
    src: parkingLotScene,
    label: "Parking Lot Scene",
    alt: "Agent 067 parking lot scene"
  },
  {
    type: "image",
    src: nightClubScene,
    label: "Night Club Scene",
    alt: "Agent 067 night club scene"
  },
  {
    type: "image",
    src: labScene,
    label: "Laboratory",
    alt: "Agent 067 lab scene"
  }
];

const welcomeStrangerMedia: MediaItem[] = [
  {
    type: "video",
    src: welcomeStrangerVideo2,
    label: "Dialogue System & Storytelling Design Prototype"
  },
  {
    type: "video",
    src: welcomeStrangerVideo1,
    label: "Character & Animation Design Prototype"
  }
];

function Agent067Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMedia = agent067Media[selectedIndex];

  return (
    <div className="order-2 min-w-0 lg:order-1">
      <div className="overflow-hidden rounded-2xl border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-500/20">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 px-5 py-4">
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-pink-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-cyan-400" />
          </div>
          <span className="body-font text-right text-sm text-slate-300" aria-live="polite">
            {selectedMedia.label}
          </span>
        </div>

        <div className="aspect-video bg-slate-950 p-3 sm:p-4">
          {selectedMedia.type === "video" ? (
            <video
              src={selectedMedia.src}
              className="h-full w-full rounded-xl border border-white/10 bg-black object-contain shadow-xl"
              controls
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt ?? selectedMedia.label}
              className="h-full w-full rounded-xl border border-white/10 bg-black object-contain shadow-xl"
            />
          )}
        </div>
      </div>

      <div className="agent067-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2" aria-label="Agent 067 media gallery">
        {agent067Media.map((item, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Show ${item.label}`}
              aria-pressed={isSelected}
              className={`group min-w-[132px] overflow-hidden rounded-xl border-2 bg-slate-950 text-left transition-all sm:min-w-[148px] ${
                isSelected
                  ? "border-cyan-300 shadow-lg shadow-cyan-500/30"
                  : "border-white/10 hover:border-cyan-400/60"
              }`}
            >
              <span className="relative block aspect-video overflow-hidden bg-black">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="rounded-full bg-cyan-400/90 p-2 text-slate-950 shadow-lg">
                        <Play className="h-4 w-4" fill="currentColor" />
                      </span>
                    </span>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    loading="lazy"
                  />
                )}
              </span>
              <span className={`body-font block px-3 py-2 text-sm ${isSelected ? "text-cyan-300" : "text-slate-300"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MediaGallery({ items }: { items: MediaItem[] }) {
  return (
    <div className="order-2 space-y-6 lg:order-1">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-500/20"
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 bg-slate-950/80 border-b border-white/10">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
            </div>
            <span className="body-font text-slate-300 text-sm text-right">{item.label}</span>
          </div>

          <div className="flex items-center justify-center p-3 sm:p-4 bg-slate-950">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-auto max-h-[480px] rounded-xl object-contain bg-black border border-white/10 shadow-xl"
                controls
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt ?? item.label}
                className="w-full h-auto max-h-[480px] rounded-xl object-contain bg-black border border-white/10 shadow-xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectDetails({ name, details, story }: ProjectDetailsProps) {
  return (
    <div className="order-1 bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 p-6 sm:p-8 lg:order-2">
      <span className="body-font text-cyan-300 text-sm font-semibold tracking-wide uppercase mb-3 block">
        Project Name
      </span>
      <h3 className="body-font text-2xl sm:text-3xl font-bold text-white mb-4">{name}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {details.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="body-font text-slate-500 text-sm mb-1">{label}</p>
            <p className="body-font text-slate-100 font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <h4 className="body-font text-cyan-300 font-semibold mb-3">Story Background</h4>
        <div className="space-y-4">
          {story.map((paragraph) => (
            <p key={paragraph} className="body-font text-slate-300 text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GameDesign() {
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

        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start"
          >
            <Agent067Gallery />
            <ProjectDetails
              name="Agent 067"
              details={[
                ["Engine", "Unreal Editor For Fortnite (UEFN)"],
                ["Team Size", "1"],
                ["Status", "Published"],
                ["Island Code", "7540-2367-0251"]
              ]}
              story={[
                "Selected for the UEFN Student Bootcamp, where I completed and published a game within three weeks.",
                "Agent 067 is a third-person shooter featuring three levels, increasingly challenging enemies, and boss fights.The game was developed entirely using UEFN devices, including game condition triggers, NPC configuration, weapon spawning, and level transitions."
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start border-t border-white/10 pt-20"
          >
            <MediaGallery items={welcomeStrangerMedia} />
            <ProjectDetails
              name="Welcome Stranger"
              details={[
                ["Engine", "Unreal Engine 5"],
                ["Team Size", "1"],
                ["Status", "In Process"]
              ]}
              story={[
                "Welcome Stranger is inspired by Kevin's real experience living across different countries, facing unfamiliar challenges, and learning how to move through confusing situations. The game explores what it feels like to arrive somewhere new, search for direction, and slowly build a sense of belonging."
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
