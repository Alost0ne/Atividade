 import PromptSync from "prompt-sync"

const prompt = PromptSync()

const arrayPrint = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
]

arrayPrint.forEach(function(arrayLinha) {
    arrayLinha.forEach(function(valorArray) {
        if (valorArray> 10) {
            console.log(`${valorArray}, `)
        }
    })
})