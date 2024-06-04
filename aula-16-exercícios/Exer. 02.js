const turno = prompt("Em qual turno você estuda? M para matutino, V para vespertino e N para noturno").toUpperCase()

if (turno === "M") {
    console.log("Bom dia")
}
else if (turno === "V") {
    console.log("Boa tarde") 
}
else if (turno === "N") {
    console.log("Boa noite")
}
else {
    console.log("Boa aula")
}
