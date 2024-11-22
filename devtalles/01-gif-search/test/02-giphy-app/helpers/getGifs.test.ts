import { getGifs, GifFetchResult } from '../../../src/02-giphy-app/helpers/getGifs';

describe("Pruebas de getGifs()", () => {
	test("should return a gifs array", async () => {
    const response :GifFetchResult = await getGifs('saitama')

    // puedo ver si es un arreglo
    // console.log(gifArray)
    // mido que sea un array
    // expect(response.length).toBeGraterThan(0)
    expect(response).toEqual({
      success: expect.any(Boolean),
      error: expect.any(Boolean),
      gifs: expect.any(Array),
    })

	})
})
