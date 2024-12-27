import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const AboutPage = () => {
  const { user } = useContext(UserContext);
	return (
		<>
			<div>AboutPage</div>

			<p>{JSON.stringify(user, null, 3)}</p>
		</>
	);
};
