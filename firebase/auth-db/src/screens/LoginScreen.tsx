import React from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

import firebaseApp from "../../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

// autentificacion de firebase
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const LoginScreen = (): JSX.Element => {
	const [isNewUser, setIsNewUser] = React.useState(false);

	// <{email: string, password: string}>
	return (
		<Container>
			<Stack>
				<h1>Login Screen</h1>
				<Form
					onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						const data = new FormData(event.currentTarget);
						const email = data.get("formBasicEmail");
						const pass = data.get("formBasicPassword");
						console.log(email, pass);
						if (isNewUser) {
							const user = await createUserWithEmailAndPassword(
								auth,
								email,
								pass
							);
						} else {
							signInWithEmailAndPassword(auth, email, pass);
						}
					}}
				>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="formBasicEmail"
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							name="formBasicPassword"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="dark" type="submit">
						{isNewUser ? "Register" : "Login"}
					</Button>
				</Form>
				<div style={{ margin: "5px" }}></div>
				<Button
					variant="primary"
					onClick={() =>
						signInWithRedirect(auth, provider)
					}
				>
					Access by Google
				</Button>
				<div style={{ margin: "5px" }}></div>
				<Button variant="secondary" onClick={() => setIsNewUser(!isNewUser)}>
					{!isNewUser ? "Create your account" : "I have an account"}
				</Button>
			</Stack>
		</Container>
	);
};
