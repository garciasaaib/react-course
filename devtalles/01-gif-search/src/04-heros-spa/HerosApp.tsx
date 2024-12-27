import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";
export const HerosApp = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthProvider>
	);
};
