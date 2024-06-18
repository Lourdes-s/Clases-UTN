
/* ----------------funcion de validar email----------------*/

/* 
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
 */

/* 
function obtenerEmail(){
    let emailAVerificar = prompt('ingrese un email')
    while (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar))){
        emailAVerificar = prompt('direccion de email no valida, por favor ingrese un email valido')
    }
    alert('email registrado: ' + emailAVerificar)
    }

let emailRegistrado = login()
 */





/* ----------------funcion de validar password----------------*/

/* la hice yo: */

/* 
function validarPassword(password){
    return (!password || !(/[A-Z]/.test(password)) || password.length < 6)
}
*/

/* la hizo mi companiera */

/* function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 
 */

/* 
function obtenerPassword(){
    let password = prompt('por favor ingreses una contrasena')
    while (!validarPassword(password)){
        password  = prompt('debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres')
    }
    alert('password registrado: ' + password)
    return password
}

 */


/* ----------------TODO JUNTO----------------*/

/* 
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 

function obtenerEmail(){
    let email = prompt('ingrese un email')
    while (!validarEmail(email)){
        email = prompt('direccion de email no valida, por favor ingrese un email valido')
    }
    alert('Email registrado: ' + email)
    return email
    }

function obtenerPassword(){
    let password = prompt('por favor ingreses una contrasena')
    while (!validarPassword(password)){
        password  = prompt('debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres')
    }
    alert('password registrado: ' + password)
    return password
}

function login(){
    let email = obtenerEmail()
    let password = obtenerPassword()
    return {email: email, password: password}
}

console .log(login())

 */





/* ---------------- EJEMPLO CODIGO RESUMIDO DEL PROFE----------------*/
/* clase 17 2:05:00 explicacion completa */

function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 

function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
            dato = prompt(data.error)
    }
}


const DATOS = { /* (PSEUDO DICCIONARIO) */
    EMAIL: {
        mensaje: 'ingrese un email',
        error: 'direccion de email no valida, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        Mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres',
        Error:'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres',
        validacion: validarPassword
    }
}


function login() {
let email = obtenerDato(DATOS.EMAIL)
let password = obtenerDato(DATOS.PASSWORD)
    return {email: email, password: password}
}