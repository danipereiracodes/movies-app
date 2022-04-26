import MovieList from "../components/MovieList";

const HomePage = ({ movies, handleNewMovie, setFavorite, deleteMovie }) => {
	return (
		<MovieList
			movies={movies}
			handleNewMovie={handleNewMovie}
			setFavorite={setFavorite}
			deleteMovie={deleteMovie}
		/>
	);
};

export default HomePage;
