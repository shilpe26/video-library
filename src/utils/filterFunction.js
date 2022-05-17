const categorisedVideos = (videos, categories) => {
	let categoryList = Object.keys(categories);
	const dataList = categoryList.reduce(
		(acc, curr) =>
			categories[curr]
				? [...videos].filter((item) => item.categoryName === curr)
				: acc,
		[]
	);
	return dataList.length ? dataList : videos;
};

export { categorisedVideos };
