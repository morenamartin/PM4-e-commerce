import React from "react"
import Image from "next/image";

//styles
import "../productos.css"

//imagenes
import pendrive from "../assets//pendrive.png"
import auriculares from "../assets/auriculares.png"
import mouseOficina from "../assets/mouseOficina.png"

const Productos:React.FC = () => {
    return (
        <div className="flex flex-col justify-between w-[80%] md:w-[70%] m-auto mt-16">
            <div className="relative flex flex-col items-center">
                <h1 className="titulo">PRODUCTOS</h1>
                <h3 className="absolute text-[15px] top-10 md:text-xl">Que categoria de producto estas buscando?</h3>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-between w-full gap-6 pt-10 md:flex-row">
                <a href="/products?category=8" className="tarjetitas-productos">
                    <Image width={200} src={pendrive} alt="" /> 
                    <span>ALMACENAMIENTO</span>
                </a>

                <a href="/products?category=4" className="tarjetitas-productos">
                    <Image width={200} src={auriculares} alt="" /> 
                    <span>SONIDO</span>
                </a>

                <a href="/products?category=7" className="tarjetitas-productos">
                    <Image width={200} src={mouseOficina} alt="" /> 
                    <span>COMPUTADORAS</span>
                </a>
            </div>
        </div>
    )
}

export default Productos;