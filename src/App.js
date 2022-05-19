import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	PageNotFound,
	Navbar,
	Footer,
	RequiresAuth,
	HideAuth,
	Playlist,
} from "../src/Components/Components";
import Mockman from "mockman-js";
import { useTheme } from "./Context/theme-context";
import { usePlaylist } from "./Context/playlist-context";
import {
	Home,
	Login,
	Signup,
	VideoListing,
	History,
	VideoPage,
	PlayListPage,
	PlayListModal,
} from "./pages/Pages";
import "./stylesheets/utility.css";

function App() {
	const { theme } = useTheme();
	const { modal } = usePlaylist();

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
					<Route path="/playlist/:id" element={<PlayListPage />} />
					<Route path="/playlist" element={<Playlist />} />
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
			<PlayListModal modal={modal} />
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
