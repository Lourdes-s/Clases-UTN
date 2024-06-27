
### como invocar una funcion:

function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

console .log (validarEmail('asdasd@gmail.com'))

function agregarAlHistorial(elementoHistorial){
    historial.push(elementoHistorial)
}


function obtenerHistorial(){
    return historial
}
