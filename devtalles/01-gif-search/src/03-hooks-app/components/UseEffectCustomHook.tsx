import { ComponenteDesmontable } from "./ComponenteDesmontable";
import { useEffectCustomHook } from "../hooks/useEffectCustomHook";

const INITIAL_VALUES = {
	username: "",
	email: "",
	password: "",
};
export const UseEffectCustomHook = () => {
	const { state, onInputChange, onInputReset } = useEffectCustomHook({ ...INITIAL_VALUES });

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />
			<form>
				<input
					onChange={onInputChange}
					value={state.username}
					type="text"
					placeholder="Username"
					name="username"
				/>
				<input
					onChange={onInputChange}
					value={state.email}
					type="email"
					placeholder="Email"
					name="email"
				/>
				<input
					onChange={onInputChange}
					value={state.password}
					type="password"
					placeholder="Password"
					name="password"
				/>
			</form>
      <button className="btn" onClick={onInputReset}>Reset</button>
			{/* El monte y desmonte se genera desde el compoonente padre */}
			{state.username === "Adrian" && <ComponenteDesmontable />}
		</>
	);
};
