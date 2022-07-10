const randomFlower = require('../flowers/index')

describe('test to functionality for randomFlower', () => {
  test('probar funcionalidad', () => {
    expect(typeof (randomFlower())).toBe('string')
  })
  
  test('comprobar que no existe algun valor', () => {
    expect(randomFlower()).not.toMatch(/🌶️/)
  })
})