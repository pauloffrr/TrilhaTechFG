"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCPF = validarCPF;
function validarCPF(cpf) {
    var cpfLimpo = cpf.replace(/\D/g, "");
    if (!/^\d{11}$/.test(cpfLimpo) || /^(\d)\1{10}$/.test(cpfLimpo)) {
        return false;
    }
    var digitos = cpfLimpo.split("").map(Number);
    var calcularDigito = function (posicoes) {
        var soma = digitos
            .slice(0, posicoes)
            .reduce(function (acc, val, index) { return acc + val * (posicoes + 1 - index); }, 0);
        var resto = (soma * 10) % 11;
        return resto === 10 ? 0 : resto;
    };
    var digito1 = calcularDigito(9);
    var digito2 = calcularDigito(10);
    return digito1 === digitos[9] && digito2 === digitos[10];
}
