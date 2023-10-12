const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]


/**
 * Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo 
 * sea mayor o igual a 2020.
 */

const filtrarPorModelo = arr => {
    let modelosNuevos = []

    for (let i = 0; i < arr.length; i++) {
        let auto = arr[i]

        if(auto.modelo >= 2020){
            modelosNuevos.push(auto)
        }
    }

    return modelosNuevos
}

let autosNuevos = filtrarPorModelo(autos);
console.log(autosNuevos)

/**
 * Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio
 */
let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenarDescPorPromedio = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let huboIntercambio = false

        for (let j = 0; j < arr.length -1 - i; j++) {
            if (arr[j].notaPromedio < arr[j+1].notaPromedio) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                huboIntercambio = true
            }    
        } 

        //si no hubo intercambio significa que ya está ordenado
        if(!huboIntercambio){
            break
        }
    }

    return arr
}

const ordenadosPorPromedio = ordenarDescPorPromedio(estudiantes)
console.log(ordenadosPorPromedio)

ordenadosPorPromedio.unshift(
    {
        nombre: "pepe",
        activo: false,
        notaPromedio: 11
    },
    {
        nombre: "pepito",
        activo: true,
        notaPromedio: 22
    }
)

console.log(ordenadosPorPromedio)
console.log(ordenarDescPorPromedio(ordenadosPorPromedio))


let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

/**
 * Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
 * Block comment
 * La función debe retornar un arreglo con todos los elementos  de esa columna.
 */

const elementosPorColumna = (matrix,indiceColumna) => {
    let newArr = []

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] && matrix[i][indiceColumna] !== undefined) {
            newArr.push(matrix[i][indiceColumna])
        }
    }

    return newArr
}

const elementosRequeridos = elementosPorColumna(matrix,3)
console.log(elementosRequeridos)


/**
 * Crear una función que reciba por parámetro la matriz 
 * y cambie todos los elementos impares de la matriz por un número 0 (cero)
 */

const cambiarImpares = matrix => {
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if ((matrix[i][j] % 2 === 1)){
                matrix[i][j] = '0'
            }
        }
    }
    return matrix
}

const newArr = cambiarImpares(matrix)
console.log(newArr)


