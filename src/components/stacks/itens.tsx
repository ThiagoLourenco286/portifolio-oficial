interface StacksItensProps {
    stack: string;
}

export function StacksItens({ stack }: StacksItensProps) {
    return (
        <span
            className="
                group inline-flex w-fit cursor-default items-center whitespace-nowrap rounded-md
                border border-bordas px-3 py-1.5 font-brico text-xs font-medium text-texto-secundario
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:border-destaques hover:bg-destaques/10 hover:text-destaques
                hover:shadow-[0_0_18px_-4px] hover:shadow-destaques
                md:px-5 md:py-2 md:text-base
            "
        >
            <span
                aria-hidden="true"
                className="
                    w-0 overflow-hidden text-[0.6em] leading-none opacity-0
                    transition-all duration-300
                    group-hover:mr-2 group-hover:w-2 group-hover:opacity-100
                "
            >
                ●
            </span>
            {stack}
        </span>
    );
}