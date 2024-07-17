import React from "react"; 


export const ColorCard = ({tarjeta}) => {
    const {likes, fecha, colores} = tarjeta
    return (
        <div className="color-card">
            <div className="colors">
                <ColorItemList colors={colores}/>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"></i> <span>{likes}</span></button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    
    )
}

/* los estilos inline en react se escriben como objetos */

/* --------------------------------------------MAPEO-------------------------------------------- */

/* 
el mapeo es una tecnica de renderizado de arrays, esta relacionado a los arrays porque .map es una tecnica avanzada de los arrays.
para poder aplicar esta tecnica tenemos que tener arrays, es una forma de hacer una especie de un for of, creabamos una plantilla y la renderizabamos con el innerHTML
*/

/* un mapeo retorna siempre un array */

/* un componenete que su tarea va a ser listar las cartas de colores, recibe el array de colores  */

export const ColorCardList = ({colors_info}) => {
    return(
        <>
        {
            colors_info.map((color_info)=> <ColorCard tarjeta={color_info} key={color_info.id}/>)
        }
        </>
    )
}

const ColorItemList = ({colors}) => {
    return (
        <>
            {colors.map((color, index) => <ColorItem color={color} key={color + index}/> )}
        </>
    )
}

const ColorItem = ({color}) => {
    return(
        <div className="color" style={{backgroundColor: color}}></div>
    )
}