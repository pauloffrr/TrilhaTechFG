export function validarCPF(cpf: string): boolean {
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpfLimpo) || /^(\d)\1{10}$/.test(cpfLimpo)) {
    return false;
  }

  const digitos = cpfLimpo.split("").map(Number);

  const calcularDigito = (posicoes: number) => {
    const soma = digitos
      .slice(0, posicoes)
      .reduce((acc, val, index) => acc + val * (posicoes + 1 - index), 0);
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  const digito1 = calcularDigito(9);
  const digito2 = calcularDigito(10);

  return digito1 === digitos[9] && digito2 === digitos[10];
}
