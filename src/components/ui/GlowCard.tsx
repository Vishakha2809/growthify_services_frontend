"use client";

import { useRef } from "react";

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & { dark?: boolean };

/* Card with a soft radial glow that follows the pointer */
export default function GlowCard({ className = "", children, dark, ...rest }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={onMove} className={`group relative isolate overflow-hidden ${className}`} {...rest}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${
            dark ? "rgb(167 139 250 / 0.22)" : "rgb(139 92 246 / 0.14)"
          }, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
