import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Index'
import { Link } from 'react-router-dom'
import { BiChevronRightCircle } from "react-icons/bi"
import { obtenerProductos } from '../../Fetching/products.fetching'


const Home = () => {

    setTimeout(
        () => {
            console.log('hola')
        },
        2000 /* esta expresado en ms(en este caso son 2seg) */
    ) /* ejecuta una funcion despues de cierto tiempo */

    useEffect(
        () => {
            /* aca va la funcionalidad que queremos controlar, es decir que posterga la ejecucion de la callback */


            obtenerProductos()
            .then(
                (productos) => {
                    console.log('productos', productos)
                    setProductsList(productos) /*  cuando cambio un estado se vuelve a renderizar el componente, lo que significa que se vuelve un bucle */
                }
            )
        },
        [] /* array vacio en un efecto significa que solo se va a cargar una vez */
    )


    const [productsList, setProductsList] = useState([])

    return (
        <div>
            <Navbar/>
            <h1>Lista de productos</h1>
            <div>
                {productsList.map(product => {
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

/*---------------------------------------------- THEN/CATCH---------------------------------------------- */

/* then catch son metodos que nos van a permitir controlar que va a pasar cuando se resuelva obtener productos */
    /* then se va a ejecutar cuando la prmesa sea resuelta y todo este correcto. va a ejecutar una callback que se va a resolver cuando se termine de ejecutar la promesa then por parametro va a recibir el retorno de la funcion asincronica */
 /* catch se ejecuta cuando haya algun arror */
/*     .catch((error) => {
        console.log('hubo un error al llamar a la informacion')
    })
     */

/*---------------------------------------------- EFECTOS---------------------------------------------- */

/* los efectos nos permiten elegir cuantas veces se va a recargar una funcionalidad, si el estado nos permite saber cuantas veces se recarga o nos permite controlar la recarga de un componente, los efectos nos permite cambiar la funcionalidad*/
/* es un nuevo hook llamado useEffect */
/* recibe 2 parametros, es una funcion que recibe dos parametros, el primer parametro es una callback, el segundo parametro es un array */
/* el primer parametro que recibe, es decir la callback es el mismo efecto */


export default Home