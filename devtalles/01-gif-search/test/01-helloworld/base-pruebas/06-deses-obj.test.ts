import { usContext, UsContext } from '../../../src/01-helloworld/base-pruebas/06-deses-obj';
describe("06-deses", () => {
	test("Debe retornar un string", () => {
    const props: UsContext = {
      clave:"1234",
      edad: 30
    }
		const mock = {
      nombreClave: props.clave,
      anios: props.edad,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      },
  }
    const user = usContext(props);

    // igualdad en objetos
		expect(user).toEqual(mock);
	});

});
