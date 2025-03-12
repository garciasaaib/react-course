import { authReducer, AuthState } from './authReducer';
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
    const payload = { token: "token" };
    const state = authReducer(initialState, { type: "LOGIN", payload });
    expect(state.logged).toBeTruthy();
    expect(state.token).toEqual(state.token);
  })

  test('debe de (logout) llamar el logout y borrar el usuario y poner logged en false', () => {
    const initialState = { token: "token", logged: true };
    const state = authReducer(initialState, { type: "LOGOUT" });
    expect(state.logged).toBeFalsy();
    expect(state.token).toBeFalsy();
  })

}); // Aquí irán tus pruebas individuales para authReducer.
