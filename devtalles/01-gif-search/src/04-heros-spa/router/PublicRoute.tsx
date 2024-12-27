import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

/**
 * Evalua que el authState.logged para si no esta logueado mande la ruta /
 * solo permitira acceder a las rutas dentro de el si no se esta logeado
 * si si esta logueado no permite entrar a estas... redirigiendo a una ruta privada
 */
export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
	const { authState } = useContext(AuthContext);
	return !authState.logged && children;
};