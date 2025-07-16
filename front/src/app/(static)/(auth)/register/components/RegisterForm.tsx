"use client"
import Input from "@/app/components/Input";
import { Formik } from "formik";
import register from "@/app/services/register";
import React, { useState } from "react"
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Alerta from "@/app/components/alerta/Alerta";

//iconos
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

 
const RegisterSchema = yup.object().shape({
    name: yup
    .string()
    .required("El nombre es requerido"),

    email: yup
    .string()
    .email('email invalido')
    .required('Email requerido'),

    address: yup
    .string()
    .required('La dirección es requerida'),

    phone: yup
    .string()
    .required('El número de telefono es requerido'),

    password: yup
    .string()
    .min(6, "Debe tener minimo 6 caracteres")
    .required("Contraseña requerida"),

    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirmar contraseña es obligatorio'),

});



const RegisterForm = () => {
    const router = useRouter()
    const [aviso, setAviso] = useState(false)

    const [showPass, setShowPass] = React.useState(false)

    const handleShowPass = () => {
        setShowPass((prev) => !prev)
    }
    return (
        <>
            <Formik
                initialValues={{ email: '', password: '', name: "", address: "", phone: "", confirmPassword: "" }}
                validationSchema={RegisterSchema}

                onSubmit={ async (values, {setSubmitting}) => {
                    const {confirmPassword, ...data} = values

                    try{
                        const res = await register(data)

                        if(res.errors){
                            return alert("Error al registrar el usuario")
                        }

                        setAviso(true)
                        setTimeout(() => {
                            setAviso(false)
                            router.push("/login")
                        }, 1000)
                    }catch(e){
                        alert("Error al registrar el usuario")
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
                
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 md:grid md:grid-cols-2"> 
                    <Input
                        label="nombre completo"
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        error= {errors.name && touched.name && errors.name}
                    />

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
                        label="address"
                        id="address"
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        error= {errors.address && touched.address && errors.address}
                    />

                    <Input
                        label="phone"
                        id="phone"
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        error= {errors.phone && touched.phone && errors.phone}
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
                    />

                    <Input
                        label="confirmar constraseña"
                        id="confirmPassword"
                        type= {showPass ? "text" : "password"}
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        error= {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                        children={
                        <div onClick={handleShowPass}>
                            {showPass ? <FaRegEyeSlash />:<FaRegEye />}
                        </div>}
                    />

                    <button className="w-full col-span-2 p-1 mt-4 mb-4 bg-violeta-700" type="submit" disabled={isSubmitting}>
                        Registrarme
                    </button>
                    {aviso === true && 
                        <Alerta texto="Te registraste correctamente">
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


export default RegisterForm;