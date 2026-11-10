'use server'

import { prisma } from "@/lib/prisma"
import z from "zod"

const contactSchema = z.object({
    nome: z.string(),
    email: z.string(),
    mensagem: z.string()
})

type ContactData = z.infer<typeof contactSchema>

export async function createContact(data: ContactData) {
    
    try {
        const parsedData = contactSchema.parse(data)

        const existeCadastro = await prisma.callToAction.findUnique({
            where: {
                email: parsedData.email
            }
        })

        if(existeCadastro){
            throw new Error('Esse email ja foi registrado, farei contato em breve!')
        }

        await prisma.callToAction.create({
            data: {
               ...parsedData
            }
        })
    } catch (_error) {
        
    }
}