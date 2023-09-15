import PromptSync from "prompt-sync"

const prompt = PromptSync()

const name = prompt("Qual seu nome? ")

console.log(`Olá, ${name}`)