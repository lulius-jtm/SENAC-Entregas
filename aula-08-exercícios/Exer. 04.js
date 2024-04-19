const Numero1 = Number (prompt("Digite um número."))
const Numero2 = Number (prompt("Digite um outro número."))

console.log("O primeiro é maior do que o segundo:", Numero1 > Numero2)
console.log("O primeiro é igual ao segundo", Numero1 = Numero2)
console.log("O primeiro é divisível pelo segundo:", Numero1 % Numero2 === 0)
console.log("O segundo é divisível pelo primeiro", Numero2 % Numero1 === 0)