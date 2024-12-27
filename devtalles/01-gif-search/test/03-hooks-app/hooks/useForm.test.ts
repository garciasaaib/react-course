import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../../src/03-hooks-app/hooks/useForm";
import { ChangeEvent } from "react";
describe("useForm", () => {
	it("should return values by default", () => {
		const initialForm = {
			name: "adrian",
			email: "adrian@gmail.com",
		};
		const { result } = renderHook(() => useForm(initialForm));

		// should be initial default values + function values
		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	it("should change name when input changes", () => {
    const name = 'adrian';
		const initialForm = {
			name: "",
			email: "",
		};
		const { result } = renderHook(() => useForm(initialForm));

    // crea el objeto evento con el nombre del campo y el valor
    // y luego se lo mandas como parametro al onInputChange
    // para finalmente evaluarlo a ver si cambió
		act(() => {
			const event = {
				target: { name: "name", value: name },
			} as ChangeEvent<HTMLInputElement>;
			result.current.onInputChange(event);
		});
		expect(result.current.name).toBe(name);
	});

  it("should change name when input changes", () => {
    const name = 'adrian';
		const initialForm = {
			name: "",
			email: "sfas",
		};
		const { result } = renderHook(() => useForm(initialForm));

		act(() => {
			const event = {
				target: { name: "name", value: name },
			} as ChangeEvent<HTMLInputElement>;
			result.current.onInputChange(event);
      result.current.onResetForm()
      console.log(result.current.formState)
		});
		expect(result.current.name).toBe(initialForm.name);
	});
});
