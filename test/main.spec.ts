import { Menu } from "../src/menu";


describe('Test de Fibonacci', () => {

    it('Un test', async () => {
      const menu = new Menu();
      let fibo;
      fibo= menu.calcularFibonacci(10, "hd");
      expect(fibo).toEqual("fibo <10> 0 1 1 2 3 5 8 13 21 34");
      
    });
})