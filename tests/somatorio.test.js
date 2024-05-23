const somatorio = require('../funcoes/somatorio');

test('Somatório de [1, 2, 3, 4, 5, 6, 7] deve ser 28', () => {
  expect(somatorio([1, 2, 3, 4, 5, 6, 7])).toBe(28);
});

test('Somatório de [] deve ser 0', () => {
  expect(somatorio([])).toBe(0);
});