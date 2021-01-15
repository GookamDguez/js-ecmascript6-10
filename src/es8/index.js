// ECMASCRIPT EN JUNIO DEL 2017
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

//Object.entries --> Transformar objetos en matriz.
//Devolver la clave y valores de una matriz, 
//recibe como argumento el objeto que queremos convertir.
const entriess = Object.entries(data)
console.log(entriess)
//si queremos saber cuantos elementos tiene un elemento.
console.log(entriess.length)

//Devuelve los valores de un objeto a un arreglo
// Object.values --> nos permite ignorar las llaves(keys) de un objeto
// y saber solamente los valores de las llaves(keys)
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const valuess = Object.values(data)
console.log(valuess)
console.log(valuess.length)

// Se anadio el padding
// .padStart podemos añadir mas letras a un string
// argument1 --> maximo de caracteres
// argument2 --> letras a agregar
const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'-----'))

console.log('food'.padEnd(12, '-----'))

// la coma establece que pueden existir mas valores o no.
const obj = {
    name: 'Oscar',
}

// ASYNC AWAIT

//promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    //puede tener otras funciones
    console.log(hello)
}

helloAsync()

//trabajar de forma correcta

const anotherFunction = async () => {
    try{
        const hello = await helloWorld()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

anotherFunction()

/*
ES8:
- Async functions (Aync await)
- Object entries
- Object values
- String padding
*/