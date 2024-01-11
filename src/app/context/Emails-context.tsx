'use client'

import { useState, createContext, Dispatch, SetStateAction, ChangeEvent } from "react";

interface ContextProps{
    setEmail: Dispatch<SetStateAction<string>>,
    setText: Dispatch<SetStateAction<string>>,
    handleEmail: (email: ChangeEvent<HTMLInputElement>) => void
    handleText: (text: ChangeEvent<HTMLInputElement>) => void
    allData: {email:string, text:string},
    setEmailAndTextOnState: () => void,
    children: React.ReactNode
}

export const EmailContext = createContext<ContextProps>();

export default function EmailProps({ children }:ContextProps){
     const [email, setEmail] = useState('');
     const [text, setText] = useState('');
     const [allData, setallData] = useState({ email: '', text:'' })

function handleEmail(email: ChangeEvent<HTMLInputElement>){
    setEmail(email.target.value)
}

function handleText(text: ChangeEvent<HTMLInputElement>){
    setText(text.target.value)
}


function setEmailAndTextOnState(){
    setallData({...allData, email: email, text:text})

    console.log(allData, "????")
}

return(
    <EmailContext.Provider value={{ setEmail, setText, allData, setEmailAndTextOnState, handleEmail, handleText }}>
        { children }
    </EmailContext.Provider>    
)
}

// const EmailContext = createContext<ContextProps>({} as ContextProps);

// export function EmailProps({ children }: ContextProps){
//     const [email, setEmail] = useState('');
//     const [text, setText] = useState('');
//     const [allData, setallData] = useState({ email: '', text:'' })

//     function handleEmail(email: ChangeEvent<HTMLInputElement>){
//         setEmail(email.target.value)
//     }

//     function handleText(text: ChangeEvent<HTMLInputElement>){
//         setText(text.target.value)
//     }


//     function setEmailAndTextOnState(){
//         setallData({...allData, email: email, text:text})
//     }

//     return(
//         <EmailContext.Provider value={{ setEmail, setText, allData, setEmailAndTextOnState, handleEmail, handleText }}>
//             { children }
//         </EmailContext.Provider>    
//     )
// }

// export const useEmailContext = () => useContext(EmailContext)