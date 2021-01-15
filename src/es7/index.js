// ECMASCRIPT nace en junio de 2016
let numbers = [1,2,3,7,8]

// includes --> para saber si se encuentra un valor dentro de un arreglo.
// si usas: .includes(6, 3)
// element --> 6: posicion donde se va EMPEZAR a buscar
// index ---> 3: valor que se va a buscar.
if(numbers.includes(7)){
    console.log('Si se encuentra el valor')
}else{
    console.log('No se encuentra.')
}

// Elevar a la potencia

let base = 4
let exponent = 3
let result = base ** exponent

console.log(result)