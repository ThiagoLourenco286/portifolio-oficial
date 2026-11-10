'use client'
import { createContact } from "@/app/(app)/actions";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import Reveal from "./reveal";

const contactInicial = {
    nome: '',
    email: '',
    mensagem: ''
}

export function CallToAction() {

    const [form, setForm] = useState<{
        nome: string,
        email: string,
        mensagem: string
    }>(contactInicial)

    async function handleForm(e: React.FormEvent) {
        e.preventDefault()

        try {
            await createContact({
                nome: form.nome,
                email: form.email,
                mensagem: form.mensagem
            })

            toast.success('Obrigado pela oportunidade, farei contato em breve!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
            setForm(contactInicial)
        } catch (error) {
            toast.error('Não foi possível enviar sua mensagem. Tente novamente.', {
                position: 'top-right',
                autoClose: 5000,
                theme: "dark",
                transition: Bounce,
            })
        }
    }

    return (
        <Reveal delay={300}>
            <div className="border-b border-bordas py-10 md:py-15 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

                <div className="flex flex-col space-y-6 w-full md:w-110">
                    <h2 className="text-destaques font-brico text-sm">03 / Contato</h2>
                    <h5 className="text-4xl md:text-7xl text-texto-primario font-bold font-brico">
                        Vamos construir algo juntos <span className="text-destaques">?</span>
                    </h5>
                    <p className="text-texto-secundario font-medium font-brico text-sm md:text-base">
                        Estou buscando estágio em desenvolvimento full stack e também aceito projetos pequenos.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="mailto:Thiago.lourencooliveira12@gmail.com"
                            className="rounded-lg border border-bordas bg-superficie p-2 font-plex text-xs font-medium text-texto-secundario break-all transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-destaques hover:bg-destaques/10 hover:text-destaques hover:shadow-[0_0_18px_-4px] hover:shadow-destaques active:scale-[0.98] md:text-sm"
                        >
                            Thiago.lourencooliveira12@gmail.com
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/thiago-louren%C3%A7o-291b8b29b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-bordas bg-superficie p-2 font-plex text-xs font-medium text-texto-secundario break-all transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-destaques hover:bg-destaques/10 hover:text-destaques hover:shadow-[0_0_18px_-4px] hover:shadow-destaques active:scale-[0.98] md:text-sm"
                        >
                            Linkedin.com/Thiago.lourenco
                        </Link>
                        <Link
                            href="https://github.com/ThiagoLourenco286"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-bordas bg-superficie p-2 font-plex text-xs font-medium text-texto-secundario break-all transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-destaques hover:bg-destaques/10 hover:text-destaques hover:shadow-[0_0_18px_-4px] hover:shadow-destaques active:scale-[0.98] md:text-sm"
                        >
                            Github.com/ThiagoLourenco286
                        </Link>
                    </div>
                </div>

                <div className="w-full min-h-120 md:w-130 rounded-2xl border border-bordas bg-superficie p-4 md:p-5">
                    <form onSubmit={handleForm} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="text-rotulos font-plex font-medium text-sm">NOME</label>
                            <input
                                id="nome"
                                type="text"
                                required
                                placeholder="Seu nome"
                                name="nome"
                                value={form.nome}
                                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                                className="w-full h-10 border border-bordas px-4 md:px-5 rounded-lg text-texto-secundario bg-fundo text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-rotulos font-plex font-medium text-sm">E-MAIL</label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="voce@email.com"
                                name="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full h-10 border border-bordas px-4 md:px-5 rounded-lg text-texto-secundario bg-fundo text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensagem" className="text-rotulos font-plex font-medium text-sm">MENSAGEM</label>
                            <textarea
                                id="mensagem"
                                required
                                placeholder="Conte sobre a vaga ou projetos"
                                name="mensagem"
                                value={form.mensagem}
                                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                                className="w-full h-40 md:h-45 border border-bordas p-4 md:p-5 rounded-lg text-texto-secundario bg-fundo text-base resize-none"
                            />
                        </div>

                        <button type="submit" className="bg-destaques py-2 text-fundo rounded-lg">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </Reveal>
    )
}