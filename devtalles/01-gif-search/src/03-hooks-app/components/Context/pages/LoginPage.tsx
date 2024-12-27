import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
			<div>
				<button aria-label="login" className="btn" onClick={() => {
          setUser({ name: "John Doe", age: 30, email: "john.doe@example.com" });
        }}>Establecer Usuario</button>
        <button aria-label="logout" className="btn" onClick={() => {setUser(undefined);}}>Logout</button>
			</div>
		</>
	);
};
