import { useState, useEffect } from "react";
import { useIntersectionReveal } from "../hooks/useIntersectionReveal";

/**
 * WipeReveal
 * Wraps children in the signature brand-green sliding wipe animation.
 * A green overlay (scaleX 1→0) slides away while the content fades up.
 */
export function WipeReveal({ children, delay = 0, fullWidth = false }) {
  const [ref, triggered] = useIntersectionReveal(0.1);

  return (
    <div
      ref={ref}
      className={`wipe-reveal${fullWidth ? " wipe-reveal--full" : ""}`}
    >
      <div
        style={{
          opacity: triggered ? 1 : 0,
          transform: triggered
            ? "translateY(0) translateZ(0)"
            : "translateY(75px) translateZ(0)",
          transition: triggered
            ? `opacity 0.6s ${delay}s cubic-bezier(.16,1,.3,1),
               transform 0.6s ${delay}s cubic-bezier(.16,1,.3,1)`
            : "none",
        }}
      >
        {children}
      </div>

      <div
        className="wipe-overlay"
        style={{
          transform: triggered
            ? "scaleX(0) translateZ(0)"
            : "scaleX(1) translateZ(0)",
          transition: triggered
            ? `transform 0.5s ${delay}s cubic-bezier(.16,1,.3,1)`
            : "none",
        }}
      />
    </div>
  );
}

/**
 * HeroWipe
 * Same animation as WipeReveal but fires on a timeout instead of scroll
 * (used for hero elements that are visible on page load).
 */
export function HeroWipe({ children, delay = 0, fullWidth = false }) {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGo(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`wipe-reveal${fullWidth ? " wipe-reveal--full" : ""}`}>
      <div
        style={{
          opacity: go ? 1 : 0,
          transform: go
            ? "translateY(0) translateZ(0)"
            : "translateY(75px) translateZ(0)",
          transition: go
            ? "opacity 0.6s cubic-bezier(.16,1,.3,1), transform 0.6s cubic-bezier(.16,1,.3,1)"
            : "none",
        }}
      >
        {children}
      </div>

      <div
        className="wipe-overlay"
        style={{
          transform: go
            ? "scaleX(0) translateZ(0)"
            : "scaleX(1) translateZ(0)",
          transition: go
            ? "transform 0.5s cubic-bezier(.16,1,.3,1)"
            : "none",
        }}
      />
    </div>
  );
}
