import { useEffect } from "react";
import { useUserData } from "./userData-context";
import { useAlert } from "react-alert";
import axios from "axios";

function useHistoryServerCalls() {
	const token = localStorage.getItem("userToken");
	const { dataDispatch } = useUserData();
	const alert = useAlert();

	useEffect(() => {
		(async () => {
			if (token) {
				try {
					const {
						data: { history },
					} = await axios.get("/api/user/history", {
						headers: { authorization: token },
					});

					dataDispatch({ type: "HISTORY", payload: history });
				} catch (error) {
					alert.show("History: Internal Server Error", {
						type: "error",
					});
				}
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const addToHistory = async (video) => {
		try {
			const {
				data: { history },
			} = await axios.post(
				"/api/user/history",
				{ video },
				{
					headers: { authorization: token },
				}
			);
			dataDispatch({ type: "HISTORY", payload: history });
		} catch (error) {
			console.log(error);
		}
	};

	const removeFromHistory = async (videoId) => {
		try {
			const {
				data: { history },
			} = await axios.delete(`/api/user/history/${videoId}`, {
				headers: { authorization: token },
			});

			dataDispatch({ type: "HISTORY", payload: history });
			alert.show("Removed From History", {
				type: "success",
			});
		} catch (error) {
			alert.show("Error: Can't Remove from History", {
				type: "error",
			});
		}
	};

	const clearHistory = async () => {
		try {
			const {
				data: { history },
			} = await axios.delete("/api/user/history/all", {
				headers: { authorization: token },
			});
			dataDispatch({ type: "HISTORY", payload: history });
			alert.show("Cleared History", {
				type: "success",
			});
		} catch (error) {
			alert.show("Error: Can't Clear History", {
				type: "error",
			});
		}
	};

	return { addToHistory, removeFromHistory, clearHistory };
}

export { useHistoryServerCalls };
