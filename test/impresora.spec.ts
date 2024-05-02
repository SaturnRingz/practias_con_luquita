import { Impresora } from "../src/impresora";

describe('Test de impresora', () => {

    it('Impresion horizontal directa', async () => {
      const impresora = new Impresora();
      let impresion;
      impresion=impresora.imprimir([0,1,1,2,3,5,8,13], "hd", 8);
      expect(impresion).toEqual(`fibo <8>: 0 1 1 2 3 5 8 13`);
    });

    it('Impresion vertical directa', async () => {
        const impresora = new Impresora();
        let impresion;
        impresion=impresora.imprimir([0,1,1,2,3,5,8,13], "vd", 8);
        expect(impresion).toEqual(`fibo <8>: \n0\n1\n1\n2\n3\n5\n8\n13`)
      });

    it(('Impresion horizontal indirecta'), async ()=>{
        const impresora = new Impresora();
        let impresion;
        impresion=impresora.imprimir([0,1,1,2,3,5,8,13], "hi", 8);
        expect(impresion).toEqual(`fibo <8>: 13 8 5 3 2 1 1 0`);
      })
})