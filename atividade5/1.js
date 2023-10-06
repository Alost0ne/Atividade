import PromptSync from "prompt-sync"

const prompt = PromptSync()

const valorProduto = prompt("Digite um valor para o produto: ")
const quantidade = prompt("Digite um valor para a quantidade: ")
const desconto = prompt("Digite um valor para o desconto: ")

function calcularPrecoComDesconto(valorProduto, quantidade, desconto, calDesconto){
    const valorAtualizado = (valorProduto * quantidade)
    calDesconto(desconto, valorAtualizado)
}


function calDesconto(desconto, valorAtualizado){
    console.log((valorAtualizado*(desconto/100)) - valorAtualizado)
}

