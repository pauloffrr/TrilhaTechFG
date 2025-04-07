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
function calcularDescontoOuAcrescimoPorConsumo(valor, consumo) {
    if (consumo <= 100)
        return -valor * 0.05;
    if (consumo > 300)
        return valor * 0.1;
    return 0;
}
function calcularContaEnergia(consumo) {
    var base = calcularValorBase(consumo.consumoKwh, consumo.tarifaKwh);
    var ajuste = calcularAjusteBandeira(consumo.consumoKwh, consumo.bandeira);
    var subtotal = base + ajuste;
    var imposto = calcularImposto(subtotal, consumo.percentualImposto);
    var totalComImposto = subtotal + imposto;
    var descontoOuAcrescimo = calcularDescontoOuAcrescimoPorConsumo(totalComImposto, consumo.consumoKwh);
    return totalComImposto + descontoOuAcrescimo;
}
// Exemplo de uso
var exemplo = {
    consumoKwh: 350,
    tarifaKwh: 0.5,
    percentualImposto: 15,
    bandeira: "vermelha",
};
console.log("Conta de energia (fase 3): R$", calcularContaEnergia(exemplo).toFixed(2));
