"use client"
import { useAuthContext } from "@/app/context/AuthContext"
import { useCartContext } from "@/app/context/CartContext"
import { routes } from "@/app/routes"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { RiShoppingCartLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"
import { TbTriangleFilled } from "react-icons/tb";

const Menu = () => {
    const {user} = useAuthContext()
    const {total} = useCartContext()
    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className="relative md:hidden">
                <GiHamburgerMenu className="text-violeta-primario" onClick={() => setMenu(prev => !prev)}/>
                {menu === true && 
                <div className="absolute flex flex-col justify-center top-4 -left-44 md:hidden">
                    <div className="flex justify-end">
                        <TbTriangleFilled className="text-violeta-400"/>
                    </div>
                <div className="flex flex-col justify-around w-48 gap-4 p-4 font-sans bg-violeta-400">
                    <Link href={routes.products} onClick={() => setMenu(false)} className="font-bold text-violeta-primario">Products</Link>
                    <Link href={routes.cart} onClick={() => setMenu(false)}>
                        <div className="relative">
                            <RiShoppingCartLine  size={25} color="#9F60A2"/>
                            <span className="absolute px-1 text-xs text-black rounded-full -top-1 left-4 bg-violeta-primario ">{total}</span>
                        </div>
                    </Link>
                    <Link href={routes.profile} onClick={() => setMenu(false)} className="flex flex-row gap-2">
                        <CgProfile size={25} color="#9F60A2"/>
                        <span className="font-semibold text-gris-950">{user?.name}</span>           
                    </Link>
                </div>
                </div>}
            </div>
        </>
    )
}

export default Menu