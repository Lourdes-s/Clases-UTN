import React from 'react'
import { ProfileCard } from './ProfileCard'

let nombre = 'pepe'

const obtenerNombre = () => 'pepe'



const App = () => {
    const sumar = () => 1 + 1
    const persona_1 ={
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 89,
        ubicacion: 'calle 123'
    }
    const persona_2 ={
        nombre: 'juan',
        apellido: 'ruiz',
        edad: 48,
        ubicacion: 'av scal 123'
    }
    return (
        <div>
            <h1>Hola {obtenerNombre()}</h1> {/* para que se lea pepe tengo que hacer una interpolacion y esto se hace poniendo el nombre entre llaves*/}
            <h2>Hola {persona_1.nombre}</h2> {/* de esta forma llamo un objeto */}
            <span>Resultado de 1 + 1: {1 + 1}</span> {/* cuando interpolo estoy trabajando con logica de JS entonces el 1 + 1 se va a ejecutar y me va a devolver u 2 */}
            <br/>
            <span>Resultado de 1 + 1: {sumar()} </span> {/* la forma en la que lo haria generalmente seria haciendo una funcion y llamandola */}
            <ProfileCard
                persona = {persona_1}
            />
            <ProfileCard 
                persona = {persona_2}
                /> {/* a lo que llamabamos atributos, aca lo vamos a llamar como props */}
        </div>
    )
}


export default App

