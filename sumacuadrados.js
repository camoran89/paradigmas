// Array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función pura para verificar si un número es par
const isEven = (num) => num % 2 === 0;

// Función pura para calcular el cuadrado de un número
const square = (num) => num * num;

// Usar filter para obtener sólo los números pares
const evenNumbers = numbers.filter(isEven);

// Usar map para obtener los cuadrados de los números pares
const squaredNumbers = evenNumbers.map(square);

// Usar reduce para sumar los cuadrados de los números pares
const sumOfSquares = squaredNumbers.reduce((sum, num) => sum + num, 0);

console.log(`La suma de los cuadrados de los números pares es: ${sumOfSquares}`);
