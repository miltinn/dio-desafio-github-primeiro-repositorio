/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - (1) À vista Débito, recebe 10% de desconto;
    - (2) À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - (3) Em duas vezes, preço normal de etiqueta sem juros;
    - (4) Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100;

function compra(formaPagamento){
    switch(formaPagamento){
        case 1: 
            return (0.9 * preco).toFixed(2);
        case 2:
            return (0.85 * preco).toFixed(2);
        case 3:
            return (preco).toFixed(2);
        default:
            return (1.1 * preco).toFixed(2);
    }
}
//- À vista Débito, recebe 10% de desconto;
console.log(compra(1))
//- À vista no Dinheiro ou PIX, recebe 15% de desconto;
console.log(compra(2))
//- Em duas vezes, preço normal de etiqueta sem juros;
console.log(compra(3))
//- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
console.log(compra(4))