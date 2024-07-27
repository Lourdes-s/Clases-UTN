import React from 'react'

export const NewColorCardForm = ({handleSubmitNewColorCard}) => {
    return (
        <form onSubmit={handleSubmitNewColorCard}>
            <h2>Crea tu carta de color</h2>
            <div>
                <label htmlFor='color-1'>Ingresa Color 1</label>
                <input id='color-1' name='color-1' type='text'/>
            </div>
            <div>
                <label htmlFor='color-2'>Ingresa Color 2</label>
                <input id='color-2' name='color-2' type='text'/>
            </div>
            <div>
                <label htmlFor='color-3'>Ingresa Color 3</label>
                <input id='color-3' name='color-3' type='text' />
            </div>
            <div>
                <label htmlFor='color-4'>Ingresa Color 4</label>
                <input id='color-4' name='color-4' type='text'/>
            </div>
            <div>
            <label htmlFor='color-4'>Ingresa una fecha </label>
            <input id='fecha' name='fecha' type='text'/>
            </div>
            <input type='submit' />
        </form>
    )
}
