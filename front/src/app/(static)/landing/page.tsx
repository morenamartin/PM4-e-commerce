import React from "react"

//componentes
import NavBarLanding from "./components/Navbar"
import ProductoPrimario from "./components/productoPrimario"
import Productos from "./components/productos"
import Servicios from "./components/servicios"

const Landing = () => {
    return (
        <div className="w-[100vw] h-fit m-auto bg-violeta-primario font-bold font-sans">
            <NavBarLanding />
            <ProductoPrimario />
            <Productos />
            <Servicios />
        </div>
    )
}

export default Landing