
// se for usado o let para declarar uma variavel, esta variavel só será usada dentro desse escopo, que pode ser uma
// função/metodo ou uma classe
// não há importancia se não terminar com ; ou se ter aspas simples ou duplas no javascript, o que é estranho
// o typescript fpi feito para tipar e corrigir certos erros do javascript de tipagem
// pode-se declarar uma variavel como var, let ou const. Const é, como o nome diz, uma constante, sem possibilidade
// de alterar o valor. var é genérico, daí a tipagem fraca. O let como foi dito antes tem um "período de vida" mais curto

// para rodar o javascript, não precisamos mais usar um navegador, pois hoje em dia existe o node

console.log('Olá Mundo!')

var a = 'ola mundo'
console.log(a)
console.log(typeof a)

a = 10
console.log(a)
console.log('tipo: ' + typeof a)
// podemos ver que a variavel é fracamente tipada, podendo se tornar string ou numero, usando var.


let b = 'Outro Valor'

console.log(b)
console.log('tipo: ' + typeof b)

b = {
    nome: 'Sou um objeto'
}

console.log(b)
console.log('')
console.log('tipo: ' + typeof b)

// já a const não pode ser mudada

const variavelconstante = 'eu sou constante'
console.log(variavelconstante)
console.log('tipo: ' + typeof variavelconstante)
let c = 'Esta é uma concatenação/interpolação clássica!'
console.log('oi'+a+'! '+c)
c = 'Este já é um template strings!'
console.log(`oi! ${a}! ${c}`)
