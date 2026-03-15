import { useState, useEffect, useRef } from "react";
import { WipeReveal } from "../components/WipeReveal";
import { SectionHeader } from "../components/SectionHeader";
import { PROJECTS } from "../data/constants";

/* SVG paths for project link icons */
const GITHUB_PATH =
  "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z";
const EXTERNAL_PATH =
  "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z";

/**
 * ProjectModal — full-screen overlay with project details.
 */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {project.image && (
          <div className="modal-img-wrap">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <div className="modal-tech">{project.tech}</div>
          <p className="modal-desc">
            {project.details ? project.details.fullDesc : project.desc}
          </p>

          {project.details && (
            <>
              <div className="modal-section-title">Tech Stack</div>
              <table className="modal-stack-table">
                <tbody>
                  {project.details.stack.map(([layer, tech]) => (
                    <tr key={layer}>
                      <td className="modal-stack-layer">{layer}</td>
                      <td className="modal-stack-tech">{tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="modal-section-title">Key Features</div>
              <ul className="modal-list">
                {project.details.features.map((f) => <li key={f}>{f}</li>)}
              </ul>

              <div className="modal-section-title">Architecture</div>
              <ul className="modal-list">
                {project.details.architecture.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </>
          )}

          <div className="modal-links">
            <a href={project.github} target="_blank" rel="nofollow noreferrer" className="modal-link">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 1024 1024" height="1.4rem" width="1.4rem"
                xmlns="http://www.w3.org/2000/svg">
                <path d={GITHUB_PATH} />
              </svg>
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="nofollow noreferrer" className="modal-link">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 1024 1024" height="1.4rem" width="1.4rem"
                xmlns="http://www.w3.org/2000/svg">
                <path d={EXTERNAL_PATH} />
              </svg>
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProjectItem — one project row: image (alternating side) + copy block.
 */
function ProjectItem({ project, index, onOpenModal }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`project-item${isEven ? "" : " project-item--reverse"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) translateZ(0)"
          : "translateY(100px) translateZ(0)",
        transition:
          "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Image */}
      <div className="projects_projectImage">
        <img
          src={project.image ?? "https://placehold.co/600x400/111111/222222?text=Project"}
          alt={`An image of the ${project.title} project.`}
        />
      </div>

      {/* Copy */}
      <div className="proj-copy">
        {/* Title row with line + icons */}
        <WipeReveal fullWidth>
          <div className="project-title-row">
            <h4>{project.title}</h4>
            <div className="project-title-line" />
            <a
              href={project.github}
              target="_blank"
              rel="nofollow noreferrer"
              className="icon-link"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 1024 1024" height="1.6rem" width="1.6rem"
                xmlns="http://www.w3.org/2000/svg">
                <path d={GITHUB_PATH} />
              </svg>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="nofollow noreferrer"
              className="icon-link"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 1024 1024" height="1.6rem" width="1.6rem"
                xmlns="http://www.w3.org/2000/svg">
                <path d={EXTERNAL_PATH} />
              </svg>
            </a>
          </div>
        </WipeReveal>

        <WipeReveal delay={0.08}>
          <div className="project-tech">{project.tech}</div>
        </WipeReveal>

        <WipeReveal delay={0.16} fullWidth>
          <p className="project-desc">
            {project.desc}{" "}
            <span onClick={() => onOpenModal(project)}>Learn more &gt;</span>
          </p>
        </WipeReveal>
      </div>
    </div>
  );
}

/**
 * Projects section.
 */
export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader title="Projects" reverse={false} />
      <div className="projects-list">
        {PROJECTS.map((project, i) => (
          <ProjectItem
            key={project.title}
            project={project}
            index={i}
            onOpenModal={setActiveProject}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
