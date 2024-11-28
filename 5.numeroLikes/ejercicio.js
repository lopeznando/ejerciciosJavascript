//escribe tu respuesta aca
function likes(num) {
    if (num < 1000) {
        return num.toString();
    } else if (num < 1_000_000) { 
        return ((num / 1000) | 0) + 'K'; 
    } else { // Un millón o más
        return ((num / 1_000_000) | 0) + 'M'; 
    }
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"
