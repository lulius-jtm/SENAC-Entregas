const turno = prompt("Em qual turno você estuda? M para matutino, V para vespertino e N para noturno").toUpperCase()

switch (turno) {
    case "M":
        console.log("Bom dia")
        break;
    case "V":
        console.log("Boa tarde")
        break;
    case "N":
        console.log("Boa noite")
        break;
    default:
        console.log("Boa aula")
}
