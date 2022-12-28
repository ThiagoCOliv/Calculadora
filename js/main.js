const num1 = document.getElementById("numUM");
const num2 = document.getElementById("numDOIS");
const resultado = document.getElementById("resultado");

function calcular(operação){
    let res = 0;
    switch(operação){
        case "soma":
            res = parseInt(num1.value) + parseInt(num2.value);
            console.log(res)
            resultado.value = "O resultado da soma é " + res;
            break;
        case "subtracao":
            res = parseInt(num1.value) - parseInt(num2.value);
            console.log(res)
            resultado.value = "O resultado da subtração é " + res;
            break;
        case "divisao":
            res = parseInt(num1.value) / parseInt(num2.value);
            console.log(res)
            resultado.value = "O resultado da divisão é " + res;
            break;
        case "multiplicacao":
            res = parseInt(num1.value) * parseInt(num2.value);
            console.log(res)
            resultado.value = "O resultado da multiplicação é " + res;
            break;
        case "exponenciacao":
            res = parseInt(num1.value) ** parseInt(num2.value);
            console.log(res)
            resultado.value = "O resultado da exponenciação é " + res;
            break;
        default:
            resultado.value = "";
    }
}