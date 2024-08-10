//Converter temperatura de Celsius para Fahrenheit.
//Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.

function celToFah(celsius){
    let fah = (celsius * 9/5) + 32
    console.log(`${celsius}(°C) para Fahrenheit sao ${fah}(°F)`)
}

celToFah(31)