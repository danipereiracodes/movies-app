import Card from "./Card";

const MovieList = ({ deleteMovie, movies, setFavorite, handleNewMovie }) => {
	/* const currentPage = movies.data.page;
	const nextPage = currentPage + 1;
	const prevPage = currentPage - 1;
	const totalPages = movies.data.total_pages; */

	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{movies ? (
				movies.map((m) => (
					<Card
						key={m.id}
						cardData={m}
						setFavorite={setFavorite}
						handleNewMovie={handleNewMovie}
						deleteMovie={deleteMovie}
					/>
				))
			) : (
				<p>No hay resultados</p>
			)}
		</div>
	);
};

export default MovieList;
