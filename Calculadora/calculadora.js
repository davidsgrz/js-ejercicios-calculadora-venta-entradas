
// Función principal que se ejecuta cuando se pulsa el botón "Calcular"
function calcular() {
    // Obtener valores de los campos de entrada
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operacion = document.getElementById("operacion").value;
    
    // Obtener elementos donde mostrar los resultados
    let resultadoElemento = document.getElementById("resultado");
    let mensajeError = document.getElementById("mensajeError");

    // Limpiar mensajes anteriores
    resultadoElemento.innerHTML = "";
    mensajeError.innerHTML = "";

    // Validación: Comprobar si las entradas están vacías
    if (num1 === "" || num2 === "") {
        mensajeError.innerHTML = "⚠️ Error: Por favor, ingresa ambos números.";
        return;
    }

    // Convertir las entradas a números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Validación: Comprobar si las entradas son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        mensajeError.innerHTML = "⚠️ Error: Ingresa solo números.";
        return;
    }

    let resultado;

    // Realizar la operación elegida
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            // Validación: Evitar división por cero
            if (num2 === 0) {
                mensajeError.innerHTML = "⚠️ Error: No se puede dividir por cero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            mensajeError.innerHTML = "⚠️ Error: Operación no válida.";
            return;
    }

    // Mostrar el resultado en la página
    resultadoElemento.innerHTML = `✅ Resultado: ${resultado}`;
}
