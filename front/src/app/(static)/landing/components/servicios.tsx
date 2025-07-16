import React from "react"
import Image from "next/image"

import "../productos.css"

//imagenes
import seguridad from "../assets/servicios/seguridad.png"
import chanchito from "../assets/servicios/chanchito.png"
import disponibilidad from "../assets/servicios/disponibilidad.png"
import envio from "../assets/servicios/envio.png"

const servicios = [
    {
        imagen: seguridad,
        titulo: "COMPRA SEGURA",
        texto: "Tus datos protegidos y transacciones 100% confiables. Comprá con tranquilidad.",
    },

    {
        imagen: chanchito,
        titulo: "PRECIOS ACCESIBLES",
        texto: "Tecnología al alcance de todos. Calidad sin gastar de más.",
    },

    {
        imagen: disponibilidad,
        titulo: "DISPONIBILIDAD 24/7",
        texto: "Nuestra tienda siempre abierta. Comprá cuando quieras, donde quieras.",
    },

    {
        imagen: envio,
        titulo: "ENVIO RAPIDO",
        texto: "Despachamos tu pedido en tiempo récord. ¡Recibilo en pocos días!",
    }

]

const Servicios = () => {
    return (
        <div className="mt-20 flex flex-col justify-between w-[80%] md:w-[70%] m-auto">
            <div className="relative flex flex-col items-center">
                <h1 className="titulo">SERVICIOS</h1>
                <h3 className="absolute text-sm text-center md:text-xl top-10">Tecnología que te acompaña. Servicios que te impulsan.</h3>
            </div>

            <div className="flex flex-col flex-wrap justify-between w-full mt-5 md:flex-row">

                {servicios.map((tarjeta) => (
                    <div key={tarjeta.titulo} className="pr-2 py-2 flex flex-row justify-between items-center w-full md:w-[48%] h-fit md:h-[25vh] rounded-[20px] bg-violeta-400 mb-5">
                        <div className="flex items-center justify-between h-full">
                            <Image className="w-20 md:w-36 md:ml-3" src={tarjeta.imagen} alt="." />
                        </div>

                        <div className="text-sm h-[70%] w-[65%] text-gris-900 flex flex-col gap-2">
                            <span className="text-violeta-primario">{tarjeta.titulo}</span>
                            <span>{tarjeta.texto}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Servicios