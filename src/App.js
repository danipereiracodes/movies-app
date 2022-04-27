import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";
import { StrictMode } from "react";
import Footer from "./components/Footer";

const App = () => {
	const URL = "https://api.themoviedb.org/3/";
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const [favorite, setFavorite] = useState([]);

	const handleNewMovie = (movie) => {
		const favMovies = [...favorite, movie];
		setFavorite(favMovies);
		console.log([...favorite]);
		saveToLocalStorage(favMovies);
		console.log(favMovies);
	};

	const deleteMovie = (movie) => {
		const favoriteMovies = favorite.filter((f) => f.id !== movie.id);
		setFavorite(favoriteMovies);
		saveToLocalStorage(favoriteMovies);
	};

	const handleSubmit = (e) => {
		getMovies();
	};

	useEffect(() => {
		getTopMovies();
	}, []);

	const getMovies = async () => {
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
			.catch((error) => console.log(error));
	};

	const getTopMovies = async () => {
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
			.catch((error) => console.log(error));
	};

	const saveToLocalStorage = (elements) => {
		localStorage.setItem("my-favorites", JSON.stringify(elements));
	};

	useEffect(() => {
		localStorage.setItem("my-favorites", JSON.stringify(favorite));
		const favMovies = JSON.parse(localStorage.getItem("my-favorites"));
		setFavorite(favMovies);
	}, [favorite]);

	return (
		<>
			<StrictMode>
				<Header
					handleSubmit={handleSubmit}
					search={search}
					setSearch={setSearch}
				/>
				<AppRoute
					handleNewMovie={handleNewMovie}
					setFavorite={setFavorite}
					movies={movies}
					deleteMovie={deleteMovie}
					favorite={favorite}
				/>
				<Footer />
			</StrictMode>
		</>
	);
};

export default App;
