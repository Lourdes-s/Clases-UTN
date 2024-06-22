### CALCULADORA

Funcionalidades:

CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

HISTORIAL:
-me va a mostrar un historial

LOGIN:
-crear usuario (esta se ejecuta al entrar a la caluladora)
    -nombre de usuario
    -password
    -email (debe estar validado)


Utilidades:
-validacion
-opcion de CANCELAR

INGRESO DE DATOS:
-prompt

EGRESO DE DATOS:
-alert

---------- EJECUCION ----------

PRIMERO: LOG-IN
Todo el logeo debe estar dentro de una funcion

1. Prompt va a solicitar al usuario un email

2. Validamos que el email sea un email. 

En caso de que no sea valido volvera a solicitar el email
En caso de que si sea valido dira 'email registrado' {emailRegistrado}

> Vamos a validarlo con un RegEx(expresion regular) -----> /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g -----> me dice que tiene que tener nombre@domain_name(ej. gmail/hotmail)
a este RegEx vamos a agregarle un .test(y aca el mail del usuario)

Ejemplo:
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) 

El RegEx nos retorna un boolean(true o false)

3. Una vez solicitado el email vamos a solicitar password

4. valideremos que: tenga una letra en mayuscula, que no sea null o '' y que tenga almenos 6 caracteres.

En caso de que no volvera a solicitar
En caso de que si sea valido dira password registrada {password}

>LOGIN DEBE RETORNAR un objeto usuario:
{
    email: value,
    password: value
}

5. Como el proceso de obtener email y password tienen la misma estructura vamos a hacer una funcion que sea de 'obtenerDato'

6. vamos a hacer un diccionario para suimplificar el codigo



SEGUNDO:  CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'
operacionesValidas = ['+', '-']

1. Solicitar una operacion:

> La operacion es valida si es alguna de las operaciones validas 
Vamos a solicitar un numero 1: 
Validar que sea un numero
Vamos a solcitar un numero 2:
validar que sea un numero

>En caso de elegir una '+'
Aca sumamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

>En caso de elegir una '-'
Aca restamos
Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}



HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola

Crear una funcion llamada agregarAlHistorial(elemento historial)
elementoHistorial = {
    accion: 'CALCULAR',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
}
va agregar el objeto al array global historial 

vamos a hacer otra funcion llamada obtenerHistorial() que va a retornar el historial global 