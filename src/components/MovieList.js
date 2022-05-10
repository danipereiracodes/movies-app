import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";

const MovieList = () => {
	const { movies } = useContext(moviesContext);
	return (
		<section>
			{movies && movies.length > 0 ? (
				<h2 id="title">Las mejor votadas</h2>
			) : (
				<h2 id="title">No hay resultados</h2>
			)}
			<article className="movie-list-container">
				{movies &&
					movies.length > 0 &&
					movies.map((m) => <Card key={m.id} cardData={m} />)}
			</article>
		</section>
	);
};

export default MovieList;
