import React from "react"
import {Item} from "../CarritoItem/CarritoItem"

const Carrito = () => {
    return(
        <section>
                    <h1>Carrito de compras</h1>
                    <div>
                    <Item/>
                    <Item/>
                    <Item/>
                    </div>
        </section>
    )
}

export { Carrito }