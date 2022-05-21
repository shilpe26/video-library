import React from "react";
import { VideoCards } from "./Components";
import { useHistory } from "../Context/history-context";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/historyContainer.css";

function HistoryContainer() {
	const { historyState, clearAllHistory } = useHistory();
	// const historyData = [...historyState.history];
	const {
		historyState: { history },
		historyDispatch,
	} = useHistory();
	return (
		<div>
			{history.length ? (
				<>
					<button
						onClick={() => clearAllHistory(historyDispatch)}
						className="btn btn-primary clear-btn-vl ml-22"
					>
						Clear All
					</button>
					<div className="item-list mt-4">
						{history.map(({ _id, title, creator }) => (
							<p>{title}</p>
							// <VideoCards key={_id} _id={_id} title={title} creator={creator} />
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
