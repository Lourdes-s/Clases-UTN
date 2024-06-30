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