var consumoKwh = 350;
var tarifaPorKwh = 0.5;
var percentualImposto = 15;
var bandeira = "vermelha";
var valorBase = consumoKwh * tarifaPorKwh;
if (bandeira === "amarela") {
    valorBase += consumoKwh * 0.02;
}
else if (bandeira === "vermelha") {
    valorBase += consumoKwh * 0.05;
}
var valorComImposto = valorBase + valorBase * (percentualImposto / 100);
console.log("Conta de energia (fase 1): R$", valorComImposto.toFixed(2));
