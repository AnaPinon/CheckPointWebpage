function checkPoint7 (a, b, c, d) {
    let suma1 = a + b;
    let suma2 = c + d;
    let resultado = suma1 * suma2;

    // Comprobar si el resultado es mayor o menor que 50
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

// Resultado:
checkPoint7 (10, 5, 3, 2);  // ¡El número es menor que 50!
checkPoint7 (1, 4, 2, 1); // ¡El número es menor que 50!
