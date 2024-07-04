/* -------------------------------EVENTOS-------------------------------*/ 

/* los eventos son una accion que sucede y cuando sucede nosotros podemos hacer algo en consecuencia*/


/* -------------------------------FORMAS DE ASIGNAR UN EVENTO-------------------------------*/ 
/* 1er. forma de poder conectar una funcion a un evento en cierto elemento es hacerlo mediante HTML, mediante un atributo de la etiqueta con la que queremos que se desarrolle el evento (en este caso hice <button onclick="alertar()">Haz click 1</button> en mi HTML) */


function alertar() {
    alert('hola desde un evento click')
}

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

btnclick3.addEventListener('')

/* -------------------------------ON CLICK-------------------------------*/

/* se va activvar cuando yo haga click en el elemento que designe */

/* -------------------------------ADDEVENTLISTENER-------------------------------*/
/* es un metordo para añadir un evento */

