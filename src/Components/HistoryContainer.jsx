import React from "react";
import { VideoCards } from "./Components";
import { useUserData } from "../Context/userDataContext/userData-context";
import { useHistoryServerCalls } from "../Context/userDataContext/useHistoryServerCalls";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/historyContainer.css";

function HistoryContainer() {
	const {
		dataState: { history },
	} = useUserData();
	const { clearHistory } = useHistoryServerCalls();

	return (
		<div>
			{history.length ? (
				<>
					<button
						onClick={() => clearHistory()}
						className="btn btn-primary clear-btn-vl"
					>
						Clear All
					</button>
					<div className="item-listing mt-4">
						{history.map(({ _id, title, creator }) => (
							<VideoCards key={_id} _id={_id} title={title} creator={creator} />
						))}
					</div>
				</>
			) : (
				<EmptyMessage />
			)}
		</div>
	);
}

export { HistoryContainer };
