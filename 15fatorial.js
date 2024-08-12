//Calcular o fatorial de um número.
function fatorial(fat) {
    if (fat === 1 || fat === 0) {
        return 1;
    } else {
        return fat * fatorial(fat - 1);  // Retorna o valor acumulado da recursão
    }
}

// Para exibir o resultado
const numero = 4;
console.log(`O Fatorial de ${numero}! é ${fatorial(numero)}`);

/*
Exercicio usando função de recursão
recursão é uma técnica onde uma função chama a si mesma para resolver um problema menor.

Material de estudo:

https://www.youtube.com/watch?v=3sm_nq7lE20
*/