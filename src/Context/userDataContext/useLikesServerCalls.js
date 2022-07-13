import { useEffect } from "react";
import { useUserData } from "./userData-context";
import { useAlert } from "react-alert";
import axios from "axios";

function useLikesServerCalls() {
	const token = localStorage.getItem("userToken");
	const { dataDispatch } = useUserData();
	const alert = useAlert();

	useEffect(() => {
		(async () => {
			if (token) {
				try {
					const {
						data: { likes },
					} = await axios.get("/api/user/likes", {
						headers: { authorization: token },
					});
					dataDispatch({ type: "LIKES", payload: likes });
				} catch (error) {
					alert.show("Likes: Internal Server Error", {
						type: "error",
					});
				}
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const addToLikes = async (video) => {
		try {
			const {
				data: { likes },
			} = await axios.post(
				"/api/user/likes",
				{ video },
				{
					headers: { authorization: token },
				}
			);
			dataDispatch({ type: "LIKES", payload: likes });
			alert.show("Added to Liked Videos", {
				type: "success",
			});
		} catch (error) {
			alert.show("Error: Can't Like Video", {
				type: "error",
			});
		}
	};

	const removeFromLikes = async (videoId) => {
		try {
			const {
				data: { likes },
			} = await axios.delete(`/api/user/likes/${videoId}`, {
				headers: { authorization: token },
			});
			dataDispatch({ type: "LIKES", payload: likes });
			alert.show("Removed from Liked Videos", {
				type: "success",
			});
		} catch (error) {
			alert.show("Error: Can't Dislike Video", {
				type: "error",
			});
		}
	};

	return { addToLikes, removeFromLikes };
}

export { useLikesServerCalls };
