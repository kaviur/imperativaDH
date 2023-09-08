let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];
  
  //TODO
  // CREANDO UNA FUNCION REUTILIZABLE...
  // CALCULAR GASTO TOTAL DE LA TERCER SEMANA
  
  const calcularTotalPorSemana = (mat, numSemana) => {
    let fila = numSemana - 1;
  
    let acc = 0;
    for (let i = 0; i < mat[fila].length; i++) {
      acc += mat[fila][i];
    }
    return acc;
  };
  
  let totalSemanaTres = calcularTotalPorSemana(gastos, 3);
  console.log(totalSemanaTres);
  
  
  // TODO
  // EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
  // EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?
  
  let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 50000, 2100, 1980, 1270, 950], // semana 4
  ];
  
  // gastos ---> el mayor monto , el dia , la semana
  
  const mayorGasto = (mat) => {
    let mayor = mat[0][0];
    let dia = 0;
    let semana = 0;
  
    for (let fila = 0; fila < mat.length; fila++) {
      for (let col = 0; col < mat[fila].length; col++) {
        if (mayor < mat[fila][col]) {
          mayor = mat[fila][col];
          dia = col;
          semana = fila;
        }
      }
    }
  
    return { monto: mayor, dia: dia, semana: semana + 1 };
  };
  
  const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  
  const mayor = mayorGasto(gastos2);
  console.log(mayor);
  
  console.log(
    `El dia que mas se gasto fue un total de ${mayor.monto} que se produjo el dia 
    ${diasSemana[mayor.dia]} de la semana ${mayor.semana}`
  );
  
/**
 * recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000
 */

let arr = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
  
const sumEnRango = arr => {
    let acumulador = 0

    for (let i = 0; i < arr.length; i++) {        
        for (let j = 0; j < arr[i].length; j++) {            
            if (arr[i][j]>=10 && arr[i][j]<1000){
                acumulador += arr[i][j]
            }
        }
    }

    return acumulador
}

let totalEnRango = sumEnRango(arr)
console.log("La suma de los números entre 10 y 1000 es: "+totalEnRango)


//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TODOS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const totalGastadoXDia = (arr,diaABuscar) => {
    let totalGastado = 0;
  
    for (let semana = 0; semana < arr.length; semana++) {
        totalGastado += arr[semana][diaABuscar];
    }
  
    return totalGastado
}

let dia = "sabado"
const indiceDia = diasSemana.indexOf(dia) || 5; //si no tiene valor, por defecto es sábado

let gastadoXDia = totalGastadoXDia(gastos2,indiceDia)

console.log(`El total gastado durante todos los días ${dia} del mes es de: ${gastadoXDia}`)
  
  //TODO
  // CALCULAR EL TOTAL GASTADO DEL MES
  
  const totalGastado = arr => {
    let totalGastado = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        totalGastado += arr[i][j];
      }
    }
    return totalGastado
  }
  
  let gastadoElMes = totalGastado(gastos2)
  console.log("El total gastado del mes es: " + gastadoElMes);