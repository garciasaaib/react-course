import {
	Box,
	Button,
	Card,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2,
	TextField,
	Typography,
} from "@mui/material";
import { Link } from "react-router";
import { FacebookIcon, GoogleIcon } from "../../common/CustomIcons";
import { ForgotPassword } from "../components/ForgotPassword";

export const LoginPage = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submit");
	};
	return (
		<Grid2
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: "100vh" }}
			sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
		>
			<Card className="shadow-sm bg-white p-3 rounded">
				<Typography variant="subtitle2" align="center" gutterBottom>
					Login
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 2,
					}}
				>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<TextField
							id="email"
							type="email"
							variant="outlined"
							size="small"
							placeholder="your@email.com"
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<TextField
							id="password"
							type="password"
							variant="outlined"
							size="small"
							placeholder="******"
						/>
					</FormControl>
					<FormControlLabel
						label="Remember me"
						control={<Checkbox value="remember" color="primary" />}
					/>
					<Button type="submit" variant="outlined">
						Login
					</Button>
					<ForgotPassword />
				</Box>
				<Divider>or</Divider>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Button
						fullWidth
						variant="outlined"
						onClick={() => alert("Sign in with Google")}
						startIcon={<GoogleIcon />}
					>
						Sign in with Google
					</Button>
					<Button
						fullWidth
						variant="outlined"
						onClick={() => alert("Sign in with Facebook")}
						startIcon={<FacebookIcon />}
					>
						Sign in with Facebook
					</Button>
					<Typography sx={{ textAlign: "center" }}>
						Don&apos;t have an account?{" "}
						<Link color="primary" to="/auth/register">
							Sign up
						</Link>
					</Typography>
				</Box>
			</Card>
		</Grid2>
	);
};
