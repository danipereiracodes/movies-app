import Card from "./Card";

const FavoriteList = ({ favorite, deleteMovie }) => {
	return (
		<section>
			{favorite.length > 0 ? (
				<h2 id="title">Mis favoritas</h2>
			) : (
				<h2 id="title">No hay favoritas por el momento</h2>
			)}
			<article className="fav-list-container">
				{favorite.length > 0 &&
					favorite.map((m) => (
						<Card
							favorite={favorite}
							deleteMovie={deleteMovie}
							key={m.id}
							cardData={m}
						/>
					))}
			</article>
		</section>
	);
};

export default FavoriteList;
