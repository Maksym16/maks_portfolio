import { Sidebar } from "./components/Sidebar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";
import { BG, BG_DARK } from "./data/constants";
import Header from "./sections/Header";

export default function App() {
  const active = useActiveSection();

  return (
    <div style={{ background: BG, color: "rgb(235,236,243)", minHeight: "100vh" }}>
      {/* Fixed vertical sidebar */}
      <Sidebar active={active} />

      {/* Page sections */}
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Fade-to-dark footer gradient */}
      <div
        style={{
          height: 200,
          marginLeft: 70,
          background: `linear-gradient(180deg, ${BG}, ${BG_DARK})`,
        }}
      />
    </div>
  );
}
