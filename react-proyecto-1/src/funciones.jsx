import React from "react"

const PI = 3.14 /* puedeo exportar variables */

const doSomething = () => { /* puedo exportar funciones  */
    alert('algo')
}

const Titulos = () => {
    return (
        <>
        <h1>a</h1>
        <h2>b</h2>
        </>
    )
}


export{PI, doSomething, Titulos} /* es necesario tanto que el archivo .js exporte como que el jsx importe, porque sino no lo puedo utilizar */
/* puedo exportar variables, puedo exportar funciones  */