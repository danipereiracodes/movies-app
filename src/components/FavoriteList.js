import FavCard from "./FavCard";

const FavoriteList = ({ favorite, deleteMovie }) => {
	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{favorite ? (
				favorite.map((m) => (
					<FavCard deleteMovie={deleteMovie} key={m.id} cardData={m} />
				))
			) : (
				<p>No hay resultados</p>
			)}
		</div>
	);
};

export default FavoriteList;
