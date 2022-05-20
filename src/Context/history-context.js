import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./auth-context";
import { historyReducer } from "../reducerFunctions/historyReducer";
import {
	getHistoryService,
	addToHistoryService,
	deleteFromHistoryService,
	clearAllHistoryService,
} from "../all_services/historyServices";
import {
	HISTORY_REQUEST,
	HISTORY_SUCCESS,
	ADD_TO_HISTORY,
	DELETE_FROM_HISTORY,
	CLEAR_ALL_HISTORY,
} from "../global_constants/history-constants";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
	const { authState } = useAuth();

	const [historyState, historyDispatch] = useReducer(historyReducer, {
		history: [],
		loading: false,
	});

	useEffect(() => {
		(async () => {
			if (authState.encodedToken.length !== 0) {
				try {
					const response = await getHistoryService(authState.encodedToken);
					historyDispatch({ type: HISTORY_REQUEST, payload: { status: true } });
					if (response.status === 200) {
						historyDispatch({
							type: HISTORY_SUCCESS,
							payload: response.data.history,
						});
					}
				} catch (error) {
					console.log(error);
				}
			}
		})();
	});

	const addToHistory = async (video) => {
		try {
			const response = await addToHistoryService(video, authState.encodedToken);
			if (response.status === 200 || response.status === 201) {
				historyDispatch({
					type: ADD_TO_HISTORY,
					payload: response.data.history,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	const deleteFromHistory = async (video) => {
		try {
			const response = await deleteFromHistoryService(
				video._id,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				historyDispatch({
					type: DELETE_FROM_HISTORY,
					payload: response.data.history,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	const clearAllHistory = async () => {
		try {
			const response = await clearAllHistoryService(authState.encodedToken);
			if (response.status === 200 || response.status === 201) {
				historyDispatch({
					type: CLEAR_ALL_HISTORY,
					payload: response.data.history,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<HistoryContext.Provider
			value={{
				historyState,
				historyDispatch,
				addToHistory,
				deleteFromHistory,
				clearAllHistory,
			}}
		>
			{children}
		</HistoryContext.Provider>
	);
};
const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryProvider };
