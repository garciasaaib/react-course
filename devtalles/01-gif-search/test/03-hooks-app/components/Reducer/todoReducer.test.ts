import { todoReducer } from "../../../../src/03-hooks-app/components/Reducer/todoReducer";
describe("Pruebas en todoReducer", () => {
	const initialState = [
		{
			id: 1,
			description: "Aprender React",
			done: false,
		},
	];

	test("should return initial state", () => {
		// accede a reducer con una funcion que retorna el mismo state
		const newState = todoReducer(initialState, { type: "" });
		// y evaluamos que sea la misma referencia del componente, porque no ha sido mutado
		expect(newState).toBe(initialState);
	});

	test("should add a new todo", () => {
		// accede a reducer con una funcion que retorna el mismo state
		const newState = todoReducer(initialState, {
			type: "ADD_TODO",
			payload: "Aprender TypeScript",
		});

		// y evaluamos que tenga el cammbio que le acabamos de mandar
		// que el nuevo estado tenga 2 elementos
		expect(newState.length).toBe(2);
		// que el nuevo estado tenga el payload
    expect(newState[0].description).toContain("Aprender TypeScript")
	});

  test("should delete a todo", () => {
		// generar el action del reducer
		const newState = todoReducer(initialState, {
			type: 'REMOVE_TODO',
			payload: 1,
		});

		// verificar que hemos eliminado el unico todo que habia
		expect(newState.length).toBe(0);
	});

  test("should toggle a todo", () => {
		// generar el action del reducer
		const newState = todoReducer(initialState, {
			type: "DONE_TODO",
			payload: 1,
		});

		// verificar que aun tenemos nuestro todo
		expect(newState.length).toBe(1);
    // verificar que el done esta en true
		expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, {
			type: "DONE_TODO",
			payload: 1,
		});

    // verificar que aun tenemos nuestro todo
		expect(newState2.length).toBe(1);
    // verificar que el done esta en true
		expect(newState2[0].done).toBe(false);
	});
});
