export type AuthActions =
| { type: 'LOGIN', payload: { token: string } }
| { type: 'LOGOUT' }
| { type: ''}

export type AuthState = {
  logged: boolean;
  token: string | null;
}


export const authReducer = (state: AuthState, action: AuthActions) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, logged: true, token: action.payload.token };
    case 'LOGOUT':
      return { ...state, logged: false, token: null };
    default:
      return state;
  }
}