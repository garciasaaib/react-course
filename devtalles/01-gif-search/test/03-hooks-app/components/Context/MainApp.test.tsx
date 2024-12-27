import React from "react";
import { render } from "@testing-library/react";
import { MainApp } from "../../../../src/03-hooks-app/components/Context/MainApp";
import { MemoryRouter } from "react-router";

describe("<MainApp />", () => {
	test("should render the MainApp title and Navbar", () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
	});
});
