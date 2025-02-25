document.addEventListener("DOMContentLoaded", function () {
    // Esperamos a que la página cargue completamente
    document.getElementById("calcularBtn").addEventListener("click", calcularPrecio);
});

function calcularPrecio() {
    // Obtener valor ingresado por el usuario
    let edad = document.getElementById("edad").value;

    // Obtener elementos donde mostrar el resultado y mensajes de error
    let precioElemento = document.getElementById("precioEntrada");
    let mensajeError = document.getElementById("mensajeError");

    // Limpiar mensajes anteriores
    precioElemento.innerHTML = "";
    mensajeError.innerHTML = "";

    // Validación: Comprobar si el campo está vacío
    if (edad.trim() === "") {
        mensajeError.innerHTML = "⚠️ Error: Por favor, ingresa tu edad.";
        return;
    }

    // Convertir la edad a número
    edad = parseInt(edad);

    // Validación: Comprobar si es un número válido
    if (isNaN(edad)) {
        mensajeError.innerHTML = "⚠️ Error: Ingresa un número válido.";
        return;
    }

    // Validación: Edad negativa o nula
    if (edad <= 0) {
        mensajeError.innerHTML = "⚠️ Error: La edad debe ser un número positivo mayor que 0.";
        return;
    }

    let precio;

    // Determinar el precio de la entrada según la edad
    if (edad < 12) {
        precio = "¡Entrada gratuita! 🎉";
    } else if (edad >= 12 && edad <= 18) {
        precio = "Precio reducido: 5€ 🏷️";
    } else {
        precio = "Precio completo: 10€ 💰";
    }

    // Mostrar el resultado en la página
    precioElemento.innerHTML = `✅ ${precio}`;
}
