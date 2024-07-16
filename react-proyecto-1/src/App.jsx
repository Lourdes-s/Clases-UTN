import React from 'react'
import {PI,doSomething, Titulos} from './funciones'
import { Carrito } from './Components/Carrito/Carrito'



console.log(PI)
/* doSomething() */

const App = () => {//funcion que se llama App(A mayuscula para indicar que es un componente) que retorna
    return (
        <div>
            <Titulos></Titulos>
            <h1>Hola desde react</h1>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <Carrito/>{/* cuando hablo de componentes digo que voy a instansear */}
        </div>
    )
}

const ProductCard = () => {
    return (
        <> {/* //es un fragmento nos sirven para evitar crear un elemento padre */}
        <div>
            <h3>Titulo producto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum nisi architecto unde quo sunt commodi asperiores quasi totam, eligendi odio repellendus consectetur dignissimos magni, magnam, numquam quas harum ipsam?</p>
            <span>Precio: $value</span>
            <button>Comprar</button>
        </div>
        </>
    )
}

/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Mostrar el Carrito en el componente App

*/






export default App

