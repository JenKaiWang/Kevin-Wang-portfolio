import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Volunteering } from "../components/Volunteering";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 min-h-screen text-slate-100 font-sans selection:bg-pink-500/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Volunteering />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}