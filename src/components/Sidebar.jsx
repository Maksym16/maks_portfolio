import { useState, useEffect } from "react";
import { NAV_LINKS, BRAND } from "../data/constants";

/**
 * Sidebar
 * Fixed vertical sidebar nav on the left.
 * Slides in from translateX(-70px) on mount.
 */
export function Sidebar({ active }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="sidebar"
      style={{
        transform: show
          ? "translateX(0) translateZ(0)"
          : "translateX(-70px) translateZ(0)",
      }}
    >
      {/* Logo */}
      <button
        className="sidebar-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        M<span className="brand">.</span>
      </button>

      {/* Nav links */}
      {NAV_LINKS.map((id, i) => {
        const label =
          id === "experience"
            ? "Exp."
            : id.charAt(0).toUpperCase() + id.slice(1);

        return (
          <a
            key={id}
            href={`#${id}`}
            className="sidebar-link"
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            style={{
              color: active === id ? BRAND : "rgba(235,236,243,0.5)",
              transition: `color 0.25s, opacity 0.5s ${0.15 + i * 0.08}s ease`,
            }}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
