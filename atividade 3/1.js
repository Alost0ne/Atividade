import PromptSync from "prompt-sync"

const prompt = PromptSync()

const num1 = prompt("Digite o 1° número: ")
const num2 = prompt("Digite o 2° número: ")
const num3 = prompt("Digite o 3° número: ")

console.log(`${num1}, ${num2}, ${num3}`)

if(num1 > num2 && num1 > num3){
    console.log(`O 1° é o maior número: ${num1}`)
}else if(num2 > num3){
    console.log(`O 2° é o maior número: ${num2}`)
}else {
    console.log(`O 3° é o maior número: ${num3}`)
}