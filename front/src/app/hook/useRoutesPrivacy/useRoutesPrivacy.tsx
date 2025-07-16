import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { routes } from "@/app/routes"
import { useAuthContext } from "@/app/context/AuthContext"


const useRoutesPrivacy = () => {
    const {isAuth} = useAuthContext()
    const pathname = usePathname()
    const router = useRouter()
    const publicRoutes = [routes.home, routes.login, routes.register]
    const privateRoutes = [routes.cart, routes.profile]

    useEffect(() => { 
        const routePrivacy = publicRoutes.includes(pathname)
        ?"public"
        : privateRoutes.includes(pathname)
        ? "private"
        : null;

        if(isAuth === null){
            return;
        }

        if(!routePrivacy){
            return
        }
        
        if(
            (routePrivacy === "public" && isAuth) || 
            (routePrivacy === "private" && !isAuth)
        ) {
            return router.push(routes.home)
        }
    },[pathname, isAuth])

}

export default useRoutesPrivacy