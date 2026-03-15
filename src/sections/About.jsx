import { WipeReveal } from "../components/WipeReveal";
import { SocialLinks } from "../components/SocialLinks";
import { SectionHeader } from "../components/SectionHeader";
import { Chip } from "../components/Chip";
import { TECH_WORK, TECH_FUN } from "../data/constants";

const ABOUT_PARAGRAPHS = [
  {
    text: "Hey! I'm Maksym, a software engineer with 5 years of experience creating and enhancing user experiences for government agencies and global luxury brands. I specialize in frontend and full-stack development, primarily with React, Next.js, and TypeScript.",
    first: true,
  },
  {
    text: "I currently work at BrandingBrand, building mobile apps and websites for high-profile retail and hospitality brands. I've had the chance to work on apps for Madewell, Crocs, and RealPage — each with their own unique challenges.",
  },
  {
    text: "Before that I worked at Leadership Connect, building web and mobile tools used by top U.S. government agencies, federal leaders, and congressional members.",
  },
  {
    text: "I'm passionate about clean code, great UX, and working with forward-thinking teams. If you think we'd be a good fit, let's connect 🔗",
  },
];

/**
 * About section — bio text, social links, and tech-stack chips.
 */
export function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" reverse={true} />

      <div className="about-grid">
        {/* ── Left: bio ── */}
        <div className="about-bio">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <WipeReveal key={i} delay={i * 0.08} fullWidth>
              <p className={`about-bio-p${p.first ? " about-first" : ""}`}>
                {p.text}
              </p>
            </WipeReveal>
          ))}

          {/* My links row */}
          <WipeReveal delay={0.4} fullWidth>
            <div className="about-links-row">
              <div className="about-links-label">
                <span>My links</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
                </svg>
              </div>
              <SocialLinks />
            </div>
          </WipeReveal>
        </div>

        {/* ── Right: tech stacks ── */}
        <div className="about-tech-col">
          <WipeReveal delay={0.1}>
            <div className="stat-col">
              <h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="brand-icon"
                  height="2.4rem"
                  width="2.4rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
                </svg>
                <span>Use at work</span>
              </h4>
              <div className="stat-grid">
                {TECH_WORK.map((t) => <Chip key={t} label={t} />)}
              </div>
            </div>
          </WipeReveal>

          <WipeReveal delay={0.2}>
            <div className="stat-col">
              <h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="brand-icon"
                  height="2.4rem"
                  width="2.4rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" />
                </svg>
                <span>Use for fun</span>
              </h4>
              <div className="stat-grid">
                {TECH_FUN.map((t) => <Chip key={t} label={t} />)}
              </div>
            </div>
          </WipeReveal>
        </div>
      </div>
    </section>
  );
}
