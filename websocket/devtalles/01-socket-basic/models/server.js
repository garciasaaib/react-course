// Express Server
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    // Http Server
    this.server = http.createServer(this.app);

    // Socket configuration
    this.io = socketIo(this.server);
  }

  middlewares() {
    const pathIndex = path.resolve(__dirname, '../public')

    // chat publico en /
    this.app.use(express.static(pathIndex));

    // cors
    this.app.use(cors())
  }

  configSockets() {
    new Sockets(this.io);
  }

  execute() {
    // init middlewares
    this.middlewares();

    // init sockets
    this.configSockets();

    // init server
    this.server.listen(this.port, () => {
      console.log('Server running at http://localhost:' + this.port);
    });
  }

}

module.exports = Server;