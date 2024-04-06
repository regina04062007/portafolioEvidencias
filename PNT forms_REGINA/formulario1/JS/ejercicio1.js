function capital(){
    let capitalFinal, capitalInicial;

    capitalInicial=parseFloat(document.formulario1.capitalInicial.value);

     // Validar si el valor ingresado es un número y es positivo mayor o igual a 0
     if (!isNaN(capitalInicial) && capitalInicial >= 0) {
        // Realizar el cálculo si la validación es correcta

    capitalFinal=capitalInicial*1.02;
    document.formulario1.capitalFinal.value=capitalFinal;
} else {
        // Mostrar un mensaje de error si el valor ingresado no cumple con la validación
        alert("Por favor ingrese un número positivo mayor o igual a 0 en el campo Capital Inicial.");
        // Limpiar el campo Capital Final en caso de error
        document.formulario1.capitalFinal.value = "";
        // Limpiar el campo Capital Inicial en caso de error
        document.formulario1.capitalInicial.value = "";
    }
}