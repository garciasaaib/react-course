import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage } from "../pages/DCPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HerosRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/marvel" element={<MarvelPage />} />
				<Route path="/dc" element={<DCPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/hero/:id" element={<HeroPage />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
