import React from 'react'/* buena practica, se recomienda que cualquier codigo que vayamos a escribir de un archivo JSX tenga que importar a react from react, nos evita errores*/
import ReactDOM from 'react-dom/client'/* es la libreria que nos permite crear un virtual dom (de react) */
import App from './App.jsx' /* estoy trayendo al componente (la funcion )app que tengo guardada */


ReactDOM.createRoot(document.getElementById('root')).render(//crea un dom virtual en el elemento con id root y drentro de este dom se ejecuta el metodo render que es voy a mostrar algo, voy a mostrar algo dentro de este elemento voy a renderizar lo que tenga adentro app
  <App />//los componentes cuando los queremos utilizar lo hacemos de esta manera tenemos que hacerlo con los cocodrilos, como si fuera HTML 
)

