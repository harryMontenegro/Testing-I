const prompt = require("prompt-sync")({ sigint: true });

let operacionSuma = (num1, num2) => {
    return num1 + num2;
}

let rsultado = operacionSuma(3,4);
console.log(rsultado);