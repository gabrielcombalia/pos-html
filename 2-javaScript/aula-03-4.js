// notação json
const carrinho = [
    '{"nome": "arroz", "preco": 9.53}',
    '{"nome": "feijão", "preco": 7.28}',
    '{"nome": "macarrão", "preco": 3.07}',
    '{"nome": "tomate", "preco": 2.45}',
    '{"nome": "ovos", "preco": 15.99}',
    '{"nome": "sal", "preco": 9}',

]

const jsonParse = json => JSON.parse(json)
const detalhe = elemento => elemento.preco

const resultado = carrinho.map(jsonParse)
console.log(carrinho)
console.log(resultado)
console.log(resultado.map(detalhe))

// o professor constroi o proprio map na unha
Array.prototype.meuMap = function (callback) {
    const newArray = []
    for(let i=0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const resultado2 = carrinho.meuMap(jsonParse).meuMap(detalhe)

console.log('resultado: ' + resultado2)