// Ahora bien. dado los siguientes numeros:

let num1 = 13;
let num2 = 16.63;
let num3 = 16.04;
let num4 = -5187;

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.
const arrNums = [num1, num2, num3, num4];

const maxNum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxNum(arrNums));