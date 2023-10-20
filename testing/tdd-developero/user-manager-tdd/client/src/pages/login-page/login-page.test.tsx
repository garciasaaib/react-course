import { render, screen } from "@testing-library/react";
import { LoginPage } from "./login-page";
import userEvent from "@testing-library/user-event";

const getSubmitButton = () => screen.getByRole("button", { name: /submit/i });
/**
 * El texto en el test es normalmente un acceptance criteria, pero puede ser lo que tu quieras.
 * Con getByRole le decimos que hay un encabezado con la palabra login.
 *
 * red: el test falla, porque el componente no existe o porque no tiene el texto que le pedimos
 * green: el test pasa, porque el componente existe y tiene el texto que le pedimos,
 * siendo el tag contenedor un h1 - h5
 */
test("It should render the login title", () => {
	render(<LoginPage />);

	expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});

/**
 * 1 paso: crear el test
 * 2 paso: escribir el tag que pasasra el teest
 * 3 paso: reafactor sin dejar de pasar el test
 */
test("it should render the form elements", () => {
	render(<LoginPage />);
	expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
	expect(getSubmitButton()).toBeInTheDocument();
});

/**
 * Testeo despues de interactuar con un formulario
 */
test("it should validate the inputs as required", async () => {
	render(<LoginPage />);

	// submit form
	await userEvent.click(getSubmitButton());

	// expect validation errors
	expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
	expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
});
