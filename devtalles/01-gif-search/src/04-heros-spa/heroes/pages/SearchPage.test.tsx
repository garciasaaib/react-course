import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "./SearchPage";
import { MemoryRouter } from "react-router";


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

describe("SearchPage", () => {
	test("should render the component", () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	test("should render the component with a hero", () => {
		render(
			<MemoryRouter initialEntries={["/search?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		);

		// 1️⃣ Encontrar el input de búsqueda y el botón de enviar
		const inputSearch = screen.getByRole("searchbox") as HTMLInputElement; // Cambia el tipo si el input no es de tipo "search"
		const searchButton = screen.getByRole("button", { name: /send/i }); // Cambia el nombre si el botón tiene otro texto o aria-label

		// 2️⃣ Escribir "batman" en el campo de búsqueda
		fireEvent.change(inputSearch, { target: { value: "batman" } });
		expect(inputSearch.value).toBe("batman"); // Asegúrate de que el valor cambió correctamente

		// 3️⃣ Simular un clic en el botón de enviar
		fireEvent.click(searchButton);

		// 4️⃣ Verificar que se rendericen las cartas esperadas
		const cards = screen.getAllByRole("article"); // Suponiendo que las cartas están representadas como <article>
		const img = screen.getByRole("img") as HTMLImageElement; // Suponiendo que las cartas están representadas como <article>
		expect(cards.length).toBeGreaterThan(0); // Asegúrate de que hay al menos una carta
		expect(screen.getByText(/batman/i)).toBeInTheDocument(); // Verifica que una carta contenga "batman"
		expect(img.src).toContain("dc-batman.jpg"); // Verifica que una carta contenga la imagen predefinida de batman
	});

	xtest('should render the component with a message "No results found"', () => {
		render(
			<MemoryRouter initialEntries={["/search?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		);
		// 1️⃣ Encontrar el input de búsqueda y el botón de enviar
		const inputSearch = screen.getByRole("searchbox") as HTMLInputElement; // Cambia el tipo si el input no es de tipo "search"
		const searchButton = screen.getByRole("button", { name: /send/i }); // Cambia el nombre si el botón tiene otro texto o aria-label

		// 2️⃣ Escribir "batman" en el campo de búsqueda
		fireEvent.change(inputSearch, { target: { value: "asdf" } });
		expect(inputSearch.value).toBe("asdf");

		// 3️⃣ Simular un clic en el botón de enviar
		fireEvent.click(searchButton);

		// 4️⃣ Verificar que se renderice el mensaje "No results found"
		const notFoundMessage = screen.getByText(/Not Hero found/i);
		expect(notFoundMessage).toBeInTheDocument();
	});

	test("should call navigate to a new screen", async () => {
		render(
			<MemoryRouter initialEntries={["/search?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		);

		// 1️⃣ Encontrar el input de búsqueda y el botón de enviar
		const inputSearch = screen.getByRole("searchbox") as HTMLInputElement; // Cambia el tipo si el input no es de tipo "search"
		const searchButton = screen.getByRole("button", { name: /send/i }); // Cambia el nombre si el botón tiene otro texto o aria-label

		// 2️⃣ Escribir "batman" en el campo de búsqueda
		fireEvent.change(inputSearch, { target: { value: "batman" } });
		expect(inputSearch.value).toBe("batman"); // Asegúrate de que el valor cambió correctamente

		// 3️⃣ Simular un clic en el botón de enviar
		fireEvent.click(searchButton);

		// 4️⃣ Presionar en mas
		fireEvent.click(screen.getByText(/Más/i));

		// verificar que navigate fue llamado
		expect(mockedUseNavigate).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('?q=batman');
	});
});
