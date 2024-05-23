const { numeros, outrosNumeros, palavras } = require('../funcoes/ordenacao');

test('Array de números deve estar em ordem crescente', () => {
  expect(numeros).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

test('Array de números deve estar em ordem decrescente', () => {
  expect(outrosNumeros).toEqual([9, 6, 5, 5, 4, 3, 2, 1, 1]);
});

test('Array de palavras deve estar em ordem alfabética', () => {
  expect(palavras).toEqual(["banana", "laranja", "maçã", "uva"]);
});