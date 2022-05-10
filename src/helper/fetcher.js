import axios from "axios";
export const getMovies = async (search, URL, setMovies) => {
	await axios
		.get(`${URL}search/movie`, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
				query: search,
			},
		})
		.then((res) => {
			const data = res;
			setMovies(data.data.results);
		})
		.catch((error) => {
			throw new Error(error);
		});
};

export const getTopMovies = async (URL, setMovies) => {
	await axios
		.get(`${URL}movie/top_rated`, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
			},
		})
		.then((res) => {
			const data = res;
			setMovies(data.data.results);
		})
		.catch((error) => {
			throw new Error(error);
		});
};
