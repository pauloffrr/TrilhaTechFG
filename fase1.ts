const consumoKwh = 350;
const tarifaPorKwh = 0.5;
const percentualImposto = 15;
let bandeira: string = "vermelha";

let valorBase = consumoKwh * tarifaPorKwh;

if (bandeira === "amarela") {
  valorBase += consumoKwh * 0.02;
} else if (bandeira === "vermelha") {
  valorBase += consumoKwh * 0.05;
}

const valorComImposto = valorBase + valorBase * (percentualImposto / 100);

console.log("Conta de energia (fase 1): R$", valorComImposto.toFixed(2));
