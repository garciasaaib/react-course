### setup

```js
const fakeBooks = [
  { _id: 1, name: 'Harry Potter' },
  { _id: 2, name: 'Harry Potter 2' },
  { _id: 3, name: 'Harry Potter 3' },
];
```

`const mockGetAll = jest.fn();` Es una funcion fantasma que manejaremos.

```js
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));
```

`jest.mock('../lib/mongo.lib'` Suplanta a la llamada de la libreria de mongo, para que cuando sea llamada en su lugar ejecute otro ``jest.fn()``, y mediante ``mockImplementation`` sea seteado el objeto con el metodo ``getAll: mockGetAll``.

```js
beforeEach
let service;
  beforeEach(() => {
    service = new BooksService();
  });
```

``service = new BooksService()`` crea una instancia de ``BookService``, que ya contiene la trampa que al llamar a mongo, lo suplanta con los metodos ``getAll`` y ``create``.

### Test
```js
test('', () => {
  mockGetAll.mockResolvedValue([...fakeBooks])
  const books = await service.getBooks({})
  expect(books.length).toEqual(3);
  expect(mockGetAll).toHaveBeenCalled()
  expect(mockGetAll).toHaveBeenCalledWith('books', {})
  expect(mockGetAll).toHaveBeenCalledTimes(1)
})
```

Seteamos que cuando mockGetAll sea llamado retorne fakeBooks.
`service.getBooks({})` hace una llamada al servicio.
Los expect son en si ifs que ven el detalle de la data.
`expect(books.length).toEqual(3)` verifica que la respuesta tenga tres posiciones.
`expect(mockGetAll).toHaveBeenCalled()` Verifica que haya sido llamada esta funcion fake.
… y asi xD
