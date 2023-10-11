const CelciusE1 = document.getElementById("celcius");
const Fahrenheit = document.getElementById("fahrenheit");
const Kelvin = document.getElementById("kelvin");

function computerTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        
        case "Celius":

        FahrenheitE1.value = (currentValue * 9/5) + 32;

        Kelvin.value = parseFloat(currentValue) + 273.15;

        break;

        case "Fahrenhit":
            
        CelciusE1.value = (currentValue - 32) * 5/9;

        Kelvin.value = (currentValue - 32) * 5/9 + 273.15;

        break;

        case "Kelvin":

        CelciusE1.value = currentValue - 273.15;

        FahrenheitE1.value = (currentValue - 273.15) * 9/5 + 32;

        break;

        default;

        break;
        
    }
} 