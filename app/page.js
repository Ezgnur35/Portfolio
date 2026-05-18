import Navbar from "./components/Navbar";
import HeroMonitor from "./components/HeroMonitor";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
import Lanyard from "./components/Lanyard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroMonitor />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <Lanyard />
    </main>
  );
}
