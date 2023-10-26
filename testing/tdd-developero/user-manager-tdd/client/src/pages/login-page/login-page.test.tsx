import { screen } from "@testing-library/react";
import { LoginPage } from "./login-page";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/render-width-providers";
import { server } from "../../mocks/server";
import { rest } from "msw";

const getSubmitButton = () => screen.getByRole("button", { name: /submit/i });
const emailInput = () => screen.getByLabelText(/email/i);
const passwordInput = () => screen.getByLabelText(/password/i);

const mockServerWithError = (statusCode: number = 500) =>
	server.use(
		rest.post("/login", (req, res, ctx) =>
			res(ctx.delay(1), ctx.status(statusCode))
		)
	);

const fillAndSendLoginForm = async () => {
	await userEvent.type(emailInput(), "john.dow@mail.com");
	await userEvent.type(passwordInput(), "123456");
	await userEvent.click(getSubmitButton());
};
/**
 * El texto en el test es normalmente un acceptance criteria, pero puede ser lo que tu quieras.
 * Con getByRole le decimos que hay un encabezado con la palabra login.
 *
 * red: el test falla, porque el componente no existe o porque no tiene el texto que le pedimos
 * green: el test pasa, porque el componente existe y tiene el texto que le pedimos,
 * siendo el tag contenedor un h1 - h5
 */
test("it should render the login title", () => {
	renderWithProviders(<LoginPage />);

	expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});

/**
 * 1 paso: crear el test
 * 2 paso: escribir el tag que pasasra el teest
 * 3 paso: reafactor sin dejar de pasar el test
 */
test("it should render the form elements", () => {
	renderWithProviders(<LoginPage />);
	expect(emailInput()).toBeInTheDocument();
	expect(passwordInput()).toBeInTheDocument();
	expect(getSubmitButton()).toBeInTheDocument();
});

/**
 * Testeo despues de interactuar con un formulario
 */
test("it should validate the inputs as required", async () => {
	renderWithProviders(<LoginPage />);

	// submit form
	await userEvent.click(getSubmitButton());

	// expect validation errors
	expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
	expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
});

test("it should validate the email input as email", async () => {
	renderWithProviders(<LoginPage />);

	// type email
	await userEvent.type(emailInput(), "fulanitodetal");
	await userEvent.type(passwordInput(), "fulanitodetal");
	await userEvent.click(getSubmitButton());

	// expect validation errors
	expect(await screen.findByText(/Email is not valid/i)).toBeInTheDocument();
});

test("it should disable the submit button while is fetching", async () => {
	renderWithProviders(<LoginPage />);

	// submit button shouldnt be disabled
	expect(getSubmitButton()).not.toBeDisabled();

	// valid values on inputs
	await fillAndSendLoginForm();

	// validate that boton in disabled
	expect(getSubmitButton()).toBeDisabled();
});

test("it should show a loading indicator while is fetching the login", async () => {
	renderWithProviders(<LoginPage />);

	// loading indicator shouldnt be in the document
	expect(
		screen.queryByRole("progressbar", { name: /loading/i })
	).not.toBeInTheDocument();

	// submit valid values on inputs
	await fillAndSendLoginForm();

	// check if the component with the role progressbar is in the document
	// progressbar role: https://www.w3.org/TR/wai-aria-1.1/#progressbar
	// progressbar is a role that defines that a api request is in progress
	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role
	expect(
		await screen.findByRole("progressbar", { name: /loading/i })
	).toBeInTheDocument();
});

test("it should show an error message if the login call api fails", async () => {
	renderWithProviders(<LoginPage />);

	// make the mock api call fail
	mockServerWithError();

	// submit valid values on inputs
	await fillAndSendLoginForm();

	// show error message
	expect(
		await screen.findByText("Unexpected error, please try again")
	).toBeInTheDocument();
});

test("it should display error message if the pass or email are incorrect", async () => {
	renderWithProviders(<LoginPage />);

	// make the mock api call fail with status 401
	mockServerWithError(401);

	// submit valid values on inputs
	await fillAndSendLoginForm();

	// show error message
	expect(
		await screen.findByText(/Invalid email or password/i)
	).toBeInTheDocument();
});
