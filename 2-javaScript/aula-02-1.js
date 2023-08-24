console.log('10'+2)
console.log('10'/2)
console.log('10'*2)
// o javascript não tem o mesmo comportamento entre as operações. ele concatena com o
// sinal de + ao invés de proirizar a soma
console.log('algumastring'/2) // Vai imprimir 'NaN' que significa Not a Number
let number = 10 + 20
console.log('A Nina falou que 10 + 20 é: '+number)

console.log(7/0) // retornará 'Infinity' ao invés de dar um erro

console.log(0.1+0.7) // retornará um numero estranho. É um comportamento tíṕico do JS

console.log(203.54322.toFixed(2))

// console.log(203.toFixed(2)) dá erro. no caso teriamos que por um parenteses

console.log((203).toFixed(2))

const raioG = 35
const raioP = 25

const areaG = Math.PI*Math.pow(raioG, 2)
const areaP = Math.PI*Math.pow(raioP, 2)

console.log('a area do circulo de raio '+raioG+' é '+areaG)
console.log('a area do circulo de raio '+raioP+' é '+areaP)

const dif = areaG - areaP
console.log(`a diferenca entre as duas é ${dif}`)

const string1 = 'Uniciv'
console.log(string1)
console.log(string1.charAt(1)) //devolve qual letra ocupa a posicao 1 da string, lembrando que começa a contar do Zero
console.log(string1.charCodeAt(1)) // devolve o codigo em ANSI do caractere
console.log(string1.indexOf('i')) // conta quantas ocorrencias da string 'i' existem na string string1
console.log(string1.substring(2)) // retorna uma sbstring a partir do indice dado
console.log(string1.substring(1,4)) // retorna uma substring indicada pelos indices de inicio e fim nessa mesma
// ordem, separados por virgula

console.log('Faculdade '.concat(string1)) //uma função própria para concatenação. uma terceira forma de concatenar
console.log(string1.replace('i','1')) // o professor falou pra estudar regex

const nomes = 'Ana, Gabriel, Maria, Nina, João'
let arrayNomes = nomes.split(',')

console.log(arrayNomes)