function soma (a, b) {
    return a + b
}

function maiorIgual (a, b) {
    return a >= b
}

function verificarNumeroPar(numero) {
    const numeroPar = (numero % 2) === 0
    return numeroPar
}

function dadosMensagem (mensagem) {
    const tamanho = mensagem.length
    const maiuscula = mensagem.toUpperCase()
    console.log(tamanho, maiuscula)
}

console.log(soma(1, 2))
console.log(maiorIgual(-100, 100))
console.log(verificarNumeroPar(100))
console.log(verificarNumeroPar(1))
dadosMensagem("O rato roeu a roupa do Rei de Roma")
