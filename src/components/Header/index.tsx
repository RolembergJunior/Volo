'use client'

import { motion } from "framer-motion";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useState } from "react";
import ModalContact from "./components/ModalContact";



export default function Header() {
    const [openModal , setOpenModal] = useState<Boolean>(false);
    const [handleChange, setHandleChange] = useState<String>('');
    
    function contactChange(e){
        setHandleChange(e.target.value)
    }

    return(
        <header className=" relative flex justify-between p-8 mb-5 pl-32 pr-32">
            <motion.img   
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            src="/logo-image.png" 
            alt="logo da empresa" 
            />
            <motion.nav
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <ul className="flex gap-5 items-center" >
                    <ActiveLink href='/' >Home</ActiveLink>
                    <ActiveLink href='/inicio' >Início</ActiveLink>
                    <ActiveLink href='/servicos' >Serviços</ActiveLink>
                    <ActiveLink href='/cases' >Cases</ActiveLink>
                    <ActiveLink href='/blogs' >Blog</ActiveLink>
                    <div className="bg-slate-950 text-white p-5 rounded-lg cursor-pointer" onClick={() => setOpenModal(true)}>
                        Contato
                    </div>
                    <ModalContact openModal={openModal} >
                        <div className="w-128 h-96 top-0 left-[450px] bg-black-rgba fixed z-30 cursor-default">
                            <div className="flex flex-col gap-10 bg-slate-50 p-8 rounded-xl max-w-75 h-128 relative mt-14">
                            <p className="text-black text-end cursor-pointer" onClick={() => setOpenModal(false )}>FECHAR!</p>
                            <h1 className="text-black text-center font-bold text-xl ">CONTATO VOLO</h1>
                            <hr className="border-2" />
                            <input type="email" placeholder="E-mail" className=" text-black w-128 h-14 rounded-md" onChange={(e) => contactChange(e)}/>
                            <input type="text" placeholder="Descrição" className=" text-black w-[900px] h-[400px] rounded-md" onChange={(e) => contactChange(e)}/>
                            <button type="submit" className="bg-sky-500 h-10 rounded-lg" >ENVIAR</button> 
                            </div>
                        </div> 
                    </ModalContact>
                </ul>
            </motion.nav>
        </header>
    )
}

// {/* <div className="w-128 h-200 top-0 left-[450px] bg-black-rgba fixed z-30 cursor-default">
//                                 <div className="flex flex-col gap-10 bg-slate-50 p-8 rounded-xl max-w-75 h-128 relative mt-14">
//                                     <p className="text-black text-end cursor-pointer" onClick={() => closeModal()}>FECHAR!</p>
//                                     <h1 className="text-black font-bold text-xl ">CONTATO VOLO</h1>
//                                     <hr className="border-2" />
//                                     <input type="email" placeholder="E-mail" className=" text-black w-128 h-14 rounded-md" onChange={(e) => contactChange(e)}/>
//                                     <input type="text" placeholder="Descrição" className=" text-black w-[900px] h-[450px] rounded-md" onChange={(e) => contactChange(e)}/>
//                                     {/* <button type="submit" className="bg-sky-500 h-10 rounded-lg" >ENVIAR</button> */}
//                             //     </div>
//                             // </div> */}