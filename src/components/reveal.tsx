"use client";
// biome-ignore assist/source/organizeImports: <>
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; className?: string };

export default function Reveal({ children, delay = 0, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{ "--d": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}