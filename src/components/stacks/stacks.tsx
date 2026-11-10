import Link from "next/link";
import { StacksItens } from "./itens";
import Reveal from "../reveal";

export function Stacks() {
    return (
        <Reveal delay={300}>
            <section className="flex flex-col gap-5 border-b border-bordas py-10 md:py-15">
                <div className="flex justify-between items-center flex-1">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between">
                            <h2 className="text-destaques font-brico text-sm">02 / Stacks</h2>
                            <Link href={'/stacks'} className="text-destaques font-plex text-xs md:text-base">Veja mais</Link>
                        </div>

                        <h5 className="text-2xl sm:text-3xl md:text-4xl text-texto-primario font-bold font-brico">Ferramentas</h5>
                    </div>

                </div>

                <div className="flex flex-wrap gap-2">
                    <StacksItens stack="Next.js" />
                    <StacksItens stack="Node.js" />
                    <StacksItens stack="React" />
                    <StacksItens stack="SQL" />
                    <StacksItens stack="Postgres" />
                    <StacksItens stack="TypeScript" />
                </div>
            </section>
        </Reveal>
    )
}