import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const COntactForm = async (email: string, firstName: string) => {
  
    await resend.emails.send({
      from: 'Tayo Förening <onboarding@resend.dev>',
      to: email,
      subject: "Contact Form",
      html: `  <div>
      <h1>Hej Tayo!</h1>
      <h2>Kontaktformulär</h2>
    </div>`
    });
  };