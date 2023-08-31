const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

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

console.log('Edades antes de sumarles 1 --> '+edades)

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

console.log(menoresDeEdad)
console.log(mayoresDeEdad)
console.log(con18Años)
console.log(promedioDeEdades)
console.log(mayorDeTodos)
console.log(menorDeTodos)
console.log('Edades más 1 --> '+edades)