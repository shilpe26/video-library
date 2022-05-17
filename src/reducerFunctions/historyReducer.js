import {
	HISTORY_REQUEST,
	HISTORY_SUCCESS,
	ADD_TO_HISTORY,
	DELETE_FROM_HISTORY,
	CLEAR_ALL_HISTORY,
} from "../global_constants/history-constants.js";

const historyReducer = (state, action) => {
	switch (action.type) {
		case HISTORY_REQUEST:
			return { ...state, loading: action.payload.status };
		case HISTORY_SUCCESS:
			if (action.payload.history) {
				return { ...state, history: [...action.payload] };
			}
		case ADD_TO_HISTORY:
			return { ...state, history: [...action.payload] };
		case DELETE_FROM_HISTORY:
			return { ...state, history: [...action.payload] };
		case CLEAR_ALL_HISTORY:
			return { ...state, history: [...action.payload] };

		default:
			return state;
	}
};
export { historyReducer };
