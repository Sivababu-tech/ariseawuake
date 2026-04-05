import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({
  value,
  duration = 2,
  suffix = "",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
