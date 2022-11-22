/* 
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4] 
*/
const notas = [2, 7, 3, 8, 10, 4];
var maiorNota = notas.reduce((a, b) => Math.max());
console.log(maiorNota);
