"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const fibonacci_1 = require("../src/fibonacci");
(0, globals_1.describe)('Test de Fibonacci', () => {
    (0, globals_1.it)('Un test', () => __awaiter(void 0, void 0, void 0, function* () {
        const fibonacci = new fibonacci_1.Fibonacci();
        let fibo;
        fibo = fibonacci.calcularSerie(10);
        (0, globals_1.expect)(fibo).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    }));
});
