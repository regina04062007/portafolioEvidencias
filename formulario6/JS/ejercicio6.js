function calculoEdad(){
    let añoActual, añoNacimiento, edad;

    añoActual = parseInt(document.formulario6.añoActual.value);
    añoNacimiento = parseInt(document.formulario6.añoNacimiento.value);

    if (isNaN(añoActual) || isNaN(añoNacimiento) || añoActual < 0 || añoNacimiento < 0) {
        alert("Por favor ingrese solo números positivos en los campos de añoActual y añoNacimiento.");
        return;
    }
    if(añoNacimiento>añoActual){
        alert("El año de nacimiento no puede ser mayor al año actual");
        return;
    }

    edad = añoActual - añoNacimiento;

    document.formulario6.edad.value = edad;
}
