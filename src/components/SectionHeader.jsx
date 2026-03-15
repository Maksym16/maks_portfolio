import { WipeReveal } from "./WipeReveal";

/**
 * SectionHeader
 * Renders a horizontal line + animated section title.
 * reverse=true  → title on the left, line on the right  (About, Experience)
 * reverse=false → line on the left, title on the right  (Projects)
 */
export function SectionHeader({ title, reverse = false }) {
  return (
    <div className={`section-header${reverse ? " section-header--reverse" : ""}`}>
      <div className="section-header-line" />
      <h3>
        <WipeReveal>
          <span className="section-title">
            {title}<span className="brand">.</span>
          </span>
        </WipeReveal>
      </h3>
    </div>
  );
}
