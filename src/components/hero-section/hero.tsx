import Image from "next/image"
import { HeroItens } from "./itens"
import Link from "next/link"
import { StacksItens } from "../stacks/itens"
import Reveal from "../reveal"

export function HeroSection() {
    return (
        <Reveal delay={300}>
            <section className="py-10 md:py-15 flex flex-col gap-6 md:gap-10 border-b border-bordas">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between">
                            <h2 className="text-destaques font-brico text-sm">01 / PROJETOS</h2>
                            <Link href={'/projetos'} className="text-destaques font-plex text-xs md:text-base">Veja mais</Link>
                        </div>
                        <h5 className="text-3xl md:text-4xl text-texto-primario font-bold font-brico">
                            Coisas que eu construí
                        </h5>
                    </div>
                </div>

                <div className="w-full h-auto bg-superficie border border-destaques rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-6 md:gap-10">
                    <Image
                        src="/devStore.png"
                        alt="Painel de E-commerce DevStore"
                        width={224}
                        height={224}
                        className="rounded-2xl w-full h-48 sm:h-56 md:w-120 md:h-56 object-cover shrink-0 "
                    />

                    <div className="space-y-4 md:space-y-6">
                        <span className="text-destaques text-xs">★ DESTAQUE · ECOMMERCE</span>
                        <h3 className="text-2xl md:text-3xl font-brico font-bold text-texto-primario">
                            Painel de E-commerce
                        </h3>
                        <p className="text-texto-secundario text-sm md:text-base">
                            Sistema web desenvolvido para praticar e aprofundar a lógica de um carrinho de compras, incluindo adição e remoção de produtos, atualização de quantidades e cálculo do valor total.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <StacksItens stack="Next.js" />
                            <StacksItens stack="React" />
                            <StacksItens stack="Tailwind css" />
                            <StacksItens stack="Typescript" />
                        </div>

                        <div className="flex gap-5">
                            <Link href={''} className="text-destaques text-sm font-plex font-medium">Ver demo</Link>
                            <Link
                                href={'https://github.com/ThiagoLourenco286/E-commerce-DevStore'}
                                target="_blank"
                                className="text-destaques text-sm font-plex font-medium"
                            >
                                Codigo
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <HeroItens tag="SERVIÇO PARA CLIENTE" titulo="Ironpulse" descricao="Sistema de gestão para academias com operações completas de CRUD. Conta com autenticação segura e controle de acesso por perfis (administrador e demais funções)." />
                    <HeroItens tag="SERVIÇO PARA CLIENTE" titulo="Urbancut" descricao="Sistema de gestão para barbearias com operações completas de CRUD. Permite administrar agendamentos, cadastrar, atualizar e remover barbeiros e serviços, além de criar novas modalidades de atendimento." />
                    <HeroItens tag="APP WEB" titulo=".Rota" descricao=".Rota é uma plataforma de gestão de entregas e motoristas que centraliza o acompanhamento das operações logísticas. O sistema organiza as entregas, analisa os atrasos para mostrar onde estão os gargalos." />
                </div>
            </section>
        </Reveal>
    )
}