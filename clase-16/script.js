
/* --------------------MEJORAR UNA FUNCION-------------------- */

/* function esVocal(letra){

    if(letra === 'a'||letra === 'e'||letra === 'i'||letra === 'o'||letra === 'u'){
        return true
    }
    else{
        return false
    }
}
 */

/* EJEMLLO MEJORADO */

/* function esVocal(letra){
    return ['a', 'e', 'i', 'o', 'u'].includes(letra)
}

const vocales = ['a', 'e', 'i', 'o', 'u']
console.log(vocales.includes('a'))
 */

/* --------------------FOR OF-------------------- */


const nombres = ['pepe', 'juan', 'maria', 'ezquiel']

/* for(let nombre of nombres){
    console.log(nombre)
} */

/* Por cada nombre quiero que aparezca un mensaje por consola diciendo 'hola {nombre}' */
/* console.log('Hola ' + nombres[0])
console.log('Hola ' + nombres[1])
console.log('Hola ' + nombres[2])
console.log('Hola ' + nombres[3])
 */
/* Quiero un contador del 0 al 3 */

/* for(let index = 0; index < nombres.length; index = index + 1){
    let nombre = nombres[index]

    console.log('Hola ' + nombre)
}

 */
const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
]

/* Por cada elemento de mi carrito mostrar por consola

Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}
*/


for(let index = 0; index < carrito.length; index = index + 1){
    const producto = carrito[index] 
    
    console.log(producto)

    console.log('Has comprado el producto ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio unitario de ' + producto.precio)
}


/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]
 */

/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'

*/


/* 
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]
let sumatoriaEdad = 0
for(let index = 0; index < personajes.length; index = index + 1){
    const personaje = personajes[index] 
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}


console.log('La sumatoria de edades es ' + sumatoriaEdad) */
/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

for(let index = 0; index < personajes.length; index = index + 1){
    console.log(personajes[index])
}


for(const personaje of personajes){
    console.log(personaje)
}
 */
/* Ir al ejercicio anterior y hacerlo con for of */


/* 
const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '54543565'
}

let resultado = ''

for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':</span> ' + '<span>' + datos[propiedad] + '</span>' 

}

console.log(resultado) 
*/


/* --------------------METODOS AVANZADOS DE ARRAYS-------------------- */

/* le decimos metodo avanzado a un metodo que recibe una callback */

/* FIND()
find es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de callback es thurty entonces el elemento se retornara y se cortara el find
Si el valor de retorno de callback es falsy entonces se ignorara (pasaremos al siguiente elemento)
puede retornar el elemento o undefined (Si no encuentra ningun elemento)

/* EJEMPLO */


/* 
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]

const pepe = personajes.find(function(personaje){
    return personaje.nombre === 'pepe'
})


personajes.forEach(function (personaje){
    console.log(personaje)
})
 */

/* FILTER()
Filter es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de callback es thurty entonces el elemento se agragara al array resultante
Si el valor de retorno de callback es falsy entonces se ignorara (pasaremos al siguiente elemento)
SIEMPRE FILTER RETORNARA UN ARRAY 
SI el array es vacio significa que nadie paso el filtro
*/

EJEMPLO

const personajesMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
})


/* MAP ()
Nos sirve para crear un array en base a otro array
Va a recorrer el array y por cada elemento la callback va a ejecutarse
El valor de retorno de callback es el valor del nuevo elemento que se agregara al array resultante
RETORNA SIEMPRE UN ARRAY
*/

/* EJEMPLO */

/*
const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]

const nombresObjetos = ['vaso', 'tornillo', 'computadora']

const arrayInverso = nombresObjetos.map(function(nombre){
    return {nombre: nombre}
})

const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>'+ objeto.nombre + '</div>'
})

const resultadoX = objetos.map(function(objeto){
    return 'pepe'
})
console.log(arrayInverso)

OUTPUT:
[
    '<div>vaso</div>',
    '<div>tornillo</div>',
    '<div>computadora</div>',
]
*/

/* MAP()
Sirve para saber si un elemento cumple con x condición, si hay por lo menos un elemento que lo cumpla deja de buscar y devuelve true y si no encuentra ninguno que cumpla con la condición de vuelve false.
 */

/* EJEMPLO */

/*
const numeros = [1, 2, 3, 4, 5];

const numeroPar = numeros.some(numero => numero % 2 === 0);
console.log(numeroPar); // true

const numeroMayorA10 = numeros.some(numero => numero > 10);
console.log(numeroMayorA10); // false
 */

/* EVERY()
Sirve para saber si todos los elementos de mi array cumplen con x condición, pasa por todos los elementos de mi array y si todos cumplen con la condición devuelve true en caso de que uno de los elementos no cumpla deja de iterar y devuelve false
 */

/* EJEMPLO */

/*
const numeros = [1, 2, 3, 4, 5];

const esMayorA0 = numeros.every(numero => numero > 0);
console.log(esMayorA0); // true

const sonTodosMayorA1 = numeros.every(numero => numero > 1);
console.log(sonTodosMayorA1); // false
 */

/* FINDINDEX()
Sirve para buscar el Index o índice de X elemento si cumple con x condición, Si no cumple devuelve -1
 */

/* EJEMPLO */

/*
const numeros = [2, 8, 1, 3, 4];

const esImpar = numeros.findIndex(numero => numero % 2 !== 0)
console.log(esImpar); // 2

const numeroMayorA10 = numeros.findIndex(numero => numero > 10)
console.log(numeroMayorA10); // -1 
*/