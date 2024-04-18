# Escribe una aplicación de consola (línea de comando) que reciba como parámetro un número y genere por pantalla los correspondientes esa cantidad de números de la seria de Fibonacci. . A continuación se ofrecen algunos ejemplos concretos del comportamiento esperado:

# # Ejemplo 1
# java -jar fibo.jar 5
# fibo<5>: 0 1 1 2 3

# # Ejemplo 2
# java -jar fibo.jar 8
# fibo<8>: 0 1 1 2 3 5 8 13
# Puede asumir que las entradas serán siempre válidas.


valor = int(input())

a = 0
b = 1
c = 0
for i in range(0, valor): 
  c = a + b
  print(a, end=" ")
  a = b
  b = c
