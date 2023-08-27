let frase = "breaking   the rules"

console.log(frase.slice(8,12))
console.log(frase.slice(-9))
console.log(frase.split(" "))
console.log(frase.replace('the','bad'))

function menciona(texto, palabra){
    return texto.includes(palabra)
}

console.log(menciona(frase,"rulos"))