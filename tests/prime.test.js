const isPrime = require('../funcoes/numprimo');

test('7 deve ser um numero primo', () => {
  expect(isPrime(7)).toBe(true);
});

test('10 nao deve ser um numero primo', () => {
  expect(isPrime(10)).toBe(false);
});