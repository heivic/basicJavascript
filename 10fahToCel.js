//Converter temperatura de Fahrenheit para Celsius.
//C = ( °F − 32) × 5/9
function fahToCel(fah){
    let celsius = (fah-32) * 5/9
    console.log(`${fah}°F para Celsius e ${(celsius).toFixed(3)}°C`)
}

fahToCel(75)