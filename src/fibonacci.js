"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fibonacci = void 0;
class Fibonacci {
    calcularSerie(limite) {
        let a = 0;
        let b = 1;
        let c;
        let serie = [0];
        for (let i = 0; i < limite - 1; i++) {
            c = a + b;
            a = b;
            b = c;
            serie.push(a);
        }
        return serie;
    }
}
exports.Fibonacci = Fibonacci;
