import { StacksPage } from "@/app/(app)/stacks/stacks-page";
import Reveal from "@/components/reveal";

export default function Stacks() {
    return (
        <Reveal delay={200}>
            <section className="flex flex-col gap-8 py-8 md:gap-10 md:py-16">
                <div className="flex flex-col gap-2">
                    <h2 className="font-brico text-sm text-destaques">02 / Stacks</h2>
                    <h5 className="font-brico text-4xl font-bold text-texto-primario sm:text-5xl md:text-7xl">
                        Ferramentas
                    </h5>
                    <p className="font-brico font-medium text-texto-secundario">
                        O que uso para levar uma ideia do banco de dados até deploy.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                    <StacksPage
                        tag="FRONT-END"
                        items={[
                            { title: "Next.js", description: "Páginas, rotas e renderização das aplicações web." },
                            { title: "React", description: "Componentes reutilizáveis e interfaces dinâmicas." },
                            { title: "Tailwind CSS", description: "Estilização ágil e layouts responsivos." },
                            { title: "HTML", description: "Estrutura semântica das páginas." },
                            { title: "CSS", description: "Estilização e animações." },
                            { title: "JavaScript", description: "Lógica e interatividade das aplicações." },
                        ]}
                    />

                    <StacksPage
                        tag="BACK-END"
                        items={[
                            { title: "Node.js", description: "Ambiente de execução para APIs e sistemas." },
                            { title: "Fastify", description: "Criação de rotas e APIs rápidas e enxutas." },
                            { title: "Express", description: "Criação de rotas e servidores HTTP." },
                            { title: "TypeScript", description: "Tipagem estática em todo o projeto." },
                            { title: "Zod", description: "Validação dos dados que entram na API." },
                        ]}
                    />

                    <StacksPage
                        tag="BANCO DE DADOS"
                        items={[
                            { title: "SQL", description: "Consultas e modelagem de dados." },
                            { title: "Prisma", description: "ORM para models, relações e migrações." },
                            { title: "PostgreSQL", description: "Banco de dados relacional." },
                            { title: "Docker", description: "Containers para rodar o banco em desenvolvimento." },
                            { title: "MongoDB", description: "Banco de dados não relacional (NoSQL)." },
                        ]}
                    />

                    <StacksPage
                        tag="DEPLOY"
                        items={[
                            { title: "Vercel", description: "Publicação dos projetos front-end." },
                            { title: "Git / GitHub", description: "Versionamento e hospedagem do código." },
                        ]}
                    />
                </div>
            </section>
        </Reveal>
    );
}