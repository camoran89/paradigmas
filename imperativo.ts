/**
 * sumFirstTenNumbers es un programa simple que muestra el paso a paso que se debe realizar 
 * para sumar los n primeros numeros enteros.
 * @returns el valor de la suma de los n primeros numeros enteros
 */
function sumFirstTenNumbers(n: number): number {
    let sum: number = 0; // Declarar e inicializar la variable sum en 0

    // Usar un bucle for para iterar desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        sum = sum + i; // Sumar el valor de i a sum
    }

    return sum; // retornar el resultado de la suma
}

// Crear el valor limite a sumar
const number: number = 10;

// Llamar a la función ingresando el numero limite de la suma
// y posteriormente almacenar el resultado en una variable
let result: number = sumFirstTenNumbers(number);

// Imprimir el resultado de la variable que contiene la suma
console.log(`La suma de los primeros 10 números naturales es: ${result}`);
