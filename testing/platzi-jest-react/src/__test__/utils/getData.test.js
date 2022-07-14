import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  /**
   * Hay que tener mucho cuidado cuando se trabaja con 
   * promesas desde jest, porque si no se retorna el 
   * resultado de la promesa en el test o se usa un callback 
   * para finalizar el test dentro del then siempre van a 
   * pasar las pruebas así estén fallando.
   */
  test('Llamar api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    const api = 'https://google.com'
    getData(api)
      .then(response => {
        expect(response.data).toEqual('12345')
      })

    expect(fetch.mock.calls[0][0]).toEqual(api)
  });

  //1. Callback
  test('Llamar una API y retornar datos', (done) => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
        done();
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });


  //2. Retornar promesa
  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    return getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
  });
});