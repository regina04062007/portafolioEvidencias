//vamos  acrear nuestro propio servidor

const { isUtf8 } = require('buffer');
var http=require('http');
//todo servidor debe de poder atenter peticiones y debe de generar respuestas, por lo tanto nuestra funcion debe tener dos parametros request, response

var servidor=http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html chrset=uft-8'});
    response.write('<h2>Hola mundo, esto es mi primer servidor de regina elizabeth herrera macedo</h2>');
    console.log('Se hizo una peeticion web');
    response.end();
});

//en que puerto va a estar funcionando el servidor
servidor.listen(3000);

//ejetumanos en consola
console.log('ejecutando el servidor en puerto 3000');