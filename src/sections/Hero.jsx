import { DotGrid } from "../components/DotGrid";
import { HeroWipe } from "../components/WipeReveal";
import { SocialLinks } from "../components/SocialLinks";

/**
 * Hero section — full-viewport opening with dot grid background,
 * animated headline, and CTA button.
 */
export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-wrapper">
      {/* ── Dot grid — right half only ── */}
      <div className="hero-dot-grid">
        <DotGrid />
      </div>

      {/* ── Copy ── */}
      <div className="hero-copy">
        <HeroWipe delay={0.15}>
          <h1 className="hero-title">
            Hey, I'm Maksym<span className="brand">.</span>
          </h1>
        </HeroWipe>

        <HeroWipe delay={0.3}>
          <h2 className="hero-subtitle">
            I'm a <span className="brand">Software Engineer</span>
          </h2>
        </HeroWipe>

        <HeroWipe delay={0.45}>
          <p className="hero-about">
           5+ years of experience crafting user-centered digital experiences. I focus on building scalable products and collaborating with teams that value creativity, quality, and meaningful impact.
          </p>
        </HeroWipe>

        <HeroWipe delay={0.6}>
          <button className="std-btn" onClick={scrollToContact}>
            Contact me
          </button>
        </HeroWipe>
      </div>
    </section>
  );
}
