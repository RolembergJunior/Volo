import { useEmailContext } from "@/app/context/Emails-context";

interface EmailTemplateProps{
    firstName: string;
}

export function EmailTemplate({ firstName }:EmailTemplateProps){
    const { allData } = useEmailContext();


    return(
        <div>
            <h1>Welcome, {firstName}</h1>
            <h2>Ficamos muito felizes em saber que sua empresa está interessada em nossas tecnologias</h2>
            <p>{allData.text}</p>
        </div>
    )
}