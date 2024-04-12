'use server'

import { ContactTemplate } from '@/emails'
import { ContactFormSchema } from '@/lib/schema'
import { Resend } from 'resend'
import { z } from 'zod'

type Inputs = z.infer<typeof ContactFormSchema>

export async function  addEntry(data: Inputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)
export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.success) {
      const {name, email, phoneNumber, message} = result.data
      try {
        const data = await resend.emails.send({
            from: 'Tayo Förening <onboarding@resend.dev>',
            to: ['qaskaxaji143@gmail.com'], // This should be tayo@gmail.com after verification xasuuso Qasaaye
            reply_to: email,
            subject: "Hemsidans kontaktformulär",
            text: `Name: ${name}\nEmail: ${email}\nmessage: ${message}`,
            react: ContactTemplate({name, email, phoneNumber, message})
        })
        return { success: true, data: data }
      } catch (error) {
        return { success: false, error }
      }
    }

    if (result.error) {
      return { success: false, error: result.error.format() }
    }
  
}