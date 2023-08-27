function vowelsAndConsonants(s) {
    let volves = ['a','e','i','o','u']
    let consonants = []
    
    s.split("").map(char=>{
        if(volves.includes(char))
            console.log(char)
        else
            consonants.push(char)           
    })
    
    console.log(consonants.join("\n"))
}

vowelsAndConsonants("learnjavascriptloopsinhackerrankweekofcode")