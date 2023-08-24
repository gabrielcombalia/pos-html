const peso1 = 1.2
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1,typeof peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

//Number pelo que parece é uma classe já embutida no JS que retorna varias funções como essa que reconhece se é
// inteiro ou não

const avaliacao1 = 7.829
const avaliacao2 = 8.009

const total = peso1*avaliacao1 + peso2*avaliacao2
console.log(total)
const media = total / (peso1 + peso2)
console.log('A média é ' + media)
console.log(media.toFixed(2)) //detalhe para a transformação em string
console.log(typeof media, media)
console.log('aproximação sem casa decimal: ' + Math.ceil(media))


