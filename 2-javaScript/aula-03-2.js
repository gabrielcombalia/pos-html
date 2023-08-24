const aprovados = ['João', 'Nina', 'Maria', 'Ana Claudia', 'Gabriel']

// forma traducional
aprovados.forEach(function (nome, i){
    console.log(`Nome do aprovado: ${i+1}- ${nome} `)
})

//arrow function
aprovados.forEach((nome,i) => {
    console.log(`Nome do aprovado: ${i+1}- ${nome} `)
})

// outra forma

aprovados.forEach(nome => console.log(`Nome do aprovado: ${nome}`))

// outra forma

const exibir = nome => console.log(`Nome: ${nome}`)
aprovados.forEach(exibir)


//criando uma função usando a classe array
Array.prototype.meuForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i],i, this)
    }
}
const exibir2 = nome => console.log(`Nome2: ${nome}`)
aprovados.meuForEach(exibir2)
