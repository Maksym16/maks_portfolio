import { useRef, useEffect, useCallback } from "react";

const COLS = 25;
const ROWS = 20;
const TOTAL = COLS * ROWS;
const BRAND = "#26D0CE";

/**
 * DotGrid
 * Interactive dot grid: entrance animation on load, green on hover proximity,
 * ripple wave on click.
 */
export function DotGrid() {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
    script.onload = () => {
      if (!containerRef.current) return;
      const dots = containerRef.current.querySelectorAll(".dot-point");
      window.anime({
        targets: dots,
        scale: [{ value: 0.1, duration: 1 }, { value: 1, duration: 500 }],
        opacity: [{ value: 0, duration: 1 }, { value: 0.35, duration: 500 }],
        delay: window.anime.stagger(8, { grid: [COLS, ROWS], from: "center" }),
        easing: "easeInOutQuad",
      });
    };
    document.head.appendChild(script);
  }, []);


  const activeOriginRef = useRef(null);

  // Pointer down: hold the clicked dot green while pressed
  const handlePointerDown = useCallback((e) => {
    if (!window.anime || !containerRef.current) return;

    const origin = e.target.closest(".dot-wrapper");
    if (!origin) return;
    activeOriginRef.current = origin;

    const dot = origin.querySelector(".dot-point");
    window.anime.remove(dot);
    window.anime({
      targets: dot,
      scale: 1.8,
      opacity: 1,
      duration: 150,
      easing: "easeOutSine",
      begin: () => { dot.style.background = BRAND; },
    });
  }, []);

  // Pointer up: release — fire wave ripple then clear origin
  const handlePointerUp = useCallback(() => {
    if (!window.anime || !containerRef.current) return;

    const origin = activeOriginRef.current;
    activeOriginRef.current = null;
    if (!origin) return;

    const rect = containerRef.current.getBoundingClientRect();
    const or = origin.getBoundingClientRect();
    const cx = or.left + or.width / 2 - rect.left;
    const cy = or.top + or.height / 2 - rect.top;

    containerRef.current.querySelectorAll(".dot-wrapper").forEach((wrapper) => {
      const wr = wrapper.getBoundingClientRect();
      const wx = wr.left + wr.width / 2 - rect.left;
      const wy = wr.top + wr.height / 2 - rect.top;
      const dist = Math.hypot(cx - wx, cy - wy);
      const dot = wrapper.querySelector(".dot-point");
      const isOrigin = wrapper === origin;

      window.anime.remove(dot);

      if (isOrigin) {
        // Reset origin dot
        window.anime({
          targets: dot,
          scale: 1,
          opacity: 0.35,
          duration: 300,
          easing: "easeOutSine",
          complete: () => { dot.style.background = ""; },
        });
      } else {
        // Ripple ring outward
        window.anime({
          targets: dot,
          keyframes: [
            { scale: 1.55, duration: 150 },
            { scale: 1,    duration: 300 },
          ],
          delay: dist * 1.4,
          easing: "easeOutSine",
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        cursor: "crosshair",
      }}
    >
      {Array.from({ length: TOTAL }).map((_, i) => (
        <div key={i} className="dot-wrapper" data-index={i}>
          <div className="dot-point" data-index={i} />
        </div>
      ))}
    </div>
  );
}
