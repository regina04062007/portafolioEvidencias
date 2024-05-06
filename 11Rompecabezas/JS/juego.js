//vamos a crear un arreglo que contenga todas las instrucciones para el juego
var instrucciones=[
    "Utiliza las flechas d navegacion para mover la piezas,",
    "Para ordenar las piezas guiate por la imagen objetivo"
];

//vamos a crear una variable para guardar cual fue el ultimo movimiento del rompecabezas
var movimientos=[

];
//vamos a crear una matriz que representre las posiciones del rompecabezas 
var rompe=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

var rompeCorrecta=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

//Lo que se mueve del romecabezas es una coordenada, es una fila vs columna, asi que necesitouna variabe para guardarla posicion de la pieza que se mueve
//se va a mover la piza 9, es decir, 2,2

var filaVacia = 2;
var columnaVacia=2;

//ya que defini que necesito ahora hay que empezar a estructurar la funciones

//la primera funcion que debe de estar en uso es la de instrucciones, debe de recorrer el arreglo de las instrucciones e imprimirlo en el html
function mostrarInstrucciones(instrucciones){
    for(var i=0; i<instrucciones.length; i++){
    //debo de moestrar en la lista
    mostrarInstruccionLista(instrucciones[i], "lista-instrucciones")
    }
}

function mostrarInstruccionLista(instruccion, idLista){
    var ul=document.getElementById(idLista);
    //debo de agregar la etiqueta li
    var li=document.createElement("li");
    //para agregarlo usamos textcontent
    li.textContent= instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para agregar la ultima dirccion del movimiento
function agregarUltimoMovimiento(direccion){
    movimientos.push(direccion);
}

//Ncesito una funcion para saber si gane
function checarSiGano(){
    for(var i=0; i<rompe.length; i++){
        for(var j=0; j<rompe[i].length; j++){
            //donde estoy
            var rompeActual = rompe[i][j];
            if(rompeActual!==rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//si realmente gane debo de mostrarlo en el html
function mostrarCartelGanador(){
    //no ocupa paramertros porque no voy a recibir nada, solo voy a mostrar
    if(checarSiGano()){
        alert("A mimir uwu");
    }
    return false;
}

//necesito una funcion para poder intercambiar las posiciones de la pieza vacia vs alguna otra
//arreglo[1][2]=arreglo[0][0]
//cuando lo intercambio
//arreglo[0][0]=arreglo[1][2]

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1=rompe[filaPos1][columnaPos1];
    var pos2=rompe[filaPos2][columnaPos2];
    //intercambio
  rompe[filaPos1][columnaPos1]=pos2;
  rompe[filaPos2][columnaPos2]=pos1;
}

//siempre debo de saber donde esta la pieza vacia
function actualizarPosicionVacia(nuevafila, nuevaColumna){
    filaVacia=nuevafila;
    columnaVacia=nuevaColumna;

}

//tenemos que checar si la posicion dentro del rompecabezas es la correcta
function posicionValida(fila,columna){
    return(fila>=0 && fila<=2 && columna>=0 && columna<=2);
}

//ahora viene la parte del movieminto para ello ebemos de entender que cada pieza es un hueco realmnte dentro de la matriz, y lo unico que se esta intercabiando son lAS POSICIONES DE LA MATRIZ, SIGNIFICA QUE CUANDO YO TECLEE LAS FECHAS DE NAVEGACION DEBO DE SABER CUAL SE PRECIONO

//ARRIBA 38, ABAJO 40, IZQUIERDA 37, DERECHA 39

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //si se mueve?
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia=filaVacia+1;
        nuevaColumnaPiezaVacia=columnaVacia;
    }else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia=filaVacia-1;
        nuevaColumnaPiezaVacia=columnaVacia;
    }
    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia=filaVacia;
        nuevaColumnaPiezaVacia=columnaVacia+1;
    }
    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia=filaVacia;
        nuevaColumnaPiezaVacia=columnaVacia-1;
    }
    //mandar a llamar a que la posicion sea valida y sino intercambiarla
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        //tengo que hacer una funcion que se encargue  de intercabiar la posiciones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agrerga el ultimo movimiento
        agregarUltimoMovimiento(direccion);
    }
}

var codigosDireccion={
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
};

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1=rompe[fila1][columna1];
    var pieza2=rompe[fila2][columna2];

    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    //debo de crear otra funcion para que cambie las posiciones de la imagen
    intercambiarPosicionesDOM('pieza'+ pieza1, 'pieza'+ pieza2,);
}

function intercambiarPosicionesDOM(idpieza1, idpieza2){
    var elementoPieza1 = document.getElementById(idpieza1);
    var elementoPieza2 = document.getElementById(idpieza2);

    //vamos a crear clon y puedp ocultar
    var padre=elementoPieza1.parentNode;
    var madre=elementoPieza2.parentNode;

    var cloneElemento1=elementoPieza1.cloneNode(true);
    var cloneElemento2=elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);

}

//la actualizacion de los movimienytos

function actualizarUltimomovimiento(direccion){

    var ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigosDireccion.ARRIBA:
        ultimoMov.textContent=' ⭡';
          break;

        case codigosDireccion.ABAJO:
        ultimoMov.textContent='⭣';
        break;

        case codigosDireccion.IZQUIERDA:
        ultimoMov.textContent=' ⭠';
        break;

        case codigosDireccion.DERECHA:
        ultimoMov.textContent=' ⭢';
        break;
    }
}

function mezclarPiezas(veces){
  if(veces<=0){
    alert("Asi no se puede");
    return;
  }

  var direcciones=[codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.IZQUIERDA, codigosDireccion.DERECHA];

  var direccion=direcciones[Math.floor(Math.random()* direcciones.length)];

  moverEnDireccion(direccion);
  setTimeout(function(){
    mezclarPiezas(veces-1);
  }, 100);
}

//necesitamos saber que teclas esta orpiemiendo el jugador

function capturarTeclas(){
    //para saber que teclas estan opriminedo ocupamos onkeydown
    document.body.onkeydown=(function(evento){
        if(evento.which===codigosDireccion.ARRIBA || evento.which===codigosDireccion.ABAJO || evento.which===codigosDireccion.IZQUIERDA || evento.which===codigosDireccion.DERECHA){
            moverEnDireccion(evento.which);
            actualizarUltimomovimiento(evento.which);

            var gano=checarSiGano();
            if(gano){

                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500);
                }
                evento.preventDefault;
        }
    });
}

//ahora para iniciar el rompecabezas
function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();

}

iniciar();

//mando a llmar las instrucciones
mostrarInstrucciones(instrucciones);