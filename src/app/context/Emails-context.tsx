'use client'


import {  useContext, useState, createContext, Dispatch, SetStateAction } from "react";

interface ContextProps{
    setEmail: Dispatch<SetStateAction<string>>,
    setText: Dispatch<SetStateAction<string>>,
    allData: {email:string, text:string},
    setEmailAndTextOnState: () => void,
    children: React.ReactNode
}

const EmailContext = createContext<ContextProps>({} as ContextProps);

export function EmailProps({ children }: ContextProps){
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [allData, setallData] = useState({ email: '', text:'' })


    function setEmailAndTextOnState(){
        setallData({...allData, email: email, text:text})
    }

    return(
        <EmailContext.Provider value={{ setEmail, setText, allData, setEmailAndTextOnState }}>
            { children }
        </EmailContext.Provider>    
    )
}

export const useEmailContext = () => useContext(EmailContext)