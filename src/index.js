import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/theme-context.jsx";
import { AuthProvider } from "./Context/auth-context";
import { PlaylistProvider } from "./Context/playlistContext/playlist-context";
// import { WatchLaterProvider } from "./Context/watchLater-context";
// import { LikesProvider } from "./Context/like-context";
// import { HistoryProvider } from "./Context/history-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { VideoProvider } from "./Context/videoContext/video-context";
import { options } from "./Context/alterOptions";
import { UserDataProvider } from "./Context/userDataContext/userData-context";
// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AlertProvider template={AlertTemplate} {...options}>
						<PlaylistProvider>
							<VideoProvider>
								<UserDataProvider>
									<App />
								</UserDataProvider>
							</VideoProvider>
						</PlaylistProvider>
					</AlertProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
