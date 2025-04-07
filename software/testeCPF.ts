import { validarCPF } from "./validarCPF";

const cpf1 = "52998224725";
const cpf2 = "12345678909";
const cpf3 = "52998224724";
const cpf4 = "11111111111";
const cpf5 = "abc123";

console.log("CPF 1:", validarCPF(cpf1));
console.log("CPF 2:", validarCPF(cpf2));
console.log("CPF 3:", validarCPF(cpf3));
console.log("CPF 4:", validarCPF(cpf4));
console.log("CPF 5:", validarCPF(cpf5));
