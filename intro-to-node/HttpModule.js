const http = require('http');

const server =http.createServer();

server.listen('connection',(socket) => {
console.log('new connection');
});


server.listen(3000);

console.log('Listening port 3000');