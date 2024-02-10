

function multiplos(a, b) {
    for (i = 0; i < 1000; i++) {
        if (i % a == 0)
            soma = soma + i;
    }

    for (i = 0; i < 1000; i++) {
        if (i % b == 0)
            soma = soma + i;
    }
}
let b = 7;
let a = 5;
let soma = 0;
console.log(soma)
