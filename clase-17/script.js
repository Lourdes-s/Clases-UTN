
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









/* ---------------------------------------------CODIGO COMPLETO--------------------------------------------------------- */

function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 

function validarOperacion (operacion){
    return (operacion === '+' || operacion === '-')
}

function validarNumero (numero){
    return (!(!numero || isNaN(numero)))
}

function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    alert (dato)
}

const DATOS = { 
    EMAIL: {
        mensaje: 'ingrese un email',
        error: 'direccion de email no valida, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        error:'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
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

function calcular (operacion,numero1,numero2){
    let resultado;
    if (operacion === '+'){
    resultado = (parseFloat(numero1) + parseFloat(numero2))
        alert('El resultado de ' + numero1 + " + " + numero2 + ' es ' + (numero1+numero2))
    }
    else if (operacion === '-'){
    resultado = (parseFloat(numero1) - parseFloat(numero2))
        alert('El resultado de ' + numero1 + " - " + numero2 + ' es ' + (numero1-numero2))
    }
    return resultado
}

function calculadora() {
    let operacion = obtenerDato(DATOS.OPERACION)
    let numero1 = obtenerDato(DATOS.NUMERO1)
    let numero2 = obtenerDato(DATOS.NUMERO2)
    let accion = calcular(operacion, numero1, numero2)
    generarAlerta(accion)
    agregarAlHistorial(accion)
}

/* function renderizar historial con for of */

/* 
function renderizarHistorial(historial){
    let listaStrHistorial = ''
    for (const item of historial){
        listaStrHistorial = listaStrHistorial + `
        accion: ${item.accion}
        operacion: ${item.operacion}
        numeros: ${item.a}, ${item.b}
        resultado: ${item.resultado}
        `
        }
    return listaStrHistorial
}
console .log (renderizarHistorial(historial)) 
*/


/* function realizar historial con map (bueno para react) */


function renderizarHistorial(historial){
    const arrayDeElementos = historial.map(function(elemento){
        return `
        accion: ${elemento.accion}
        operacion: ${elemento.operacion}
        numeros: ${elemento.a}, ${elemento.b}
        resultado: ${elemento.resultado}
        `
    })
    return arrayDeElementos.join('\n')
}

alert (renderizarHistorial(historial)) 


/* Crear una funcion llamada agregarAlHistorial(elemento historial)

elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
}

va agregar el objeto al array global historial 

vamos a hacer otra funcion llamada obtenerHistorial() que va a retornar el historial global 
 */

const historial = []
function agregarAlHistorial(elementoHistorial){
    historial.push(elementoHistorial)
}

agregarAlHistorial({
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2 }
)


function obtenerHistorial(){
    return historial
}

console .log  (obtenerHistorial())








/* ---------------------------------------------CODIGO CON LOCALSTORAGE--------------------------------------------------------- */
/* ooara tener persistencia de datos
 */

/* ejercicio? */
const objetoEnStr = JSON.stringify (historial)
alert (objetoEnStr)

function agregarAlHistorial (elementoHistorial){
    historial.push (elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial(){
    let historialStr = localStorage.getItem('historial')
    return JSON.parse(historialStr)
}

/* verificando que un usuario que entra ppor primera vez tenga un historial, aunque sea un array vacio */
if(obtenerHistorial() === null){
    /* si no hay historial guarde ell historial como array vacio */
    localStorage.setItem('historial', JSON.stringify([]))
}


/* Modificaciones al codigo */

function agregarAlHistorial (elementoHistorial){
    const historial = obtenerHistorial() /* hago una variable que se llame historial ppara que obtenga el historial del localStorage */
    historial.push (elementoHistorial)/* como se que obtenerHistorial es un array (por el if) y que nunca va a ser un null porque daria error le puedo hacer un push */
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

/* Nota: todo lo que hace la pagina debe estar por debajo del if porque es lo que se va a ejecutar primero */

/* Ahora cuando yo quiera ingresar al historial tengo que poner obtenerHistorial.
Ejemplo: si quiero renderizar el historial tengo que hacer:
console .log (renderizarHistorial(obtenerHistorial())) voy a renderizar el historial obtenido y lo voy a mostrar por consola */






/* ---------------------------------------------CODIGO DE AGUS--------------------------------------------------------- */

/* 
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function validarPassword(password){
    return (Boolean(password) && password.length > 6 && password != password.toLowerCase())
} 

function validarOperacion (operacion){
    return (operacion === '+' || operacion === '-')
}


function validarNumero (numero){
    return Boolean(numero) && !isNaN(numero)
}

function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}

const DATOS = { 
    EMAIL: {
        mensaje: 'ingrese un email',
        error: 'direccion de email no valida, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: 'Ingrese una contrasena. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
        error:'Error. Debe contener:' +  '\n' + '-Una letra en mayuscula' + '\n' + '-Almenos 6 caracteres ',
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

function calcular (operacion,numero1,numero2){
    let resultado;
    if (operacion === '+'){
        resultado = (Number(numero1)+Number(numero2))
    }
    else if (operacion === '-'){
        resultado = (numero1-numero2)
    }
    return {
        operacion: operacion, 
        numero1: numero1, 
        numero2: numero2, 
        resultado: resultado
    }
}

function calculadora() {
    let operacion = obtenerDato(DATOS.OPERACION)
    let numero1 = obtenerDato(DATOS.NUMERO1)
    let numero2 = obtenerDato(DATOS.NUMERO2)
    let accion = calcular(operacion, numero1, numero2)
    generarAlerta(accion)
    agregarAlHistorial(accion)
}

const historial = [];

function generarAlerta(accion) {
    alert('El resultado de ' + accion.numero1 + " " + accion.operacion + " " + accion.numero2 + ' es ' + accion.resultado)
}

function agregarAlHistorial(accion) {
    historial.push({
        accion: 'CALCULAR', 
        operacion: accion.operacion, 
        a: accion.numero1, 
        b: accion.numero2, 
        resultado: accion.resultado
    })
}

function renderizarHistorial(historial) {
    let renderHistorial = ' El historial es:\n'
    for (let element of historial) {
        renderHistorial = renderHistorial + 'Accion: ' 
        + element.accion + ' operacion: ' + element.operacion 
        + ' numeros: ' + element.a + ', ' + element.b + ' resultado: ' 
        + element.resultado + '\n'
    }
    alert(renderHistorial)
} 
 */

