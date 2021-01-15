// junio de 2019
let array = [1,2,3, [1,2,3, [1,2,3]]]
//falt: recibe como argumento la profundidad
//      sino lleva parametros obtiene la profundidad de solo un nivel.
console.log(array.flat(2))
/* Resultado
[
  1, 2, 3, 1, 2,
  3, 1, 2, 3
]
*/

//flat map: mapear cada elemento depues pasarle una funcion 
// y aplanarlo segun el resultado 
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))
/* Resultado: [
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
] */

//trimStart --> eliminar espacios en blanco al inicio del string
let hello = '     hello world'
console.log(hello)
console.log(hello.trimStart())
//trimEnd --> eliminar espacios en blanco al final del string
let hello = 'hello world    '
console.log(hello)
console.log(hello.trimEnd())

//Optional Catch 
try{

//}catch(error){
}catch{
    error
}

//Transformando arreglo a objeto o de objeto a arreglo
let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))

//Objeto de tipo simbolo que nos ayuda acceder a una descripcion
//solo añadido en es10
//ver que elementos hay dentro de estos.
let mySymbl = `My Symbol`
let symbol = Symbol(mySymbl)
console.log(symbol.description)

/*
TC39 comite que se encarga de recibir propuestas, que se encarga de llevarlas para ser añadidas en JS
*/