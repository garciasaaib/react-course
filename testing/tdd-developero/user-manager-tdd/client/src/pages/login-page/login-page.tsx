import { Typography, TextField, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginResolver } from "./login-schema";

interface Inputs {
	email: string;
	password: string;
}


export const LoginPage = (): JSX.Element => {
  /**
   * register: registra el input en el hook
   * handleSubmit: se encarga de validar el formulario y ejecutar la funcion onSubmit
   * errors: objeto con los errores de validacion
   */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: loginResolver});
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log('data');
	};
	return (
		<>
			<Typography component="h1">Login</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					{...(register("email", { required: true }))}
					label="Email"
					helperText={errors.email?.message}
				/>
				<TextField
					{...(register("password", { required: true }))}
					label="Password"
					type="password"
					helperText={errors.password?.message}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</>
	);
};
