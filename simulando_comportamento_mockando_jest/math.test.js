const { somar, subtrair, multiplicar, dividir } = require('./math');
jest.mock('./math');// mocka todo o arquivo math

describe('testando funções ', () => {
  
  test('testando a função de subtrair', () => {
    expect.assertions(2);
    subtrair.mockReturnValue(10)
    expect(subtrair(20, 10)).toBe(10);
    expect(subtrair).toHaveBeenCalled()
  });

  test('testando a função de multiplicar', () => {
    expect.assertions(2);
    multiplicar.mockImplementation((a, b) => a * b);
    // multiplicar();
    expect(multiplicar(5, 2)).toBe(10);
    expect(multiplicar).toHaveBeenCalled()
  });

  test('testando a função de somar', () => {
    expect.assertions(3);
    somar.mockImplementation((a, b) => a + b);
      expect(somar(2, 2)).toBe(4);
      expect(somar).toHaveBeenCalled();
      expect(somar).toHaveBeenCalledWith(2, 2);
  });

  test('testando a função de dividir', () => {

    dividir.mockReturnValueOnce(2); // faz com que o primeiro retorno seja 2.
    dividir.mockReturnValueOnce(5); //faz com que o segundo retorno seja 5.
    dividir.mockReturnValue(15); // faz com que os proximos retornos sejam 15.

    expect(dividir(10, 5)).toBe(2); //  verifica se retorna 2;
    expect(dividir(10, 2)).toBe(5); //  verifica se retorna 5.
    expect(dividir(30, 2)).toBe(15); // verifica se o retorno é 15 .
    expect(dividir).toBeCalled(); // verifica se a função foi chamada.
    expect(dividir).toBeCalledWith(10, 5); // verifica se a função foi chamada com os parametros 10 e 5.
    expect(dividir).toBeCalledWith(10, 2);
    expect(dividir).toBeCalledWith(30, 2);
    expect(dividir).toHaveReturnedTimes(3); // verifica se a função foi invocada 3 vezes.
  });
});