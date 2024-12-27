import { Link, useLocation } from "react-router";

export const Navbar = () => {
  const {pathname} = useLocation()
  const onIsActive = (thisPath: string) => {
    return pathname === thisPath ? " underline" : "";

  }
	return (
		<nav className="flex gap-1">
			<Link className={`hover:text-white${onIsActive('/')}`} to="/">
				Home
			</Link>
			<Link className={`hover:text-white${onIsActive('/about')}`} to="/about">
				About
			</Link>
			<Link className={`hover:text-white${onIsActive('/login')}`} to="/login">
				Login
			</Link>
		</nav>
	);
};
