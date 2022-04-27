import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoriteList from "../components/FavoriteList";
import SingleMovie from "../pages/SingleMovie";

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
								favorite={favorite}
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
				<Route
					path="/movie/:id"
					element={
						<>
							<SingleMovie
								handleNewMovie={handleNewMovie}
								setFavorite={setFavorite}
								deleteMovie={deleteMovie}
								favorite={favorite}
								movies={movies}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default AppRoute;
