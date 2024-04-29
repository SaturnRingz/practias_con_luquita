
import { Main } from '../src/main';

describe('Test de Fibonacci', () => {

    it('Un test', async () => {
      const main = new Main();
      let fibo;
      fibo=main.fibonacci(10, "hd");
      expect(fibo).toEqual("fibo <10> 0 1 1 2 3 5 8 13 21 34")
      
    });
})