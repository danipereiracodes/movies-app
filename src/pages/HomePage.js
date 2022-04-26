import MovieList from "../components/MovieList";

const HomePage = ({ movies, handleNewMovie, setFavorite }) => {
	return (
		<MovieList
			movies={movies}
			handleNewMovie={handleNewMovie}
			setFavorite={setFavorite}
		/>
	);
};

export default HomePage;
