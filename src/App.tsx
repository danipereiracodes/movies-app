import * as React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import "../src/app.css";
import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";
import { StrictMode } from "react";
import {moviesContext} from './context/MoviesContext'

interface AppTypes {
	
	movies:Array<{}>;
	favMovies:Array<{}>;
	search:string;
	setSearch: (search:string) => void;
	handleNewMovie: (movie:Array<{}>) => void;
	
}

const App = () => {
	const URL = "https://api.themoviedb.org/3/";

	const [movies, setMovies] = useState<Array<AppTypes>>([]);
	const [search, setSearch] = useState('');
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
			.catch((error) => 
			{
				throw new Error(error);
			})
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
			.catch((error) => 
			{
				throw new Error(error);
			})
			
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
		<moviesContext.Provider value={{search,setSearch, movies, setMovies, favorite, setFavorite, handleNewMovie, handleSubmit, deleteMovie}}>
			<StrictMode>
				<Header
					
					
				/>
				<AppRoute
					
				/>
			</StrictMode>
			</moviesContext.Provider>
		</>
	);
};

export default App;
