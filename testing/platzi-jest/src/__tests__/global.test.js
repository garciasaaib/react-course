// text tests
const text = "hello world"
xdescribe('text tests', () => {
  test('Must have a text', () => {
    expect(text).toMatch(/world/)
  })
})


// arrays tests
const list = ["casa", "carro", "comida", "lavanderia", "baño", "estufa"]
xdescribe('arrays tests', () => {
  test('Do we have "casa"?', () => {
    expect(list).toContain('baño')
  })
})


// number tests
const guessAge = 18
xdescribe('number tests', () => {
  test('This number must be bigger than 15', () => {
    expect(guessAge).toBeGreaterThan(15)
  })
})


// boolean tests
const trueVar = true
xdescribe('boolean tests', () => {
  test('This number must be bigger than 15', () => {
    expect(trueVar).toBeTruthy()
  })
})


// function test
const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""))
}
xdescribe('function test', () => {
  test('callback must return a olaH', () => {
    reverseString('Hola', (str) => {
      expect(str).toBe('aloH')
    })
  })
})


// promise test
const promiseReverseString = str => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error('Error'))
    resolve(str.split("").reverse().join(""))
  })
}
xdescribe('promise test', () => {
  test('promise must return a olaH', () => {
    return promiseReverseString('Hola').then(string => {
      expect(string).toBe('aloH')
    })
  })
})


// async await test
xdescribe('async await test', () => {
  test('promise must return a olaH with async await', async () => {
    const string = await promiseReverseString('Hola')
    expect(string).toBe('aloH')
  })
})


// afterEach(() => console.log('After each test'))


// afterAll(() => console.log('After all the tests'))


// beforeEach(() => console.log('Before each test'))


// beforeAll(() => console.log('Before all the tests'))
