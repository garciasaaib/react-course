import { Inputs } from "./login-page-interfaces";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const loginService = async (email: string, password: string) => {
	await axios.post("/login", { email, password });
};

export const useLoginMutations = () => {
	const [errorMessage, setErrorMessage] = useState("");

	const {mutate, status, error } = useMutation<unknown, Error, Inputs>({
		mutationFn: () => loginService("email", "password"),
		onError(error) {
			let internalErrorMessage = "Unexpected error, please try again";
			if (axios.isAxiosError(error) && error?.response?.status === 401) {
				internalErrorMessage = "Invalid email or password";
			}
			setErrorMessage(internalErrorMessage);
		},
	});
  return {mutate, isLoading: status === "pending", error, isError: status === "error", errorMessage }
}