import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Routes,
	Navigate,
} from "react-router-dom";

import logo from "../assets/react.svg";
import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React Logo" />
						<ul>
							{routes.map(({ path, name }) => (
								<li key={path}>
									<NavLink
										to={path}
										className={({ isActive }) => (isActive ? "nav-active" : "")}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					{/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
					<Routes>
						{routes.map(({ path, component: Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
						<Route
							path="/*"
							element={<Navigate to={routes[0].path} replace />}
						/>
						{/* <Redirect to={ routes[0].path } /> */}
					</Routes>
				</div>
			</Router>
		</Suspense>
	);
};
