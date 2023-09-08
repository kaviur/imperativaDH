let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  /**
   * Luego, escribe un algoritmo para sumar todos
   * los numeros en la matriz.
   */
  
   const sumarMatriz = (matriz) => {
        let total= 0;

        for(let i=0; i<matriz.length; i++){
            for (let j = 0; j < matriz[i].length; j++) {
                total += matriz[i][j]
            }
        }

        return total
   }

   console.log(sumarMatriz(matriz))

/**
 *Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
 * números. 
 */
 const crearMatriz = (numFilas,numCol) => {
    const matriz = []
    let num = 0

    for(let i=0; i<numFilas; i++){
        const row=[]

        for(let j=0; j<numCol; j++ ){
            row.push(++num)
        }
        matriz.push(row);
    }

    return matriz
 }

 const matrizDinamica = crearMatriz(10,10)
 console.log(matrizDinamica)

 
 /**
  * 3) Por último, vamos a generar dos funciones:
  * a) Una va a sumar los valores en la diagonal marcada en rojo.
  * b) La otra va a marcar los valores de la diagonal marcada en verde.
  * Ambas funciones deben devolver un resultado único.
  */

 const sumarDiagonalEnCaida = matriz => {
    let suma = 0

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i]        
    }
    
    return suma
 } 

 console.log(sumarDiagonalEnCaida(matrizDinamica))

 const sumarDiagonalEnSubida = matriz => {
    let suma = 0
    let col = matriz.length

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][--col]      
    }

    return suma
 }
 
console.log(sumarDiagonalEnSubida(matrizDinamica))
