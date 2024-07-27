/* -------------------------------EVENTOS-------------------------------*/ 

/* los eventos son una accion que sucede y cuando sucede nosotros podemos hacer algo en consecuencia*/


/* -------------------------------FORMAS DE ASIGNAR UN EVENTO-------------------------------*/ 
/* 1er. forma de poder conectar una funcion a un evento en cierto elemento es hacerlo mediante HTML, mediante un atributo de la etiqueta con la que queremos que se desarrolle el evento (en este caso hice <button onclick="alertar()">Haz click 1</button> en mi HTML) */


/* 
function alertar() {
    alert('hola desde un evento click')
} 
*/

/* 2da. Forma es dandole un id a un elemento de mi HTML */

/* 
const btnClick2 = document.getElementById('btn-especial')
btnClick2.onclick = alertar // asigno la referencia de la funcion (la misma funcion)

///////////////////////////////////////////////////////////////////////

btnClick2.onclick = function (){
    alert('hola desde un evento click')
}//estoy pasando una funcion anonima como valor de la propiedad onclick del boton 2, estoy haciendo que cuando se activve el onclick se va a activar la funcion

*/

/* 3ra. forma es dandole una clase a un elemento de mi HTML */

/* tengo 3 formas de hacerlo:  */

/* const btnclick3 = document.querySelector('.btn') *///en este caso me conviene porque estra mas orientada a lo que quiero resolver ya que solo quiero llamar a un elemento con esa clase y me devuelve un OBJETO

/* const btnclick3 = document.getElementsByClassName('btn')[0] *///getElementByClassName me devuelve una coleccion (array) un tengo que usar corchetes 0 para que me traiga al primer elemento y ahi me va a llamar al primer boton con la clase btn

/* const btnclick3 = document.querySelectorAll('btn')[0] *///que me llama a todos los que tengan esa clase, me devvvuelve una coleccion, va buscar a todas las clases que sean btn

/* const btnclick3 = document.getElementById('btn-3') */
/* btnclick3.addEventListener('click', alertar) *///le doy los dos elementos, el tipo y le paso la funcion por parametro(callback) la callback no es mas que una funcion que se va a ejecutar cuando alguien haga click sobre el boton 3, en cambio si yo pongo alertar() se va a invocar automaticamente sin que le de click al boton y no va a pasar nada cuando le de click. Es comun que a veces se haga de esta manera porque es comun que a veces la funcion se la vamos a dar unicamente a ese boton, asi no tiene sentido guardarla de forma global si solo la voy a usar en el boton, por ejemplo un boton de login, por lo general solo hay un boton de login entonces no es necesario que este guardada en un lugar para despues reutilizarla 

/* -------------------------------ON CLICK-------------------------------*/

/* se va activvar cuando yo haga click en el elemento que designe */

/* -------------------------------ADDEVENTLISTENER-------------------------------*/
/* es un metodo para añadir un evento */








/* -------------------------------FUNCIONES EN FLECHA-------------------------------*/
/* son un tipo de funcion que se escriben diferente, que tienen de ventajoso que tienen lo que llamamos el retorno directo, en este caso el retorno lo hace la flecha, se va a abreviar la funcion en flecha cuando la funcion no haga muchas acciones o directamente la funcion retorne como podria ser calcularIva (iva) => iva * 0.21*/

/* como lo haciamos antes: */

/* 
function alertar() {
    alert('hola desde un evento click')
} 
*/

/* como es una funcion en flecha */

/* 
const alertar2 = () => {//tengo que darle una variable no uso la palabra function
    alert ('hola desde un evento click')
}
*/

/* hasta ahora es todo igual */
/* 
const sumar = (a, b) =>{
    return a + b 
}

alert (sumar(8, 8)) 
*/

/* pero con las flecha no es necesario poner el retorno, puedo haacer directamente: */

/* const sumar (a, b) => a + b*/

/*puedo hacer una validacion asi: */

/* const validarNumero = (numero) => Boolean(numero) && !isNaN(numero) */

/* 
const  hacerTarea = () => {
    let tipo = prompt('Que tipo de tarea quieres hacer?')
    guardarTarea (tipo)
    return tipo 
}
 */

/* const calcularIva(iva) => iva * 0.21 */

/* const generarUsuario (username, email ) => ({username: username, email: email}) *///con los parentesis retorno un objeto sin que las llaves intervengan



/* -------------------------------VENTAJAS DE LAS FUNCIONES EN FLECHA-------------------------------*/

