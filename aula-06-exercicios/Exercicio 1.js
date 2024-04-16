let nome 
let idade

console.log("Tipo do nome:", typeof nome)
console.log("Tipo da idade:", typeof idade)

/*
Esse tipo foi impresso porque
não foi atribuido um valor.
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log("Tipo do nome:", typeof nome)
console.log("Tipo da idade:", typeof idade)

/*
Nome e idade agora são strings,
pois seus valores foram atribuidos através do
prompt. O prompt sempre retorna uma string.
*/

console.log("Olá", nome, "você tem", idade, "anos")
