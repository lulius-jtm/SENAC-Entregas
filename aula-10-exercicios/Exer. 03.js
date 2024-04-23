const listaDeTarefas = []
const tarefa1 = prompt("Qual a primeira tarefa que você precisa realizar hoje?")
const tarefa2 = prompt("Qual a segunda tarefa que você precisa realizar hoje?")
const tarefa3 = prompt("Qual a terceira tarefa que você precisa realizar hoje?")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Digite o número da tarefa realizada(0, 1 ou 2)"))

listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)
