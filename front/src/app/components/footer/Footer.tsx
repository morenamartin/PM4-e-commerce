"use client"
import React from "react"
import Image from "next/image";
import logo from "../../assets/logo.png"
import { routes } from "@/app/routes";
import { useAuthContext } from "@/app/context/AuthContext";

const Footer:React.FC = () => {
    const {isAuth} = useAuthContext()

    return (
    <footer className="m-4 bg-white rounded-lg shadow-sm ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between ">
                <a href="/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                    <Image height={50} className="w-60" src={logo} alt="logo"/>
                </a>
                {isAuth === true ? 
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href={routes.home} className="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href={routes.landing} className="hover:underline me-4 md:me-6">Landing</a>
                    </li>
                    <li>
                        <a href={routes.cart} className="hover:underline me-4 md:me-6">Cart</a>
                    </li>
                    <li>
                        <a href={routes.profile} className="hover:underline">Profile</a>
                    </li>
                </ul>:
                
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href={routes.login} className="hover:underline me-4 md:me-6">Iniciar sesión</a>
                    </li>
                    <li>
                        <a href={routes.landing} className="hover:underline me-4 md:me-6">Landing</a>
                    </li>
                </ul>

                }
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">MORESHOP</a>. All Rights Reserved.</span>
        </div>
    </footer>
    )
}

export default Footer;