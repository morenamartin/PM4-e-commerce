"use client"
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const PageNotFound = () => {    
    const [contador, setContador] = useState(5)

    useEffect(() => {
        setTimeout(() => {
            setContador(contador-1)    
        }, 1000)
       
        if (contador == 0){
            redirect("/") 
        }
        
    }, [contador])

    return (
        <div className="flex items-center justify-center h-screen font-sans font-semibold text-center">
            <div className="w-[100%]  md:w-[40%] h-[50%] bg-violeta-primario flex flex-col justify-around rounded-md shadow-violeta-900 shadow-2xl">
                <h1 className="text-3xl font-bold text-violet-800">PÁGINA NO ENCONTRADA</h1>
                <span>Te redirigiremos al inicio en</span>
                <span className="text-8xl">{contador}</span>
                <span>segundos</span>
            </div>
        </div>
    )
}

export default PageNotFound;