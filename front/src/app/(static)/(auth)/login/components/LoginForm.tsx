"use client"
import Input from "@/app/components/Input";
import Login from "@/app/services/login";
import { Formik } from "formik";
import React, { useEffect, useState } from "react"
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/app/context/AuthContext";
import { routes } from "@/app/routes";
import Alerta from "@/app/components/alerta/Alerta";

//iconos
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

 
const LoginSchema = yup.object().shape({
    email: yup
    .string()
    .email('email invalido')
    .required('Email requerido'),

    password: yup 
    .string()
    .min(6, "Debe tener minimo 6 caracteres")
    .required("Contraseña requerida")
});



const LoginForm = () => {
    const router = useRouter()
    const {saveUserData} = useAuthContext()
    const [aviso, setAviso] = useState(false)
    const [showPass, setShowPass] = React.useState(false)

    const handleShowPass = () => {
        setShowPass((prev) => !prev)
    }

    return (
        <>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                

                onSubmit={async(values, {setSubmitting}) => {
                    const {...data} = values
                    
                    try{
                        const res = await Login(data)

                        if(res.errors){
                            return alert("Error al iniciar sesión")
                        }
                        
                        setAviso(true)
                        setTimeout(() => {
                            setAviso(false)
                            saveUserData(res.data!)
                            router.push(routes.home)
                        }, 1000);
                   

                    }catch(e){
                        alert("error al iniciar sesión")
                    }finally{
                        setSubmitting(false);
                    }
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                
                <form onSubmit={handleSubmit}>
                    <Input
                        label="email"
                        id="email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error= {errors.email && touched.email && errors.email}
                    />

                    <Input
                        label="constraseña"
                        id="password"
                        type= {showPass ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error= {errors.password && touched.password && errors.password}
                        children={
                        <div onClick={handleShowPass}>
                            {showPass ? <FaRegEyeSlash />:<FaRegEye />}
                        </div>}
                    />

                    <button className="w-full p-1 mt-4 mb-4 bg-violeta-700" type="submit" disabled={isSubmitting}>
                        Iniciar sesión
                    </button>
                    {aviso === true && 
                        <Alerta texto="Inicio de sesión correcto">
                            <div className="three-body">
                                <div className="three-body__dot"></div>
                                <div className="three-body__dot"></div>
                                <div className="three-body__dot"></div>
                            </div>
                        </Alerta>
                    }
                </form>
            )}
            </Formik>
        </>
    )
}


export default LoginForm;