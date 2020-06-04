var HistoricalFacts;
(function (HistoricalFacts) {
    HistoricalFacts["PreHistoria"] = "Pr\u00E9-hist\u00F3ria";
    HistoricalFacts["IdadeAntiga"] = "Idade Antiga";
    HistoricalFacts["IdadeMedia"] = "Idade M\u00E9dia";
    HistoricalFacts["IdadeModerna"] = "Idade Moderna";
})(HistoricalFacts || (HistoricalFacts = {}));
function findHitoricalAge(year, complement) {
    if (year > 4000 && complement === "AC") {
        var age = HistoricalFacts["PreHistoria"];
        console.log("Idade histórica: ", age);
    }
    else if (year > 4000 && complement === "") {
        var age = HistoricalFacts["PreHistoria"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 4000 && complement === "AC") {
        var age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 4000 && complement === "") {
        var age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 476 && complement === "DC") {
        var age = HistoricalFacts["IdadeMedia"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 476 && complement === "") {
        var age = HistoricalFacts["IdadeAntiga"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 1789 && complement === "DC") {
        var age = HistoricalFacts["IdadeModerna"];
        console.log("Idade histórica: ", age);
    }
    else if (year <= 1789 && complement === "") {
        var age = HistoricalFacts["IdadeModerna"];
        console.log("Idade histórica: ", age);
    }
    else if (year === undefined || null && complement === "" || undefined || null) {
        console.log("ERRO! Por favor digite valores válidos. ");
    }
}
console.log(findHitoricalAge(516, "DC"));
