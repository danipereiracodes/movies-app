import MovieList from "../components/MovieList";

const HomePage = ({
	favorite,
	movies,
	handleNewMovie,
	setFavorite,
	deleteMovie,
}) => {
	return (
		<MovieList
			movies={movies}
			handleNewMovie={handleNewMovie}
			setFavorite={setFavorite}
			deleteMovie={deleteMovie}
			favorite={favorite}
		/>
	);
};

export default HomePage;
