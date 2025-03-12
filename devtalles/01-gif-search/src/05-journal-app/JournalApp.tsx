import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {
	return (
		<BrowserRouter>
			<AppTheme>
				<AppRouter />
			</AppTheme>
		</BrowserRouter>
	);
};
