let departamentos = [
    {
      "id": 1,
      "ambientes": 2,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 2,
      "precioAlquiler": 42700
    },
    {
      "id": 2,
      "ambientes": 1,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 2,
      "precioAlquiler": 29000
    },
    {
      "id": 3,
      "ambientes": 2,
      "disponible": false,
      "aceptaMascotas": false,
      "cantidadPersonas": 3,
      "precioAlquiler": 53000
    },
    {
      "id": 4,
      "ambientes": 1,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 1,
      "precioAlquiler": 17900
    },
    {
      "id": 5,
      "ambientes": 1,
      "disponible": false,
      "aceptaMascotas": false,
      "cantidadPersonas": 1,
      "precioAlquiler": 24100
    },
    {
      "id": 6,
      "ambientes": 2,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 3,
      "precioAlquiler": 46700
    },
    {
      "id": 7,
      "ambientes": 2,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 2,
      "precioAlquiler": 37000
    },
    {
      "id": 8,
      "ambientes": 4,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 5,
      "precioAlquiler": 84000
    },
    {
      "id": 9,
      "ambientes": 3,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 5,
      "precioAlquiler": 74000
    },
    {
      "id": 10,
      "ambientes": 3,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 3,
      "precioAlquiler": 55800
    },
    {
      "id": 11,
      "ambientes": 3,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 4,
      "precioAlquiler": 68000
    },
    {
      "id": 12,
      "ambientes": 3,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 4,
      "precioAlquiler": 63000
    },
    {
      "id": 13,
      "ambientes": 2,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 2,
      "precioAlquiler": 43200
    },
    {
      "id": 14,
      "ambientes": 2,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 2,
      "precioAlquiler": 40000
    },
    {
      "id": 15,
      "ambientes": 1,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 1,
      "precioAlquiler": 21500
    },
    {
      "id": 16,
      "ambientes": 1,
      "disponible": false,
      "aceptaMascotas": true,
      "cantidadPersonas": 1,
      "precioAlquiler": 28000
    },
    {
      "id": 17,
      "ambientes": 1,
      "disponible": true,
      "aceptaMascotas": true,
      "cantidadPersonas": 1,
      "precioAlquiler": 23000
    }
  ]

  const buscarPorId = (arr, id)=> {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == id) {
            return arr[i]
        }
        
    }
  }

//   console.log(buscarPorId(departamentos, 5))

const departamentosNoDisponibles = (arr)=> {
    let noDisponibles = []
    for (let i = 0; i < arr.length; i++) {
      if(!arr[i].disponible) {
        noDisponibles.push(arr[i])
      }
        
    }
    return noDisponibles
}

// console.log(departamentosNoDisponibles(departamentos))

const departamentosDisponibles = (arr)=> {
    let disponibles = []
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].disponible) {
        disponibles.push(arr[i])
      }
        
    }
    return disponibles
}

// console.log(departamentosDisponibles(departamentos))

const filtrarPorPrecio = (precioMax)=> {
    let disponibles = departamentosDisponibles(departamentos)
    let filtroPrecio = []
    for (let i = 0; i < disponibles.length; i++) {
         if(disponibles[i].precioAlquiler <= precioMax) {
            filtroPrecio.push(disponibles[i])
         }       
    }
    return filtroPrecio
}

// console.log(filtrarPorPrecio(40000))

const ordenarPorPropiedadAsc = (arr, prop)=> {
    let temp
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length - 1; j++) {
        if(prop) {
            if (arr[j][prop] > arr[j+1][prop]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
       }
    }
    return arr
}

// console.log(ordenarPorPropiedadAsc(departamentos, "ambientes"))

const calcularRecaudacion = (arr)=> {
    let recaudacion = 0
    for (let i = 0; i < arr.length; i++) {
        recaudacion += arr[i].precioAlquiler
    }
    return recaudacion
}

// console.log(calcularRecaudacion(departamentosNoDisponibles(departamentos)))

let matriz = [
    [2,5,3],
    [1,5,7],
    [3,5,2]
]

const recorrerMatriz = (array)=> {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
       console.log(array[i][j])
        
      }
        
    }
}

// recorrerMatriz(matriz)

const recorrerFila = (array, indexFila)=> {
for (let i = 0; i < array[indexFila].length; i++) {
    console.log(array[indexFila][i])
    
}
}

// recorrerFila(matriz, 2)

const recorrerCol = (array, indexCol)=> {
for (let i = 0; i < array[indexCol].length; i++) {
    console.log(array[i][indexCol])
    
}
}
// recorrerCol(matriz, 2)

const recorrerDiagPrinc = (array)=> {
for (let i = 0; i < array.length; i++) {
   console.log(array[i][i])
    
}
}

// recorrerDiagPrinc(matriz)

const recorrerDiagSec = (array)=> {
    let count = array.length - 1
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][count--])
    //    console.log(array[i][array.length - 1 - i])
    //    console.log(array[i][array.length - (i + 1)])
        
    }
}

// recorrerDiagSec(matriz)

const recorrerPares = (array)=> {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if(array[i][j] % 2 == 0) {
            console.log(array[i][j])
        }
      }
        
    }
}

// recorrerPares(matriz)