import { Typography, TextField, Button, CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginResolver } from "./login-schema";

import { Inputs } from "./login-page-interfaces";
import { useLoginMutations } from "./use-login-mutation";

export const LoginPage = (): JSX.Element => {
	const { mutate, isLoading, isError, errorMessage } = useLoginMutations();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: loginResolver });

	const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
		mutate(
			{ email, password },
		);
	};

	return (
		<>
			<Typography component="h1">Login</Typography>

			{isLoading && (
				<CircularProgress role="progressbar" aria-label="loading" />
			)}

			{isError ? <Typography>{errorMessage}</Typography> : null}

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
