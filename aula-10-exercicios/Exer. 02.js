const comidasFavoritas = [ "Massa", "Carne", "Cachorro Quente", "Sucos", "Chá de pêssego" ]

console.log(comidasFavoritas)

console.log(`Essas são as minhas comidas preferidas`)
console.log(`1.`, comidasFavoritas[0])
console.log(`2.`, comidasFavoritas[1])
console.log(`3.`, comidasFavoritas[2])
console.log(`4.`, comidasFavoritas[3])
console.log(`5.`, comidasFavoritas[4])

const comidaDoUsuario = prompt(`Qual é a sua comida favorita?`)

comidasFavoritas[1] = comidaDoUsuario

console.log(comidasFavoritas)
