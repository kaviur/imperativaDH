//const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
//const edades = [21, 12, 15, 18, 25];
const edades = [2, 11, 54, 63, 24];

/*Obtener en un nuevo array las edades menores a 18.
 Obtener en un nuevo array las edades mayor o igual a 18.
 Obtener el mayor. 
 Obtener el menor.
 Obtener en un nuevo array las edades igual a 18.
 Obtener el promedio de edades.
 Incrementar en 1 todas las edades.
 */
const menoresDeEdad = []
const mayoresDeEdad = []
const con18Años = []
let mayorDeTodos = edades[0]
let menorDeTodos = edades[0]
let promedioDeEdades
let sumaDeEdades = 0

// console.log('Edades antes de sumarles 1 --> '+edades)

for (let i = 0; i < edades.length; i++) {
    let edad = edades[i];
    sumaDeEdades += edad

    if(i > 0){
        if(edad > mayorDeTodos){
            mayorDeTodos = edad
        }

        if(edad < menorDeTodos){
            menorDeTodos= edad
        }
    }
    
    if(edad<18){
        menoresDeEdad.push(edad);
    }else{
        if(edad == 18){
            con18Años.push(edad)
        }
        mayoresDeEdad.push(edad)
    } 
    
    edades[i]++
}

promedioDeEdades = sumaDeEdades / edades.length

// console.log(menoresDeEdad)
// console.log(mayoresDeEdad)
// console.log(con18Años)
// console.log(promedioDeEdades)
// console.log("El mayor de todos tiene: "+mayorDeTodos)
// console.log("El menor de todos tiene: "+menorDeTodos)
// console.log('Edades más 1 --> '+edades)


// ejercicio con objetos ==================
/*
    Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
    Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
    Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
    Obtener la cuenta con el titular de la misma más joven.
    Obtener un array con las cuentas habilitadas.
    Obtener un array con las cuentas deshabilitadas.
    Obtener la cuenta con el menor saldo.
    Obtener la cuenta con el mayor saldo.
*/

/*
    Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento 
    (objeto literal) una propiedad llamada id con un valor Numérico

    Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar 
    retornar la cuenta (él objeto literal completo), caso contrario retornar null

    Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), 
    deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

    Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, 
    deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
    Reutilizando la función  buscarPorId 
*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
]

const clasificarPorEdad = function (cuenta) {
    let edad = cuenta.edad

    if(edad <= this.edadParaClasificar){
        if(edad < this.edadParaClasificar){
            this.ctasEdadMenor.push(cuenta)
        }
        this.ctasHastaEdad.push(cuenta)
    }

    if(edad >= this.edadParaClasificar){
        this.ctasEdadEnAdelante.push(cuenta)
    }
    
}

const administrarCuentas = function (){
    let sumaEdades = 0

    for( let i = 0; i < arrayCuentas.length; i++ ){
        let cuenta = arrayCuentas[i]
        let edad = cuenta.edadTitular

        //hallar la cuenta del menor y del mayor
        if(i > 0){
            if(edad > this.ctaDelMayor.edadTitular){
                this.ctaDelMayor = cuenta
            }
    
            if(edad < this.ctaDelMenor.edadTitular){
                this.ctaDelMenor = cuenta
            }
        }
        
        //clasificar cuentas por una edad determinada en el objeto
        this.clasificarXEdades(cuenta)
        sumaEdades += edad;
    }

    this.promedioDeEdades = sumaDeEdades / this.cuentasBancarias.length
}

const banco = {
    cuentasBancarias : arrayCuentas,
    edadParaClasificar : 30,
    ctasEdadMenor : [],
    ctasEdadEnAdelante : [],
    ctasHastaEdad : [],
    ctasHabilitadas : [],
    ctasDeshabilitadas : [],
    clasificarXEdades : clasificarPorEdad,
    administrarLasCuentas : administrarCuentas,
    ctaDelMayor : arrayCuentas[0],
    ctaDelMenor : arrayCuentas[0],
    ctaMenorSaldo : {},
    ctaMayorSaldo : {},
    promedioDeEdades
}

banco.administrarLasCuentas()


console.log(banco)