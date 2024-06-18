function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
}


function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


function login() {
    let email = obtenerDato(
        {
            mensaje: 'Bienvenido, por favor ingrese su email: ',
            error: 'Error. Por favor ingrese un email valido: ',
            validacion: validarEmail
        }
    )
    let password = obtenerDato(
        {
            mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres',
            error: 'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres', 
            validacion: validarPassword
        }
    )
    return { email: email, password: password}
}