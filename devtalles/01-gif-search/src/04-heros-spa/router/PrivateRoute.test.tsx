import { PrivateRoute } from "./PrivateRoute";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../auth/context/AuthContext";
import { MemoryRouter } from "react-router";

describe("<PrivateRoute />", () => {
	test("PrivateRoute debe mostrar el children al ingresar en el", () => {
		/**
		 * En esta prueba el componente PrivateRoute debe mostrar el children
		 * Para poder hacer esto le agregamos el contexto de AuthContext
		 * donde existe una variable que nos dice si esta o no logueado
		 * De esa manera PublirRoute puede evaluar si esta logueado o no
		 * y mostrar el children
		 */
		const text = `Ruta Privada`;
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: true, token: "token" },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/"]}>
					<PrivateRoute>
						<h1>{text}</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByText(text)).toBeTruthy();
	});

	test("PrivateRoute debe llamar al localstorage buscando el lastpath", () => {
		/**
		 * En esta prueba el componente PublicRoute debe redirigir a la ruta /marvel
		 * ya que el usuario esta logueado
		 * Para poder hacer esto le agregamos el contexto de AuthContext
		 * donde existe una variable que nos dice si esta o no logueado
		 * De esa manera PublirRoute nos redirigira a otra ruta para mostrarnos que no esta logueado.
		 */
		Storage.prototype.setItem = jest.fn();
		const text = `Ruta Privada`;
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: true, token: "token" },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/marvel"]}>
					<PrivateRoute>
						<h1>{text}</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// y evaluamos que se redirija a la ruta /marvel mediante el texto marvel
		expect(screen.getByText(text)).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalled();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
	});
});
