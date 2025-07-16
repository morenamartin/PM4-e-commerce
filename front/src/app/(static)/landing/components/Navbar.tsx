import React from "react"
import Image from "next/image"

//logo
import logo from "../../../assets/logo.png"

const NavBarLanding: React.FC = () => {
    return (
        <div className="w-[80%] bg-white flex flex-row justify-between items-center text-black p-2 md:pl-10 rounded-b-[30px] m-auto">
            <Image className="w-28" height={60} src={logo} alt="logo"></Image>
            <a href="/" className="md:mr-10 font-bold text-violeta-800 p-3 bg-violeta-primario rounded-[30px] hover:bg-violeta-700">CONOCER MÁS</a>
        </div>
    )
}

export default NavBarLanding;