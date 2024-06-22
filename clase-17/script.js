
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
return emailAVerificar
}
 */





/* ----------------funcion de validar password----------------*/

/* 
function validarPassword(password){
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


/* function validarEmail(email) {
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

const DATOS = { 
    EMAIL: {
        mensaje: 'ingrese un email',
        error: 'direccion de email no valida, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        Mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        Error:'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        validacion: validarPassword
    }
}


function login() {
let email = obtenerDato(DATOS.EMAIL)
let password = obtenerDato(DATOS.PASSWORD)
    return {email: email, password: password}
}
 */







/* ------------------------------------------------------------------------------------------------------ */








/* 
function validarOperacion (operacion){
    retun (operacion === '+' || operacion === '-')
}




/* 
function suma(numero1,numero2){
    return ('El resultado de ' + numero1 + " + " + numero2 + ' es ' + (numero1+numero2))
}
*/
/* 
function resta(numero1,numero2){
    return ('El resultado de ' + numero1 + " - " + numero2 + ' es ' + (numero1-numero2))
}







function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
            dato = prompt(data.error)
    }
}

OPERACION: {
    mensaje: 'ingrese el tipo de calculo que desea realizar (suma o resta)',
    error: 'Error. por favor ingrese una operacion(suma o resta)',
    validacion: validarOperacion
}

 */







function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 

function validarOperacion (operacion){
    retun (operacion === '+' || operacion === '-')
}

function validarNumero (numero){
    return (!(!numero || isNaN(numero)))
}

function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
}

const DATOS = { 
    EMAIL: {
        mensaje: 'ingrese un email',
        error: 'direccion de email no valida, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        Mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        Error:'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        validacion: validarPassword
    },
    OPERACION: {
        mensaje: 'ingrese el tipo de calculo que desea realizar (suma o resta)',
        error: 'Error. por favor ingrese una operacion(suma o resta)',
        validacion: validarOperacion
    },
    NUMERO1: {
        mensaje: 'ingrese el primer numero con el que va a operar',
        error: 'Error. por favor ingrese un numero',
        validacion: validarNumero
    },
    NUMERO2: {
        mensaje: 'ingrese el segundo numero con el que va a operar',
        error: 'Error. por favor ingrese un numero',
        validacion: validarNumero
    }
}


function login() {
let email = obtenerDato(DATOS.EMAIL)
let password = obtenerDato(DATOS.PASSWORD)
    return {email: email, password: password}
} 

let usuario = login();
console.log(usuario); 



function calcular (operacion,numero1,numero2){
    let calcular = obtenerDato(DATOS.OPERACION)
    if (operacion === '+'){
        operacion = NUMERO1
        alert('El resultado de ' + numero1 + " + " + numero2 + ' es ' + (numero1+numero2))
    }
    else if (operacion === '-'){
        operacion = NUMERO2
        alert('El resultado de ' + numero1 + " - " + numero2 + ' es ' + (numero1-numero2))
    }
}


