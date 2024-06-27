
/* -------------------------------LOCALSTORAGE SESSIONSTORAGE------------------------------- */

/* METODOS DE LOCALSTORAGE Y SESSIONSORAGE */

/* SETITEM (key, value) para guardar o reemplazar un valor*/

/* ejemplo: */

/* 
let datoImportante = 'el mate se toma amargo'

localStorage.setItem('array', {})

 */

/* GETITEM (key en str) para obtener el valor asociado a esa key  */

/* ejemplo: */

/* console .log (localStorage.getItem('importante')) */ 

/* REMOVEITTEM(key str) */
/* localStorage.removeItem('array') */

/* localStorage.clear() */

/* JSON:  JAVASCRIPT OBJECT NOTATION
JSON es la variable global que usamos para acceder a los metodos .parse(), .stringify()

Las reglas de JSON


Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso "" (no valen '' o ``)
Si quiero escribir null undefined o numeros los sigo usando como antes
SI ESCRIBEN OBJETOS O ARRAYS la ultima coma no va
Caso incorrecto
{
    "nombre": "pepe",
    "edad": 70, //esta coma da error
}
Caso correcto:
{
    "nombre": "pepe",
    "edad": 70
}
*/

//Este string es transformable a objeto de JS
/* let string = '{"username": "pepe"}' *///este string esta escrito en formato JSON


//Transforma al formato objeto de JS
/* let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto) */

//Transforma a formato text/string
/* JSON.stringify() */

/* let objetoEnString = JSON.stringify(objeto) */

/* console.log(objetoEnString) *///'{"nombre": "pepe", "edad": 70}


/* 
Transformar el array historial a string con notacion JSON y mostrarlo por alert


AUTOCORRECCION:
La alerta no debe mostrar [object Object]
*/

/* const objetoEnString = JSON.stringify(historial) */

/* 
En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo
pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
*/


/* 
La funcion obtener historial debe tomar el historial del localStorage y retornalo como ARRAY 
*/