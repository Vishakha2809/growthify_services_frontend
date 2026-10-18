"use client";

import { MotionConfig } from "framer-motion";

/* Framer Motion skips transform animations for users who prefer reduced motion */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
