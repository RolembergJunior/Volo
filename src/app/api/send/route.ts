import { EmailTemplate } from "@/components/EmailTemplate/Email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(){
    try {
        const  { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ["junior.45098@gmail.com"],
            subject: "Hello World",
            react: EmailTemplate({ firstName: 'Rolemberg Junior' }) as React.ReactElement
        });

        if(error){
            return NextResponse.json({ error });
        }

        return NextResponse.json({ message:"EMAIL SEND" ,data })
    } catch (error) {
        return NextResponse.json({ error })
    }
}