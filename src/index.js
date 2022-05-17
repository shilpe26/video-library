import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/theme-context.jsx";
import { AuthProvider } from "./Context/auth-context";
import { PlaylistProvider } from "./Context/playlist-context";
import { WatchLaterProvider } from "./Context/watchLater-context";
import { LikesProvider } from "./Context/like-context";
import { HistoryProvider } from "./Context/history-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { VideoListProvider } from "./Context/video-context";
import { options } from "./Context/alterOptions";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AlertProvider template={AlertTemplate} {...options}>
						<PlaylistProvider>
							<LikesProvider>
								<HistoryProvider>
									<WatchLaterProvider>
										<VideoListProvider>
											<App />
										</VideoListProvider>
									</WatchLaterProvider>
								</HistoryProvider>
							</LikesProvider>
						</PlaylistProvider>
					</AlertProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
