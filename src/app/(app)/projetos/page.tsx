import { Suspense } from "react";
import { FilterButton } from "@/components/filter-button";
import Reveal from "@/components/reveal";
import { ProjetosData } from "@/lib/data";
import { ProjetosList } from "./projetos-list";

const filter = [
    { label: "Todos", value: "" },
    { label: "APP WEB", value: "APP WEB" },
    { label: "SERVIÇO PARA CLIENTE", value: "SERVIÇO PARA CLIENTE" },
    { label: "E-COMMERCE", value: "E-COMMERCE" },
    { label: "ESTUDO", value: "ESTUDO" },
    { label: "LANDING PAGE", value: "LANDING PAGE" },
];

export default async function Projetos() {
    const projetos = await ProjetosData;

    return (
        <Reveal delay={200}>
            <Suspense fallback={null}>
                <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-brico text-sm text-destaques">02 / PROJETOS</h2>
                        <h5 className="font-brico text-4xl font-bold text-texto-primario sm:text-5xl md:text-7xl">
                            Tudo que eu construí
                        </h5>
                        <p className="font-brico font-medium text-texto-secundario">
                            Sistemas completos, do modelo de dados à tela. Cada projeto tem demo e código.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {filter.map((f) => (
                            <FilterButton key={f.label} label={f.label} value={f.value} />
                        ))}
                    </div>

                    <ProjetosList projetos={projetos} />
                </div>
            </Suspense>
        </Reveal>
    );
}