import Card from "./Card";

const FavoriteList = ({ favorite, deleteMovie }) => {
	return (
		<section>
			<h2 id="title">Mis favoritas</h2>
			<article className="fav-list-container">
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
					<h2>No hay películas favoritas</h2>
				)}
			</article>
		</section>
	);
};

export default FavoriteList;
