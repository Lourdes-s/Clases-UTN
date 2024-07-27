import React from 'react'
import { Navbar } from '../../Components/Index'
import { Link } from 'react-router-dom'
import { product_list } from '../../data'
import { BiChevronRightCircle } from "react-icons/bi";

const Home = () => {

    return (
        <div>
            <Navbar/>
            <h1>Lista de productos</h1>
            <div>
                {product_list.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{product.titulo}</h2>
                            <span>Precio: ${product.precio}</span>
                            <Link to={'/detail/' + product.id}>ver detalle<BiChevronRightCircle className='icon' /></Link> {/* para darle estilos le puedo poner una class */}
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home