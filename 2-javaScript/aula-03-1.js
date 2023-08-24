const  arrayValores = [5, 6.8, 4, 3.0, 9.9, 10]

console.log(arrayValores)

console.log(arrayValores.length)

console.log(arrayValores[4])

console.log(arrayValores[10])

arrayValores[5] = 12

console.log(arrayValores)

arrayValores[12] = 1.5

console.log(arrayValores)

console.log(arrayValores.length)

arrayValores.push(3.5)

console.log(arrayValores)

// o push adiciona mais um item após o ultimo elewento

arrayValores.pop() // remove o ultimo elemento

console.log(arrayValores)

delete arrayValores[1]

console.log(arrayValores)

arrayValores.shift() //remove o primeiro elemento

console.log(arrayValores)

arrayValores.unshift(19)

console.log(arrayValores)

arrayValores.splice(6,3,'joao', 'ana', 'maria', 'nina')

console.log(arrayValores)

arrayValores.splice(11,1)

console.log(arrayValores)

let novoArray = arrayValores.slice(5) //faz um novo array a partir do indice 5

console.log(novoArray)

novoArray = arrayValores.slice(2,8)

console.log(novoArray)