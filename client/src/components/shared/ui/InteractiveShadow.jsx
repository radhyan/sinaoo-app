import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * InteractiveShadow - A wrapper component that adds dynamic shadow and tilt effects
 * that respond to cursor position within the element.
 */
export default function InteractiveShadow({
  children,
  className,
  intensity = 1,
  tilt = false,
  disabled = false,
}) {
  const ref = useRef(null);
  const hoverProgress = useMotionValue(0);

  // Motion values for mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for tracking movement (keeps it "good")
  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform mouse position to rotation (tilt)
  const rotateX = useTransform(
    ySpring,
    [0, 1],
    [tilt ? 5 * intensity : 0, tilt ? -5 * intensity : 0],
  );
  const rotateY = useTransform(
    xSpring,
    [0, 1],
    [tilt ? -5 * intensity : 0, tilt ? 5 * intensity : 0],
  );

  // Transform mouse position to shadow factor (-1 to 1)
  const shadowFactorX = useTransform(xSpring, [0, 1], [-1, 1]);
  const shadowFactorY = useTransform(ySpring, [0, 1], [-1, 1]);

  // Dynamic shadow string using "blue-60" palette base (using drop-shadow)
  const filter = useTransform(
    [shadowFactorX, shadowFactorY, hoverProgress],
    ([sx, sy, hp]) => {
      // Base blue color: rgba(21, 87, 220, ...)
      // We scale the offset, blur, and opacity by hp (0 to 1)
      // Keeping it extremely subtle to avoid "glow" look

      const s1 = `drop-shadow(${sx * 0.5 * intensity * hp}px ${sy * 0.5 * intensity * hp}px ${2 * hp}px rgba(21, 87, 220, ${0.15 * hp}))`;
      const s2 = `drop-shadow(${(0.5 + sx * 1.0) * intensity * hp}px ${(0.5 + sy * 1.0) * intensity * hp}px ${4 * hp}px rgba(21, 87, 220, ${0.12 * hp}))`;
      const s3 = `drop-shadow(${(1 + sx * 2.0) * intensity * hp}px ${(2 + sy * 2.0) * intensity * hp}px ${8 * hp}px rgba(21, 87, 220, ${0.08 * hp}))`;

      return `${s1} ${s2} ${s3}`;
    },
  );

  const handleMouseMove = (event) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    animate(hoverProgress, 1, { duration: 0.4, ease: "linear" });
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    animate(hoverProgress, 0, { duration: 0.4, ease: "linear" });
    x.set(0.5);
    y.set(0.5);
  };

  if (disabled) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={cn(tilt ? "perspective-1000" : "", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        filter,
        transformStyle: tilt ? "preserve-3d" : "flat",
      }}
    >
      <div style={{ transform: tilt ? "translateZ(0px)" : "none" }}>
        {children}
      </div>
    </motion.div>
  );
}
