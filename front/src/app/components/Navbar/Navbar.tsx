"use client"

//styles
import styles from "./styles/Navbar.module.css"
//imagenes
import Image from "next/image"
import logo from "../../assets/logo2.png"

//logos
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { routes } from "@/app/routes";
import { useAuthContext } from "@/app/context/AuthContext";
import { useCartContext } from "@/app/context/CartContext";
import Link from "next/link";
import Menu from "./menu";


const Navbar:React.FC = () => {
    const {isAuth, user} = useAuthContext()
    const {total} = useCartContext()

    return (
        <header className={styles.header}>
            <a href={routes.home}>
                <Image className="h-12 w-14" src={logo} alt="logo"/>
            </a>

            {isAuth === true &&
                <Menu />
            }

            {isAuth ? 
                    <div className="flex-row justify-between hidden font-sans md:flex gap-14">
                        <Link href={routes.landing} className="font-bold text-violeta-primario">Landing</Link>
                        <Link href={routes.products} className="font-bold text-violeta-primario">Products</Link>
                        <Link href={routes.cart}>
                            <div className="relative">
                                <RiShoppingCartLine  size={25} color="#9F60A2"/>
                                <span className="absolute px-1 text-xs text-black rounded-full -top-1 -right-1 bg-violeta-primario ">{total}</span>
                            </div>
                        </Link>
                        <Link href={routes.profile} className="flex flex-row gap-2">
                            <CgProfile size={25} color="#9F60A2"/>
                            <span className="font-semibold text-gris-950">{user?.name}</span>           
                        </Link>
                    </div>
                : isAuth === null ?
                    <div className="flex gap-6">
                        <span className="text-violeta-primario">Loading...</span>
                    </div>
                :
                    <div className="flex items-center gap-6">
                        <a href={routes.login} className="px-2 py-1 text-xs font-bold text-center md:text-base md:px-6 hover:bg-violeta-700 text-gris-100 bg-violeta-primario">Iniciar sesión</a>
                        <a href={routes.landing} className="font-bold text-violeta-primario">Landing</a>
                        <a href={routes.products} className="font-bold text-violeta-primario">Products</a>
                    </div>
            }  
        </header>
    )
}

export default Navbar