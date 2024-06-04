const generoFilme = prompt("Qual o gênero do filme que vocês assistirão?").toUpperCase()
const precoIngresso = Number(prompt("Qual é o preço dos ingressos?"))
const precoMaximo = 15

if ((generoFilme === "FANTASIA") && (precoIngresso < precoMaximo)) {
    console.log("Bom filme!")
}

else {
    console.log("Escolha outro filme")
}
