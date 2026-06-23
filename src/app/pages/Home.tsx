import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Volunteering } from "../components/Volunteering";
import { Projects } from "../components/Projects";
import { GameDesign } from "../components/GameDesign";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Volunteering />
      <Projects />
      <GameDesign />
      <Footer />
    </>
  );
}
