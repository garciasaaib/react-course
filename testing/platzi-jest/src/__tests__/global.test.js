const text = "hello world"
const list = ["casa", "carro", "comida", "lavanderia", "baño", "estufa"]
const guessAge = 18
const trueVar = true

describe('text tests', () => {

  test('Must have a text', () => {
    expect(text).toMatch(/world/)
  })
})

describe('arrays tests', () => {
  test('Do we have "casa"?', () => {
    expect(list).toContain('baño')
  })
})

describe('number tests', () => {
  test('This number must be bigger than 15', () => {
    expect(guessAge).toBeGreaterThan(15)
  })
})

describe('boolean tests', () => {
  test('This number must be bigger than 15', () => {
    expect(trueVar).toBeTruthy()
  })
})

const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""))
}

describe('function test', () => {
  test('callback must return a olaH', () => {
    reverseString('Hola', (str) => {
      expect(str).toBe('aloH')
    })
  })
})