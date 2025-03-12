import { AppRouter } from "./AppRouter";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../auth/context/AuthContext";
import { MemoryRouter } from "react-router";

describe("<AppRouter />", () => {
	test("AppRouter debe mostrar el login si no esta autenticado", () => {
    /**
     * Para poder probar las rutas es necesario usar el MemoryRouter
     * Para poder verficar que se esta mostrando el login es necesario usar las variables de AuthContext
     * AppRouter ya contiene nuestras rutas declaradas
     */
		const textLogin = "Login";
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: false, token: null },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/marvel"]}>
					<AppRouter/>
				</MemoryRouter>
			</AuthContext.Provider>
		);
    /**
     * Ahora lo que evaluamos es que, si no tenemos sesion nos retorne a la pantalla de login
     */
    expect(screen.getAllByText(textLogin)).toBeTruthy();
	});
	test("AppRouter debe mostrar el marvel si esta autenticado", () => {
    /**
     * Para poder probar las rutas es necesario usar el MemoryRouter
     * Para poder verficar que se esta mostrando el login es necesario usar las variables de AuthContext
     * AppRouter ya contiene nuestras rutas declaradas
     */
		const textMarvel = "Marvel";
		render(
			<AuthContext.Provider
				value={{
					authState: { logged: true, token: "null" },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/marvel"]}>
					<AppRouter/>
				</MemoryRouter>
			</AuthContext.Provider>
		);
    /**
     * Ahora lo que evaluamos es que, si no tenemos sesion nos retorne a la pantalla de login
     */
    expect(screen.getAllByText(textMarvel)).toBeTruthy();
	});
});
