// Imprimir los números entre 5 y 20, saltando de tres en tres
console.log("Números entre 5 y 20, saltando de tres en tres:");
for (let i = 5; i <= 20; i += 3) {
    console.log(i);
}

// Calcular y mostrar la sumatoria de los números entre 0 y 100
let sumatoria = 0;
for (let i = 0; i <= 100; i++) {
    sumatoria += i;
}
console.log("La sumatoria de los números entre 0 y 100 es:", sumatoria);

//Calcular y mostrar el factorial de un número entero positivo
// function factorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1;
//     } else {
//         return numero * factorial(numero - 1);
//     }
// }

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const numeroFactorial = 5; // Cambia este valor al número que desees calcular el factorial
const resultadoFactorial = factorial(numeroFactorial);
console.log(`El factorial de ${numeroFactorial} es: ${resultadoFactorial}`);