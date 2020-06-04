enum HistoricalFacts {
    PreHistoria = "Pré-história", 
    IdadeAntiga = "Idade Antiga", 
    IdadeMedia = "Idade Média",
    IdadeModerna = "Idade Moderna"
}

function findHitoricalAge ( year: number, complement?: string): void {
    if(year > 4000 && complement === "AC"){
        const age = HistoricalFacts["PreHistoria"];
        console.log("Idade histórica: ", age)
    }else if(year > 4000 && complement === ""){
        const age = HistoricalFacts["PreHistoria"];
        console.log("Idade histórica: ", age)
    }else if(year <= 4000 && complement === "AC"){
        const age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age)
    }else if(year <= 4000 && complement === ""){
        const age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age)
    }else if(year <= 476 && complement === "DC"){
        const age = HistoricalFacts["IdadeMedia"];
        console.log("Idade histórica: ", age)
    }else if(year <= 476 && complement === ""){
        const age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age)
    }else if(year <= 1789 && complement ==="DC"){
        const age = HistoricalFacts["IdadeModerna"];
        console.log("Idade histórica: ", age)
    }else if(year <= 1789 && complement === ""){
        const age = HistoricalFacts["IdadeModerna"];
        console.log("Idade histórica: ", age)
    }else if(year === undefined || null && complement === "" || undefined || null){
        console.log("ERRO! Por favor digite valores válidos. ")
    }
}


console.log(findHitoricalAge(516,"DC"));










