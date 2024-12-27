import { createContext } from 'react'

export interface UserContextInterface {
	user: {
		name: string;
		age: number;
		email: string;
	} | undefined;
	setUser: (user: UserContextInterface["user"]) => void;
}

export const UserContext = createContext({} as UserContextInterface);

