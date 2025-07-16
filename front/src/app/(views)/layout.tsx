import React, { Children, FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { CartProvider } from "../context/CartContext";

interface LayoutMainViewsProps {
    children: React.ReactNode;
}

const LayoutMainViews:FC<LayoutMainViewsProps> = ({children}) => {
    return (
        <div className="pb-4 font-sans font-bold bg-gris-primario">
            <Navbar />
                {children}
            <Footer />
        </div>

    )
}

export default LayoutMainViews;