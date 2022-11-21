/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }
    classificarIMC(){
        const imc = this.calculoIMC();
        switch (true) {
            case (imc < 18.5):
                return "Abaixo do peso";
            case ((imc >= 18.5) && (imc < 25)):
                return "Normal";
            case ((imc >= 25) && (imc < 30)):
                return "Acima do peso";
            case ((imc >= 30) && (imc <= 40)):
                return "Obeso";
            default:
                return "Obsesidade grave";
        }
    }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarIMC());