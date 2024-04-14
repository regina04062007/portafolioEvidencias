function problema1(){
    let input = document.querySelector('#p1-input').value;
    
    let words = input.split(" "); 
    words.reverse(); 
    let output = words.join(" "); 
    
    document.querySelector('#problema1-output').innerText = output;
}

function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;//Los query hacen una busqueda sobre todo el elemento
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //Vamos a formar los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    //Invierto la cadena
    v2 = v2.reverse();

    //Vamos a recorrer le v1 y lo vamos a multiplicar el inverso del v2
    var p2_producto = 0;
    for(var i =0; i< v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    //Muestro el resultado
    document.querySelector('#problema2-output').textContent = 'El producto minimo es de ' + p2_producto;

}

function problema3(){

    const input = document.querySelector('#p3-input').value; const palabras = input.split(','); let mayorCaracteresUnicos = 0; let palabraUnicos = '';

 
palabras.forEach(palabra => { 
    const caracteresUnicos = new Set(palabra.split('')).size; 
    if(caracteresUnicos > mayorCaracteresUnicos){ 
        mayorCaracteresUnicos = caracteresUnicos; 
        palabraUnicos = palabra; 
    } 
}); 

document.querySelector('#problema3-output').innerText = `La palabra con más caracteres únicos es: ${palabraUnicos}`; 

    
}