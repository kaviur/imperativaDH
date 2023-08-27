
const sumar = (num1, num2) => num1 + num2

const restar = (num1, num2) => num1 - num2

const multiplicar = (num1, num2) => num1 * num2

const dividir = (num1, num2) => {
    if(num2 === 0)
        return 0

    return num1 / num2
}

const cuadradoDeUnNumero = (num) => multiplicar(num, num)

const promedioDeTresNumeros = (num1, num2, num3) => dividir(sumar(sumar(num1,num2),num3), 3)

const calcularPorcentaje = (num, porcentaje) => dividir(multiplicar(num, porcentaje),100)

const generadorDePorcentaje = (num, total) => dividir(multiplicar(num, 100), total)

console.log("----Testeando la calculadora-------");

console.log(restar(4,2))
console.log(multiplicar(4,2))
console.log(dividir(4,2))
console.log(dividir(4,0))
console.log(cuadradoDeUnNumero(3))
console.log(promedioDeTresNumeros(3,6,9))
console.log(calcularPorcentaje(300,15))
console.log(generadorDePorcentaje(15,300));
            
