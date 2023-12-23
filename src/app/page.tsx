'use client'

import Count from "@/components/CountContainer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-sky-500 h-screen relative">
      <div className="absolute h-screen w-[2px] left-16 bg-slate-50 z-10"/>
      <div className="absolute h-screen w-[2px] right-16 bg-slate-50 z-10"/>
      <Header/>
      <hr className="relative mt-2 mb-2 ml-auto mr-auto border top-2 z-10" />
      <motion.div
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      className="mb-14 mt-14 w-630 pl-32 leading-10"
      >
        <h1 className=" bg-yellow-300 text-6xl font-bold">Potencialize sua empresa</h1><h1 className=" text-white text-5xl font-bold">com as principais tecnologias</h1>
        <p className="mt-5 mb-5 text-lg text-white">Uma fábrica de software líder no mercado! Contamos com uma equipe de speciistas altamentes qualificados que combinam tecnologia de ponta com criatividade excepcional.</p>
        <button className="bg-slate-950 text-white p-5 rounded-lg">Solicitar orçamento</button>
      </motion.div>
      <hr className=" relative mt-2 mb-2 ml-auto mr-auto border top-2 z-10"/>
      <div className=" flex left-32 bottom-20 gap-20 text-center text-white pl-32 mt-20">
        <Count time={2}>
          Anos de mercado
        </Count>
        <Count time={10}>
          Clientes satisfeitos
        </Count>
        <Count time={20}>
          Projetos entregues
        </Count>
      </div>
      <div className="absolute bg-yellow-300 w-[617px] h-[542px] right-0 bottom-0 rounded-xl"/>
      <motion.img
      initial={{ x: 700 }}
      animate={{ x: 0 }}
      transition={{
          duration: 0.7,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      src="/banner-image.png" 
      alt="imagem banner" 
      className="absolute bottom-0 right-0 z-10"/>
    </main>
   )
}
