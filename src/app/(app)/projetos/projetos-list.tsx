'use client'

import { useMemo } from "react"
import { useFilterParams } from "@/hooks/useParamsFilter"
import { ProjetosPage } from "./projetos-page"

interface Projeto {
    id: number
    img: string
    tag: string
    title: string
    description: string
    code: string
}

export function ProjetosList({ projetos }: { projetos: Projeto[] }) {
    const { getParam } = useFilterParams()
    const tag = getParam('tag')

    const filtrados = useMemo(() => {
        if (!tag) return projetos
        return projetos.filter((p) => p.tag === tag)
    }, [projetos, tag])

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p) => (
                <ProjetosPage
                    id={p.id}
                    key={p.id}
                    img={p.img}
                    tag={p.tag}
                    title={p.title}
                    description={p.description}
                    code={p.code}
                />
            ))}
        </div>
    )
}