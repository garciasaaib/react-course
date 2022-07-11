// testing the bookservices with no the real db
const BooksService = require('./books.service');

// fake data, informacion para rellenar
const fakeBooks = [
  { _id: 1, name: 'Harry Potter' },
  { _id: 2, name: 'Harry Potter 2' },
  { _id: 3, name: 'Harry Potter 3' },
];

// Stub => suplantacion de la libreria de mongo
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => { },
};

/** suplantacion de data
 * '../lib/mongo.lib' es la ruta llamada en algun punto,
 * cuando sea llamada, se dispara la funcion de jest.fn, que implementa un mock
  * esto en lugar de llamar a la mongo.lib real llama al Stub MongoLibStub con su data fake
 */
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Tests for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Tests for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // Asssert
      expect(books.length).toEqual(3);
    });

    test('should return only one book and the data', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // Asssert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
