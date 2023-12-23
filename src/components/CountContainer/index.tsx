'use client'

import { useState, useEffect } from "react"

export default function Count({ time, children }){
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        let interval;
    
        if (count < time) {
          interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 100); // Atualize a cada segundo (100 ms)
        }
        return () => {
          clearInterval(interval); // Limpe o intervalo quando o componente for desmontado
        };
      }, [count])

    return(
        <div>
            <p className="text-2xl mb-1">{count}</p>
            <p>{children}</p>
        </div>
    )
}