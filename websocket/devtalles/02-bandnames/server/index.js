const Server = require('./models/server');

const server = new Server();

server.execute();

// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// levantar la pagina web con el contenido de index.html
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// esto es un listener de eventos
// cuando un cliente se conecta a mi socketServer, esto se ejecutará
// puedes probarlo abriendo varias pestañas en el navegador
// el argumento socket, contiene toda la info de quien se conectó
// io.on('connection', (socket) => {
//   // por defecto, socket.io tiene un evento llamado connection que podemos ejecutar
//   // cada vez que un cliente se conecta a nuestro servidor, o podemos solo dejarlo ahi
//   console.log('a user connected');
//   // el evento disconnect tambien es un evento por defecto de socket.io
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });



//   // el socket id es unico para cada cliente
//   // cuando se desconecta y se vuelve a conectar, el id cambia
//   console.log(socket.id);





//   // este metodo es para mandar info del server hacia al cliente
//   socket.emit('welcome-message', {
//     message: 'Welcome to the chat',
//     date: new Date(),
//   });





//   // leemos todos los eventos chat message que lleguen al server y lo imprimimos
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);

//     // io es un objeto que contiene todos los sockets conectados
//     // por esto podemos emitir un evento a todos los sockets
//     io.emit('chat message', {
//       message: msg,
//       date: new Date(),
//       id: socket.id,
//     });
//   });
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });