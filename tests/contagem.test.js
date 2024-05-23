const contarInteiros = require('../funcoes/contagem');

test('Contar inteiros de 3 a 10', () => {
  expect(contarInteiros(3, 10)).toBe(8);
});

test('Contar inteiros de 5 a 7', () => {
  expect(contarInteiros(5, 5)).toBe(1);
});