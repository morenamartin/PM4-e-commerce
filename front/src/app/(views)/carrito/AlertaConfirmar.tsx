"use client"

const AlertaConfirmar = ({ children }: { children: React.ReactNode }) => {

    return(
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen text-black bg-black bg-opacity-50 z-100">
            <div className="flex flex-col items-center justify-center gap-6 py-8 shadow-lg shadow-gris-950 w-[85%] md:w-96 bg-gris-primario">
                <h2 className="text-lg">¿Estas seguro/a de realizar la orden?</h2>
                {children}   
            </div>
        </div>
    )
}

export default AlertaConfirmar;