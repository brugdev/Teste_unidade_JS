//Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. 
//Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

var soma=0

for(i=0;i<1000; i++)
{
    if(i%7==0)
    soma=soma+i;
}

for(i=0;i<1000; i++)
{
    if(i%5==0)
    soma=soma+i;
}
console.log(soma)
//console.log(typeof soma);

module.exports = {soma};//exportando para testes