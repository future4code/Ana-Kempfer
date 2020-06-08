function calcular (a:number, b:number): void {
    console.log("Soma: ", a+b);
    console.log("Subtração: ", a-b);
    console.log("Multiplicação: ", a*b);
    if(a>b){
        console.log(a, "é maior do que ", b)
    }else {
        console.log(b, " é maior do que ", a)
    }
}

const result = calcular(45,86)


