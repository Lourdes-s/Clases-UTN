import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Index'
import { Link } from 'react-router-dom'
import { BiChevronRightCircle } from "react-icons/bi"
import { obtenerProductos } from '../../Fetching/products.fetching'


const Home = () => {

    const [productsList, setProductsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchString, setSearchString] = useState('')
    const [isWriting, setIsWriting] = useState(false)

    useEffect(
        () => {
            /* USE EFFECT aca va la funcionalidad que queremos controlar, es decir que posterga la ejecucion de la callback */
            setTimeout(
                () => {
                    obtenerProductos()
                    .then(
                        (productos) => {
                            console.log('productos', productos)
                            if(searchString){
                                const nuevaListaProductos = productos.filter(
                                    producto => 
                                        producto.titulo.toLowerCase().includes(searchString.toLowerCase()) 
                                )
                                setProductsList(nuevaListaProductos)
                            }
                            else{
                                setProductsList(productos)
                            }
                            setIsLoading(false)
                        }
                    )
                },
                500 /* estoy haciendo un delay manual, para emular la carga del fetch como lo haria en un contexto normal */
            ) 
        },
        [searchString] /* array vacio en un efecto significa que solo se va a cargar una vez */
        /* agregandole el searchString hace que cada vez que yo escriba algo se vuelva a ejecutar el efecto */
    )



    const handleChangeValue = (e) => {
        console.log(e.target.value)
        setSearchString(e.target.value)/* porque cuando escribo no se ve lo que escribo en mi input, entonces seteo como valor el e.target.value entonces lo que yo escriba se va a guardar en el estado de searchString, deja de ser comillas vacias*/
    }
    const handlechangeFocus = () => {
        setIsWriting(true)
    }
    const handleAbortFocus = () => {
        setIsWriting(false)
    } 

    return (
        <div>
            <Navbar/>
            {isWriting && <h2>Escribiendo...</h2>}
            <h1>Lista de productos</h1>
            <input
            placeholder='buscar producto' 
            onChange={handleChangeValue} 
            value={searchString} 
            onFocus={handlechangeFocus}
            onBlur={handleAbortFocus}
            /> 
            {/* al valor del input le agregas el valor del estado, el en onchage pasas la referencia de la funcion*/}
            {searchString != '' ? <h2>Escribiendo</h2> : <h2>Esperandocambios</h2>}
            <div>
                {
                    isLoading
                    ? <h2>Cargando</h2>
                    : productsList.map(product => {
                        return (
                            <div key={product.id}>
                                <h2>{product.titulo}</h2>
                                <span>Precio: ${product.precio}</span>
                                <Link to={'/detail/' + product.id}>ver detalle<BiChevronRightCircle className='icon' /></Link> {/* para darle estilos le puedo poner una class */}
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

/*----------------------------------------------THEN/CATCH----------------------------------------------*/

/* then catch son metodos que nos van a permitir controlar que va a pasar cuando se resuelva obtener productos */
    /* then se va a ejecutar cuando la prmesa sea resuelta y todo este correcto. va a ejecutar una callback que se va a resolver cuando se termine de ejecutar la promesa then por parametro va a recibir el retorno de la funcion asincronica */
 /* catch se ejecuta cuando haya algun arror */
/*     .catch((error) => {
        console.log('hubo un error al llamar a la informacion')
    })
     */

/*----------------------------------------------EFECTOS----------------------------------------------*/

/* los efectos nos permiten elegir cuantas veces se va a recargar una funcionalidad, si el estado nos permite saber cuantas veces se recarga o nos permite controlar la recarga de un componente, los efectos nos permite cambiar la funcionalidad*/
/* es un nuevo hook llamado useEffect */
/* es una funcion que recibe dos parametros, el primer parametro es una callback, el segundo parametro es un array */
/* el primer parametro que recibe, es decir la callback es el mismo efecto */
/* cuando cambio un estado se vuelve a renderizar el componente, lo que significa que se vuelve un bucle infinito */

/*----------------------------------------------SET TIME OUT----------------------------------------------*/
/* ejecuta una funcion despues de cierto tiempo, es decir que posterga la ejecusion de una callback */
/* esta expresado en ms(en este caso son 2seg), es decir que se ejecuta el hola despues de 2 segundos */
/* 
setTimeout(
    () => {
        console.log('hola')
    },
    2000 
) 
*/

/*----------------------------------------------SET INTERVALS----------------------------------------------*/


export default Home