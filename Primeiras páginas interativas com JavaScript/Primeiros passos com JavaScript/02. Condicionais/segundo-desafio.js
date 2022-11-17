const precoEtanol = 2.29;
const precoGasolina = 3.32;
const distancia = 1200;             //distancia em km
const gastoKm = 0.1                 //consumo de combustivel (litros por km)

function custoViagem(combustivel) {
    combustivel = String(combustivel).toLowerCase();
    console.log(combustivel)
    if (combustivel === "etanol") {
        return distancia * gastoKm * precoEtanol;
    } else if (combustivel === "gasolina") {
        return distancia * gastoKm * precoGasolina;
    } else {
        return "tipo de combustível não encontrado"
    }
}
console.log(custoViagem("etanol"));

