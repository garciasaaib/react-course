// callback
// esta funcion ejecuta un callback despues de resolver la funcion asincrona
const asyncCallback = (callback: (data: string) => void) => {
  // estro podria ser una llamada de una API
  setTimeout(() => {
    callback('hello world');
  }, 1000);
}

describe('async code', () => {
  // callbacks
  test('async with callback', (done) => {
    /* 1. corre la funcion asyncCallback e identifica el parametro enviado
    en este ejemple, el parametro es una funcion
    2. ejecuta el callback
    3. verifica que el parametro enviado al callback sea el esperado
    4. Ejecuta done, que es la funcion que indica que el test termino
    */
    asyncCallback((data) => {
      expect(data).toBe('hello world');
      done();
    });
  });

// promises
const asyncPromise = () => new Promise((resolve) => {resolve(true)});
  test('async with promises', () => {
    // 1. ejecuta la funcion asyncPromise
    // 2. espera que el resultado sea true
    // 3. este modo espera que el expect sea el esperado
    return asyncPromise().then((result) => {
      expect(result).toBe(true);
    });
  });

  // async await
  test('async with async await', async () => {
    // 1. ejecuta la funcion asyncPromise
    // 2. espera que el resultado sea true
    // 3. este modo espera que el expect sea el esperado
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});