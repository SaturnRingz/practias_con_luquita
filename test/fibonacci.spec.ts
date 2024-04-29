import { Fibonacci } from '../src/fibonacci';

describe('Test de Fibonacci', () => {

    it('Un test', async () => {
      const fibonacci = new Fibonacci();
      let fibo;
      fibo=fibonacci.calcularSerie(10);
      expect(fibo).toEqual([0,1,1,2,3,5,8,13,21,34])
      
});
  })