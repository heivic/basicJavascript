function convertString(string){
    let reverse = string.split("").reverse().join("")
    console.log(string + " invertido é ")
    return reverse
}

console.log(convertString("banana"))