//escribe tu respuesta aca
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4; // 40% de los ingresos
    } else {
        return 0; // Si no cumple las condiciones
    }
}

// código de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0
