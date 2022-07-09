import React from "react";
import { VideoCards } from "./Components";
import { useHistory } from "../Context/history-context";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/historyContainer.css";

function HistoryContainer() {
	const { clearAllHistory } = useHistory();
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
						className="btn btn-primary clear-btn-vl"
					>
						Clear All
					</button>
					<div className="item-list mt-4">
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
