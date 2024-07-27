import React, {useState} from 'react'
import { ColorCardList } from './ColorCards/ColorCard'
import { Contador } from './Contador/Contador'
import { NewColorCardForm } from './NewColorCardForm/NewColorCardForm'



const colors_cards_info = [
    {
        likes: 168,
        fecha: '22 hours',
        colores: ['#F6F5F2','#F0EBE3','#F3D0D7','#FFEFEF'],
        id: 1
    },
    {
        likes: 125,
        fecha: '3 months',
        colores: ['#5A639C','#7776B3','#9B86BD','#E2BBE9'],
        id: 2
    },
    {
        likes: 924,
        fecha: '5 months',
        colores: ['#D20062','#D6589F','#D895DA','#C4E4FF'],
        id: 3
    },
    {
        likes: 476,
        fecha: '5 months',
        colores: ['#F8F4EC','#FF9BD2','#D63484','#402B3A'],
        id: 4
    }
]


const App = () => {
    const [valor, fnCambiadora] = useState(1) /* aca estamos desestructurando un array y vamos a desestructurar el retorno de la funcion useState */
    const incrementar = () => {/* hacemos una funcion para incrementar */
        fnCambiadora(valor + 1)
        console.log('me cargo')
    }
    const [colorCardInfo, setColorCardInfo] = useState (colors_cards_info)/* la llamamos como el nombre del estado pero con un set adelante */

    const handleSubmitNewColorCard = (e) => {
        e.preventDefault()
        const newColorCard = {
            colores: [], /* lo creo como array vacio pero despues pusheo del form */
            likes: 0, /* likes es 0 porque inicialmente no tiene likes */
            fecha: e.target.fecha.value, /* fecha porque el nombre del input de fecha es fecha */
            id: 7
        }
        for(let i = 1  ; i <= 4; i++){
            newColorCard.colores.push(e.target['color-' + i].value) 
        }
        setColorCardInfo([...colorCardInfo, newColorCard])
    }
        return (
        <div>
            <ColorCardList colors_info={colorCardInfo}/>
            <NewColorCardForm handleSubmitNewColorCard={handleSubmitNewColorCard}/>
{/*             <span>Contador: {valor}</span> */}
{/*             <button onClick={incrementar}>Incrementar</button> */} {/* onClick (que se escribe en camelcase) y le pasamos por parametro la funcion pero sin los parentesis*/}
{/*             <Contador limit={10}/> */}
        </div>
    )
}





export default App

