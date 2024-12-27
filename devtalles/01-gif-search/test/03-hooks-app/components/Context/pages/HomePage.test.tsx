import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../../../src/03-hooks-app/components/Context/pages/HomePage";
import React from "react";
import { UserContext } from "../../../../../src/03-hooks-app/components/Context/context/UserContext";

// para poder probar un contexto debemos abastecerlo
describe("<HomePage />", () => {
  const user = {
		name: "adrian",
    email: 'adrian@gmail.com',
    age: 30
	};

	test("should show component without user", () => {
		const setUser = jest.fn();
		render(
			<UserContext.Provider value={{ user: undefined, setUser }}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre"); // area label
    expect(preTag.innerHTML).toBeFalsy();
	});

  test("should show component with user", () => {
		const setUser = jest.fn();
		render(
			<UserContext.Provider value={{ user, setUser }}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre"); // area label
    expect(preTag.innerHTML).toContain(user.name);
	});
});
