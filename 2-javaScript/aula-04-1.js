const carrinho = [
    '{"nome": "arroz", "preco": 9.53}',
    '{"nome": "feijão", "preco": 7.28}',
    '{"nome": "macarrão", "preco": 3.07}',
    '{"nome": "tomate", "preco": 2.45}',
    '{"nome": "ovos", "preco": 15.99}',
    '{"nome": "sal", "preco": 9}',

]
console.log(carrinho)


//essa constante que é uma função que consulta a biblioteca json, transforma o array 'carrinho' em um objeto json
const jsonParse = json => JSON.parse(json)
const detalhe = elemento => elemento.preco

const caro = item => item.preco >= 8.00
// vamos usar a função filter que recebe 'caro' da mesma forma que map recebe uma constante/função do mesmo padrão
console.log('------- sem filtro --------')
const resultado = carrinho.map(jsonParse)
console.log(resultado)

console.log('------- com filtro --------')
const resultado2 = carrinho.map(jsonParse).filter(caro)
console.log(resultado2)

//vamos de novo construir meu proprio filtro na unha

Array.prototype.meuFiltro = function (callback) {
    const newArray = []
    if (callback(this[i], i, this)) {
        newArray.push(this[i])
    }
    return newArray
}

const resultado3 = carrinho.map(jsonParse).filter(caro)

console.log(resultado3)