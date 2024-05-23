var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {

    //VALORES PARA OS DIAS DEFINIDOS POR INDICES.

    // console.log(`Hoje é ${diaSem}`)
    
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Seguda-Feira')
        break
    case 2:
        console.log('Hoje é Terça-Feira')
        break
    case 3:
        console.log('Hoje é Quarta-Feira')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break

        default:
            console.log('Valor não identificado')
            break
}




