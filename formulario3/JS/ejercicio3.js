function costoTienda(){
     
    let costoProducto1, costoProducto2, costoProducto3, descuento, pagoFinal;
    let totalCompra;

    costoProducto1=parseFloat(document.formulario3.costoProducto1.value);
    costoProducto2=parseFloat(document.formulario3.costoProducto2.value);
    costoProducto3=parseFloat(document.formulario3.costoProducto3.value);

    if (isNaN(costoProducto1) || costoProducto1 < 0) {
      alert("Por favor ingrese un número positivo en el campo costoProducto1.");
      return;
  }

  if (isNaN(costoProducto2) || costoProducto2 < 0) {
      alert("Por favor ingrese un número positivo en el campo costoProducto2.");
      return;
  }

  if (isNaN(costoProducto3) || costoProducto3 < 0) {
      alert("Por favor ingrese un número positivo en el campo costoProducto3.");
      return;
  }

    totalCompra=costoProducto1+costoProducto2+costoProducto3;

    if(totalCompra>1000)
    descuento=totalCompra*0.15;
      else
    descuento=0;
  
      pagoFinal=totalCompra-descuento;
      document.formulario3.descuento.value=descuento;
      document.formulario3.pagoFinal.value=pagoFinal;
      document.formulario3.totalCompra.value=totalCompra;
}