export search = async() => {
	return axios
		.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
		.then((res) => {
			console.log(res);
			return res.data.items;
		});
}