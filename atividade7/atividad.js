  import Promptsync from "prompt-sync"
  const prompt = Promptsync()

    function somar(num1, num2){
    return num1 + num2
  }
    function subtrair(num1, num2){
    return num1 - num2
  }
    function dividir(num1, num2){
    return num1 / num2
  }
    function multiplicar(num1, num2){
    return num1 * num2
  }

    function calcular(valorA, valorB, callback){
    return callback(valorA, valorB)
  }

    calcular(5, 2, multiplicar)