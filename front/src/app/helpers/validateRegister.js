const validateRegister = (input) => {
    const errorsRegister = {}
    if(!input.name) errorsRegister.name = "name is required"
    
    if(!input.email) errorsRegister.email = "email is required"
    else if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(input.email)){
        errorsRegister.email = "El email no es valido"
    }
    
    if(!input.password) errorsRegister.password = "password is required"
    else if(input.password.length < 6)errorsRegister.password = "la contraseña debe ser tener una logitud de 6 caracteres minimo"

    if(!input.address) errorsRegister.address = "adress is required"
    
    if(!input.phone) errorsRegister.phone = "phone is required"
    else if(!/^(\d{2})\s(\d{4})-(\d{4})$/.test(input.phone))errorsRegister.phone = "el número de telefono no es valido"

    return errorsRegister;
}

export default validateRegister;
