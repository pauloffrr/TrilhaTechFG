function calcularValorBase(consumo, tarifa) {
    return consumo * tarifa;
}
function calcularAjusteBandeira(consumo, bandeira) {
    if (bandeira === "amarela")
        return consumo * 0.02;
    if (bandeira === "vermelha")
        return consumo * 0.05;
    return 0;
}
function calcularImposto(valor, percentualImposto) {
    return valor * (percentualImposto / 100);
}
function calcularContaEnergia(consumo) {
    var base = calcularValorBase(consumo.consumoKwh, consumo.tarifaKwh);
    var ajuste = calcularAjusteBandeira(consumo.consumoKwh, consumo.bandeira);
    var subtotal = base + ajuste;
    var imposto = calcularImposto(subtotal, consumo.percentualImposto);
    return subtotal + imposto;
}
var exemplo = {
    consumoKwh: 350,
    tarifaKwh: 0.5,
    percentualImposto: 15,
    bandeira: "vermelha",
};
console.log("Conta de energia (fase 2): R$", calcularContaEnergia(exemplo).toFixed(2));
