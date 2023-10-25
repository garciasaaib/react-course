import { Typography, TextField, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginResolver } from "./login-schema";

import { Inputs } from "./login-page-interfaces";
import { useLoginMutations } from "./use-login-mutation";

export const LoginPage = (): JSX.Element => {
	const { mutate, isLoading } = useLoginMutations()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: loginResolver });

	const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
		// setIsLoading(true);
		// await loginService(email, password);
		mutate({ email, password });
	};


	return (
		<>
			<Typography component="h1">Login</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					{...register("email", { required: true })}
					label="Email"
					helperText={errors.email?.message}
				/>
				<TextField
					{...register("password", { required: true })}
					label="Password"
					type="password"
					helperText={errors.password?.message}
				/>
				<Button disabled={isLoading} type="submit">
					Submit
				</Button>
			</form>
		</>
	);
};
