import { useState } from 'react';
import { UserContext, UserContextInterface } from './UserContext';

interface UserProviderProps {
	children: React.ReactNode; // This allows any React component to be a child of UserProvider
}


// const user = {
// 	name: "Adrian",
// 	email: "adrian@example.com",
// 	age: 30,
// };

export const UserProvider = ({children}: UserProviderProps) => {

	const [user, setUserr] = useState<UserContextInterface>()
	const setUser = (user: UserContextInterface["user"]) => {
		setUserr(user);
	}

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
