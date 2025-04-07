import { validarCPF } from "./validarCPF";

describe("Função validarCPF", () => {
  it("deve retornar true para um CPF válido", () => {
    expect(validarCPF("52998224725")).toBe(true); // CPF real válido
  });

  it("deve retornar false para CPF com dígitos verificadores errados", () => {
    expect(validarCPF("52998224724")).toBe(false);
  });

  it("deve retornar false para CPF com menos de 11 dígitos", () => {
    expect(validarCPF("123456789")).toBe(false);
  });

  it("deve retornar false para CPF com caracteres não numéricos", () => {
    expect(validarCPF("123.456.789-0a")).toBe(false);
  });

  it("deve retornar false para CPF com todos os dígitos iguais", () => {
    expect(validarCPF("11111111111")).toBe(false);
  });
});
