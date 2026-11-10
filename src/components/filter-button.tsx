"use client";

import { twMerge } from "tailwind-merge";
import { useFilterParams } from "@/hooks/useParamsFilter";

interface FilterButtonProps {
    label: string;
    value: string;
}

export function FilterButton({ label, value }: FilterButtonProps) {
    const { getParam, setParams } = useFilterParams();

    const status = getParam("tag");
    const isActive = status === value;

    return (
        <button
            type="button"
            onClick={() => setParams("tag", value)}
            aria-pressed={isActive}
            className={twMerge(
                "cursor-pointer whitespace-nowrap rounded-3xl border border-bordas p-3 font-plex text-xs font-medium text-texto-secundario",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-destaques hover:text-destaques",
                "active:translate-y-0 active:scale-95",
                isActive &&
                "border-destaques bg-destaques text-fundo shadow-[0_0_18px_-4px] shadow-destaques hover:text-fundo",
            )}
        >
            {label}
        </button>
    );
}