"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationItens } from "./itens";

export function Navigation() {
    const pathname = usePathname();
    const [openedAt, setOpenedAt] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const open = openedAt === pathname;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`
                sticky top-0 z-50 flex w-full items-center justify-between py-4
                backdrop-blur-md transition-all duration-300
                ${scrolled || open ? "border-b border-white/10 bg-[#0d1117]/80" : "border-b border-transparent"}
            `}
        >
            <Link
                href="/"
                className="font-brico text-destaques whitespace-nowrap text-xl transition-[text-shadow] duration-300 hover:[text-shadow:0_0_18px_currentColor]"
            >
                {`<Thiago />`}
            </Link>

            <button
                type="button"
                onClick={() => setOpenedAt(open ? null : pathname)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-destaques/50 md:hidden"
            >
                <span
                    className={`absolute h-0.5 w-5 bg-destaques transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
                />
                <span
                    className={`absolute h-0.5 w-5 bg-destaques transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
                />
                <span
                    className={`absolute h-0.5 w-5 bg-destaques transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
                />
            </button>

            <div
                className={`
                    absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#0d1117]/95 p-6
                    transition-all duration-300
                    ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}
                    md:visible md:static md:w-auto md:translate-y-0 md:flex-row md:gap-12 md:border-0 md:bg-transparent md:p-0 md:opacity-100
                `}
            >
                <NavigationItens text="Inicio" href="/" />
                <NavigationItens text="Projetos" href="/projetos" />
                <NavigationItens text="Stack" href="/stacks" />
                <NavigationItens text="Contato" href="/contatos" />
            </div>
        </nav>
    );
}