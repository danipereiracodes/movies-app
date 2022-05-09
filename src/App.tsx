import * as React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import "../src/app.css";
import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";
import { StrictMode } from "react";

interface AppState {
	
	movies:Array<{}>;
	favMovies:Array<{}>;
	search:string;
	setSearch: (search:string) => void;
	
}

const App = () => {
	const URL = "https://api.themoviedb.org/3/";
	const [movies, setMovies] = useState<Array<AppState>>([]);
	const [search, setSearch] = useState<String>("");
	const [favorite, setFavorite] = useState([]);

	const handleNewMovie = (movie:Array<{}>) => {
		const favMovies =  [...favorite, movie];
		setFavorite(favMovies);
		saveToLocalStorage(favMovies);
	};

	const deleteMovie = (movie:any) => {
		const favoriteMovies = favorite.filter((f) => f.id !== movie.id);
		setFavorite(favoriteMovies);
		saveToLocalStorage(favoriteMovies);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
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

	const saveToLocalStorage = (elements:Array<{}>) => {
		localStorage.setItem("my-favorites", JSON.stringify(elements));
	};

	useEffect(() => {
		if (localStorage.getItem("my-favorites") === null) {
			localStorage.setItem("my-favorites", JSON.stringify(favorite));
		}

		const favMovies = JSON.parse(localStorage.getItem("my-favorites"));
		setFavorite(favMovies);
	}, []);

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
			</StrictMode>
		</>
	);
};

export default App;
