import { usePlaylist } from "../Context/playlist-context";
import { useNavigate } from "react-router-dom";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/playlistContainer.css";

export const PlaylistContainer = () => {
	const { playlistState, deletePlaylist } = usePlaylist();
	const navigate = useNavigate();

	return (
		<div className="video-list grow">
			{playlistState.playlists.length ? (
				<>
					<div>
						{playlistState.playlists.map(({ _id, title, videos }) => {
							return (
								<div key={_id} className="playlist-card ml-96 card">
									<div>
										<div
											onClick={() => navigate(`/playlist/${_id}`)}
											className="pb-1"
										>
											<p className="text-md font-semibold">{title}</p>
											<p className="text-md">{videos.length} Videos</p>
										</div>
										<button
											onClick={() => deletePlaylist(_id)}
											className="icon-btn material-icons cursor"
										>
											delete
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<EmptyMessage />
			)}
		</div>
	);
};
