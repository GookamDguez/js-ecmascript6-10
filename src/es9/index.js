//Lanzada en junio de 2018

// operador de reposo: puede extraer las propiedades
// de un objeto que aun no se ha construido.
//spread operator
const obj = {
    name: 'Gaby',
    age: 21,
    country: 'ESA'
}

let { name, ...all } = obj
console.log(name, all)
console.log(all)

//Propiedades de propagacion
//  poder unir N elementos de objetos a un nuevo objeto
const obj = {
    name: 'Gaby',
    age: 21
}

const obj1 = {
    ...obj,
    country: 'ESA'
}

console.log(obj1)

//PROMISE FINALLY

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Helous World'), 3000)
             //resolve('Helou World')
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(Response => console.log(Response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


// Mejoras en regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
//para poder acceder a cada grupo.
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

/**
 * ES9:
 * - Rest / Spread propieties
 * - promise finally
 * - RegEx named capture groups
 */