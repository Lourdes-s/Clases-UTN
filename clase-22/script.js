
/* -------------------------------CALLSTACK-------------------------------*/
/* pila de llamadas */

/* Es el orden en el que se van a llamar las funciones, siempre el primero en entrar es el ultimo en salir */

/* 
por ejemplo:

prompt(alert())

1. primero se resuelve la alerta
2. despues de resuelve el prompt 
porque es una funcion sincronica
*/

/* es muy diferente a una cola, en las colas el primero en llevar es el primero en atenderse */



/* -------------------------------CONSULTA HTTP-------------------------------*/

/* internet se basa en las consultas http es una forma de transferir informacion, es un protocolo de transferencia, por ejemplo cuando se transfieren archivos de una computadora a otra es un protocolo de transferencia, todas las paginas web usan la transferencia http y eso se ve en la direccion (link) y tambien agrega el 's' porque es una tranferencia mas segura */

/* -------------------------------FETCH-------------------------------*/

/* la funcion asincronica se llama fetch (buscar) 
fetch emite consultas http, es una forma de hacer consultas con JS
*/

/* cuando yo entro a una pagina web, mi navegador emite una consulta de tipo HTTP a algo llamado servidor DNS(domain name server), este servidor va a buscar o emitir una consulta a su base de datos que contiene nombres e ips. Por ejemplo: yo busco la pagina mati.com y esa consulta sale de mi navegador y le envio al server DNS el nombre de dominio, el servidor DNS busca en la base de datos si existe para ese nombre de dominio alguna ip asociada (la ip es la direccion real), busca y matchea con la ip por ejemplo 162.122.1321 y a esta ip la retorna el servidor DNS por http. Esta ip es la direccion a una computadora real y teniendo esta direccion me puedo comunicar al host que esta alojando la pagina web real, entonces la ip matchea con el host que es el que tiene mi pagina web (que podria ser hostinger), entonces yo envio esta direccion al host y este me retorna HTML (el index). Por esto se dice que siempre tiene que haber un index HTML porque se dice que siempre por defecto el host te retorna un index.
El server DNS busca si para el nombre de dominio que estoy buscando existe una ip como tal, si yo busco algo como fbdshgfdsjgh35uytgfesudbgdfg48ty44tg.com dice 'la prueba de DNS ha finalizado y no se encuentra' porque ese nombre de dominio no esta asociado a ninguna ip

Cuando busco mati.com hago una consulta HTTP de tipo get
Cada vez que hago una consulta HTTP se emite una respuesta.
por ejemplo yo como usuario hago una request(consulta) por ejemplo de tipo get y el servidor me va a dar una response(respuesta) de cualquier tipo, esto llamamos PROTOCOLO DE TRANSFERENCIA 
las consultas a su vez tienen un status 
por ejemplo si yo entro a mercado libre emito una consulta tipo get a la ip de mercadolibre.com y la response es el index.html de mercado libre y ademas me va a traer un status 
ejemplo RESPONSE (status: 200) -> dependiendo el numero con el que empiece va a significar diferentes cosas:
2xx significa que todo salio bien 
4xx significa que hubo un error del lado del frontend 
5xx significa que hubo un error del lado del backend 

ejemplo: 
error 404 -> porque estoy buscando un recurso que no encuentra, como fue un error mio por eso sale 404 
error 401 -> porque estoy consultando en un lugar donde no estamos autorizados
status 201 -> creo un post y el servidor me lo aprueba me da un status 201 

Dependiendo de lo que haya sucedido en la respuesta me va a dar un status 


las consultas http tienen metodos algunos metodos son:
GET -> cuando yo hago un get a una direccion de ip estoy mandando un tipo de consulta al servidor y cuando la reciba el get me puede devolver por ejemplo el index.html
POST
PUT
DELETE
*/

/* -------------------------------API-------------------------------*/

/* nosotros consumimos una api y la api nos va a ir dando informacion en base a lo que vayamos consumiendo la mayoria de las aplicaciones web que consumimos tienen una o mas APIs.
lo que hace es comunicar. por ejemplo si yo tengo un e-commerce la API es el que gestiona la consulta de la pagina web a la base de datos, no se consume la base de datos directamente de la pagina web por un tema de seguridad. Entonces la API seria una aplicacion que se esta ejecutando en un servidor externo a la pagina web que yo puedo consumir y hacer un get por ejemplo a: http://www.miservidor.com/productos y me va a devolver una respuesta que suele ser en formato JSON (un objeto) 

respuesta:
{
productos: []
} 
la ventaja de esto es que mi vervidor aca puede ejecutar toda la seguridad que yo quiera, por ejemplo si yo quisiera que no cualquier persona me pueda consumir los productos puedo pedirle a mi servidor que cuando alguien me haga un get pueda ser una persona que yo quiera que se pueda comuniucar conmigo. este es un tema mas de backend.
En backend vamos a aprender a desarrollar estas APIs en frontend vamos a aprender a consumirlas.
consumo al servidor esta ruta http://www.miservidor.com/productos y me va a traer un objeto de JS (responde con JSON) 
por eso vamos a usar JSON placeholder 
*/

