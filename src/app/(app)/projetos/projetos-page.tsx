/** biome-ignore-all lint/performance/noImgElement: <images> */
import Link from "next/link";

interface ProjetosPageProps {
    id: number;
    img: string;
    tag: string;
    title: string;
    description: string;
    code: string;
}

export function ProjetosPage({ img, tag, title, description, code }: ProjetosPageProps) {
    return (
        <div className="flex h-full w-full flex-col justify-between gap-5 rounded-2xl border border-bordas bg-superficie p-4 sm:p-5">
            <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-md">
                    <img
                        src={img}
                        alt={title}
                        className="h-40 w-full object-cover duration-500 md:hover:scale-125 sm:h-48"
                    />
                </div>
                <h3 className="text-xs uppercase text-rotulos">{tag}</h3>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-brico text-xl font-bold text-texto-primario sm:text-2xl">{title}</h2>
                <p className="font-brico text-sm font-medium text-texto-secundario sm:text-base">{description}</p>
            </div>

            <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="font-plex text-sm font-medium text-destaques"
            >
                Código
            </Link>
        </div>
    );
}