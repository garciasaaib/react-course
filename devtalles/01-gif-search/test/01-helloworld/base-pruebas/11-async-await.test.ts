import { getImagen } from '../../../src/01-helloworld/base-pruebas/11-async-await';

describe("11-async-await", () => {
	xtest("getImagen debe retornar una url de imagen", async () => {
    const url = await getImagen();
    // console.log(url);

    expect(typeof url).toBe('string'); 
	
	});

	xtest("getImagen debe retornar un undefined si no existe un apikey", async () => {
    const url = await getImagen();
    // console.log(url);

    expect(typeof url).toBe('string'); 
	});
});