'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

interface NavigationItensProps {
    text: string
    href: string
}

export function NavigationItens({ href, text }: NavigationItensProps) {

    const pathName = usePathname()

    const activePath = pathName === href

    return (
        <Link href={href} className={twMerge('font-plex font-medium text-rotulos text-sm', activePath && 'text-destaques')}>
            {text}
        </Link>
    )
}