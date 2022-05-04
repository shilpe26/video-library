import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/theme-context.jsx";
import { AuthProvider } from "./Context/auth-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "./Context/alterOptions";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AlertProvider template={AlertTemplate} {...options}>
						<App />
					</AlertProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
