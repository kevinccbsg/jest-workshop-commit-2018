const sum = require('./sum');

describe('Suma', () => {
  it('must sum 2 + 3 and return 5', () => {
    const result = sum(2, 3);
    const expected = 5;
    expect(result).toEqual(expected);
  });

  it('must sum 3 + 3 and return 6', () => {
    const result = sum(3, 3);
    const expected = 6;
    expect(result).toEqual(expected);
  });
});

/*
describe('Nulo', () => {
  it('must return null', () => {
    
  });
});
*/