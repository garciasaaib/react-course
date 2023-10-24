import { render, screen } from "@testing-library/react";
import { LoginPage } from "./login-page";
import userEvent from "@testing-library/user-event";

const getSubmitButton = () => screen.getByRole("button", { name: /submit/i });
const emailInput = () => screen.getByLabelText(/email/i)
const passwordInput = () => screen.getByLabelText(/password/i)
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
	expect(emailInput()).toBeInTheDocument();
	expect(passwordInput()).toBeInTheDocument();
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

test("it should validate the email input as email", async () => {
	render(<LoginPage />);

  // type email
	await userEvent.type(emailInput(), 'fulanitodetal');
	await userEvent.type(passwordInput(), 'fulanitodetal');
  await userEvent.click(getSubmitButton());

  // expect validation errors
  expect(await screen.findByText(/Email is not valid/i)).toBeInTheDocument();
})

test('it should disable the submit button while is fetching', async () => {
	render(<LoginPage />);

	// submit button shouldnt be disabled
	expect(getSubmitButton()).not.toBeDisabled();

	// valid values on inputs
	await userEvent.type(emailInput(), 'john.dow@mail.com');
	await userEvent.type(passwordInput(), '123456');
  await userEvent.click(getSubmitButton());

	// validate that boton in disabled
	expect(getSubmitButton()).toBeDisabled();
})