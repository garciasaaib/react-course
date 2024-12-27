import { useState } from "react";

// initialData, es el objeto mandado a useForm
export const useForm = <T>(initialData: T) => {
	const [formState, setFormState] = useState<T>(initialData);

	const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialData);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
