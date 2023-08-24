// o map serve para transformar uma array em outra array com dados transformados

const numeros = [1, 2, 3, 4, 5, 6]

let resultados  = numeros.map(function(e) {
    return e*2
})

console.log(resultados)

const soma2 = el => el+2
const triplo = el => el*3
const conversaoparaBrl = el => `R$ ${parseFloat(el).toFixed(2).replace('.',',')}`

resultados = numeros.map(soma2).map(triplo).map(conversaoparaBrl)

console.log(resultados)