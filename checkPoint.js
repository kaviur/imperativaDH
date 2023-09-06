const restarPares = (num1,num2) => {
    if(num1 % 2 == 0 && num2 % 2 == 0){
        return num1 - num2
    }

    return "Lo siento, uno o mas parámetros no son pares"
}

const restaDePares = restarPares(10,6)
console.log(restaDePares)

const controlAcceso = (edad,tieneTicket) => {
    if(!tieneTicket){
        return false
    }

    if(edad < 18){
        return "Sólo puedes acceder con un adulto acompañante"
    }   
    return true;
}

let puedeAcceder = controlAcceso(17,true)
console.log(puedeAcceder)

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
]

const filtrarProductos = arr => {
    const arrProductosFiltrados = []

    for (let i = 0; i < arr.length; i++) {
        const producto = arr[i];
        
        if(producto.tipo == "tecnologia" && producto.precio > 50000){
            arrProductosFiltrados.push(producto)
        }
    }

    return arrProductosFiltrados
}

let productosFiltrados = filtrarProductos(productos)
console.log(productosFiltrados)
