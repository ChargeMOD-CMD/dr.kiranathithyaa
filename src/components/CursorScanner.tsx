import { useEffect, useRef, useState } from "react";

export function CursorScanner() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a,button,[data-cursor],input,textarea,select");
      setHover(interactive);
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[60] h-11 w-11 rounded-full border transition-[width,height,border-color,background] duration-300 ${
          hover
            ? "h-14 w-14 border-primary/70 bg-primary/10"
            : "border-primary/40"
        }`}
        style={{
          boxShadow:
            "0 0 24px color-mix(in oklab, var(--primary) 35%, transparent), inset 0 0 12px color-mix(in oklab, var(--primary) 25%, transparent)",
        }}
      >
        <span
          className="absolute inset-1 rounded-full border border-dashed border-primary/40 animate-orbit"
          style={{ animationDuration: hover ? "4s" : "12s" }}
        />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2 w-2 rounded-full bg-primary"
        style={{
          boxShadow:
            "0 0 12px color-mix(in oklab, var(--primary) 80%, transparent)",
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
