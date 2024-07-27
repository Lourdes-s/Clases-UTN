import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Detail, Home } from './Pages/Index'


function App() {
    return (
        <>
            <Routes>
                <Route path ='/' element={<Home/>} /> {/* path va a determinar donde o que ruta vamos a estar utilizando y el element va a determinar que componente se va a renderizar en esa ruta */}
                <Route path='/detail/:productId' element={<Detail/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default App


/* REACT es una SPA (single page application)
nunca se carga otro archivo distinto de index.html
*/