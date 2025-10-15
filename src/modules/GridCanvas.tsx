"use client";

import { cn } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface GridCanvasProps {
  className?: string;
}

export default function GridCanvas({ className }: GridCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 50;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // warna titik: hitam di light mode, putih di dark mode
      const dotColor = theme === "dark" ? "255,255,255" : "0,0,0";

      // tilt offset dot
      const tiltStrength = 12;
      const offsetX = ((mouseX - width / 2) / (width / 2)) * tiltStrength;
      const offsetY = ((mouseY - height / 2) / (height / 2)) * tiltStrength;

      for (let x = 0; x < width; x += size) {
        for (let y = 0; y < height; y += size) {
          const dist = Math.hypot(mouseX - x, mouseY - y);

          // Gerakkan dot sedikit ke arah mouse
          const shiftedX = x + offsetX;
          const shiftedY = y + offsetY;

          let opacity = 0.2;
          if (dist < 200) {
            opacity = 1;
          }

          ctx.beginPath();
          ctx.arc(shiftedX, shiftedY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 w-full pointer-events-none", className)}
    />
  );
}