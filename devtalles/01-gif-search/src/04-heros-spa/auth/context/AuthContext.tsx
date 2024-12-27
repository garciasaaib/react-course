import { createContext } from 'react'
import { AuthState } from './authReducer'


type ContextType = {
	authState: AuthState;
	onLogin: (token: string) => void;
	onLogout: () => void;
};

export const AuthContext = createContext({} as ContextType)
