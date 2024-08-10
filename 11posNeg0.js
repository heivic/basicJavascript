//Verificar se um número é positivo, negativo ou zero.
function analytic(num){
    if(num > 0){
        console.log(`${num} positivo`)
        return
    } else if (num == 0){
        console.log(`${num} neutro`)
    } else {
        console.log(`${num} negativo`)
    }
}

analytic(1)