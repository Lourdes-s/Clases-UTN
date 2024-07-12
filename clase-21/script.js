/* -------------------------------CAPTURAR UN EVENTO SUBMIT-------------------------------*/

/* 
const formLoginHTML = document.getElementById('form-login')

formLoginHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('se envio envio el formulario')
}) */

/* quiero llamar al input username */

/* 1. llamo a mi formulario: */

/* const formLoginHTML = document.getElementById('form-login')*/

/* 2. voy a hacer un consele.log del name de mi input <input name="username" id="username" type="text" value="annonymus"> que en este caso es username, si yo lo logueo asi me va a mostrar el objeto input, pero si yo quiero saber el valor a esto le tengo que agregar el .value*/

/* console.log(formLoginHTML.username.value) */

/*estaria accediendo al valor del input username que esta dentro de ese formulario 
output:annonymus
*/

/* -------------------------------CAPTURAR EL VALOR DE MI INPUT SIN EL EVENTO -------------------------------*/

/* Esto es sin tomarlo del evento sino de mi HTML 
Esto lo podemos usar cuando usemos submit 
Entonces cuando haya un submit*/

/* 
const formLoginHTML = document.getElementById('form-login')

formLoginHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()//voy a prevenir el comportamiento por defecto en mi formulario
    console.log('se envio envio el formulario')//voy a hacer este console.log indicando que se envio el formulario
    console.log(formLoginHTML.username.value)//despues voy a hacer un console.log indicando el valor de mi inputusername
}) 
*/

/* -------------------------------COMO SABER DE QUE FORMULARIO SALIO EL SUBMIT-------------------------------*/

/* 
const formLoginHTML = document.getElementById('form-login')

formLoginHTML.addEventListener('submit', (evento) => {
evento.preventDefault()
    console.log('se envio envio el formulario')
    console.dir(evento)
}) 
*/

/* esto me va a dar un submitevent, dentro de esto aparece un elemento que se llama target que me trae el formulario del cual salio el evento submit */


/* -------------------------------COMO LLAMAR DESDE EL TARGET-------------------------------*/
/*podemos reemplazar nuestra variable formLoginHTML por evento.target y nos traen lo mismo*/

/* 
const formLoginHTML = document.getElementById('form-login')//no se usa para nada solo para agregar el evento

formLoginHTML.addEventListener('submit', (evento) => {//lo que esta asociando el evento es que cuando se envio el submit provino de ese formulario
    evento.preventDefault()
    console.log('se envio envio el formulario')
    const formulario = evento.target // para no confundirme puedo hacer una constante que guarde evento.target que va a ser lo mismo que formLoginHTML
    console.log(formulario.username.value)// entonces esto me traeria el valor del username de mi formulario
}) 

*/

/* Entonces si tubiese dos formularios: */

/* 
const formLoginHTML = document.getElementById('form-login')//primero llamo las variables para ponerle un evento
const formRegisterHTML = document.getElementById('form-register')


const handleLogin = (evento) => {//hago una variable para que pueda ser reutilizada
    evento.preventdefault()//para evitar que se recargue automaticamente 
    console.log('se envio el formulario')
    const formulario = evento.target// para que guarde el evento.target que seria como llamar al elemento de mi HTML, si yo hubiese puesto formlogin html no hubiese podido usar la segunda opcion
    console.log(formulario.username.value)//hago un console.log con la variable que cree antes, el user name (que es lo que quiero saber y pido el value (valor))
} 
*/

/* de esta forma es mas generica y la puedo reutilizar en diferentes formularios asi: */

/* 
formLoginHTML.addEventListener('submit', handleLogin) 
formRegisterHTML.addEventListener('submit', handleLogin)//puedo usar el mismo handler porque hice una funcion reutilizable 
*/

/* -------------------------------COMO AGREGAR CONDICIONES-------------------------------*/

/* Si tiene menos de 4 caracteres debe mostrar error */

/* 
const formLoginHTML = document.getElementById('form-login')

const handleLogin = (evento) => {
    evento.preventDefault()
    console.log('se envio el formulario')
    const formulario = evento.target
    const username = formulario.username.value//pongo const para no modificar el nombre que puso el usuario 
    if (username.length < 4) {
        const errorTextHTML = document.getElementById('error-text-username')
        errorTextHTML.innerText = 'El username debe tener 4 caracteres'
    }
} 

formLoginHTML.addEventListener('submit', handleLogin)  */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const validarMayuscula =(texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}

const VALIDACIONES = {

    password: {
        validacion:(texto) => texto && texto.includes('#') && validarMayuscula(texto),
        errorText: 'La password es incorrecta'
    },
    email: {
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)),
        errorText: 'El email es incorrecto'
    },
    username: {
        validacion: (texto) => texto && texto.includes('-') && validarMayuscula(texto),
        errorText: 'El username es incorrecto'
    }

}


const obtenerValoresFormulario = (formulario) => {
        
    const inputs = ['username', 'password', 'email']
    const inputsInfo = {}
    for(let input of inputs){
        const spanErrorHTML = formulario.querySelector('.error-text-' + input)
        const valor = formulario[input].value
        inputsInfo[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        }
    }
    return inputsInfo
}


const formLoginHTML = document.getElementById('form-login')


const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.target
    const valoresFormulario = obtenerValoresFormulario(formulario)
    console.log(valoresFormulario)
    for(const propiedad in valoresFormulario){
        const objetoInputFormulario = valoresFormulario[propiedad]
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
        }
        else{
            objetoInputFormulario.errorHTML.innerText = ''
        }
        
    }
}

formLoginHTML.addEventListener('submit', handleSubmit)

/* 
tarea:

Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'

*/