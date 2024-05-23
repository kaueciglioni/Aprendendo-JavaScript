var agora =  new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas `)
if (horas > 5 && horas <= 11) {
    console.log('Bom dia meu DEV!!')
}
else if (horas >= 12 && horas <= 18) {
    console.log('Boa tarde meu DEV!!')
}
if (horas >= 19 && horas <= 23) {
    console.log('Boa noite meu DEV!!')
}

