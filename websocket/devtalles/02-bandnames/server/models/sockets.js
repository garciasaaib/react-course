const BandList = require('./band-list');


class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado');

      // manda el evento con el listado de bandas en la primera conexion
      socket.emit('current-bands', this.bandList.getBands());

      // escuchar el evento: votar-banda
      socket.on('votar-banda', (id) => {
        this.bandList.increaseVotes(id);

        // io para que avise a todos los conectados
        // socket para que solo el emisor reciba la respuesta
        this.io.emit('current-bands', this.bandList.getBands());
      });

      // escuchar el evento: votar-banda
      socket.on('borrar-banda', (id) => {
        this.bandList.removeBand(id);

        // io para que avise a todos los conectados
        // socket para que solo el emisor reciba la respuesta
        this.io.emit('current-bands', this.bandList.getBands());
      });

      socket.on('cambiar-nombre-banda', ({ id, nombre }) => {
        this.bandList.changeName(id, nombre);

        this.io.emit('current-bands', this.bandList.getBands());
      });
      
      socket.on('nueva-banda', ({ nombre }) => {
        this.bandList.addBand(nombre);

        this.io.emit('current-bands', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;