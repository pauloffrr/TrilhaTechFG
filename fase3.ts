type ConsumoEnergia = {
  consumoKwh: number;
  tarifaKwh: number;
  percentualImposto: number;
  bandeira: "verde" | "amarela" | "vermelha";
};

function calcularValorBase(consumo: number, tarifa: number): number {
  return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
  if (bandeira === "amarela") return consumo * 0.02;
  if (bandeira === "vermelha") return consumo * 0.05;
  return 0;
}

function calcularImposto(valor: number, percentualImposto: number): number {
  return valor * (percentualImposto / 100);
}

function calcularDescontoOuAcrescimoPorConsumo(
  valor: number,
  consumo: number
): number {
  if (consumo <= 100) return -valor * 0.05;
  if (consumo > 300) return valor * 0.1;
  return 0;
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
  const base = calcularValorBase(consumo.consumoKwh, consumo.tarifaKwh);
  const ajuste = calcularAjusteBandeira(consumo.consumoKwh, consumo.bandeira);
  const subtotal = base + ajuste;
  const imposto = calcularImposto(subtotal, consumo.percentualImposto);
  const totalComImposto = subtotal + imposto;
  const descontoOuAcrescimo = calcularDescontoOuAcrescimoPorConsumo(
    totalComImposto,
    consumo.consumoKwh
  );
  return totalComImposto + descontoOuAcrescimo;
}

const exemplo: ConsumoEnergia = {
  consumoKwh: 350,
  tarifaKwh: 0.5,
  percentualImposto: 15,
  bandeira: "vermelha",
};

console.log(
  "Conta de energia (fase 3): R$",
  calcularContaEnergia(exemplo).toFixed(2)
);
