import FavCard from "./FavCard";

const FavoriteList = ({ favorite, deleteMovie }) => {
	return (
		<section className="fav-list-container">
			{favorite ? (
				favorite.map((m) => (
					<FavCard deleteMovie={deleteMovie} key={m.id} cardData={m} />
				))
			) : (
				<p>No hay resultados</p>
			)}
		</section>
	);
};

export default FavoriteList;
