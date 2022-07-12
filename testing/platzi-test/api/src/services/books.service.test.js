// testing the bookservices with no the real db
const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// fake data, informacion para rellenar


// Spies => suplantacion pero esperamos ver que se le manda
const mockGetAll = jest.fn();



/** suplantacion de data
 * '../lib/mongo.lib' es la ruta llamada en algun punto,
 * cuando sea llamada, se dispara la funcion de jest.fn, que implementa un mock
  * esto en lugar de llamar a la mongo.lib real llama al Stub MongoLibStub con su data fake
 */
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
// Stub => suplantacion de la libreria de mongo
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => { },
})));

describe('Tests for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Tests for getBooks', () => {
    test('should return a list of books', async () => {
      const fakebooks = generateManyBooks(20)
      console.log(fakebooks);
      mockGetAll.mockResolvedValue([...fakebooks]); // Arrange
      const books = await service.getBooks({}); // Act

      expect(books.length).toEqual(fakebooks.length); // Assert
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test('should return a list of books', async () => {
      const fakebooks = generateManyBooks(3)
      mockGetAll.mockResolvedValue([...fakebooks]); // Arrange
      const books = await service.getBooks({}); // Act

      expect(books.length).toEqual(fakebooks.length); // Assert
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(2);
    });


    test('should return only one book and the data', async () => {
      const fakebooks = generateManyBooks(3)
      mockGetAll.mockResolvedValue([...fakebooks]); // Arrange
      const books = await service.getBooks(); // Act

      expect(books[0].name).toEqual(fakebooks[0].name); // Assert
    });
  });
});
