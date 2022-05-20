import React from "react";
import { VideoCards } from "./Components";
import { useHistory } from "../Context/history-context";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/historyContainer.css";

function HistoryContainer() {
	const { historyState, clearAllHistory } = useHistory();
	const historyData = [...historyState.history];

	return (
		<div>
			{historyState.history.length ? (
				<>
					<button
						onClick={() => clearAllHistory()}
						className="btn btn-primary clear-btn-vl ml-22"
					>
						Clear All
					</button>
					<div className="item-list mt-4">
						{historyData.map(({ _id, title, creator }) => {
							return (
								<VideoCards
									key={_id}
									_id={_id}
									title={title}
									creator={creator}
								/>
							);
						})}
					</div>
				</>
			) : (
				<EmptyMessage />
			)}
		</div>
	);
}

export { HistoryContainer };
