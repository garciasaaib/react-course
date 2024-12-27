import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, AuthState } from "./authReducer";

const initialState: AuthState = {
	logged: false,
	token: null,
};

const init = () => {
  const localAuth = localStorage.getItem("auth")
  const authState = localAuth && JSON.parse(localAuth);
  if (authState) {
    return { ...authState };
  }
  return initialState
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [authState, dispatch] = useReducer(authReducer, initialState, init);

	const onLogin = (token: string) => {
		dispatch({ type: "LOGIN", payload: { token } });
    localStorage.setItem("auth", JSON.stringify({ token, logged: true }));
	};
	const onLogout = () => {
		dispatch({ type: "LOGOUT" });
    localStorage.removeItem('auth')
	};
	return (
		<AuthContext.Provider value={{ authState, onLogin, onLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
