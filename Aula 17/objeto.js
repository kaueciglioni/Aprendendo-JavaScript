let amigo = {nome: 'josé',
sexo:'M',
peso:85.4,
engordar(p){
    this.peso += p
    if (p < 0) {
        console.log('Emagreceu')
    }
    else {
        console.log('Engordou')
    }
}}

amigo.engordar(-10)
console.log (`${amigo.nome} pesa ${amigo.peso}KG`)
console.log(typeof amigo)