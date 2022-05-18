import { useAuth } from "../../Context/auth-context";
import EmptyImage from "../../assets/Cautious dog-amico.png";
import "./emptyMessage.css";
export const EmptyMessage = () => {
	const { authState } = useAuth();
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				className="ply-empty w-50p"
				src={EmptyImage}
				alt="empty-error-image"
			/>
			{!authState.encodedToken.length === 0 ? (
				<p className="text-lg text">Login first, to see items. Woof!!</p>
			) : (
				<p className="empty-text text-lg text mt-4">Playlist is Empty</p>
			)}
		</div>
	);
};
