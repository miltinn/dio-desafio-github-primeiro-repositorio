/* 
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ["Pedro", "Vanessa", "Milton", "Vinicius", "Ludvig"]
const filtro = nomes.filter(nome => nome.indexOf('V', 0) != -1);
console.log(`Lista de nomes que iniciam com V: ${filtro}`);
