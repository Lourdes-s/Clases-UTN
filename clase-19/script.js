/* -------------------------------DOM------------------------------- */
/* (document objet model, es la representacion del HTML como objeto, es un objeto modelo del HTML) */ //representacion refiere a modelo, solo que representacion es mas facil de entender


/* console .dir(document) */

/* 
document es una variable global de JS 
la variable document es una representacion como objeto de nuestro html 
el 'console.dir' es lo mismo que el 'console.log' solamente que muestra los objetos como objetos, en cambio el console.log me lo muestra como html en la consola 
 */



/* GET ELEMENT BY ID  */
/* es un metodo que nos permite tener un elemento por su id y sino devvuelvve null*/

/* const titulo = document.getElementById('titulo') */ // es un HTML element

/* 
document es un objeto que representa el HTML. entonces es como decir de mi HTML obtengo elemento(etiquetas) por su id y ahi le paso el id en string y nos a llevar al objeto (o HTML) y va a buscar al elemento que tengo el id titulo, si no hay un id con ese nombre devvuelve null, lo hago con const porque los elementos de HTML para JS son elementos.
 */

/* Hay distintos tipos de HTML element.
por ejemplos h (h1, h2, h3, h4, etc.) dicen 'HTMLHeadingElement', es decir que tiene alguunas propiedades mas, pero son objetos que comparten ciertas propiedades  */



/* -------------------------------PROPIEDADES DE HTMLELEMENT------------------------------- */
/* Hay diferenttes propiedades que nos interesan: */

/* INNERTEXT
Es la propipiedad de text interno  
Ejemplo:
*/

/* titulo.innerText = 'pepe' */ // si yo hago esto estoy modificando es el titulo interno de mi h1, estoy modificando de mi Js a mi HTML 

/* si yo modifico al objeto documento, necesito saber que la pagina reacciona a la modificacion, es decir que si yo modifico al objeto document mi pagina (HTML) va a ser modificado tambien, por eso si yo voy a mi pagina aparece el pepe pero si yo voy a mi HTML nunca aparece el 'pepe'. en este caso es a 'titulo' pero titulo pertenece a document. Es como hacer un portal entre mi HTML y mi jS.  Nunca se modifica el HTML, lo que de modifica es lo que esta representando el navegador 
 */


/* INNERHTML
modifica el HTML interno de un elemento
Ejemplo:
 */

/* const caja = document.getElementById('producto')

caja.innerHTML = '<h1>Tv Samsung</h1>' */ // si voy a mi pagina se vve el h1 y se lee como h1 y si voy a inspeccionar es un h1 y se encribio dentro del div

/* CREATEELEMENT 
Nos permite crear un elemento 
Ejemplo:
*/

/* asi creo un elemento: */

/* const buttonProduct = document.createElement('button') */// yo estoy creando en mi HTML un elemento llamado button
/* buttonProduct.innerText = 'comprar' */// para darle el texto comprar al boton 
/* console.log(buttonProduct) */// si hago console.dir me muestra un objeto

/* a este elemento lo puedo añadir a otro elemento: */

/* caja.appendChild(buttonProduct) */// añade el elemento dentro de mi produucto (div)

/* una mejor forma de hacerlo seria: */


/* 
const caja = document.getElementById('producto')

const producto = {
    precio: 1000,
    nombre: 'tv Samsung',
    descripcion: 'lorem ipsum'
}

caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span> precio: $${producto.precio}</span>
    <button>comprar</button> 
`  
*/


/* si lo hago sin comillas invertidas ya saltos de linea no se puede hacer, es mas correcto usarlas */

/* es mejor practica agregarlo asi, antes se trabajaba de la otra forma, pero es mas engorroso hacer la creacion e ir añadiendo, entonces es mas practico usar el inner html y vas añadiendo la plantilla es mas sostenible a largo plazo, incluso la estructura es mas comoda 
incluso esta forma es como se usa en react*/

/* Ejercicio:

generar a partir del usuario el HTML:

const user = {
    username: 'pepesito',
    password: '**********4',
    address: 'av siempre viva',
    email: 'pepe@gmail.com'
}

h2 username 
span password
address input (y el valor debe ser la direccion del usuario)
email input (y el valor debe ser la direccion del usuario)
*/

