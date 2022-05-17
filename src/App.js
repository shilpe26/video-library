import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	PageNotFound,
	Navbar,
	Footer,
	RequiresAuth,
	HideAuth,
} from "../src/Components/Components";
import Mockman from "mockman-js";
import { useTheme } from "./Context/theme-context";
import {
	Home,
	Login,
	Signup,
	VideoListing,
	History,
	VideoPage,
} from "./pages/Pages";
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
					<Route
						path="/login"
						element={
							<HideAuth>
								<Login />
							</HideAuth>
						}
					/>
					<Route
						path="/signup"
						element={
							<HideAuth>
								<Signup />
							</HideAuth>
						}
					/>
					<Route path="/mock" element={<Mockman />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/videos" element={<VideoListing />} />
					<Route path="/videos/:id" element={<VideoPage />} />
					<Route
						path="/history"
						element={
							<RequiresAuth>
								<History />
							</RequiresAuth>
						}
					/>
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
