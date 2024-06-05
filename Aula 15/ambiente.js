let num = [15, 2, 4, 5, 2]
console.log(num)
console.log(`o numero de indice dois é : ${num[2]}`)
num.sort((a, b) => a - b) /* Ordem númerica */
num[5] = 8
console.log(num)
console.log(`a lista em ordem numérica fica: ${num}`)

console.log(`Quantidade de indices: ${num.length}`)