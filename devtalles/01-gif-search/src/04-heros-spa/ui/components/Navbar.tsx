import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
	const navigate = useNavigate();
	const onLogoutHandler = () => {
		onLogout()
		navigate("/login", {
			replace: true,
		});
	};
	const { authState, onLogout } = useContext(AuthContext);
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse justify-between navbar-nav">
				<div className="flex gap-2">
					<NavLink className="nav-item nav-link" to="/marvel">
						Marvel
					</NavLink>
					<NavLink className="nav-item nav-link" to="/dc">
						DC
					</NavLink>
					<NavLink className="nav-item nav-link" to="/search">
						Search
					</NavLink>
				</div>
				<div>
					<ul>
						<li className="nav-item">
							<span className="p-2 text-xs">{authState.token}</span>
							<button className="btn" onClick={onLogoutHandler}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
