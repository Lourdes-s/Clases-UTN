import React from 'react'
import { ColorCard, ColorCardList } from './ColorCards/ColorCard'

/* 
const color_card_1 = {
    likes: 168,
    fecha: '22 hours',
    colores: ['#F6F5F2','#F0EBE3','#F3D0D7','#FFEFEF']
}

const color_card_2 = {
    likes: 125,
    fecha: '3 months',
    colores: ['#5A639C','#7776B3','#9B86BD','#E2BBE9']
}

const color_card_3 = {
    likes: 924,
    fecha: '5 months',
    colores: ['#D20062','#D6589F','#D895DA','#C4E4FF']
}

const color_card_4 = {
    likes: 476,
    fecha: '5 months',
    colores: ['#F8F4EC','#FF9BD2','#D63484','#402B3A']
}
*/

/* vamos a pasar estas listar a un array */

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




/* puedo guardar elementos de jsx en un array directamente pero necesita esa propiedad key para funcionar correctamente */

const ListaArticulos = [
    <div key={1}>
        <h2>Pepe</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi est consequuntur ipsam rerum dolores molestiae reprehenderit praesentium pariatur perspiciatis consequatur quis asperiores, ad sapiente vero illum sequi modi enim deleniti.</p>
    </div>
    ,
    <div key={2}>
        <h2>Pepe</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi est consequuntur ipsam rerum dolores molestiae reprehenderit praesentium pariatur perspiciatis consequatur quis asperiores, ad sapiente vero illum sequi modi enim deleniti.</p>
    </div>
    ,
    <div key={3}>
        <h2>Pepe</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi est consequuntur ipsam rerum dolores molestiae reprehenderit praesentium pariatur perspiciatis consequatur quis asperiores, ad sapiente vero illum sequi modi enim deleniti.</p>
    </div>
]


const App = () => {
    const personas = ['pepe', 'juan', 'maria']
    const listaJSXpersonas = personas.map((persona) => {
        return (
            <div>{persona}</div>
        )
    })
        return (
        <div>
{/*
            <ColorCard tarjeta={color_card_1}/>
            <ColorCard tarjeta={color_card_2}/>
            <ColorCard tarjeta={color_card_3}/>
            <ColorCard tarjeta={color_card_4}/> 
*/}
{/* 
            {ListaArticulos}
            {listaJSXpersonas} 
*/}
            <ColorCardList colors_info={colors_cards_info}/>
        </div>
    )
}








export default App

