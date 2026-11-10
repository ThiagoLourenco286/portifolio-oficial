import type { CSSProperties } from "react";
import Link from "next/link";
import Typing from "./typing";
import Reveal from "./reveal";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Header() {
    return (
        <header>
            <div className="flex flex-col gap-10 border-b border-bordas py-10 md:py-15 justify-between md:flex-row">
                <div className="space-y-6 md:max-w-100">
                    <h4
                        className="fade-up font-brico font-medium text-center text-destaques border border-bordas rounded-3xl text-xs md:text-sm px-4 py-2"
                        style={d(0)}
                    >
                        <span className="pulse mr-2 inline-block h-2 w-2 rounded-full bg-destaques text-xs" />
                        Aberto a estágio em desenvolvimento full stack
                    </h4>

                    <h1
                        className="fade-up font-brico font-extrabold text-texto-primario flex flex-col text-5xl md:text-7xl"
                        style={d(100)}
                    >
                        Thiago
                        <span className="underline-draw w-fit">
                            Lourenço
                            <span className="text-destaques">.</span>
                        </span>
                    </h1>

                    <p
                        className="fade-up font-brico font-medium text-texto-secundario text-sm"
                        style={d(200)}
                    >
                        Desenvolvedor Full Stack em formação. Construo sistemas web do banco de dados até a interface.
                    </p>

                    <div className="fade-up flex flex-wrap gap-3 md:gap-5" style={d(300)}>
                        <Link
                            href="/projetos"
                            className="bg-destaques font-brico text-xs px-3 py-1 flex justify-center items-center rounded-md transition hover:-translate-y-0.5 hover:brightness-110
                            md:text-base"
                        >
                            Ver projetos
                        </Link>
                        <Link
                            href="/curriculo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-brico text-xs px-3 py-1 flex justify-center items-center rounded-md border border-bordas text-texto-primario transition hover:-translate-y-0.5 hover:border-destaques
                            md:text-base"
                        >
                            Baixar currículo
                        </Link>
                        <Link
                            href="https://github.com/ThiagoLourenco286"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-brico text-xs px-3 py-1 flex justify-center items-center rounded-md border border-bordas text-texto-primario transition hover:-translate-y-0.5 hover:border-destaques
                            md:text-base"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>

                <div className="fade-up" style={d(1000)}>
                    <div className="float min-h-86 bg-superficie border border-bordas rounded-2xl shadow-md shadow-destaques/30 pb-5 md:w-150 md:h-82">
                        <div className="w-full h-15 border-b border-bordas flex items-center gap-2 px-5">
                            <div className="bg-bordas h-3 w-3 rounded-full" />
                            <div className="bg-bordas h-3 w-3 rounded-full" />
                            <div className="pulse bg-destaques h-3 w-3 rounded-full" />
                            <h3 className="text-texto-secundario font-plex text-xs md:text-sm">thiago.ts</h3>
                        </div>

                        <div className="flex flex-col p-6 space-y-1 text-xs md:text-base">
                            <span className="text-destaques">
                                const <span className="text-texto-secundario font-plex">{`thiago = {`}</span>
                            </span>
                            <span className="text-texto-secundario font-plex ps-4 md:ps-10 font-medium">
                                papel: <span className="text-destaques">{`"Full Stack em formação"`}</span>,
                            </span>
                            <span className="text-texto-secundario font-plex ps-4 md:ps-10">
                                stack: <span className="text-destaques">{`["Next.js", "React", "Node.js", "SQL"]`}</span>,
                            </span>
                            <span className="text-texto-secundario font-plex ps-4 md:ps-10">
                                cidade: <span className="text-destaques">{`"Contagem, MG"`}</span>,
                            </span>
                            <span className="text-texto-secundario font-plex ps-4 md:ps-10">
                                junior: <span className="text-destaques">true</span>,
                            </span>
                            <span className="text-texto-secundario font-plex ps-4 md:ps-10">
                                estagio: <span className="text-destaques">true</span>,
                            </span>
                            <span className="text-texto-secundario font-plex">{`};`}</span>
                        </div>

                        <p className="text-rotulos font-medium font-plex ps-5 text-xs md:text-base">
                            {`> `}
                            <Typing text="pronto para o próximo projeto" />
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-8 border-b border-bordas py-10 md:py-12 justify-between">
                <Reveal delay={0}>
                    <span className="text-destaques text-sm font-brico font-medium">ESTUDO</span>
                    <p className="font-brico font-medium text-texto-primario">
                        Análise e Desenvolvimento de Sistemas na Faculdade Pitágoras
                    </p>
                </Reveal>

                <Reveal delay={120}>
                    <span className="text-destaques text-sm font-brico font-medium">CONSTRUÍ</span>
                    <p className="font-brico font-medium text-texto-primario">
                        Sistemas completos com API, banco de dados e interface
                    </p>
                </Reveal>

                <Reveal delay={240}>
                    <span className="text-destaques text-sm font-brico font-medium">PROCURO</span>
                    <p className="font-brico font-medium text-texto-primario">
                        Junior ou Estágio em desenvolvimento full stack
                    </p>
                </Reveal>
            </div>
        </header>
    );
}