import { FC } from "react"
import "./styles/loader.css"
import { routes } from "@/app/routes"

interface AlertaProps {
    texto: string
    children?: React.ReactNode
}


const Alerta: FC<AlertaProps> = ({ texto, children }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-100">
            <div className="flex flex-col items-center justify-center gap-4 shadow-lg shadow-gris-950 bg-gris-400 w-80 h-60">
                <p className="text-xl font-bold text-black">{texto}</p>
                {children}
            </div>
        </div>
    )
}


export default Alerta