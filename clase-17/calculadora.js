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









function agregarAlHistorial (elementoHistorial){
    historial.push (elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial(){
    let historialStr = localStorage.getItem('historial')
    return JSON.parse(historialStr)
}


if(obtenerHistorial() === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const historial = obtenerHistorial()

agregarAlHistorial({
    accion: 'CALCULAR',
    operacion: '+',
    a: 1,
    b: 2,
    resultado: 2 }
)

alert (renderizarHistorial(historial)) 

const objetoEnStr = JSON.stringify (historial)
alert (objetoEnStr)





