import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
	return (
		<BrowserRouter>
			<h1>MainApp</h1>
      <Navbar />
			<hr />


      <UserProvider>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<LoginPage />} />

				{/* <Route path="/*" element={<HomePage />} /> */}
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
      </UserProvider>
		</BrowserRouter>
	);
};
