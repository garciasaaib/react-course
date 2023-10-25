import axios from "axios";
import { Inputs } from "./login-page-interfaces";
import { useMutation } from "@tanstack/react-query";

const loginService = async (email: string, password: string) => {
	return await axios.post("/login", { email, password });
};

export const useLoginMutations = () => {
	const {mutate, status} = useMutation<unknown, Error, Inputs>({
		mutationFn: () => loginService("email", "password"),
	});
  return {mutate, isLoading: status === "pending"}
}