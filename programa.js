// Escribe una aplicación de consola (línea de comando) que reciba como parámetro un número y genere por pantalla los correspondientes esa cantidad de números de la seria de Fibonacci. . A continuación se ofrecen algunos ejemplos concretos del comportamiento esperado:

// # Ejemplo 1
// java -jar fibo.jar 5
// fibo<5>: 0 1 1 2 3

// # Ejemplo 2
// java -jar fibo.jar 8
// fibo<8>: 0 1 1 2 3 5 8 13
// Puede asumir que las entradas serán siempre válidas.

let valor = 10;

let a = 0;
let b = 1;
let c;
for (let i = 0; i < valor; i++) {
  c = a + b;
  console.log(a);
  a = b;
  b = c;
}
