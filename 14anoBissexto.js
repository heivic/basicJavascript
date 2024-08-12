//Verificar se um ano é bissexto.

function bissexto(ano){
    if(ano % 400 == 0 ||  ano % 4 == 0 && ano % 100 != 0){
        console.log('Ano Bissexto')
    } else {
        console.log('Ano Comum')
    }
    return
}

bissexto(2024)


/*
Material de ensino:
https://www.youtube.com/watch?v=Qz-LdPFGMaI
*/