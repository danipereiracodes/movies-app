import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = ({
	favorite,
	deleteMovie,
	movies,
	setFavorite,
	handleNewMovie,
}) => {
	return (
		<section className="movie-list-container">
			{movies ? (
				movies.map((m) => (
					<Card
						key={m.id}
						cardData={m}
						setFavorite={setFavorite}
						handleNewMovie={handleNewMovie}
						deleteMovie={deleteMovie}
						favorite={favorite}
					/>
				))
			) : (
				<p>No hay resultados</p>
			)}
		</section>
	);
};

export default MovieList;
