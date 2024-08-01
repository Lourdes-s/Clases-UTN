import React from 'react'
import { useParams } from 'react-router-dom'
import { product_list } from '../../data'

const Detail = () => {

    const {productId} = useParams() /* useparams debe estar dentro del browser router y va a capturar los valores que hayan en nuestra URL que sean variables, es decir que tenga los ':' y este valor lo puedo guardar en una variable*/
    console.log(productId)
    const product = product_list.find(product => product.id === Number(productId)) /* fuerzo la transformacion a numero porque todo lo que viene del useparams es un string */
    console.log(product)
    return (
        <div>
            <h1>{product.titulo}<span>#{product.id}</span></h1>
            <h2>precio: ${product.precio}</h2>
            <button>Comprar</button>
            </div>
    )
}

export default Detail