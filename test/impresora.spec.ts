import { Impresora } from "../src/impresora";

describe('Test de impresora', () => {

    it('Impresion horizontal directa', async () => {
      const impresora = new Impresora();
      let impresion;
      impresion=impresora.imprimir([0,1,1,2,3,5,8,13], "hd", 8);
      expect(impresion).toEqual(`fibo <8>: 0 1 1 2 3 5 8 13`)
    });
})