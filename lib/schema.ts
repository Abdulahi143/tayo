
import { z } from 'zod'


export const ContactFormSchema = z.object({
    name: z.string().min(1, 'Namn måste anges!'),
    email: z.string().min(1, 'E-postaddress måste anges!'),
    phoneNumber: z.string().min(1, 'Namn måste anges!'),
    message: z.string().min(1, 'Namn måste anges!'),
})