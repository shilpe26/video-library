import { usePlaylist } from "../Context/playlistContext/playlist-context";
import { usePlaylistServerCall } from "../Context/playlistContext/usePlaylistServerCall";
import { useNavigate, useParams } from "react-router-dom";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/playlistContainer.css";

export const PlaylistContainer = () => {
	// const { playlistId } = useParams();
	const {
		playlistState: { playlists },
	} = usePlaylist();
	const { deletePlaylist } = usePlaylistServerCall();
	// const currentPlaylist = playlists.find((item) => item._id === playlistId);
	const navigate = useNavigate();

	return (
		<div className="video-list grow">
			{playlists.length ? (
				<>
					<div>
						{playlists.map(({ _id, title, videos }) => {
							return (
								<div key={_id} className="playlist-card card">
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
