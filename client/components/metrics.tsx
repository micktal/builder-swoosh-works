import { useEffect, useRef, useState } from "react";

export function CountUpOnView({
  value,
  duration = 1200,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.round(value * p));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value, duration]);
  return (
    <div ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </div>
  );
}

export function ProgressOnView({ value = 85, label = "Taux de réussite moyen" }: { value?: number; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setW(value);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="mt-6">
      <div className="h-3 w-full rounded-full bg-primary/15 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}: <span className="font-semibold text-foreground">{value}%</span></div>
    </div>
  );
}
