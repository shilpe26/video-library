import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dogo from "../assets/bg-doggo.png";
import { useVideos } from "../Context/video-context";
import { VideoCards } from "./Components";
import { useLikes } from "../Context/like-context";
import { usePlaylist } from "../Context/playlist-context";
import { useWatchlater } from "../Context/watchLater-context";
import { getVideoByIdService } from "../all_services/videoService";
import "../stylesheets/singleVideoContainer.css";
import { useAlert } from "react-alert";

function SingleVideoContainer() {
	const token = localStorage.getItem("userToken");
	const { state } = useVideos();
	const alert = useAlert();
	const { id } = useParams();
	const navigate = useNavigate();
	const [video, setVideo] = useState({});
	const { title, creator, description, categoryName } = video;
	const { setModal } = usePlaylist();
	const { watchlater, addToWatcherLater, deleteFromWatchlater } =
		useWatchlater();
	const { likesState, addToLikes, deleteFromLikes } = useLikes();
	const inWatchlater = watchlater.watchlaterItems.find(
		(item) => item._id === id
	);
	const inLikes = likesState.likes.find((item) => item._id === id);
	const similarVideos = state.videos.filter(
		(item) => item._id !== id && item.categoryName === categoryName
	);
	useEffect(() => {
		(async () => {
			try {
				const response = await getVideoByIdService(id);
				if (response.status === 200 || response.status === 201) {
					setVideo(response.data.video);
				}
			} catch (error) {
				console.log("error");
			}
		})();
	}, [id]);
	const addLikeHandler = () => {
		if (!token) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		addToLikes(video);
	};

	const dislikeHandler = () => {
		if (!token) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		deleteFromLikes(video);
	};

	const deleteClickHandler = () => {
		if (!token) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		deleteFromWatchlater(id);
	};
	const addClickHandler = () => {
		if (!token) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		addToWatcherLater(video);
	};
	const addToPlaylistHandler = () => {
		if (!token) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		} else {
			setModal(video);
		}
	};
	return (
		<div>
			<div className="video-list grow">
				<div className="video-container">
					<div className="video">
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${id}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen={true}
						></iframe>

						<div className="video-actions">
							<img
								src={Dogo}
								className="avatar avatar-small"
								alt="dogo-avatar"
							/>
							<div className="list-content">
								<p className="text-md font-semibold">{title}</p>
								<p className="text-md font-semibold">{creator}</p>
							</div>
							<div className="video-action-btn chips">
								{!inLikes && (
									<button
										onClick={() => addLikeHandler()}
										className="chip cursor"
									>
										<span className="material-icons">thumb_up</span>
										Like
									</button>
								)}
								{inLikes && (
									<button
										onClick={() => dislikeHandler()}
										className="chip cursor"
									>
										<span className="material-icons">thumb_down</span>
										Dislike
									</button>
								)}
								{!inWatchlater && (
									<button
										onClick={() => addClickHandler()}
										className="chip cursor"
									>
										<span className="material-icons">watch_later</span>
										Watch Later
									</button>
								)}
								{inWatchlater && (
									<button
										onClick={() => deleteClickHandler()}
										className="chip cursor"
									>
										<span className="material-icons">watch_later</span>
										Delete From Watch Later
									</button>
								)}

								<button
									onClick={() => addToPlaylistHandler()}
									className="chip cursor"
								>
									<span className="material-icons">playlist_add</span>
									Add
								</button>
							</div>
						</div>
						<div className="desc-div">
							<p className="text-md">{description}</p>
						</div>
					</div>
					<div className="related-videos">
						<h2 className="text-large fw-semibold">Similar Videos</h2>
						<div className="item-list">
							{similarVideos.map(({ _id, title, creator }) => (
								<VideoCards
									key={_id}
									_id={_id}
									title={title}
									creator={creator}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SingleVideoContainer };
