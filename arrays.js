const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

const convertToMayus = (array) => {
    let arrEnMayusculas = [];

    for(let i=0; i < array.length; i++){
        arrEnMayusculas.push(array[i].toUpperCase());
    }
    return arrEnMayusculas;
}

console.log(convertToMayus(peliculas))

const peliculasJuegos = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const unirArrays = (arr1,arr2) => convertToMayus(arr1).concat(convertToMayus(arr2))

console.log(unirArrays(peliculas,peliculasJuegos))