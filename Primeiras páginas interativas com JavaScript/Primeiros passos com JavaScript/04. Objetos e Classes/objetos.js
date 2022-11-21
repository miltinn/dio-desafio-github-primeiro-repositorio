class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const milton = new Pessoa("Milton",23);
milton.descrever();

console.log(milton);
console.log(`\n ${Pessoa}`);