const precoEtanol = 2.29;
const precoGasolina = 3.32;
const distancia = 1200;             //distancia em km
const gastoKm = 0.1                 //consumo de combustivel (litros por km)

function custoViagem(combustivel) {
    combustivel = String(combustivel).toLowerCase();
    if (combustivel === "etanol") {
        return (distancia * gastoKm * precoEtanol).toFixed(2);
    } else if (combustivel === "gasolina") {
        return (distancia * gastoKm * precoGasolina).toFixed(2);
    } else {
        return "tipo de combustível não encontrado"
    }
}
console.log(custoViagem("etaNol"));

