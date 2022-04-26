import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoriteList from "../components/FavoriteList";

const AppRoute = ({
	deleteMovie,
	favorite,
	movies,
	handleNewMovie,
	setFavorite,
}) => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomePage
								movies={movies}
								handleNewMovie={handleNewMovie}
								setFavorite={setFavorite}
								deleteMovie={deleteMovie}
							/>
						</>
					}
				/>
				<Route
					path="/fav"
					element={
						<>
							<FavoriteList deleteMovie={deleteMovie} favorite={favorite} />
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default AppRoute;
