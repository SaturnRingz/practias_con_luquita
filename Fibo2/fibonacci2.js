// Partiendo del ejercicio Fibonacci,

//1- Copiarlo en otra carpeta llamada Fibo2                                   [DONE]
//2- Orientación: horizontal (h) o vertical (v)                               []
//3- Dirección: directa (d) o inversa (i)                                     []
//4- Si es especifica una opción no válida debe indicarse "Opción no válida". []
//5- El programa puede invocarse sin la opción "-o" en cuyo caso el comportamiento debe ser por default hd.

// # Ejemplo 1 vertical 7 directa
// java -jar fibo.jar -o=vd 5
// fibo<5>:
// 0
// 1
// 1
// 2
// 3

// # Ejemplo 2 horizontal e inversa
// java -jar fibo.jar -o=hi 8
// fibo<8>: 13 8 5 3 2 1 1 0

// # Ejemplo 3 vertical e inversa
// java -jar fibo.jar -o=vi 8
// fibo<8>:
// 13
// 8
// 5
// 3
// 2
// 1
// 1
// 0

// # Ejemplo 3 opción no válida
// java -jar fibo.jar -o=xy 8
// Opciones no válidas.

// # Ejemplo 4, sin -o
// java -jar fibo.jar 8
// fibo<8>: 0 1 1 2 3 5 8 13

const valor = process.argv[4];
const orientacion = process.argv[2];
const direccion = process.argv[3];

let a = 0;
let b = 1;
let c;
let array = [0];
let array2 = [];
for (let i = 0; i < valor - 1; i++) {
  c = a + b;
  a = b;
  b = c;
  array.push(a);
}

switch (orientacion) {
  case "v":
    if (direccion === "d") {
      array.forEach((i) => console.log(i));
    } else {
      if (direccion === "i") {
        for (let i = valor; i >= 0; i--) {
          console.log(array[i]);
        }
      }
    }
    break;
  case "h":
    if (direccion === "d") {
      console.log(`fibo<${valor}>: `, array.join(" "));
    } else {
      if (direccion === "i") {
        for (let i = valor; i >= 0; i--) {
          array2.push(array[i]);
        }
        console.log(`fibo<${valor}>: `, array2.join(" "));
      }
    }
    break;
  default:
    break;
}
