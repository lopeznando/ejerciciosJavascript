//escribe la funcion bmi aca
function bmi(peso, altura) {
    const imc = peso / (altura ** 2); // Calcula el BMI

    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
