function calificaciones(){

    let  examenFinal, parcial1, parcial2, parcial3;
    let promedioParciales, trabajoFinal;

    // Verificar que se ingresen solo números y que estén en el rango válido
    examenFinal = validarNumero(document.formulario4.examenFinal.value);
    parcial1 = validarNumero(document.formulario4.parcial1.value);
    parcial2 = validarNumero(document.formulario4.parcial2.value);
    parcial3 = validarNumero(document.formulario4.parcial3.value);
    trabajoFinal = validarNumero(document.formulario4.trabajoFinal.value);

    if (examenFinal === false || parcial1 === false || parcial2 === false || parcial3 === false || trabajoFinal === false) {
        alert("Por favor, llena todos los campos ingresando solo números válidos entre 0 y 10 en los campos de calificación.");
        return;
    }

    promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    calificacionfinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);

    
    document.formulario4.promedioParciales.value = promedioParciales;
}

function validarNumero(valor) {
    let numero = parseFloat(valor);
    if (isNaN(numero) || numero < 0 || numero > 10) {
        return false;
    }
    return numero;
}