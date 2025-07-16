export const validateLogin = (input) => {
    const errors = {}
    if(!input.email)errors.email = "Falta el email"
    if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(input.email)){
        errors.email = "El email no es valido"
    }
    

    if(!input.password)errors.password = "Falta la password"
    if(input.password.length < 6)errors.password = "la contraseña debe ser tener una logitud de 6 caracteres minimo"
    return errors;
}

export default validateLogin
