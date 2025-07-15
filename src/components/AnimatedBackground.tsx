import React, { useEffect, useRef, useState } from "react";

export const AnimatedBackground = () => {
  // Animate with time instead of mouse
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 0.016); // ~60fps
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, []);

  // Generate stars and nebula particles
  const stars = Array.from({ length: 60 }).map((_, i) => {
    // Random base position and depth for parallax
    const baseTop = (i * 37) % 100; // deterministic but scattered
    const baseLeft = (i * 73) % 100;
    const depth = 0.5 + (i * 13 % 100) / 100 * 1.5; // 0.5 to 2
    // Animate in a slow orbit
    const angle = time * (0.1 + depth * 0.04) + i;
    const offsetX = Math.sin(angle) * 20 * depth;
    const offsetY = Math.cos(angle) * 20 * depth;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `calc(${baseTop}% + ${offsetY}px)`,
          left: `calc(${baseLeft}% + ${offsetX}px)`,
          width: `${1 + (i * 3 % 2)}px`,
          height: `${1 + (i * 7 % 2)}px`,
          borderRadius: "50%",
          background: "white",
          opacity: 0.7 + ((i * 11 % 10) / 30),
          boxShadow: `0 0 ${2 + (i * 5 % 6)}px 1px #fff`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    );
  });

  // Nebula clouds (blurred colored blobs)
  const nebulae = [
    { color: "#7f5fff", size: 320, baseTop: 12, baseLeft: 8, blur: 80, depth: 1.2, phase: 0 },
    { color: "#00ffd0", size: 220, baseTop: 60, baseLeft: 70, blur: 60, depth: 1.5, phase: 1 },
    { color: "#ff5fc0", size: 260, baseTop: 70, baseLeft: 20, blur: 70, depth: 1.1, phase: 2 },
    { color: "#fff", size: 180, baseTop: 30, baseLeft: 60, blur: 50, depth: 1.3, phase: 3 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Stars */}
      {stars}
      {/* Animated Nebulae */}
      {nebulae.map((n, i) => {
        // Animate nebulae in a slow orbit
        const angle = time * (0.04 + n.depth * 0.01) + n.phase;
        const offsetX = Math.sin(angle) * 40 * n.depth;
        const offsetY = Math.cos(angle) * 40 * n.depth;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `calc(${n.baseTop}% + ${offsetY}px)`,
              left: `calc(${n.baseLeft}% + ${offsetX}px)`,
              width: n.size,
              height: n.size,
              borderRadius: "50%",
              background: n.color,
              opacity: 0.18,
              filter: `blur(${n.blur}px)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        );
      })}
      {/* Animated Saturn */}
      {(() => {
        // Saturn's orbit
        const saturnAngle = time * 0.07;
        const saturnRadius = 180;
        const centerX = 60; // percent
        const centerY = 40; // percent
        const saturnX = centerX + Math.cos(saturnAngle) * saturnRadius / window.innerWidth * 100;
        const saturnY = centerY + Math.sin(saturnAngle) * saturnRadius / window.innerHeight * 100;
        return (
          <div
            style={{
              position: "absolute",
              top: `calc(${saturnY}% - 40px)`,
              left: `calc(${saturnX}% - 40px)`,
              width: 80,
              height: 80,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            {/* Saturn body */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#e0c97f",
                boxShadow: "0 0 16px 4px #fff7b2",
                zIndex: 2,
              }}
            />
            {/* Saturn ring */}
            <div
              style={{
                position: "absolute",
                top: 36,
                left: 8,
                width: 64,
                height: 8,
                borderRadius: "50%",
                background: "rgba(200,200,200,0.25)",
                border: "2px solid #e0c97f",
                transform: "rotate(-20deg)",
                zIndex: 1,
              }}
            />
          </div>
        );
      })()}
      {/* Optional: Add a subtle grid or overlay for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background"></div>
    </div>
  );
};