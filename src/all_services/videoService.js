import axios from "axios";
export const videoListService = async () => await axios.get("/api/videos");
export const getVideoByIdService = async (id) =>
	await axios.get(`/api/video/${id}`);
