// Función para dar la bienvenida y mostrar el navegador
function bienvenidaYNavegador() {
    // Dar la bienvenida al usuario
    console.log("¡Bienvenido al programa!");

    // Obtener el nombre del navegador
    let navegador = detectarNavegador();

    // Mostrar el nombre del navegador
    if (navegador) {
        console.log("Estás ejecutando el navegador:", navegador);
    } else {
        console.log("No se pudo detectar el navegador.");
    }
}

// Función para detectar el navegador
function detectarNavegador() {
    // Obtener el user agent del navegador
    let userAgent = window.navigator.userAgent;

    // Verificar el nombre del navegador
    if (userAgent.includes("Chrome")) {
        return "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (userAgent.includes("Safari")) {
        return "Safari";
    } else if (userAgent.includes("Edge")) {
        return "Microsoft Edge";
    } else {
        return "Navegador desconocido";
    }
}

// Llamar a la función principal para ejecutar el programa
bienvenidaYNavegador();
