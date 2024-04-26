const numero1 = prompt("Digite um número")
const numero2 = prompt("Digite um outro número")

const somar = function (a, b) {
    return a + b
}

const subtrair = function (a, b) {
    return a - b
}

const multiplicar = function (a, b) {
    return a * b
}

const dividir = function (a, b) {
    return a / b
}

console.log(`Números informados: ${numero1} e ${numero2}`)
console.log(`Soma: ${somar(numero1, numero2)}`)
console.log(`Subtração: ${subtrair(numero1, numero2)}`)
console.log(`Multiplicação: ${multiplicar(numero1, numero2)}`)
console.log(`Divisão: ${dividir(numero1, numero2)}`)
