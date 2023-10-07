

const array = [10, 12, 15, 35, 40]

const media = (array.reduce((acumulador, soma) => acumulador + soma, 0))/ array.length
const maiorQueMedia = array.filter(num => num > media)
console.log(`Números maiores que a média: ${maiorQueMedia}`)

//Menor da lista
const menorValor = array.reduce(function(anterior, atual) {
    return anterior < atual ? anterior : atual
})
console.log(`\nMenor número da lista: ${menorValor}`)

const soma = (array.reduce((acumulador, soma) => acumulador + soma, 0))
console.log(`\nA soma dos valores são: ${soma}`)

const menorQueVinte = array.filter(num => num <20)
console.log(`\nOs valores menores que vinte são: ${menorQueVinte}`)