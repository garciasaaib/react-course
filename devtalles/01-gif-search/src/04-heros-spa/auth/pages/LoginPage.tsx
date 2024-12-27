import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate()
	const { authState, onLogin } = useContext(AuthContext)
	const onLoginHandler = () => {
		const lastPath = localStorage.getItem("lastPath") || "/"; // si no existe, redirige a la home	

		onLogin("Adrian");
		navigate(lastPath, {
			replace: true, // reemplaza el historial con la ruta actual
		});
	};
  return (
		<div>
			<h1>Login</h1>
			<hr />
			{JSON.stringify(authState)}
			<br />
			<button className="btn" onClick={onLoginHandler}>Login</button>
		</div>
	);
}
