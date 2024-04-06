function costoTienda(){
     
    let costoProducto1, descuento, pagoFinal;
    let totalCompra;

    costoProducto1=parseFloat(document.formulario3.costoProducto1.value);

    if (isNaN(costoProducto1) || costoProducto1 < 0) {
      alert("Por favor ingrese un número positivo en el campo de costo final de la compra.");
      return;
  }


    totalCompra=costoProducto1;

  
    descuento=totalCompra*0.15;
  
      pagoFinal=totalCompra-descuento;
      document.formulario3.descuento.value=descuento;
      document.formulario3.pagoFinal.value=pagoFinal;
}