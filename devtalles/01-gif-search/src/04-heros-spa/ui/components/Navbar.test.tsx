import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter, useNavigate } from "react-router";
import { AuthContext } from "../../auth/context/AuthContext";

// mockeando el hook useNavigation
const mockedUseNavigate = jest.fn();
/**
 * con estas lineas toda la libreria con los hooks de react-router-dom
 * pero solo se mockea el useNavigate
 */
jest.mock("react-router", () => ({
	...jest.requireActual("react-router"),
	useNavigate: () => mockedUseNavigate,
}));

describe("<Navbar />", () => {
	const contextValues = {
		authState: { logged: true, token: "token" },
		onLogin: jest.fn(),
		onLogout: jest.fn(),
	};

	// antes de cada prueba limpia los mocks y las funciones esten limpias
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("Debe mostrar el usuario logueado", () => {
		// Arrange
		// no es necesario poner rutas solo el navbar
		render(
			<AuthContext.Provider value={contextValues}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// Act
		// Assert
		expect(screen.getByText("Logout")).toBeTruthy();
	});

	test("debe llamar el logout y navigate cuando hace click en el boton Logout", () => {
		// Arrange: se monta el componente con todo y el contexto
		render(
			<AuthContext.Provider value={contextValues}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		// se toma el botton y se hace click
		const logOutButton = screen.getByRole("button");
		fireEvent.click(logOutButton);

		// se valida que se haya llamado a la funcion
		expect(contextValues.onLogout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
	});
});
