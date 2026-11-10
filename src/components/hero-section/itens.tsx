interface HeroItensProps {
    tag: string,
    titulo: string,
    descricao: string,
    links?: string
}

export function HeroItens({ tag, titulo, descricao, links }: HeroItensProps) {
    return (
        <div className="bg-superficie w-full min-h-65 rounded-2xl border border-bordas flex flex-col space-y-4 md:space-y-6 p-4 md:p-5">
            <span className="font-plex text-xs text-rotulos">{tag}</span>
            <h3 className="text-2xl md:text-3xl text-texto-primario font-bold font-brico">{titulo}</h3>
            <p className="font-medium font-brico text-texto-secundario text-sm md:text-base">{descricao}</p>
        </div>
    )
}