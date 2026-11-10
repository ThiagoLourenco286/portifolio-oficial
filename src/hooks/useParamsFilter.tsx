'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export function useFilterParams() {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const setParams = useCallback(
        (key: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            value ? params.set(key, value) : params.delete(key)
            router.replace(`${pathName}?${params.toString()}`, { scroll: true })
        },
        [searchParams, pathName, router])

    const getParam = useCallback((key: string) => searchParams.get(key) ?? "", [searchParams])

    return { setParams, getParam }
}