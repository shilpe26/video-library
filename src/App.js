import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PageNotFound, Navbar, Footer } from "../src/Components/Components";

import { useTheme } from "./Context/theme-context";
import { Home, Login, Signup } from "./pages/Pages";
import "./stylesheets/utility.css";

function App() {
	const { theme } = useTheme();

	return (
		<div
			className="App flex flex-col min-h-screen"
			style={{
				backgroundColor: theme.mode.bgColor,
				color: theme.mode.textColor,
			}}
		>
			<div>
				<Navbar />
			</div>
			<div className="main-style grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
