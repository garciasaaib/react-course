import { CssBaseline, ThemeProvider } from "@mui/material";
import { purpleTheme } from "./purple";



// higer order component
export const AppTheme = ({ children }: { children: JSX.Element }) => {
	return (
		<ThemeProvider theme={purpleTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
