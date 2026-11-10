"use client";
import { useEffect, useState } from "react";

type Props = { text: string; speed?: number; startDelay?: number };

export default function Typing({ text, speed = 1000, startDelay = 900 }: Props) {
    const [n, setN] = useState(0);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setN(text.length);
            return;
        }
        if (n >= text.length) return;
        const t = setTimeout(() => setN(n + 1), n === 0 ? startDelay : speed);
        return () => clearTimeout(t);
    }, [n, text, speed, startDelay]);

    return (
        <>
            {text.slice(0, n)}
            <span className="cursor">▍</span>
        </>
    );
}