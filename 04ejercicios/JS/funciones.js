//vamos a crera una funcion que se encrague de poder validar que existan unicamente numeros dentro del campo inversion
function validarn(e){
    //operador ternario pone a prueba todo, es una condicional yva a regresar un booleano
    var teclado=(document.all)?e.keyCode : e.which;
    if(teclado == 8)return  true;
    var patron = /[0-9\d.]/;
    var codigo=String.fromCharCode(teclado);
    return patron.test(codigo);

}
//el id solo lo puedes usar una vez, el nombre lo puedes usar varias veces
function interes(){
    var valor=document.getElementById("cantidadi").
    value;
    var parseo=parseFloat(valor);
    var interes= parseo*(0.037/12);
    var total=interes+parseo;

    document.getElementById("sueldoi").value= "$"+total;

}

function borrar(){
    document.getElementById("cantidadi").value="";
    document.getElementById("sueldoi").value="";
}
