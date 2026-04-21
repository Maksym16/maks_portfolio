import { WipeReveal } from "../components/WipeReveal";
import { SectionHeader } from "../components/SectionHeader";
import { Chip } from "../components/Chip";
import { EXPERIENCE } from "../data/constants";

/**
 * ExperienceItem — one employer block.
 */
function ExperienceItem({ job }) {
  return (
    <div className="exp-item">
      {/* Company + period */}
      <div className="exp-heading-row">
        <WipeReveal>
          {job.companyUrl ? (
            <a className="exp-title" href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a>
          ) : (
            <span className="exp-title">{job.company}</span>
          )}
        </WipeReveal>
        <WipeReveal>
          <span className="exp-period">{job.period}</span>
        </WipeReveal>
      </div>

      {/* Role + location */}
      <div className="exp-heading-row">
        <WipeReveal>
          <span className="exp-position">{job.role}</span>
        </WipeReveal>
        <WipeReveal>
          <span className="exp-location">{job.location}</span>
        </WipeReveal>
      </div>

      {/* Description */}
      <WipeReveal fullWidth delay={0.08}>
        <p className="exp-desc">{job.desc}</p>
      </WipeReveal>

      {/* Tech chips */}
      <WipeReveal fullWidth delay={0.16}>
        <div className="exp-tech">
          {job.tags.map((tag) => <Chip key={tag} label={tag} />)}
        </div>
      </WipeReveal>
    </div>
  );
}

/**
 * Experience section.
 */
export function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <SectionHeader title="Experience" reverse={true} />
      <div className="exp-list">
        {EXPERIENCE.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
