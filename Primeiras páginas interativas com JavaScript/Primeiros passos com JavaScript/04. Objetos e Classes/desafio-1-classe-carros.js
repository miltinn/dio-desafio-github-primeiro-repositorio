/*
 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    constructor(marca,cor,gastoLporKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoLporKm = gastoLporKm;
    }

    custoPercurso(distancia,precoCombustivel){
        var custo = (distancia * precoCombustivel * this.gastoLporKm).toFixed(2);
        console.log(`Dada uma distancia de ${distancia} Km, considerando o preço do combustível de 
        R$ ${precoCombustivel.toFixed(2)}, o custo total do percurso é de R$ ${custo}.`);
    }
}

const hb20 = new Carro("Hyundai","preto", 0.1);
hb20.custoPercurso(100, 5.29);