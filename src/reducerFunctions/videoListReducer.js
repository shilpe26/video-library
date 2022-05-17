import {
	ALL,
	FUNDAMENTALS,
	AGGRESSIVE,
	GERMAN_SHEPHERD,
	VIDEO_LIST_REQUEST,
	VIDEO_LIST_SUCCESS,
} from "../global_constants/video-constants";

const videoListReducer = (state, action) => {
	switch (action.type) {
		case VIDEO_LIST_REQUEST:
			return { ...state, videoLoading: action.payload.status };
		case VIDEO_LIST_SUCCESS:
			if (action.payload.videos) {
				return {
					...state,
					videos: [...action.payload.videos],
					videoLoading: action.payload.status,
				};
			}
		case ALL:
			return {
				...state,
				categories: {
					fundamentals: false,
					aggressive: false,
					german_shepherd: false,
				},
			};
		case FUNDAMENTALS:
			return {
				...state,
				categories: {
					fundamentals: true,
					aggressive: false,
					german_shepherd: false,
				},
			};
		case AGGRESSIVE:
			return {
				...state,
				categories: {
					fundamentals: false,
					aggressive: true,
					german_shepherd: false,
				},
			};
		case GERMAN_SHEPHERD:
			return {
				...state,
				categories: {
					fundamentals: false,
					aggressive: false,
					german_shepherd: true,
				},
			};

		default:
			return state;
	}
};
export { videoListReducer };
