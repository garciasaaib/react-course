import { Route, Routes } from "react-router";
import { LoginPage } from "../auth/pages/LoginPage";
import { HerosRoutes } from "../heroes/routes/HerosRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* ruta publica */}

				<Route
					path="login/*"
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>

				{/* ruta privada */}
				<Route
					path="/*"
					element={
						<PrivateRoute>
							<HerosRoutes />
						</PrivateRoute>
					}
				></Route>
			</Routes>
		</>
	);
};