/* Respuesta: */

/* 
const caja = document.getElementById('userinfo') 

const user = {
    username: 'pepesito',
    password: '**********4',
    address: 'av siempre viva',
    email: 'pepe@gmail.com'
}

caja.innerHTML = `
    <h2>Nombre de usuario:${user.username}</h2>
    <span>Contraseña:${user.password}</span> <br>
    <input value='${user.address}'> <br>
    <input value='${user.email}'>
`
 */









/* ------------------------------- tecnica de como renderizar un array ------------------------------- */


/* const products = [
    {
        precio: 1000,
        nombre: 'tv Samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv Samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv Samsung',
        descripcion: 'lorem ipsum'
    }
]

const productsContainerHTML = document.getElementById('products-container')

let productsList = ''

for(const producto of products){
    productsList = productsList + `
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <span> precio: $${producto.precio}</span>
        <div>
        <button>comprar</button>
        </div>
    `
} */

/* console .log(productsList) *///cuando hago console log me sale todo el HTML con mis productos 

/* Ahora que tengo el string puedo renderizarlo de la siguiente manera: */

/* productsContainerHTML.innerHTML = productsList *///esto es mejor porque recargo una sola vez el document 

/* si yo quito un elemento de mi array se va a ir de mi HTML haciendolo dinamico, lo que se muestra en mi HTML depende del array de productos que tenga */

/* 
const historial = [
    {
        id:'001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
] 
 */
/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div>
*/

/* const HistorialRender = document.getElementById('historial')

let listaDeProductos = ''

for (item of historial){

    listaDeProductos = listaDeProductos + `
    <div>
        <span>
            <b>ID: ${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>${item.fecha}</span>
        <br>
        <hr>
    </div>
    `
}

HistorialRender.innerHTML = listaDeProductos */









/* ------------------------------- Como llamar a un elemento por su clase ------------------------------- */

/* 
const historial = [
    {
        id:'001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
] 

const HistorialRender = document.querySelector('.lista') // con el punto seleccionamos a un elemento por su clase si yo quisiera llamar a uno por su id tengo que poner # en vez de punto si tenemos un elemento con ID es mejor usar el getElementById porque es mas directa la llamada entoces es mejor a nivel rendimiento. En el caso de que tenga dos clases que se llaman igual utiliza la primera

let listaDeProductos = ''

for (item of historial){

    listaDeProductos = listaDeProductos + `
    <div>
        <span>
            <b>ID: ${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>${item.fecha}</span>
        <br>
        <hr>
    </div>
    `
}

HistorialRender.innerHTML = listaDeProductos 
 */









/* -------------------------------si yo quiero llamar a todos los elementos que tienen la clase ------------------------------- */

const historial = [
    {
        id:'001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
] 
/* 
const HistorialRender = document.getElementsByClassName('.historial-item')

let listaDeProductos = ''

for (item of historial){
    listaDeProductos = listaDeProductos + `
    <div class='historial-item'>
        <span>
            <b>ID: ${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>${item.fecha}</span>
        <br>
        <hr>
    </div>
    `
}

HistorialRender.innerHTML = listaDeProductos  */

/* const listaHistorialHTML = document.querySelector('.lista') */
const listaHistorialHTML = document.querySelector('#lista-historial')
let itemHistorial = ''

for(const item of historial){

    itemHistorial = itemHistorial + `
    <div class='historial-item'>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
    </div>
    `
}

listaHistorialHTML.innerHTML = itemHistorial

const historialItemHTML = document.getElementsByClassName('historial-item') 

console.log(historialItemHTML) //esto me devuelve un HTML collection, que es una especie de array, que en realidad es un objeto pero si yo voy a mirarlo tiene length, esta enumerado (0,1,2,3) pero no es un array porque el prototype dice HTML collection, no tiene todo lo que tiene los array, si me posisiono en uno de esos me referencia a uno en mi HTML

for(const item of historialItemHTML){
    const btn = document.createElement('button')//creo un boton
    btn.innerText = 'Ver publicacion'
    item.appendChild(btn)// voy añadiendo a mi item
}
/* me a haciendo un boton sobre cada item */ /* cada item representaria cada div */