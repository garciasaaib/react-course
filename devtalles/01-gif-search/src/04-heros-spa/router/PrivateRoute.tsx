import React, { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router";

// este componente genera el comportamiento esperado de una ruta privada
// si se esta logeado manda cualquier cosa que tenga de children
// si no esta logueado manda a la pantalla de login
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const { authState } = useContext(AuthContext);
	const { pathname, search } = useLocation();
	const lastPath = `${pathname}${search}`; // esto es para guardar la ruta actualpara redirigir al usuario una vez logueado
	localStorage.setItem("lastPath", lastPath); // esto es para guardar la ruta actual para redirigir al usuario una vez logueado
	// si el usuario no esta logueado, redirige a la pantalla de login
	// el replace={true} es para que no se guarde la 

	return authState.logged ? children : <Navigate to="/login" replace={true} />;
};
