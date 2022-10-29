/* Desenvolva um programa que receba a nota, de 0 a 10, e o sexo de 10 alunos,
usando a estrutura FOR. No final, exiba no console:
a. A média geral dos alunos
b. Quantos homens enviaram as notas
c. Quantas mulheres tiveram nota acima de 7
d. Qual a maior nota entre os homens
Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de
alunos! */


var nota = 0
var sexo = " "
var homensNotas = 0
var mulheresNotas = 0
var maiorNotaHomem = 0
var somaNotas = 0
var mediageral = 0

for (var contador = 1; contador < 11; contador++) {
   nota = parseInt(prompt("Informe a nota do " + contador +  " aluno "))
   sexo = prompt("Informe o sexo do " + contador + " aluno ")

   somaNotas = somaNotas + nota

   if (sexo == "m") {
      homensNotas = homensNotas + 1
      if (nota > maiorNotaHomem) {
         maiorNotaHomem = nota
      }
   }
   if (sexo == "f" && nota > 7) {
      mulheresNotas = mulheresNotas + 1
   }
}

mediageral = (somaNotas / 10)

console.log("A média geral dos alunos é de: " + mediageral)
console.log("A quantidade de homens que enviaram as notas foi de: " + homensNotas)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi de: " + mulheresNotas)
console.log("A maior nota entre os homens é de: " + maiorNotaHomem)