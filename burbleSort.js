let numeros = [12, 5, 87, 4, 9, 54];
let nombres = ['Juan', 'Maria', 'Pedro', 'Pablo', 'Joaquin', 'Antonio'];
let alumnos = [
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Maria',
        edad: 24
    },
    {
        nombre: 'Pedro',
        edad: 54
    }
]
let temp

const ordenar = (arr, prop) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (prop) {
                if (arr[j][prop] > arr[j+1][prop]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                 }     
            } else {
                if (arr[j] > arr[j+1]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                 }   
            }
                
        } 
    }
    return arr
}

console.log(ordenar(numeros))
console.log(ordenar(nombres))
console.log(ordenar(alumnos, 'edad'))
