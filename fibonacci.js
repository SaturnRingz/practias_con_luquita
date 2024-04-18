// Escribe una aplicación de consola (línea de comando)

//1-que reciba como parámetro un número [DONE]
//2-que genere por pantalla los correspondientes esa cantidad de números de la seria de Fibonacci. [DONE]

//. A continuación se ofrecen algunos ejemplos concretos del comportamiento esperado:
// # Ejemplo 1
// java -jar fibo.jar 5
// fibo<5>: 0 1 1 2 3

// # Ejemplo 2
// java -jar fibo.jar 8
// fibo<8>: 0 1 1 2 3 5 8 13
// Puede asumir que las entradas serán siempre válidas.

let valor = process.argv[2];

let a = 0;
let b = 1;
let c;
let array = [0]
for (let i = 0; i < valor - 1; i++) {
  c = a + b;
  a = b;
  b = c;
  array.push(a);
}

console.log(`fibo<${valor}>`,array.join(' '));


// Partiendo del ejercicio Fibonacci, copiarlo en otra carpeta llamada Fibo2 y a partir de eso realizar las modificaciones necesarias para soportar las siguientes opciones:

// Orientación: horizontal (h) o vertical (v)
// Dirección: directa (d) o inversa (i)
// Si es especifica una opción no válida debe indicarse "Opción no válida".

// El programa puede invocarse sin la opción "-o" en cuyo caso el comportamiento debe ser por default hd.
