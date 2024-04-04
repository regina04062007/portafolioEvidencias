function porcentaje()
{
    let hombres, mujeres;
    let totalAlumnos, porcentajeHombres, porcentajeMujeres;

    mujeres=parseInt(document.formulario5.mujeres.value);
    hombres=parseInt(document.formulario5.hombres.value);

    if (isNaN(mujeres) || mujeres < 0) {
        alert('Ingresa solo números positivos en el campo de mujeres');
        return;
    }
    
    if (isNaN(hombres) || hombres < 0) {
        alert('Ingresa solo números positivos en el campo de hombres');
        return;
    }
    
    totalAlumnos=mujeres+hombres;
    porcentajeMujeres=((mujeres)/totalAlumnos)*100;
    porcentajeHombres=((hombres)/totalAlumnos)*100;
    
    document.formulario5.totalAlumnos.value=totalAlumnos;
    document.formulario5.porcentajeMujeres.value=porcentajeMujeres;
    document.formulario5.porcentajeHombres.value=porcentajeHombres;
}