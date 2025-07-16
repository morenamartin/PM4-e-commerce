import React from "react"
import Image from "next/image";

//styles
import "../productos.css"

//imagenes
import mouseGamer from "../assets/mouseGamer.png"
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
                <div className="tarjetitas-productos">
                    <Image width={200} src={mouseGamer} alt="" /> 
                    <span>GAMING</span>
                </div>

                <div className="tarjetitas-productos">
                    <Image width={200} src={auriculares} alt="" /> 
                    <span>SONIDO</span>
                </div>

                <div className="tarjetitas-productos">
                    <Image width={200} src={mouseOficina} alt="" /> 
                    <span>OFICINA</span>
                </div>
            </div>
        </div>
    )
}

export default Productos;