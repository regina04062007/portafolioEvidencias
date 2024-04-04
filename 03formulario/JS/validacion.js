/*
javascript es un lengiaje de prohgramacion miltiparadigma
acetpa informacion funcional, estrucuturada, POO, eventos
Dentro de JS no existe int, dpuble, float, stering etc

Para el manejo de variables con tipo de dato existe el estandar ES6 el cual nos dice que para el manejo de variables tenemos;
VAR LET CONST
*/

//Vamos a hacer una funcion para comprobar que el campo nombre sea mayor a 3 caracteres
//los metodos son todos los comportamientos

function validar(formulario){

    if(formulario.nombre.value.length < 4 ){
        alert("Porfavor escribe por lo menos 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK="qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";
 var checkStr=formulario.nombre.value;

 alert(checkStr);
 var allValido=true;

 //Vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una ves que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considenrando copmo la verdad absoluta  y i despues de recorrer toda la cadena encuentro que el carcater no se encuetra envie un error

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
    alert("Escriba unicamente letras en el campo del nombre");
    formulario.nombre.focus();
    return false;
 }


 var abcOK="1234567890";
 var checkStr=formulario.edad.value;

 alert(checkStr);
 var allValido=true;

 //Vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una ves que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considenrando copmo la verdad absoluta  y i despues de recorrer toda la cadena encuentro que el carcater no se encuetra envie un error

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
    alert("Escriba unicamente numeros en el campo del edad");
    formulario.edad.focus();
    return false;
 }
//funcion para validar un corre es necesrio contar con una expresion regular porque tenemos un formato el cual es:

//texto.texto@texto.texto

var b=/^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

var txt=formulario.correo.value
alert("Email"+(b.test(txt)?"":"no")+"valido");

return b.test;
}


//TAREA: expresiones regulares mozilla