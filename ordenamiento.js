const edades = [33, 27, 34, 30, 34, 25];
const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'];
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
            estaHabilitada: false,
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

    
    /**
     * ordena internamente de forma ascendente según él saldo de cada cuenta y retorna él array ordenado .
     */    
    
    /**
     * ordena internamente de forma ascendente según la edad del titular de cada cuenta y retorna él array ordenado.
     */

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
    
    //console.log('Ordenando el objeto por saldo de manera ascendente',ordenar(arrayCuentas,'saldo'))
    console.log('Ordenando el objeto por saldo de manera ascendente',ordenar(arrayCuentas,'edadTitular'))
    
    


const ordenarArray = (arr,forma) => {
    if(forma === 'asc'){
        return arr.sort((a , b )=> a -b);
    }else{
        return arr.sort ((a , b)=> b-a );
    }
}
//console.log('ordenado de forma ascendente', ordenarArray(edades,'asc'));
//console.log('ordenado de forma descendente', ordenarArray(edades,'desc'))

//ordenar con programación imperativa
const ordenarArrayMethod2 = (arr,forma) => {
    let aux;
    for(let i=1 ;i<arr.length;++i){
        for(let j=0;j<(arr.length)-i;++j ){
            //compara si el valor actual es menor que el siguiente
            const debeIntercambiar =
            (forma === 'asc' && arr[j] > arr[j + 1]) ||
            (forma === 'desc' && arr[j] < arr[j + 1]);

            if (debeIntercambiar) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr
}

console.log('ordenado de forma ascendente', ordenarArrayMethod2(edades,'asc'));
console.log('ordenado de forma descendente', ordenarArrayMethod2(edades,'desc'))

console.log('ordenado de forma ascendente', ordenarArrayMethod2(letras,'asc'));
console.log('ordenado de forma descendente', ordenarArrayMethod2(letras,'desc'))