import { authReducer, AuthState } from '../../../../src/04-heros-spa/auth/context/authReducer';
describe('Pruebas en authReducer', () => {
  const initialState: AuthState = {
    logged: false,
    token: null,
  };

  test('debe retornar el estado por defecto', () => {
    const state = authReducer(initialState, { type: "" });
    expect(state).toEqual(initialState);
  })

  test('debe de (login) llamar el login autenticar y estableceer el user', () => {
    const state = authReducer(initialState, { type: "LOGIN", payload: { token: "token" } });
    // expect(state).toEqual(initialState);
    console.log(state);
  })

  test('debe de (logout) llamar el logout y borrar el usuario y poner logged en false', () => {

  })

}); // Aquí irán tus pruebas individuales para authReducer. 