import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "@/components/nav/navigation";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-brico",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Thiago Lourenço | Desenvolvedor Full Stack",
  description:
    "Portfólio de Thiago Lourenço, desenvolvedor full stack em formação. Projetos com Next.js, Node.js e SQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-fundo p-5 font-brico md:px-25">
        <Navigation />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}