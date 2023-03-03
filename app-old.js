const console = require('console');
const http = require ('http');

//se crera un servidor
 http.createServer ((req , res) =>{
    res.writeHead(200 , {'Content-Type': 'text/plain'});
    res.write('hola mundo');
    res.end();


 })
 //se crea el puerto
 .listen( 8080 );

 console.log('escuchando en el puesrto', 8080)