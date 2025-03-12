import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HerosRoutes } from "./HerosRoutes";
import { AuthContext } from "../../auth/context/AuthContext";

/**
 * Ahora debes poder navegar entre las rutas de HerosRoutes
 * Puedes probar cada una de las rutas y testear su titulo principal
 */

describe("<HerosRoutes />", () => {
	test("HerosRoutes debe mostrar una ruta /marvel", () => {
    /**
     * HerosRouter
     */

		render(
			<AuthContext.Provider
				value={{
					authState: { logged: false, token: null },
					onLogin: jest.fn(),
					onLogout: jest.fn(),
				}}
			>
				<MemoryRouter initialEntries={["/marvel"]}>
					<HerosRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);
    /**
     * Ahora lo que evaluamos es que, si no tenemos sesion nos retorne a la pantalla de login
     */
    expect(screen.getByText("MarvelPage")).toBeTruthy();
	});
});
