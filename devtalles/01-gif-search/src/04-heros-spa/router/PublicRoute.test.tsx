import { PublicRoute } from "./PublicRoute";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router";

describe("<PublicRoute />", () => {
	test("PublicRoute debe mostrar el children al ingresar en el", () => {
		/**
		 * En esta prueba el componente PublicRoute debe mostrar el children
		 * Para poder hacer esto le agregamos el contexto de AuthContext
		 * donde existe una variable que nos dice si esta o no logueado
		 * De esa manera PublirRoute puede evaluar si esta logueado o no
		 * y mostrar el children
		 */
		const text = `Ruta Pública`;
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: false, token: null },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<PublicRoute>
					<h1>{text}</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);
		expect(screen.getByText(text)).toBeTruthy();
	});

	test("PublicRoute debe mostrar su hijo cuando se esta logueado", () => {
		/**
		 * En esta prueba el componente PublicRoute debe redirigir a la ruta /marvel
		 * ya que el usuario esta logueado
		 * Para poder hacer esto le agregamos el contexto de AuthContext
		 * donde existe una variable que nos dice si esta o no logueado
		 * De esa manera PublirRoute nos redirigira a otra ruta para mostrarnos que no esta logueado.
		 */
		const text = `Ruta Pública`;
		const textMarvel = 'Página Marvel';
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: true, token: "token" },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/login"]}>
					<Routes>
						<Route
							path="login"
							element={
								<PublicRoute>
									<h1>{text}</h1>
								</PublicRoute>
							}
						/>
						<Route path="marvel" element={<h1>{textMarvel}</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// y evaluamos que se redirija a la ruta /marvel mediante el texto marvel
		expect(screen.getByText(textMarvel)).toBeTruthy();
	});
});
