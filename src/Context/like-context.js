import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./auth-context";
import {
	getLikesService,
	addToLikesService,
	deleteFromLikesService,
} from "../all_services/like_services";
import { likeReducer } from "../reducerFunctions/likeReducer";
import {
	ADD_TO_LIKES,
	DELETE_FROM_LIKES,
	LIKES_REQUEST,
	LIKES_SUCCESS,
} from "../global_constants/like-constants";

const LikesContext = createContext();
const LikesProvider = ({ children }) => {
	const { authState } = useAuth();

	const [likesState, likesDispatch] = useReducer(likeReducer, {
		likes: [],
		loading: false,
	});

	useEffect(() => {
		(async () => {
			if (authState.encodedToken.length === 0) {
				try {
					const response = await getLikesService(authState.encodedToken);
					likesDispatch({ type: LIKES_REQUEST, payload: { status: true } });
					if (response.status === 200) {
						likesDispatch({
							type: LIKES_SUCCESS,
							payload: response.data.likes,
						});
					}
				} catch (error) {
					console.log(error);
				}
			}
		})();
	});

	const addToLikes = async (video) => {
		try {
			const response = await addToLikesService(video, authState.encodedToken);
			if (response.status === 200 || response.status === 201) {
				likesDispatch({ type: ADD_TO_LIKES, payload: response.data.likes });
			}
		} catch (err) {
			console.log(err);
		}
	};
	const deleteFromLikes = async (video) => {
		try {
			const response = await deleteFromLikesService(
				video._id,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				likesDispatch({
					type: DELETE_FROM_LIKES,
					payload: response.data.likes,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<LikesContext.Provider
			value={{ likesState, likesDispatch, addToLikes, deleteFromLikes }}
		>
			{children}
		</LikesContext.Provider>
	);
};
const useLikes = () => useContext(LikesContext);
export { useLikes, LikesProvider };
