/**/

/**
 * Deberás crear una función llamada loopDePares que reciba como parámetro un número y 
 * haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que 
 * el número de la iteración sumado con el número pasado por parámetro sea par, mostrará 
 * en la consola: “El número X es par”.
 */

const loopDePares = (num) => {
    for(let i=0; i<100; i++) {
        console.log(i)
        let newNum = i+num

        if(newNum % 2 == 0){
            return `El número ${newNum} es par`
        }
    }
}

let msj = loopDePares(3);
//console.log(msj)


/**
 * Loop de impares con palabra
 * Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop 
 * de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese 
 * número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
 */
const loopDeImpares = (num, palabra) => {
    for(let i=0; i<100; i++){
        console.log(i)
        let newNum = num+i

        if(newNum % 2 !== 0){
            return palabra
        }
    }
}

//console.log(loopDeImpares(4,"impar"))


/**
 * Sumatoria
 * Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos 
 * sus números anteriores, incluso ese mismo.
 */

const sumatoria = (num) => {
    let acumulador = 0
    for(let i=0; i<=num; i++){
        acumulador += i
    }
    return acumulador
}

//console.log(sumatoria(4))


/**
 * Nuevo arreglo
 * Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con 
 * tantos elementos como el número que le hayas pasado. 
 */

const nuevoArreglo = num => {
    const arrayNuevo = []

    for(let i=0; i<num; i++){
        arrayNuevo.push(i)
    }

    return arrayNuevo
}


/**
 * Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original.
 */

const mySplitFn = (str,separator) => {
    let strArray = []
    let newWord = ""

    while(str.length > 0){
        itWasFounded = false

        if(str.includes(separator)){
            let index = str.indexOf(separator)
            let value = str.substr(0,index)

            strArray.push(value)
            str = str.replace(value+separator,'')

            itWasFounded = true
        }

        newWord = str
        str = ""        
    }

    if(itWasFounded){
        strArray.push(newWord.replace(separator,""))
    }

    return strArray
}

let arrayFromString = mySplitFn("holapomundopopo","po")
console.log(arrayFromString)



