
describe("setup and teardown examples", () => {
  // jest.fn() crea una funcion pero para jest. para poder accesar a todos sus metodos
  const myMock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hello')
    .mockReturnValueOnce(5);
  // parecido a retunr true, return 'hello', return 5
  // asi controlamos lo que la funcion retorna.


  console.log(myMock);
  const res1 = myMock();
  const res2 = myMock();
  const res3 = myMock();
  
  expect(myMock).toHaveBeenCalled(); // is myMock called?
  expect(myMock).toHaveBeenCalledTimes(3);

  // cada mock retorna una vez lo que definimos arriba
  expect(res1).toBe(true);
  expect(res2).toBe('hello');
  expect(res3).toBe(5);
});
