//Link de ajuda : "https://www.youtube.com/watch?v=mcd4xHR2vyU"
function soma(x){
    let soma = 0

    const base = x.toString()
    for(i = 0; i < base.length; i++){
        soma += Number(base[i])
    }
    return console.log(soma)
}

soma(12345)