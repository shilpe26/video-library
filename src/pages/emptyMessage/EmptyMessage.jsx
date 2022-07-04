import { useAuth } from "../../Context/auth-context";
import EmptyImage from "../../assets/Cautious dog-amico.png";
import { Link } from "react-router-dom";
import "./emptyMessage.css";

export const EmptyMessage = () => {
	const { authState } = useAuth();
	return (
		<div className="empty-dog-img flex flex-col items-center justify-center">
			{!authState.encodedToken.length === 0 ? (
				<p className="text-lg text">Login first, to see items. Woof!!</p>
			) : (
				<p className="empty-text text-lg text mt-4">
					Oops! Your Page is empty.
				</p>
			)}
			<img className="ply-empty" src={EmptyImage} alt="empty-error-image" />
			<Link to="/videos">
				<button className="explore-btn text-md mt-4 cursor border-5 p-4 w-40">
					Explore
				</button>
			</Link>
		</div>
	);
};
