
const http = require('http');

http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type':'application/json'});

    let usuario = {
        nombre: 'Jeffri',
        edad: '22',
        url: req.url
    }
    res.write(JSON.stringify(usuario))
    //res.write('Hola mundo tres!!!');
    res.end();
}).listen(8080);

console.log('Servidor http://localhost:8080');