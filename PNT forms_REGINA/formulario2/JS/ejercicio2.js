function ventas(){

    let sueldoTotal, comision, venta1, venta2, venta3
    let sueldoBase;

    
    venta1=parseFloat(document.formulario2.venta1.value);
    venta2=parseFloat(document.formulario2.venta2.value);
    venta3=parseFloat(document.formulario2.venta3.value);
    sueldoBase=parseFloat(document.formulario2.sueldoBase.value);

    // Validar si los campos son números válidos

    if (isNaN(venta1) || venta1 < 0 || isNaN(venta2) || venta2 < 0 || isNaN(venta3) || venta3 < 0 || isNaN(sueldoBase) || sueldoBase < 0) {
        alert("Por favor ingrese solamente números (que sean positivos) en todos los campos");
        return;
    }

    comision=(venta1+venta2+venta3)*0.10;

    sueldoTotal=sueldoBase+comision;

    document.formulario2.comision.value=comision;
    document.formulario2.sueldoTotal.value=sueldoTotal;


}
/*
function soloNumeros(event){

    if(window.Event){
     keynum=event.keycode;
    }
    else{ 
     keynum=event.which;
    }
    if((keynum>47 && keynum<58)||keynum==8 || keynum==13){
     return true;
 }else{
     alert("Ingresar solo numeros");
     return false
 }
 
 }
*/

/*
var abcOK="1234567890";
var checkStr=formulario2.venta1.value;
var checkStr=formulario2.venta2.value;
var checkStr=formulario2.venta3.value;
var checkStr=formulario2.sueldoBase.value;

alert(checkStr);
var allValido=true;


for(var i=0; i<checkStr.length; i++){
var caracteres=checkStr.charAt(i);
for(var j=0; j< abcOK.length; j++){
    if(caracteres==abcOK.charAt(j)){
        break;
    }
}
if(j==abcOK.length){
    allValido=false;
    break;
}
}
if(!allValido){
alert("Escriba unicamente numeros en el campo del valor de venta 1");
formulario2.venta1.focus();
return false;
}
if(!allValido){
alert("Escriba unicamente numeros en el campo del valor de venta 2");
formulario2.venta2.focus();
return false;
}
if(!allValido){
alert("Escriba unicamente numeros en el campo del valor de venta 3");
formulario2.venta3.focus();
return false;
}
if(!allValido){
alert("Escriba unicamente numeros en el campo de sueldo base");
formulario2.sueldoBase.focus();
return false;
}
*/