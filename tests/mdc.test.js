const mdc = require('../funcoes/mdc');

test('MDC de 24 e 36 deve ser 12', () => {
  expect(mdc(24, 36)).toBe(12);
});

test('MDC de 10 e 15 deve ser 5', () => {
  expect(mdc(10, 15)).toBe(5);
});