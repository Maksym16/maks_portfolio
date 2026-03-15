import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";

/**
 * Tracks which nav section is currently in view based on scroll position.
 * Returns the id string of the active section.
 */
export function useActiveSection() {
  const [active, setActive] = useState(NAV_LINKS[0]);

  useEffect(() => {
    const handleScroll = () => {
      // If near the bottom of the page, always activate the last section
      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 80;
      if (nearBottom) {
        setActive(NAV_LINKS[NAV_LINKS.length - 1]);
        return;
      }

      for (const id of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}
