let valores = [1, 4, 6, 3, 10, 6, 9 ]
/* for (let pos=0; pos < valores.length; pos++) {
    console.log(` A posição ${pos} tem o valor: ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