/* 
const URL_API = 'https://jsonplaceholder.typicode.com'// esto me va a servir para despues poder conectarme con esta API, es buena practica tenerla en mayuscula 

const response = fetch(URL_API + '/users', {//fetch es una funcion que espera recibir un string que es el string de direccioones(URL) y un objeto que son las opciones de configuracion de mi fetch yo estoy haciendo una consulta pero tengo que especificar que tipo de consulta 
    method: 'GET'//entonces abro un objeto e indico que el metodo de consulta va a ser get porque quiero obtener datos, si yo no lo indico igualmente va a ser por defecto de tipo get 
})
*/

/* al ser fetch de tipo asincronico entonces la respuesta la voy a guardar en una constante, cuaando fetch me devuelva la respuesta la devuelvoo en una constante*/

/* si yo hago un console.log(response) -> me va a dar un promise pending */

/* -------------------------------PROMESAS-------------------------------*/

/* las promesas es una especie de nuevo tipo de dato  */
/* El promise pending es un estado de la promesa. Cuando yo me coloco arriba de fetch dice que me devuelve una promise(un objeto especial).
La promesa tiene 3 estados posibles:
1. PENDIG(la promesa inicialmente esta pendiente (dependiendo si se completa o noo se completa va a pasar a distintos estados)
2. RESOLVED/FULLFIELD si se resuelve
3. REJECTED si se rechaza 


*/

/* entonces si yo hago el console.log(response)
la callstack se da de la siguiente manera:
-response(proviene de fetch)
-console.log

como el callstack necesita la respuesta y la respuesta viene del fetch, el fech tiene que responder algo para que el console.log se pueda ejecutar, el problema es que fetch es un codigo asincronico no puede ser esperado por defecto, sino que se va a ejecutar en simultaneo al console.log : console.log() |  fetch() y para que fetch se ejecute en simultaneo al console.log necesita crear un estado de respuesta provisorio, entonces el fetch se resuelve momentaneamente para que el console.log se pueda ejecutar como pending, retorna un promise pending. Entonces siempre va a quedar en pending porque nunca se va a ejecutar el console.log una vez el fetch este resuelto o falle. Entonces estoy directamente estoy ejecutando el resultado de fetch pero al ser asincronico y necesita tiempo devuelve pending.

La naturaleza de fetch es asi, tarda un tiempo en resolverse, el tiempo que tarde fetch en cargarse, esot depende de la saturacion del servidor y si es un buen servidor, si el servidor esta muy lejos. 
Ademas console es extremadamente rapido y siempre va a ser mas rapido que hacer un fetch.
Si tubiese que cargar todos los datos de forma sincronica tardaria mucho en cargar toda la web.
Es una forma de quitarle peso a la pagina.
*/

/* -------------------------------COMO RESOLVER ESTE PROBLEMA-------------------------------*/

/* 1. voy a hacer una funcion: */

    const URL_API = 'https://jsonplaceholder.typicode.com'//la variable deberia ser global

const obtenerUsuarios = async () =>{//voy a decir que mi funcion va a trabajar con codigo asincronico usando la palabra reservada async, siempre va antes del parametro
    const response = await fetch(URL_API + '/users', { // y voy a indicarle que cuando cree la variable response todo el codigo aguarde a que se resuelva el fetch poniendo la palabra reservada await, el await siempre va en funciones asincronas y ademas va antes de la funcion que quiero que se aguarde 
        method: 'GET'
    })
    console.log(response)//despues de eso se debe ejecutar el console.log
}
/* entonces de esta forma le indico una sincronia al codigo asincronico */
obtenerUsuarios()

/* si yo quiero ahora mostrar los post */

const obtenerPosts = async () => {
    const response = await fetch(URL_API + '/posts', { 
        method: 'GET'
    })
    console.log(response)
}

obtenerPosts()

/* aunque yo ponga obtener usuario antes que post no significa que vaya a cargar antes porque no hay un orden, son asincronicos entonces va a aparecer el que se cargue primero 
cuando tenemos codigo asincronico nos conviene pasarlo a manera sincronica por lo menos dentroo de la misma funcion a codigo sincronico porque nosotros estamos trabajando de alguna manera en sincronia 
*/