/* la principal ventaja es la legibilidad a la hora de hacer una callback */

/* ejemplo: */

/* 
const personas =[
    {
        nombre: 'pepe',
        edad: 14
    },
    {
        nombre: 'maria',
        edad: 50
    },
    {
        nombre: 'pedro',
        edad: 30
    },
    {
        nombre: 'sarah',
        edad: 25,
    }
    
]
 */

/* 
const personasMayoresDeEdad = personas.filter( (persona) => persona.edad >= 18 )
console.log(personasMayoresDeEdad)//me trae el array con los 3 objetos 
*/

/* por cada persona quiero retornar si la persona.edad es mayor o edad a 18 */


/* -------------------------------VENTAJAS DE LAS FUNCIONES EN FLECHA-------------------------------*/

/* Vamos a aprender a capturar un dato de un input primero creo mi input en html y le pongo un id, despues lo llamo desde mi js haciendo una constante con el nombre que quiera y con HTML en mayuscula al final (para una mejor practica), lo hago igual al document llamo por el id. despues le voy a añadir un evento con el addEventListener y le agrego el evento Submit, es el evento de envio de un formulario, se activa cuando el usuario presiona el boton submit y se envia el formulario (es un evento especial), por eso es necesario que el input en mi html tenga el tag submit
*/

/* const formularioHTML = document.getElementById('formulario') */

/* const handlesubmit = (evento) => { */ // en las funcioner handler el evento siempre exite, el evento que trae metadatos del evento en si mismo
/*     evento.preventDefault() */// con esto prevengo el comportamiento por defecto que tiene el evento, en este caso que se actualice la pagina cada ves que aprieto submit
/* } */

/* formularioHTML.addEventListener('submit', handlesubmit) */ //al addventlistenert va a recibir una funcion, que va a ser una callback a una funcion nativa o anonima pero en este caso le vamos a llamar handler(manejo)


/* handler en este caso es la funcion que se va a activar cuando se haga el evento submit, es el manejador */

/* si nosotros creamos una funcion en nuestro programa que le voy a poner al addeventlistener le tendria que poner handle al principio por una cuestion de buenas practicas*/

/* el addeventlistener va a pasar a submit el evento como parametro */

/* en conclusion: en una pagina estan sucediendo eventos constantemente, lo que yo estoy haciendo con el addeventlistener es que cuando suceda este evento en especifico dentro de todos los que estan sucediendo ejecutame esta funcion y la funcion opcionalmente al yo escribir evento captura el evento, atrapa esos datos del evento  */


/* -------------------------------COMO FUNCIONA LOS EVENTOS-------------------------------*/

/* 
const btnClick3 = document.getElementById('btn-3')

btnClick3.onclick = function (evento){
    console.log(evento)
}
*/

/* el evento los hace por detras el navegador, ni siquiera es necesario que pongamos 'evento' podemos poner 'pepe' muchos solo ponen 'e', pero siempre el primer argumento de la funcion handler es el evento*/
/* si voy a mi pagina me aparece pointerEvent (eventos de mi puntero), esto me trae un objeto que contiene metadatos del evento donde te dice que ocurrio, unos muy importante son screen X y screen Y en estos te dicen en que posicion X e Y se hizo el click*/
/* tambien esta la propiedad target que es de donde se hizo el evento en este caso te dice que esta asociado al boton numero 3, este es importante porque supongamos que tenemos tres productos y le queremos poner en favoritos a uno, esta bueno saber en que boton fue que hizo click */


/* -------------------------------COMO CAPTURAR UN INPUT-------------------------------*/
/* 
1. Necesito el formulario en este caso lo tengo guardado en una constante(formularioHTML)
2. En el handlersubmit pongo el formularioHTML.(con el nombre de mi input) que en este caso es dato
Si yo le hago un console.log a eso me da un objeto que proviene de mi HTML pero no es un HTML porque en JS no exite el HTML
Si yo le hago un console.dir me sale el 'input#dato' este no es cualquier input, sino que es especificamente el que utilizamos
Si yo en mi input escribi pepe y puse submit cuanto yo entre en el 'inout#dato' en sus valores en la parte de VALUE me va a salir 'pepe'
3. Entonces para acceder a el valor del input tengo que poner (formularioHTML.dato.value)
*/

/* 
const formularioHTML = document.getElementById('formulario')

const handlesubmit = (evento) => {
    evento.preventDefault()
    console.dir(formularioHTML.dato.value)
}


formularioHTML.addEventListener('submit', handlesubmit) 
*/