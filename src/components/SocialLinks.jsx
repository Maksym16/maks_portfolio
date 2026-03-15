import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "../data/constants";

/**
 * SocialIcon — single animated social icon link.
 */
function SocialIcon({ href, label, path, animDelay = 0 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), animDelay * 1000 + 300);
    return () => clearTimeout(t);
  }, [animDelay]);

  return (
    <span
      className="social-icon"
      style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translateY(0) translateZ(0)"
          : "translateY(-30px) translateZ(0)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        aria-label={label}
        className="social-icon-link"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1.6rem"
          width="1.6rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} />
        </svg>
      </a>
    </span>
  );
}

/**
 * SocialLinks — renders all social icons in a row.
 * animDelay offsets the stagger start (e.g. 0.2 for hero header).
 */
export function SocialLinks({ animDelay = 0 }) {
  return (
    <div className="social-links">
      {SOCIAL_LINKS.map((link, i) => (
        <SocialIcon
          key={link.label}
          {...link}
          animDelay={animDelay + i * 0.08}
        />
      ))}
    </div>
  );
}
