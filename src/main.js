"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
class Main {
    fibonacci(valor, orientacion) {
        let a = 0;
        let b = 1;
        let c;
        let array = [0];
        for (let i = 0; i < valor - 1; i++) {
            c = a + b;
            a = b;
            b = c;
            array.push(a);
        }
        return this.retornoFibo(array, orientacion, valor);
    }
    retornoFibo(array, orientacion, valor) {
        let array2 = [];
        let fibo = `fibo <${valor}> `;
        switch (orientacion) {
            case "vd":
                array.forEach((i) => fibo += array[i]);
                break;
            case "vi":
                for (let i = valor; i > 0; i--) {
                    fibo += array[i - 1];
                }
                break;
            case "hd":
                fibo += array.join(" ");
                break;
            case "hi":
                for (let i = valor; i >= 0; i--) {
                    array2.push(array[i]);
                }
                fibo += array2.join(" ");
                break;
            default:
                console.log('Opción no válida');
                break;
        }
        return fibo;
    }
}
exports.Main = Main;
