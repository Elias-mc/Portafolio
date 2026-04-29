import { useEffect, useRef } from "react";

const CodeRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const letters = "01アカサタナハマヤラワ";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = Array(columns).fill(0);
    const speeds = Array(columns)
      .fill(0)
      .map(() => Math.random() * 2 + 1); // velocidades distintas

    const draw = () => {
      // fondo con estela
      ctx.fillStyle = "rgba(255, 237, 212, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#000";
      ctx.font = fontSize + "px monospace";

      // glow
      ctx.shadowColor = "oklch(95.4% 0.038 75.164)";
      ctx.shadowBlur = 6;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // reinicio random
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-1" />
  );
};

export default CodeRain;
