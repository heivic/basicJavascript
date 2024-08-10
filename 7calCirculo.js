//Calcular a área de um círculo.
//(A = π r²).
function areaCirculo(raio) {
    let pi = Number(3.14159265359)
    let rai = raio**2
    console.log(`Pi é ${(pi).toFixed(2)} vezes raio ao quadrado ${rai} é igual a ${(pi * rai).toFixed(2)}`)
}

areaCirculo(5)