import Card from "./Card";

const FavoriteList = ({ favorite, deleteMovie }) => {
	return (
		<section className="fav-list-container">
			{favorite.length > 0 ? (
				favorite.map((m) => (
					<Card
						favorite={favorite}
						deleteMovie={deleteMovie}
						key={m.id}
						cardData={m}
					/>
				))
			) : (
				<p>No hay resultados</p>
			)}
		</section>
	);
};

export default FavoriteList;
