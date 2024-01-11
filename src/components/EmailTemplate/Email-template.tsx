import { EmailContext } from "@/app/context/Emails-context";
import { useContext } from "react";


interface EmailTemplateProps{
    firstName: string;
}

export function EmailTemplate({ firstName }:EmailTemplateProps){
    const { allData } = useContext(EmailContext)


    return(
        <div>
            <h1>Welcome, {firstName}</h1>
            <h2>Ficamos muito felizes em saber que sua empresa está interessada em nossas tecnologias</h2>
            <p>{allData.text}</p>
        </div>
    )
}