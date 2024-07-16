import React from "react"


/* 
export const ProfileCard = (props) =>{
    console.log(props)
    return(
        <div>
            <h2>Nombre Completo: {props.persona.nombre} {props.persona.apellido}</h2>
            <span>Edad:{props.persona.edad}</span>
            <h3>Ubicacion: {props.persona.ubicacion} </h3>
        </div>
    )
} 
*/

/* props es el unico parametro que puede recibir un componente */


/* para evitar poner tantas veces props puedo hacer una constante que sea persona= props.persona */

/* 
export const ProfileCard = (props) =>{ 
    console.log(props)
    const persona = props.persona
    return(
        <div>
            <h2>Nombre Completo: {persona.nombre} {persona.apellido}</h2>
            <span>Edad:{persona.edad}</span>
            <h3>Ubicacion: {persona.ubicacion} </h3>
        </div>
    )
} 
*/

/* ---------------------------------------DESESTRUCTURACION--------------------------------------- */

/* OBJETOS */

/* const persona = {
nombre: 'pepe'
apellido: 'suarez'
} */

/* lo desestructuro de la siguiente manera: */

/* const {nombre,apellido} = persona */ /* necesito poner llaves en la desestructuracion */


/* ARRAYS */

/* const valores = [valor 1, valor 2] */

/* const [valor_1,valor_2] = valores  */


/* EJEMPLO DE DESESTRUCTURACION */

/* 
const saludarPersona = ( { nombre,apellido } ) =>{

    console.log('Hola, ${nombre} ${apellido}')
}
*/

/* saludarPersona({ nombre:'pedrito', apellido:'cabrera'})*/



export const ProfileCard = ({persona}) =>{ /* yo se que props tiene una propiedad y esa propiedad es persona, la voy a desestructurar  */
    const {nombre,apellido,edad,ubicacion} = persona 
    return(
        <div>
            <h2>Nombre Completo: {nombre} {apellido}</h2>
            <span>Edad:{edad}</span>
            <h3>Ubicacion: {ubicacion} </h3>
        </div>
    )
} 

/* hago la desestructuracion y mi codigo empieza a ser mas leible */