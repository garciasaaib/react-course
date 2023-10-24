import { Typography, TextField, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginResolver } from "./login-schema";
import axios from "axios";
import { useState } from "react";

interface Inputs {
	email: string;
	password: string;
}

const loginService = async (email:string, password:string) => {
	const response = await axios.post('/login', {email, password})
}

export const LoginPage = (): JSX.Element => {
  /**
   * register: registra el input en el hook
   * handleSubmit: se encarga de validar el formulario y ejecutar la funcion onSubmit
   * errors: objeto con los errores de validacion
   */
	const [isLoading, setIsLoading] = useState(false)
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: loginResolver});
	
	const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
		setIsLoading(true)
		await loginService(email, password)
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
				<Button disabled={isLoading} type="submit">Submit</Button>
			</form>
		</>
	);
};
