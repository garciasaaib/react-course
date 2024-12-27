import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../../../src/03-hooks-app/components/Context/pages/LoginPage";
import React from "react";
import { UserContext } from "../../../../../src/03-hooks-app/components/Context/context/UserContext";

// para poder probar un contexto debemos abastecerlo
describe("<LoginPage />", () => {
  const user = {
		name: "adrian",
    email: 'adrian@gmail.com',
    age: 30
	};

	test("should show component without user", () => {
		const setUser = jest.fn();
		render(
			<UserContext.Provider value={{ user: undefined, setUser }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre"); // area label
    expect(preTag.innerHTML).toBeFalsy();
	});

  test("should call setUser on click Logout button", () => {
		const setUser = jest.fn();
		render(
			<UserContext.Provider value={{ user, setUser }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const sendButton = screen.getByLabelText("logout"); // btn

		fireEvent.click(sendButton); // click btn
		expect(setUser).toHaveBeenCalled();
		expect(setUser).toHaveBeenCalledWith(undefined);
	});


	test("should call setUser on click Login button", () => {
		const setUser = jest.fn();
		render(
			<UserContext.Provider value={{ user, setUser }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const sendButton = screen.getByLabelText("login"); // btn
		// console.log(sendButton)
		fireEvent.click(sendButton); // click btn
		expect(setUser).toHaveBeenCalled();
		const preTag = screen.getByLabelText("pre"); // area label
    expect(preTag.innerHTML).toBeTruthy();

	});
});
