/* Forma individual!

var num = 5

for(i = 0; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}
*/

for(i = 0; i <= 10; i++){
    console.log(`\nTabuada do ${i}\n`)

    for(b = 0; b <= 10; b++){
        console.log(`${i} x ${b} = ${i*b}`)
    }
}