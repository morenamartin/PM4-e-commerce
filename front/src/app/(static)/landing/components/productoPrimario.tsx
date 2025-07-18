import React from "react"

import Image from "next/image"

import parlante from "../../../assets/productos/parlante.png"

const ProductoPrimario:React.FC = () => {
    return (
        <div className="flex flex-row justify-between w-[80%] md:w-[70%] m-auto mt-16">
            <div className="flex flex-col gap-2 w-[55%] justify-center text-left">
                <h1 className="mb-3 text-3xl font-bold">PARLANTE PORTATIL INALÁMBRICO SONIDO HD</h1>
                <p className="text-sm text-start text-gris-primario">Disfruta de música con sonido HD en cualquier lugar con el parlante portátil inalámbrico de 6.5 pulgadas. Su diseño compacto permite llevarlo fácilmente, mientras que su conectividad inalámbrica asegura una experiencia sin cables.</p>
                <span className="mt-4 text-xl font-bold">$ 260</span>
                <div className="flex justify-start">
                    <a href="/productDetail/22/Parlante%20Bluetooth%20resistente%20al%20agua" className="p-2 pl-5 pr-5 bg-violeta-800 hover:bg-violeta-900">IR A COMPRAR</a>
                </div>
            </div>

            <div className="w-[45%] flex justify-center items-center">
                <Image height={500} src={parlante} alt="parlante" />
            </div>
        </div>
    )
}   

export default ProductoPrimario;