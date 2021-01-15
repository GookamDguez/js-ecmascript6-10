// ECMASCRIPT6 salio en junio del 2015
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 21;
    var country = country || 'ESA';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar', age = 21, country = 'ESA'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Rambo', '23', 'CO');

let hola = 'Hello';
let mundo = 'World';
let epicPhrase = hola + ' ' + mundo;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2);

//MULTILINEA
let lorem = "Aqui esta una grn frase y deberia ser epica \n" + "Aqui tambien estaria otra xd";
//es6
let lorem2 = `Otra frase que necesitamos
ahora es otra frase epica multilinea con ES6`;

console.log(lorem)
console.log(lorem2)

//  DESESTRUCTURACION DE ELEMENTOS

let person = {
    'name':  'Oscar',
    'age': 32,
    'pais': 'MX'
}

console.log(person.name, person.age, person.pais)

//ES6
let {name, age} = person;
console.log(name,age);

//  OPERADOR DE PROPAGACION --> ...algo
//unir elementos de forma amigable

let team1 = ['Oscar', 'Julian', 'Richard']
let team2 = ['Valeria', 'Jess', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

//Scope de Var y Let
{
    var globalVar = 'Variable global'
}

{
    let globalLet = 'Variable Let'
    console.log(globalLet)
}

console.log(globalVar)
//console.log(globalLet) NO FUNCIONA POR EL SCOPE

const a = 'B' //No podemos reasignarlo a ='A'
console.log(a)

//Propiedad de objetos mejorada:

let name = 'Gaby'
let age = 21

//es5
obj = {name: name, age: age}
//es6
obj2 = {name, age}
console.log(obj2)

//  ARROW FUNCTION --> Funciones anonimas

const names = [
    {   name: 'Gby', edad: 21    },
    {   name: 'Oscar', edad: 32    }
]
//v1
let listOfNames = names.map(function (item){
    console.log(item.name)
})
//v2
let listOfNames2 = names.map(item => console.log(item.name))
//v3
const listOfNames3 = (name, age) => {
    //...
}
//v4
const listOfNames4 = name => {
   // ...
}
//v5 
const square = num => num * num

//  PROMESAS --> usar en lugar de callbacks

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!')
        }else{
            reject('Ups!!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    //.then( () => console.log('Hola'))
    .catch(error => console.log(error))

//  CLASES...

class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

//Importar un modulo
const hello = require('./module');
console.log(hello())

//  Generators ---> identificados con un *
//  Funcion especial que retorna un serie de valores segun el
//  algoritmo definido.

//  yield: guarda el estado de forma interna.
// yield* es una expresión, no una declaración, por lo que se evalua como un valor.

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }

    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators

/*
ES6:
- Default Params        - Promesas
- Template literals     - Parametros en objetos
- let, const            - Closes
- Spread Operator       - Modulos
- Destructuring         - Generadores
- Arrow functions
*/