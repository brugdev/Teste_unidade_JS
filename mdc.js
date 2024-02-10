//Calcule o MDC (máximo divisor comum) entre dois números.
function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let numero1 = 8;
let numero2 = 3;
let resultado = calcularMDC(numero1, numero2);
const saida = `MDC de ${numero1} e ${numero2}: ${resultado}`;
console.log(saida);
module.exports = { calcularMDC};

//console.log(typeof saida);