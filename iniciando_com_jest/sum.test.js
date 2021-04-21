// const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });


// test('array and object equality', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

//   expect(arr).toBe([1, 2, 3]); // fails // copia por valor
//   expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails //copia por valor
//   expect(arr).toEqual([1, 2, 3]); // OK // copia por referencia
//   expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK // copia por referencia
// });

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('teste da função  sum', () => {
  it('verifica se recebendo os numeros 4 e 5 a unção retorna 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('verifica se recebendo 0 0 a função sum retorna 0', () => {
    expect(0).toEqual(sum(0, 0));
  });

  it('verifica se recebendo 4 e "5" a função sum retorna um erro', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  it('verifica se recebendo 4 e "5" a função sum retorna um erro', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
  });
});
